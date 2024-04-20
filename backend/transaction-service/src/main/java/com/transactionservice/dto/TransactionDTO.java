package com.transactionservice.dto;


import com.transactionservice.entity.TransactionStatus;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class TransactionDTO {
    private Integer id;
    private Double senderAmount;
    private String senderCurrency;
    private String receiverCurrency;
    private Double receiverAmount;
    private String purpose;
    private Date date;
    private String transferNumber;
    private TransactionStatus status;
    private Integer paymentId;
    private RecipientDTO recipient;
}
