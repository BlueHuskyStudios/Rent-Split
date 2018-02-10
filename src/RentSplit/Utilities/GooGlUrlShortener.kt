@file:Suppress("PackageDirectoryMismatch", "ArrayInDataClass")
package RentSplit

import RentSplit.GooGlUrlShortener.*
import RentSplit.GooGlUrlShortener.RequestParameter.*
import RentSplit.GooGlUrlShortener.ShortenResponse.*
import org.bh.tools.base.collections.extensions.*
import org.bh.tools.base.util.*
import org.bh.tools.io.net.*
import org.w3c.dom.url.*
import kotlin.js.*


typealias GooGlResponseListener = (ShortenResponse) -> Unit



/**
 * Shortens URLs using goo.gl
 *
 * @author Ben Leggiero
 * @since 2018-02-10
 */
class GooGlUrlShortener(val accessKey: String) { // AIzaSyBsJvWOGsHnIcPi-wnIB3WAaILRKsI8Pmo

    fun shorten(longUrl: URL, responseListener: GooGlResponseListener) {
        HttpRequest("https://www.googleapis.com/urlshortener/v1/url?key=$accessKey",
                    RequestParameters(
                        longUrl(longUrl)
                    ).toRequestMap())
                .open("POST") {
                    responseListener(ShortenResponse(it))
                }
    }

    sealed class RequestParameter<out Value>(val key: String, val value: Value, requestValueGenerator: (Value) -> String) {

        val requestValue: String by lazy { requestValueGenerator(value) }

        class longUrl(url: URL): RequestParameter<URL>(Keys.longUrl, url, { it.toString() })


        companion object Keys {
            const val longUrl = "longUrl"
        }
    }



    class RequestParameters(vararg val allParameters: RequestParameter<*>) {
        fun toRequestMap(): Map<String, String> =
                allParameters.asList().reduceTo(mutableMapOf()) { requestMap, parameter ->
                    requestMap[parameter.key] = parameter.requestValue
                    return@reduceTo requestMap
                }

        @Suppress("unused")
        fun toRequestUriParameterString() =
                "?" + allParameters.joinToString(separator = "&") { "${it.key}=${it.requestValue}" }
    }



    sealed class ShortenResponse(val httpResponse: HttpResponse?) {
        class success(
                val kind: String,
                @JsName("id")
                val shortUrlString: String,
                val longUrlString: String,
                httpResponse: HttpResponse? = null
        ): ShortenResponse(httpResponse) {

            val shortUrl: URL by lazy { URL(shortUrlString) }
            val longUrl: URL by lazy { URL(longUrlString) }

            companion object {
                operator fun invoke(httpResponse: HttpResponse) = safeTry {
                    JSON.parse<success>(httpResponse.text)
                }
            }
        }

        /*
        {
            "error": {
                "errors": [
                    {
                        "domain": "global",
                        "reason": "required",
                        "message": "Required",
                        "locationType": "parameter",
                        "location": "resource.longUrl"
                    }
                ],
                "code": 400,
                "message": "Required"
            }
        }
        */
        class error(
                @JsName("errors")
                val allErrors: List<SingleError>,
                val code: Short,
                val message: String,
                httpResponse: HttpResponse? = null
        ): ShortenResponse(httpResponse) {
            companion object {
                operator fun invoke(httpResponse: HttpResponse) = safeTry {
                    error(JSON.parse<Json>(httpResponse.text)["error"]?.unsafeCast<Json>() ?: return@safeTry null, httpResponse)
                }

                operator fun invoke(json: Json, httpResponse: HttpResponse? = null): error? {
                    return error(allErrors = json["errors"].unsafeCast<Array<Json>>().map { SingleError(it) ?: return null },
                                 code = json["code"] as? Short ?: return null,
                                 message = json["message"] as? String ?: return null,
                                 httpResponse = httpResponse)
                }
            }
        }

        data class SingleError(
                val domain: String,
                val reason: String,
                val message: String,
                val locationType: String,
                val location: String
        ) {
            companion object {
                operator fun invoke(json: Json): SingleError? {
                    return SingleError(domain = json["domain"] as? String ?: return null,
                                       reason = json["reason"] as? String ?: return null,
                                       message = json["message"] as? String ?: return null,
                                       locationType = json["locationType"] as? String ?: return null,
                                       location = json["location"] as? String ?: return null
                    )
                }
            }
        }

        class unknownError(httpResponse: HttpResponse): ShortenResponse(httpResponse)



        companion object {
            operator fun invoke(httpResponse: HttpResponse) =
                if (JSON.parse<Json>(httpResponse.text)["error"] != null) {
                    error(httpResponse)
                } else {
                    success(httpResponse)
                }
                ?: unknownError(httpResponse)
        }
    }



//
//
//
//    enum class ShortenResponseFormat {
//        json,
//        xml,
//        txt,
//        ;
//
//        val stringForUrl: String get() = when (this) {
//            json -> "json"
//            xml -> "xml"
//            txt -> "txt"
//        }
//    }
}



val ShortenResponse.wasSuccessful get() = when (this) {
    is success -> true
    is error, is unknownError -> false
}

val ShortenResponse.statusText get() = this.httpResponse?.statusText
