package com.userservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.userservice.dto.TokenDTO;
import com.userservice.dto.UserResponse;
import com.userservice.dto.request.AuthenticationRequest;
import com.userservice.entity.Address;
import com.userservice.entity.User;
import com.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserControllerTest {
    @Mock
    private UserService userService;
    @InjectMocks
    private UserServiceController userServiceController;
    private MockMvc mockMvc;



    private User testUser;
    private UserResponse testUserDTO;
    @BeforeEach
    void setUps() {
        MockitoAnnotations.initMocks(this);
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        testUser = new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address);
        testUserDTO = new UserResponse(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address
        );
    }
    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(userServiceController).build();
    }

    private ObjectMapper mapper = new ObjectMapper();
    private UserResponse userResponse=UserResponse.builder().id(1).build();
    private User user= User.builder().id(1).email("email").password("password").build();
    private String jwtToken="dummyToken";
    @Test
    void givenUsers_whenGetAllUsers_thenReturnUserList() {
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        List<User> userList = new ArrayList<>();
        userList.add(new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com", "password123", "customer", "USA", "1234567890",address));
        userList.add(new User(2, "Vidhya", "Doe", dateOfBirth, "vidhyadoe@example.com", "password123", "customer", "USA", "1234567890",address));

        when(userService.findAllUsers()).thenReturn(userList);

        List<User> users = userServiceController.getAllUses();
        assertEquals(userList,users);
    }
    @Test
    void givenUserDto_whenGetUserById_theReturnUser(){
        when(userService.findById(1)).thenReturn(testUserDTO);
        UserResponse userDTO = userServiceController.getUserById(1);
        assertEquals(userDTO,testUserDTO);
    }
    @Test
    void givenUserDto_whenGetUserByEmail_theReturnUser(){
        when(userService.findByEmail(testUser.getEmail())).thenReturn(testUserDTO);
        UserResponse userDTO = userServiceController.getUserByEmail(testUser.getEmail());
        assertEquals(userDTO,testUserDTO);
    }
    @Test
     void givenUserDto_whenSaveUser_thenReturnSavedUserDto(){

        when(userService.saveUser(testUser)).thenReturn(testUserDTO);

        UserResponse userDTO = userServiceController.saveUser(testUser);

        assertEquals(testUserDTO,userDTO );
        verify(userService, times(1)).saveUser(testUser);
    }
    @Test
    void givenTokenRequest_whenTokenRequestValid_thenValidateToken() throws Exception {
        TokenDTO tokenRequest = new TokenDTO("dummyToken");
        doNothing().when(userService).validateToken(any(TokenDTO.class));
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/user/validateToken")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(tokenRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    void givenAuthenticationRequest_whenUserIsValid_thenLoginUser() throws Exception {
        AuthenticationRequest authenticationRequest=new AuthenticationRequest("email","password");
        TokenDTO token=new TokenDTO("dummyToken");
        when(userService.loginUser(authenticationRequest)).thenReturn(token);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(authenticationRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }
}
