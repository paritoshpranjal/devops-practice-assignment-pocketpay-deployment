package com.userservice.dto;

import com.userservice.entity.Address;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserResponse {

    private int id;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private String email;
    private String password;
    private String accountType;
    private String country;
    private String phoneNumber;
    private Address address;
}
