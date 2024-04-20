package com.transactionservice.repository;

import com.transactionservice.entity.Payment;
import com.transactionservice.entity.PaymentMode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
    List<Payment> findByUserIdAndPaymentMode(int userId, PaymentMode paymentMode);
}
