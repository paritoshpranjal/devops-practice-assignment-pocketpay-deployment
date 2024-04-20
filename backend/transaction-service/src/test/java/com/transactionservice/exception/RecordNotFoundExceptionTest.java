package com.transactionservice.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RecordNotFoundExceptionTest {
    @Test
    void testMessage() {
        RecordNotFoundException exception = new RecordNotFoundException("Exception");
        assertEquals("Exception", exception.getMessage());
    }
}
