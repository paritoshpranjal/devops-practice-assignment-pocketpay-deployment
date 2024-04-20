package com.userservice.service;

import com.userservice.dto.TokenDTO;
import com.userservice.dto.UserResponse;
import com.userservice.dto.request.AuthenticationRequest;
import com.userservice.entity.User;
import java.util.List;
public interface UserService {
    public List<User> findAllUsers();
    public UserResponse findById(int id);
    public UserResponse findByEmail(String email);
    public UserResponse saveUser(User user);
    void validateToken(TokenDTO tokenRequest);
    TokenDTO loginUser(AuthenticationRequest authenticationRequest);

}
