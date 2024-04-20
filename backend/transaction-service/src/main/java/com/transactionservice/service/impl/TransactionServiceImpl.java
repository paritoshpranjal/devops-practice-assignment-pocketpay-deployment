package com.transactionservice.service.impl;

import com.transactionservice.dto.TransactionDTO;
import com.transactionservice.entity.Transaction;
import com.transactionservice.exception.RecordNotFoundException;
import com.transactionservice.mapper.TransactionMapper;
import com.transactionservice.repository.TransactionRepository;
import com.transactionservice.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;

    @Override
    public TransactionDTO createTransaction(Integer userId,TransactionDTO transactionDTO) {
        Transaction transaction = TransactionMapper.convertDtoToEntity(transactionDTO);
        transaction.setUserId(userId);
        return TransactionMapper.convertEntityToDto(transactionRepository.save(transaction));
    }

    @Override
    public List<TransactionDTO> getTransactionsByUserId(int userId) {
        return TransactionMapper.convertEntityToDto(transactionRepository.findByUserId(userId));
    }

    @Override
    public TransactionDTO updateTransaction(int transactionId, TransactionDTO transactionDTO) {
        Transaction transaction = transactionRepository.findById(transactionId).orElseThrow(() -> new RecordNotFoundException("transaction not found by id:" + transactionId));
        transaction.setStatus(transactionDTO.getStatus());
        return TransactionMapper.convertEntityToDto(transactionRepository.save(transaction));
    }
}
