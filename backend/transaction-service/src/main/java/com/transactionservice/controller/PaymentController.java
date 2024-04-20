package com.transactionservice.controller;

import com.transactionservice.dto.PaymentDTO;
import com.transactionservice.entity.PaymentMode;
import com.transactionservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/payments")
public class PaymentController {
    private final PaymentService paymentService;

    @GetMapping
    public List<PaymentDTO> getPaymentsByUserId(@RequestHeader("user_id") Integer userId, @RequestParam PaymentMode paymentMode) {
        return paymentService.getUserPayments(userId, paymentMode);
    }

    @GetMapping("/{id}")
    public PaymentDTO getPaymentById(@PathVariable Integer id) {
        return paymentService.getPaymentById(id);
    }
}
