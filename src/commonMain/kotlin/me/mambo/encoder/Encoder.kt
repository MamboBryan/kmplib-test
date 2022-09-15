package me.mambo.encoder

interface MamboEncoder {
    fun encode(data: Any): String
}

expect object MamboFactory {
    fun createEncoder(): MamboEncoder
}