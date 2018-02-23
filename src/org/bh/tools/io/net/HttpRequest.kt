@file:Suppress("MemberVisibilityCanBePrivate")

package org.bh.tools.io.net

import RentSplit.*
import RentSplit.GooGlUrlShortener.*
import RentSplit.GooGlUrlShortener.RequestParameters.Companion.emptyParameters
import org.w3c.dom.url.*
import org.w3c.xhr.*


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
        open("GET", responseListener)
    }


    fun open(method: String, responseListener: HttpResponseListener) {
        val request = XMLHttpRequest()
        request.onreadystatechange = {
            when (request.readyState) {
                XMLHttpRequest.DONE -> responseListener(HttpResponse(request))
            }
        }

        request.open(method = method, url = generateFullRequestUrlString(), headers = generateHeaders(), async = true)
        request.send()
    }

    private fun generateHeaders() = parameters.justHeaders.toRequestMap()

    private fun generateFullRequestUrlString() = generateFullRequestUrl().toString().alsoLog("Generated request URL")

    private fun generateFullRequestUrl() = url.withSearchParams(searchParams = parameters.justUrlParameters)
}

private fun URL.withSearchParams(searchParams: GooGlUrlShortener.RequestParameters) =
        if (searchParams.allParameters.isEmpty()) {
            this
        }
        else {
            val copy = this
            copy.search = searchParams.asSearchString()
            copy
        }

private fun RequestParameters.asSearchString() = "?" +
        allParameters.joinToString(separator = "&",
                                   transform = { it.key.urlEncoded +
                                           "=" + it.value.toString().urlEncoded})

private fun XMLHttpRequest.open(method: String, url: String, headers: Map<String, String>, async: Boolean, username: String? = null, password: String? = null) {
    this.open(method, url, async, username, password)
    headers.forEach {
        setRequestHeader(it.key, it.value)
    }
}



typealias HttpResponseListener = (response: HttpResponse) -> Unit



data class HttpResponse(
        val text: String,
        val status: Short,
        val statusText: String
) {
    constructor(xmlHttpResponse: XMLHttpRequest):
            this(text = xmlHttpResponse.responseText,
                 status = xmlHttpResponse.status,
                 statusText = xmlHttpResponse.statusText)


    val wasSuccessful get() = status == 200.toShort()
}
