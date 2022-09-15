package me.mambo.encoder

import kotlinx.browser.window

actual object MamboFactory {
    actual fun createEncoder(): MamboEncoder = JsEncoder
}

object JsEncoder : MamboEncoder {
    override fun encode(data: Any): String = data.toString().plus("@Js")
}