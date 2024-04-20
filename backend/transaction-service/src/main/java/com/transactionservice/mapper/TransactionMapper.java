package com.transactionservice.mapper;

import com.transactionservice.dto.TransactionDTO;
import com.transactionservice.entity.Transaction;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

public class TransactionMapper {
    private static ModelMapper modelMapper;

    private TransactionMapper() {
    }

    static {
        modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }

    public static Transaction convertDtoToEntity(TransactionDTO transactionDTO) {
        return modelMapper.map(transactionDTO, Transaction.class);
    }

    public static TransactionDTO convertEntityToDto(Transaction transaction) {
        return modelMapper.map(transaction, TransactionDTO.class);
    }

    public static List<TransactionDTO> convertEntityToDto(List<Transaction> transactions) {
        return transactions.stream().map(transaction -> modelMapper.map(transaction, TransactionDTO.class)).toList();
    }
}
