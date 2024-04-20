package com.transactionservice.mapper;

import com.transactionservice.dto.PaymentDTO;
import com.transactionservice.entity.Payment;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

public class PaymentMapper {
    private static ModelMapper modelMapper;

    private PaymentMapper() {
    }

    static {
        modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }

    public static List<PaymentDTO> entityToDTO(List<Payment> payments) {
        return payments.stream().map(transaction -> modelMapper.map(transaction, PaymentDTO.class)).toList();
    }

    public static PaymentDTO entityToDTO(Payment payment) {
        return modelMapper.map(payment, PaymentDTO.class);
    }
}
