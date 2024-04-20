package com.transactionservice.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DebitCardPaymentDTO {
    private Integer id;
    private String cardNumber;
    private String name;
    private String expiryDate;
}
