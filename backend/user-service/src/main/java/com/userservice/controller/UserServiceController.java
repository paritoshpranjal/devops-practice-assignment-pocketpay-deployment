package com.userservice.controller;

import com.userservice.dto.TokenDTO;
import com.userservice.dto.UserResponse;
import com.userservice.dto.request.AuthenticationRequest;
import com.userservice.dto.response.ApiErrorResponse;
import com.userservice.entity.User;
import com.userservice.service.JwtService;
import com.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserServiceController {
    @Autowired
    private UserService userService;
   @Autowired
   private JwtService jwtService;


    @GetMapping("/{id}")
    public UserResponse getUserById(@PathVariable("id") int id){
        return userService.findById(id);
    }
    @GetMapping
    public UserResponse getUserByEmail(@RequestParam("email") String email){
        return userService.findByEmail(email);
    }

    @GetMapping("/")
    public List<User> getAllUses(){
        return userService.findAllUsers();
    }

    @PostMapping("/save")
    public UserResponse saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("/validateToken")
    public ResponseEntity<ApiErrorResponse> validateToken(@RequestBody TokenDTO tokenRequest) {
        userService.validateToken(tokenRequest);
        return ResponseEntity.ok().body(new ApiErrorResponse(HttpStatus.OK.value(),HttpStatus.OK.name(), "Token is valid"));
    }
    @PostMapping("/login")
    public ResponseEntity<TokenDTO> loginUser(@RequestBody AuthenticationRequest authenticationRequest){
        return new ResponseEntity<>(userService.loginUser(authenticationRequest),HttpStatus.OK);
    }




}
