package com.transactionservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "debit_card_payment")
public class DebitCardPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "name")
    private String name;

    @Column(name = "expiry_date")
    private String expiryDate;

}
