package com.transactionservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "bank_payment")
public class BankPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "account_no")
    private String accountNo;

    @Column(name = "code")
    private String code;


}
