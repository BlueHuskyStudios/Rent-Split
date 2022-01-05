@file:Suppress("MemberVisibilityCanBePrivate")

package org.bh.tools.io.net

import RentSplit.*
import org.bh.tools.base.collections.extensions.*
import org.bh.tools.io.net.HttpRequest.*
import org.bh.tools.io.net.HttpRequest.RequestParameter.Usage.*
import org.bh.tools.io.net.HttpRequest.RequestParameters.Companion.empty
import org.w3c.dom.url.*
import org.w3c.xhr.*
import kotlin.js.*


/**
 * Represents a request to send over HTTP
 *
 * @author Ben Leggiero
 * @since 2018-02-10
 */
class HttpRequest(
        /**
         * The destination URL to which the request will be sent
         */
        val url: URL,

        /**
         * The parameters of the request
         */
        val parameters: RequestParameters = empty
) {

    constructor(urlString: String, parameters: RequestParameters = empty): this(URL(urlString), parameters)


    /**
     * Sends the request via the `GET` method. If the request succeeds or fails, `responseListener` is invoked with a
     * relevant response.
     *
     * @param asynchronous     _optional_ - If `true`, this request will be sent asynchronously. Else, it will be a
     *                         blocking call and send synchronously. Default is `true`.
     * @param responseListener That which will be called when a response is available.
     */
    fun get(asynchronous: Boolean = true, responseListener: HttpResponseListener) {
        send(method = "GET", asynchronous = asynchronous, responseListener = responseListener)
    }


    /**
     * Sends the request with the given body via the `POST` method. If the request succeeds or fails,
     * `responseListener` is invoked with a relevant response.
     *
     * @param body             _optional_ - The body of the request. If `null`, this will be generated from the
     *                         parameters marked with the `postBodyJson` usage. Note that this means that if this is
     *                         specified, those parameters won't be used at all.
     * @param asynchronous     _optional_ - If `true`, this request will be sent asynchronously. Else, it will be a
     *                         blocking call and send synchronously. Default is `true`.
     * @param responseListener That which will be called when a response is available.
     */
    fun post(body: String? = null, asynchronous: Boolean = true, responseListener: HttpResponseListener) {
        send(method = "POST", body = body, asynchronous = asynchronous, responseListener = responseListener)
    }


    /**
     * Sends the request with the given body via the given method. If the request succeeds or fails,
     * `responseListener` is invoked with a relevant response.
     *
     * @param method           The HTTP method to send with, like `"GET"` or `"POST"`
     * @param body             _optional_ - The body of the request. If `null`, this will be generated from the
     *                         parameters marked with the `postBodyJson` usage. Note that this means that if this is
     *                         specified, those parameters won't be used at all.
     * @param asynchronous     _optional_ - If `true`, this request will be sent asynchronously. Else, it will be a
     *                         blocking call and send synchronously. Default is `true`.
     * @param responseListener That which will be called when a response is available.
     */
    fun send(method: String, body: String? = null, asynchronous: Boolean = true, responseListener: HttpResponseListener) {
        val request = XMLHttpRequest()
        var bestResponseSoFar: HttpResponse? = null
        request.onreadystatechange = {
            bestResponseSoFar = mostInformative(bestResponseSoFar, HttpResponse(request))
            if (request.readyState == XMLHttpRequest.DONE) {
                responseListener(bestResponseSoFar!!)
            }
        }

        val requestUrlString = generateFullRequestUrlString()
        val actualBody = body ?: generatePostBody()

        log("Will send $method request:")
        log(requestUrlString)
        log(actualBody)

        request.open(method = method, url = requestUrlString, async = asynchronous)

        this.parameters.justHeaders.allParameters.forEach {
            request.setRequestHeader(it.key, it.valueAsRequestString)
        }

        log(request.getAllResponseHeaders())

        try {
            request.send(actualBody)
        }
        catch (error: Throwable) {
            responseListener(HttpResponse(text = error.toString(),
                                          status = -1,
                                          statusText = "Failed to send request",
                                          interactionStage = null))
        }
    }

    /**
     * Uses the parameters marked to go into the `POST` body as JSON to build exactly that
     */
    private fun generatePostBody() = parameters.justPostBodyJson.toRequestJson().jsonString()


    /**
     * Uses the parameters and URL to generate a URL string
     */
    private fun generateFullRequestUrlString() = generateFullRequestUrl().toString()


    /**
     * Uses the parameters and URL to generate a URL
     */
    private fun generateFullRequestUrl() = url.withSearchParams(searchParams = parameters.justUrlParameters)



    /**
     * A set of parameters for a request
     */
    class RequestParameters(val allParameters: List<RequestParameter<*>>) {
        fun toRequestJson(): Json =
                if (allParameters.isEmpty()) {
                    json()
                }
                else {
                    allParameters.reduceTo(json()) { requestJson, parameter ->
                        requestJson[parameter.key] = parameter.valueAsRequestString
                        return@reduceTo requestJson
                    }
                }


        /**
         * Assumes all the parameters are URL query parameters and uses those to build a query string
         */
        @Suppress("unused")
        fun toRequestUriParameterString() =
                "?" + allParameters.joinToString(separator = "&") { "${it.key}=${it.valueAsRequestString}" }


        /**
         * Filters so that the resulting object only contains those parameters which go in the URL
         */
        val justUrlParameters get() = RequestParameters(allParameters.filter { it.usage == urlParameter })

        /**
         * Filters so that the resulting object only contains those parameters which go in the post body as JSON
         */
        val justPostBodyJson get() = RequestParameters(allParameters.filter { it.usage == postBodyJson })

        /**
         * Filters so that the resulting object only contains those parameters which go in the headers
         */
        val justHeaders get() = RequestParameters(allParameters.filter { it.usage == header })


        companion object {
            val empty = RequestParameters(emptyList())

            operator fun invoke(vararg allParameters: RequestParameter<*>) = RequestParameters(allParameters = allParameters.toList())
        }
    }



    /**
     * A single parameter (key/value pair) for a HTTP request. This can be used in any of the ways described by
     * `usage`, such as in the URL as a query string, or in the body as a JSON string.
     */
    open class RequestParameter<out Value>(
            /**
             * The key string of this parameter
             */
            val key: String,

            /**
             * The value string of this parameter
             */
            val value: Value,

            /**
             * The way in which this parameter will be used
             */
            val usage: Usage,

            /**
             * Turns the value of this request into a string just before it's actually used in the request
             */
            requestValueGenerator: (Value) -> String) {

        /**
         * The `value` member, as a string
         */
        val valueAsRequestString: String by lazy { requestValueGenerator(value) }



        /**
         * How a request parameter will be used
         */
        enum class Usage {
            /**
             * Puts this parameter into the URL's query string
             */
            urlParameter,

            /**
             * Puts this parameter into a JSON string sent in the body of a POST request
             */
            postBodyJson,

            /**
             * Puts this parameter into the headers of the request
             */
            header
        }



        /**
         * Encapsulates a generic header key/vaue pair. A child class of request parameters
         */
        class genericHeader(key: String, value: String): RequestParameter<String>(key, value, header, { it })
    }
}



/**
 * Returns a new URL with the given parameters as its search parameters (AKA query string)
 */
private fun URL.withSearchParams(searchParams: RequestParameters) =
        if (searchParams.allParameters.isEmpty()) {
            this
        }
        else {
            val copy = this.copy()
            copy.search = searchParams.asSearchString()
            /*return*/ copy
        }


/**
 * Turns this set of parameters into a search string (AKA query string) for a URL, like `"?foo=bar&baz=qux"`
 */
private fun RequestParameters.asSearchString() = "?" +
        allParameters.joinToString(separator = "&",
                                   transform = { it.key.urlEncoded +
                                           "=" + it.value.toString().urlEncoded})


/**
 * Sends this request
 *
 * @param method The HTTP method by which to send this request, like `"GET"` or `"POST"`
 * @param url    The URL to which the request will be sent
 * @param headers _optional_ The headers to attach to the request
 * @param async   Iff `true`, the operation will be performed on a background thread
 * @param username _optional_ The username to send to the server
 * @param password _optional_ The password to send to the server
 */
private fun XMLHttpRequest.send(method: String,
                                url: String,
                                headers: Map<String, String> = emptyMap(),
                                async: Boolean,
                                username: String? = null,
                                password: String? = null) {
    this.open(method, url, async, username, password)
    headers.forEach {
        setRequestHeader(it.key, it.value)
    }
}



/**
 * A function that's called when an HTTP request completes
 */
typealias HttpResponseListener = (response: HttpResponse) -> Unit



/**
 * A response from an HTTP request
 */
class HttpResponse(
        /**
         * The text of the body of the response
         */
        val text: String,

        /**
         * The HTTP status code, like `200` or `404`
         */
        val status: Short,

        /**
         * The text describing the [status] code, like `"OK"` or `"Not Found"`
         */
        val statusText: String,

        /**
         * The stage of interaction at which this response occurred, or `nil` if that can't be determined or doesn't apply
         */
        val interactionStage: InteractionStage?
) {
    constructor(xmlHttpResponse: XMLHttpRequest):
            this(text = xmlHttpResponse.responseText,
                 status = xmlHttpResponse.status,
                 statusText = xmlHttpResponse.statusText,
                 interactionStage = InteractionStage(xmlHttpResponse.readyState))


    /**
     * Determines whether this request indicates a success. That is to say, if it is a `200 OK`
     */
    val wasSuccessful get() = status == 200.toShort()



    /**
     * The stage of interaction, like [XMLHttpRequest.readyState]
     */
    enum class InteractionStage(
            /**
             * The [XMLHttpRequest.readyState] version of this interaction stage
             */
            val xmlHttpRequestReadyState: Short
    ) {
        /**
         * The request has not yet been started
         */
        notStarted(XMLHttpRequest.UNSENT),

        /**
         * A connection has been opened to the remote server. During this state, the request headers can be set
         */
        opened(XMLHttpRequest.OPENED),

        /**
         * The response headers have been received and can be safely read
         */
        headersReceived(XMLHttpRequest.HEADERS_RECEIVED),

        /**
         * Response's body is being received. [text] will have the partial text response as it loads.
         */
        loading(XMLHttpRequest.LOADING),

        /**
         * The fetch operation is complete.
         * This could mean that either the data transfer has been completed successfully or failed.
         */
        completed(XMLHttpRequest.DONE),
        ;

        companion object {
            operator fun invoke(xmlHttpRequestReadyState: Short) =
                    values().firstOrNull { it.xmlHttpRequestReadyState == xmlHttpRequestReadyState }
        }
    }
}



/**
 * Finds the most-informative of the two responses, based on the result of [HttpResponse.informativeScore]
 */
fun mostInformative(a: HttpResponse?, b: HttpResponse) =
        if (a == null) b else { if (a.informativeScore > b.informativeScore) a else b }


/**
 * Determines how informative this response is, based on whether it has a status, status text, text, and at which
 * interaction stage it is. The most informative HTTP responses can be used to present information to the user.
 *
 * See also [mostInformative] for eliminating uninformative responses andor sorting responses
 */
val HttpResponse.informativeScore: Double get() {
    var score = 0.0

    if (status != 0.toShort()) {
        score += if (status == 200.toShort()) 1.5 else 1.0
    }
    if (statusText.isNeitherNullNorBlank()) {
        score += 2
    }
    if (text.isNeitherNullNorBlank()) {
        score += 3
    }

    if (interactionStage != null) {
        score *= (interactionStage.xmlHttpRequestReadyState + 1).toDouble() / XMLHttpRequest.DONE
    }

    return score
}
