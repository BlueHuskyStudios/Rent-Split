@file:Suppress("MemberVisibilityCanBePrivate")

package org.bh.tools.io.net

import RentSplit.*
import org.bh.tools.base.collections.extensions.*
import org.bh.tools.io.net.HttpRequest.*
import org.bh.tools.io.net.HttpRequest.RequestParameter.Usage.*
import org.bh.tools.io.net.HttpRequest.RequestParameters.Companion.emptyParameters
import org.w3c.dom.url.*
import org.w3c.xhr.*
import kotlin.js.*


/**
 * @author Ben Leggiero
 * @since 2018-02-10
 */

class HttpRequest(
        val url: URL,
        val parameters: RequestParameters = emptyParameters
) {

    constructor(urlString: String, parameters: RequestParameters = emptyParameters): this(URL(urlString), parameters)


    fun get(responseListener: HttpResponseListener) {
        send(method = "GET", responseListener = responseListener)
    }


    /**
     * Sends the request with the given body via the given method. If the request succeeds or fails,
     * `responseListener` is invoked with a relevant response.
     *
     * @param method           The HTTP method to send with, like `"GET"` or `"POST"`
     * @param body             _optional_ - The body of the request. If `null`, this will be generated from the
     *                         parameters marked with the `postBodyJson` usage. Note that this means that if this is
     *                         specified, those parameters won't be used at all.
     * @param responseListener That which will be called when a response is available.
     */
    fun send(method: String, body: String? = null, responseListener: HttpResponseListener) {
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

        request.open(method = method, url = requestUrlString, async = true)

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

    private fun generatePostBody() = parameters.justPostBodyJson.toRequestJson().jsonString()

    private fun generateFullRequestUrlString() = generateFullRequestUrl().toString()

    private fun generateFullRequestUrl() = url.withSearchParams(searchParams = parameters.justUrlParameters)



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


        @Suppress("unused")
        fun toRequestUriParameterString() =
                "?" + allParameters.joinToString(separator = "&") { "${it.key}=${it.valueAsRequestString}" }


        val justUrlParameters get() = RequestParameters(allParameters.filter { it.usage == urlParameter })
        val justPostBodyJson get() = RequestParameters(allParameters.filter { it.usage == postBodyJson })
        val justHeaders get() = RequestParameters(allParameters.filter { it.usage == header })


        companion object {
            val emptyParameters = RequestParameters(emptyList())

            operator fun invoke(vararg allParameters: RequestParameter<*>) = RequestParameters(allParameters = allParameters.toList())
        }
    }



    open class RequestParameter<out Value>(val key: String, val value: Value, val usage: Usage, requestValueGenerator: (Value) -> String) {

        val valueAsRequestString: String by lazy { requestValueGenerator(value) }

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

        class genericHeader(key: String, value: String): RequestParameter<String>(key, value, header, { it })
    }
}

private fun URL.withSearchParams(searchParams: RequestParameters) =
        if (searchParams.allParameters.isEmpty()) {
            this
        }
        else {
            val copy = this.copy()
            copy.search = searchParams.asSearchString()
            /*return*/ copy
        }

private fun RequestParameters.asSearchString() = "?" +
        allParameters.joinToString(separator = "&",
                                   transform = { it.key.urlEncoded +
                                           "=" + it.value.toString().urlEncoded})

private fun XMLHttpRequest.send(method: String, url: String, headers: Map<String, String> = emptyMap(), async: Boolean, username: String? = null, password: String? = null) {
    this.open(method, url, async, username, password)
    headers.forEach {
        setRequestHeader(it.key, it.value)
    }
}



typealias HttpResponseListener = (response: HttpResponse) -> Unit



class HttpResponse(
        val text: String,
        val status: Short,
        val statusText: String,
        val interactionStage: InteractionStage?
) {
    constructor(xmlHttpResponse: XMLHttpRequest):
            this(text = xmlHttpResponse.responseText,
                 status = xmlHttpResponse.status,
                 statusText = xmlHttpResponse.statusText,
                 interactionStage = InteractionStage(xmlHttpResponse.readyState))


    val wasSuccessful get() = status == 200.toShort()


    enum class InteractionStage(val xmlHttpRequestReadyState: Short) {
        notStarted(XMLHttpRequest.UNSENT),
        opened(XMLHttpRequest.OPENED),
        headersReceived(XMLHttpRequest.HEADERS_RECEIVED),
        loading(XMLHttpRequest.LOADING),
        completed(XMLHttpRequest.DONE),
        ;

        companion object {
            operator fun invoke(xmlHttpRequestReadyState: Short) =
                    values().firstOrNull { it.xmlHttpRequestReadyState == xmlHttpRequestReadyState }
        }
    }
}



fun mostInformative(a: HttpResponse?, b: HttpResponse) =
        if (a == null) b else { if (a.informativeScore > b.informativeScore) a else b }


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
