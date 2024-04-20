package com.transactionservice.dto;

import com.transactionservice.entity.AccountType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecipientDTO {
    private Integer id;
    private String email;
    private String accountNo;
    private String firstName;
    private String lastName;
    private String ifsc;
    private AccountType accountType;
}
