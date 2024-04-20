package com.businessservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "business")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "reg_address")
    private String address;

    @Column(name = "business_category")
    private String businessCategory;

    @Column(name = "sub_category")
    private String subCategory;

    @Column(name = "business_size")
    private String businessSize;

    @Column(name = "users_id")
    private int userId;
}

