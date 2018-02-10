@file:Suppress("MemberVisibilityCanBePrivate")

package org.bh.tools.io.net

import org.w3c.dom.url.*
import org.w3c.xhr.*


/**
 * @author Ben Leggiero
 * @since 2018-02-10
 */

class HttpRequest(
        val requestURL: URL,
        val headers: Map<String, String> = emptyMap()
) {

    constructor(requestURL: String, headers: Map<String, String> = emptyMap()): this(URL(requestURL), headers)

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

        request.open(method = method, url = requestURL.toString(), headers = headers, async = true)
        request.send()
    }
}

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
