package com.transactionservice.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BankPaymentDTO {
    private Integer id;
    private String bankName;
    private String accountNo;
    private String code;
}
