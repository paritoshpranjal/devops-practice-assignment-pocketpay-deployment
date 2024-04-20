package com.transactionservice.service.impl;

import com.transactionservice.dto.PaymentDTO;
import com.transactionservice.entity.Payment;
import com.transactionservice.entity.PaymentMode;
import com.transactionservice.exception.RecordNotFoundException;
import com.transactionservice.mapper.PaymentMapper;
import com.transactionservice.repository.PaymentRepository;
import com.transactionservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository paymentRepository;

    @Override
    public List<PaymentDTO> getUserPayments(int userId, PaymentMode paymentMode) {
        return PaymentMapper.entityToDTO(paymentRepository.findByUserIdAndPaymentMode(userId, paymentMode));
    }

    @Override
    public PaymentDTO getPaymentById(Integer id) {
        Payment payment = paymentRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Payment not found by id:" + id));
        return PaymentMapper.entityToDTO(payment);
    }
}
