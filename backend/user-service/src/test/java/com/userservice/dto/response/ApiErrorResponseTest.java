package com.userservice.dto.response;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiErrorResponseTest {
    private final String title = "Bad Request";
    private final String message = "bad request";
    private final Integer status = HttpStatus.BAD_REQUEST.value();
    @Test
    void testApiErrorResponse(){
        ApiErrorResponse apiErrorResponse=ApiErrorResponse.builder().status(status).message(message).title(title).build();
        assertEquals(title,apiErrorResponse.getTitle());
        assertEquals(message,apiErrorResponse.getMessage());
        assertEquals(status,apiErrorResponse.getStatus());
        ApiErrorResponse apiErrorResponse1=new ApiErrorResponse();
        apiErrorResponse1.setTitle(title);
        assertEquals(title,apiErrorResponse1.getTitle());
    }

}