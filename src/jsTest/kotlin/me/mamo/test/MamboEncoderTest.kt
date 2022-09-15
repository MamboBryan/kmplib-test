package me.mamo.test

import me.mambo.encoder.MamboFactory
import kotlin.test.Test
import kotlin.test.assertEquals


class MamboEncoderTest {
    @Test
    fun testEncodeToString() {
        checkEncodeToString("Mambo", "Mambo@Js")
    }

    private fun checkEncodeToString(input: String, output: String) {
        assertEquals(output, MamboFactory.createEncoder().encode(input))
    }
}