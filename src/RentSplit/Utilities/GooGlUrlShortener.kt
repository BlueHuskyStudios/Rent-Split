@file:Suppress("PackageDirectoryMismatch", "ArrayInDataClass")
package RentSplit

import RentSplit.GooGlUrlShortener.*
import RentSplit.GooGlUrlShortener.ShortenResponse.*
import org.bh.tools.base.util.*
import org.bh.tools.io.net.*
import org.bh.tools.io.net.HttpRequest.*
import org.bh.tools.io.net.HttpRequest.RequestParameter.*
import org.bh.tools.io.net.HttpRequest.RequestParameter.Usage.*
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
        HttpRequest("https://www.googleapis.com/urlshortener/v1/url",
                    RequestParameters(
                            accessKey(accessKey, usage = urlParameter),
                            longUrl(longUrl, usage = postBodyJson),
                            genericHeader("Content-Type", "application/json")
                    ))
                .send("POST") {
                    responseListener(ShortenResponse(it))
                }
    }



    sealed class ShortenResponse(val httpResponse: HttpResponse?) {
        class success(
                val kind: String,
                @JsName("id")
                val shortUrlString: String,
                @JsName("longUrl")
                val longUrlString: String,
                httpResponse: HttpResponse? = null
        ) : ShortenResponse(httpResponse) {

            @JsName("shortUrlObject")
            val shortUrl: URL by lazy { URL(shortUrlString) }

            @JsName("longUrlObject")
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
        ) : ShortenResponse(httpResponse) {
            companion object {
                operator fun invoke(httpResponse: HttpResponse) = safeTry {
                    error(JSON.parse<Json>(httpResponse.text)["error"]?.unsafeCast<Json>() ?: return@safeTry null,
                          httpResponse)
                }

                operator fun invoke(json: Json, httpResponse: HttpResponse? = null): error? {
                    return error(allErrors = json["errors"].unsafeCast<Array<Json>>().map {
                        SingleError(it) ?: return null
                    },
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
                val locationType: String? = null,
                val location: String? = null
        ) {
            companion object {
                operator fun invoke(json: Json): SingleError? {
                    return SingleError(domain = json["domain"] as? String ?: return null,
                                       reason = json["reason"] as? String ?: return null,
                                       message = json["message"] as? String ?: return null,
                                       locationType = json["locationType"] as? String,
                                       location = json["location"] as? String
                    )
                }
            }
        }

        class unknownError(httpResponse: HttpResponse) : ShortenResponse(httpResponse)


        companion object {
            operator fun invoke(httpResponse: HttpResponse) =
                    error(httpResponse)
                    ?: success(httpResponse)
                    ?: unknownError(httpResponse)
        }
    }



    companion object Parameters {
        class accessKey(key: String, usage: Usage): RequestParameter<String>("key", key, usage, { it })
        class longUrl(url: URL, usage: Usage): RequestParameter<URL>("longUrl", url, usage, { it.toString() })
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