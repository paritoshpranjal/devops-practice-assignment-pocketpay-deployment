package com.transactionservice.dto;

import com.transactionservice.entity.BankPayment;
import com.transactionservice.entity.DebitCardPayment;
import com.transactionservice.entity.PaymentMode;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentDTO {
    private Integer id;
    private PaymentMode paymentMode;
    private DebitCardPayment debitCardPayment;
    private BankPayment bankPayment;
}
