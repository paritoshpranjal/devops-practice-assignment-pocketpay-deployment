package com.transactionservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.transactionservice.dto.TransactionDTO;
import com.transactionservice.service.impl.TransactionServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@WebMvcTest(value = TransactionController.class, excludeAutoConfiguration = {SecurityAutoConfiguration.class})
class TransactionControllerTest {
    @MockBean
    private TransactionServiceImpl transactionService;

    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper mapper = new ObjectMapper();
    private TransactionDTO transactionDTO = TransactionDTO.builder().id(1).build();
    private List<TransactionDTO> transactionDTOList = Collections.singletonList(transactionDTO);

    @Test
    void givenUserId_whenUserIdExists_thenReturnTransactions() throws Exception {
        when(transactionService.getTransactionsByUserId(anyInt())).thenReturn(transactionDTOList);
        mockMvc.perform(MockMvcRequestBuilders.
                        get("/transactions")
                        .header("user_id", 1)
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(mapper.writeValueAsString(transactionDTOList)));
    }

    @Test
    void givenRequestBody_thenReturnCreatedTransaction() throws Exception {
        when(transactionService.createTransaction(anyInt(),any(TransactionDTO.class))).thenReturn(transactionDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/transactions")
                        .header("user_id", 1)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(transactionDTO))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isCreated());
    }

    @Test
    void givenTransactionIdAndRequestBody_whenIdExists_thenUpdateTransaction() throws Exception {
        when(transactionService.updateTransaction(anyInt(), any(TransactionDTO.class))).thenReturn(transactionDTO);
        mockMvc.perform(MockMvcRequestBuilders.
                        patch("/transactions/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(transactionDTO))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }
}
