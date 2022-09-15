package me.mambo.encoder

actual object MamboFactory {
    actual fun createEncoder(): MamboEncoder = NativeEncoder
}

object NativeEncoder : MamboEncoder {
    override fun encode(data: Any): String = data.toString().plus("@Native")
}