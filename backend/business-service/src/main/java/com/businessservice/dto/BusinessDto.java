package com.businessservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusinessDto {

    private int id;
    private String name;
    private String registrationNo;
    private String address;
    private String businessCategory;
    private String subCategory;
    private String businessSize;
    private int userId;
}
