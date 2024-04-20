package com.transactionservice.exception;

import com.transactionservice.dto.ApiErrorResponse;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

class TransactionServiceExceptionTest {
    @InjectMocks
    private TransactionServiceExceptionHandler exceptionHandler;

    @Test
    void givenUserNotFoundException_thenReturnNotFoundStatus() {
        RecordNotFoundException exception = new RecordNotFoundException("Record not found");
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleUserNotFoundException(exception);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("Record not found", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }

    @Test
    void givenAnyException_thenReturnInternalServerErrorStatus() {
        Exception exception = new Exception("Internal server error");
        MockitoAnnotations.openMocks(this);

        ResponseEntity<ApiErrorResponse> responseEntity = exceptionHandler.handleAnyException(exception);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Internal server error", Objects.requireNonNull(responseEntity.getBody()).getMessage());
    }
}
