package com.transactionservice.service;

import com.transactionservice.dto.TransactionDTO;

import java.util.List;

public interface TransactionService {
    TransactionDTO createTransaction(Integer userId,TransactionDTO transactionDTO);

    List<TransactionDTO> getTransactionsByUserId(int userId);

    TransactionDTO updateTransaction(int transactionId, TransactionDTO transactionDTO);
}
