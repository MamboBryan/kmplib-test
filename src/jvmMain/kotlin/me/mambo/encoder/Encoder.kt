package me.mambo.encoder

actual object MamboFactory {
    actual fun createEncoder(): MamboEncoder = JvmMamboEncoder
}

object JvmMamboEncoder : MamboEncoder {
    override fun encode(data: Any): String = data.toString().plus("@JvmMambo")
}