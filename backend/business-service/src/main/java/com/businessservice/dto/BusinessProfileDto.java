package com.businessservice.dto;

import com.businessservice.entity.BusinessUserType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusinessProfileDto {
    private int id;
    private String firstName;
    private String lastName;
    private Date dob;
    private String country;
    private BusinessUserType businessUserType;
    private int businessId;
}
