package com.transactionservice.controller;

import com.transactionservice.dto.TransactionDTO;
import com.transactionservice.service.TransactionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping
    public List<TransactionDTO> getTransactionsByUserId(@RequestHeader("user_id") Integer userId) {
        log.info(String.format("GET: /transactions, User-Id: %d", userId));
        return transactionService.getTransactionsByUserId(userId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TransactionDTO createTransaction(@RequestHeader("user_id") Integer userId,@RequestBody TransactionDTO transactionDTO) {
        log.info(String.format("POST: /transactions, RequestBody: %s", transactionDTO));
        return transactionService.createTransaction(userId,transactionDTO);
    }

    @PatchMapping("/{id}")
    public TransactionDTO updateTransaction(@PathVariable Integer id, @RequestBody TransactionDTO transactionDTO) {
        log.info(String.format("PATCH: /transactions/%d , RequestBody: %s",id,transactionDTO));
        return transactionService.updateTransaction(id, transactionDTO);
    }

}
