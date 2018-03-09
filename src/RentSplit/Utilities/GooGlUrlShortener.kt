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
class GooGlUrlShortener(
        /**
         * The API access key to use for Goo.gl
         */
        private val accessKey: String
) {

    /**
     * Shortens the given URL, then calls the response listener
     *
     * @param longUrl          The URL to be shortened
     * @param asynchronous     If `true`, the URL will be shortened on another thread asynchronously without blocking
     *                         this one. Otherwise, it will block this thread and the response will be called
     *                         synchronously on this one. Default is `true`.
     * @param responseListener The function to be called when we get a response back from Google's servers.
     */
    fun shorten(longUrl: URL, asynchronous: Boolean = true, responseListener: GooGlResponseListener) {
        HttpRequest("https://www.googleapis.com/urlshortener/v1/url",
                    RequestParameters(
                            accessKey(accessKey),
                            longUrl(longUrl),
                            genericHeader("Content-Type", "application/json")
                    ))
                .post(asynchronous = asynchronous) {
                    responseListener(ShortenResponse(it))
                }
    }


    /**
     * A response from goo.gl after a [shorten] request was made.
     */
    sealed class ShortenResponse(
            /**
             * The full HTTP response, if one was gotten. One might not be gotten, for instance, if we are offline
             */
            val httpResponse: HttpResponse?
    ) {
        /**
         * A successful response from goo.gl, containing the shortened URL
         */
        class success(
                /**
                 * The kind of success message, like `"urlshortener#url"`
                 */
                val kind: String,

                /**
                 * The result of shortening the URL
                 */
                val shortUrlString: String,

                /**
                 * The original URL to shorten, in case you've forgotten or something
                 */
                val longUrlString: String,
                httpResponse: HttpResponse? = null
        ) : ShortenResponse(httpResponse) {

            /**
             * The URL form of [shortUrlString]
             */
            @JsName("shortUrlObject")
            val shortUrl: URL by lazy { URL(shortUrlString) }

            /**
             * The URL form of [longUrlString]
             */
            @JsName("longUrlObject")
            val longUrl: URL by lazy { URL(longUrlString) }

            companion object {
                operator fun invoke(httpResponse: HttpResponse) = safeTry {
                    class Raw(val kind: String, val id: String, val longUrl: String)
                    (JSON.parse<Raw?>(httpResponse.text) ?: return@safeTry null).let { raw ->
                        return@safeTry success(kind = raw.kind,
                                               shortUrlString = raw.id,
                                               longUrlString = raw.longUrl)
                    }
                }
            }
        }



        /**
         * A response from goo.gl that there was an error shortening the URL
         */
        class error(
                /**
                 * A list of all errors that goo.gl reported
                 */
                @JsName("errors")
                val allErrors: List<SingleError>,

                /**
                 * The HTTP code associated with this error
                 */
                val code: Short,

                /**
                 * The message associated with this error
                 */
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



        /**
         * One error in a list of errors from goo.gl
         */
        data class SingleError(
                /**
                 * The domain of the error, like `"global"`
                 */
                val domain: String,

                /**
                 * The encoded explanation of the error, like `"required"`
                 */
                val reason: String,

                /**
                 * The human-readable explanation of the error, like `"Required"`
                 */
                val message: String,

                /**
                 * The type of location where the error occurred, like `"parameter"`
                 */
                val locationType: String? = null,

                /**
                 * The location where the error occurred, like `"resource.longUrl"`
                 */
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



        /**
         * Some response that couldn't be parsed
         */
        class unknownError(httpResponse: HttpResponse) : ShortenResponse(httpResponse)


        companion object {
            /**
             * Creates a new shorten response from the given HTTP response
             */
            operator fun invoke(httpResponse: HttpResponse) =
                    error(httpResponse)
                    ?: success(httpResponse)
                    ?: unknownError(httpResponse)
        }
    }



    /**
     * A parameter to send to goo.gl
     */
    companion object Parameters {
        /**
         * The parameter for the goo.gl API access key
         */
        class accessKey(key: String): RequestParameter<String>("key", key, urlParameter, { it })

        /**
         * The parameter for the non-shortened URL
         */
        class longUrl(url: URL): RequestParameter<URL>("longUrl", url, postBodyJson, { it.toString() })
    }
}


/**
 * Returns `true` iff this represents a successful response
 */
val ShortenResponse.wasSuccessful get() = when (this) {
    is success -> true
    is error, is unknownError -> false
}

/**
 * The
 */
val ShortenResponse.statusText get() = this.httpResponse?.statusText
