package com.userservice.service;

import com.userservice.dto.TokenDTO;
import com.userservice.dto.UserResponse;
import com.userservice.dto.request.AuthenticationRequest;
import com.userservice.entity.Address;
import com.userservice.entity.User;
import com.userservice.exceptions.UserNotFoundException;
import com.userservice.mapper.UserServiceMapper;
import com.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

 class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserServiceImplementation userServiceImplementation;
    private User testUser;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtService jwtService;
    @Mock
    private AuthenticationManager authenticationManager;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        testUser = new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address);
    }
    private User user= User.builder().id(1).email("email").password("password").build();
    private UserResponse userResponse=UserResponse.builder().id(1).build();
    private String jwtToken="dummyToken";

    @Test
    void testFindAllUsers() {
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        List<User> userList = new ArrayList<>();
        userList.add(new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com", "password123", "customer", "USA", "1234567890",address));
        userList.add(new User(2, "Vidhya", "Doe", dateOfBirth, "vidhyadoe@example.com", "password123", "customer", "USA", "1234567890",address));

        when(userRepository.findAll()).thenReturn(userList);

        List<User> result = userServiceImplementation.findAllUsers();

        assertEquals(2, result.size());
        assertEquals("John", result.get(0).getFirstName());
        assertEquals("Vidhya", result.get(1).getFirstName());
    }
    @Test
    void testFindUserById_UserFound() {

        when(userRepository.findById(1)).thenReturn(Optional.of(testUser));

        UserResponse result = userServiceImplementation.findById(1);

        assertNotNull(result);
        assertEquals("John", result.getFirstName());
    }

    @Test
    void testFindUserById_UserNotFound() {
        when(userRepository.findById(2)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userServiceImplementation.findById(2));
    }

    @Test
    void testFindByEmail_UserFound() {
        when(userRepository.findByEmail("johndoe@example.com")).thenReturn(Optional.of(testUser));

        UserResponse result = userServiceImplementation.findByEmail("johndoe@example.com");

        assertNotNull(result);
        assertEquals("Doe", result.getLastName());
    }

    @Test
    void testFindByEmail_UserNotFound() {
        when(userRepository.findByEmail("nonexistent@example.com")).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userServiceImplementation.findByEmail("nonexistent@example.com"));
    }

    @Test
    void testSaveUser() {
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        UserResponse userDTO = new UserResponse();
        userDTO.setId(1);
        userDTO.setFirstName("John");
        userDTO.setLastName("Doe");
        userDTO.setEmail("johndoe@example.com");

        UserResponse result = userServiceImplementation.saveUser(UserServiceMapper.convertDtoToEntity(userDTO));

        assertNotNull(result);
        assertEquals("Doe", result.getLastName());
    }
    @Test
    void givenTokenRequest_whenTokenValid_thenPositiveResponse(){
        TokenDTO tokenDTO=new TokenDTO(jwtToken);
        when(jwtService.isTokenValid(tokenDTO.getToken())).thenReturn(true);
        userServiceImplementation.validateToken(tokenDTO);
        verify(jwtService).isTokenValid(tokenDTO.getToken());
    }
    @Test
    void givenAuthenticationRequest_whenUserCredentialsValid_testLoginUser(){
        AuthenticationRequest authenticationRequest=AuthenticationRequest.builder().email("email").password("password").build();
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(null);
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(user));
        when(jwtService.generateToken(user)).thenReturn(jwtToken);
        TokenDTO tokenDTO=userServiceImplementation.loginUser(authenticationRequest);
        assertEquals(jwtToken,tokenDTO.getToken());
    }

}
