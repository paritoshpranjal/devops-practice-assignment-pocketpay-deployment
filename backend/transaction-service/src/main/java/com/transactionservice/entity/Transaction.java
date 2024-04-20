package com.transactionservice.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "sender_amount")
    private Double senderAmount;

    @Column(name = "sender_currency")
    private String senderCurrency;

    @Column(name = "receiver_currency")
    private String receiverCurrency;

    @Column(name = "receiver_amount")
    private Double receiverAmount;

    @Column(name = "purpose")
    private String purpose;

    @Column(name = "date")
    private Date date;

    @Column(name = "transfer_number")
    private String transferNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TransactionStatus status;

    @Column(name = "users_id")
    private Integer userId;

    @Column(name = "payment_id")
    private Integer paymentId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "recipient_id")
    private Recipient recipient;

}
