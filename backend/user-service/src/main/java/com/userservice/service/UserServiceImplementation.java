package com.userservice.service;

import com.userservice.dto.TokenDTO;
import com.userservice.dto.UserResponse;
import com.userservice.dto.request.AuthenticationRequest;
import com.userservice.entity.User;
import com.userservice.exceptions.UserNotFoundException;
import com.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

import static com.userservice.mapper.UserServiceMapper.convertEntityToDto;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
  private  PasswordEncoder passwordEncoder;
    @Autowired
    private  JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;



    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }


    @Override
    public UserResponse findById(int id) {
        Optional<User> user = userRepository.findById(id);
        UserResponse userDTO = null;
        if(user.isPresent()){
            userDTO = convertEntityToDto(user.get());
        }
        else {
            throw new UserNotFoundException("Did not find user with id- " + id);
        }
        return userDTO;
    }

    @Override
    public UserResponse findByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        UserResponse userDTO = null;
        if(user.isPresent()){
            userDTO = convertEntityToDto(user.get());
        }
        else {
            throw new UserNotFoundException("Did not find user with email- " + email);
        }
        return userDTO;
    }

    @Override
    public UserResponse saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedEntity = userRepository.save(user);
        return convertEntityToDto(savedEntity);
    }

    @Override
    public void validateToken(TokenDTO tokenRequest) {
        jwtService.isTokenValid(tokenRequest.getToken());
    }

    @Override
    public TokenDTO loginUser(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );
        User user=userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow();
        String jwtToken=jwtService.generateToken(user);
        return new TokenDTO(jwtToken);

    }
}
