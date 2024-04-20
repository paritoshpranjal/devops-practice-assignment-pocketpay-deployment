package com.transactionservice.service;


import com.transactionservice.dto.PaymentDTO;
import com.transactionservice.entity.BankPayment;
import com.transactionservice.entity.DebitCardPayment;
import com.transactionservice.entity.Payment;
import com.transactionservice.entity.PaymentMode;
import com.transactionservice.exception.RecordNotFoundException;
import com.transactionservice.repository.PaymentRepository;
import com.transactionservice.service.impl.PaymentServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

class PaymentServiceTest {
    @Mock
    private PaymentRepository paymentRepository;

    @InjectMocks
    private PaymentServiceImpl paymentService;

    @BeforeEach
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void givenUserIdAndPaymentMode_thenReturnPaymentsByMode() {
        when(paymentRepository.findByUserIdAndPaymentMode(anyInt(), any())).thenReturn(Collections.singletonList(Payment.builder().id(1).build()));
        List<PaymentDTO> paymentDTOList = paymentService.getUserPayments(1, PaymentMode.CARD);
        assertEquals(1, paymentDTOList.size());
    }

    @Test
    void givenPaymentId_thenReturnPayment() {
        BankPayment bankPayment = BankPayment.builder().bankName("name").code("12-21").accountNo("212212").build();
        DebitCardPayment debitCardPayment = DebitCardPayment.builder().cardNumber("1121211").id(1).name("name").expiryDate("12-21").build();
        Payment payment = Payment.builder().id(1).paymentMode(PaymentMode.CARD).bankPayment(bankPayment).debitCardPayment(debitCardPayment).userId(1).build();
        when(paymentRepository.findById(anyInt())).thenReturn(Optional.ofNullable(payment));
        PaymentDTO paymentDTO = paymentService.getPaymentById(1);
        assertEquals(payment.getId(), paymentDTO.getId());
    }

    @Test
    void givenPaymentId_whenPaymentIdNotValid_thenThrowRecordNotFoundException() {
        when(paymentRepository.findById(anyInt())).thenReturn(Optional.empty());
        assertThrows(RecordNotFoundException.class, () -> paymentService.getPaymentById(1));
    }
}
