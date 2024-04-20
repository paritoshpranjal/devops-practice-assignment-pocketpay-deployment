package com.transactionservice.service;

import com.transactionservice.dto.PaymentDTO;
import com.transactionservice.entity.PaymentMode;

import java.util.List;

public interface PaymentService {
    List<PaymentDTO> getUserPayments(int userId, PaymentMode paymentMode);

    PaymentDTO getPaymentById(Integer id);
}
