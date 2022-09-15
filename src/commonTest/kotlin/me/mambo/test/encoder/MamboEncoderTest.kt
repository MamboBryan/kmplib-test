package me.mambo.test.encoder

import me.mambo.encoder.MamboFactory
import kotlin.test.Test
import kotlin.test.assertNotEquals

class MamboEncoderTest {
    @Test
    fun testEncodeToString() {
        checkEncodeToString("Mambo", "Mambo@Js")
    }

    private fun checkEncodeToString(input: String, output: String) {
        assertNotEquals(output, MamboFactory.createEncoder().encode(input))
    }

}