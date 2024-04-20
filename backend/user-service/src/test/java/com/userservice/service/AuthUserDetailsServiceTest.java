package com.userservice.service;

import com.userservice.entity.User;
import com.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class AuthUserDetailsServiceTest {
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private AuthUserDetailsService authUserDetailsService;
    @BeforeEach
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
    }
    @Test
    void givenUserEmail_thenLoadUserByUsername(){
        User user=User.builder().id(1).build();
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(user));
        UserDetails userDetails=authUserDetailsService.loadUserByUsername("username");
        assertEquals(user,userDetails);
    }
}
