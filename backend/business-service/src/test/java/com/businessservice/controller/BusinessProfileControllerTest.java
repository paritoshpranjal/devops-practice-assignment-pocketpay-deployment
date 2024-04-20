package com.businessservice.controller;

import com.businessservice.dto.BusinessProfileDto;
import com.businessservice.service.BusinessProfileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class BusinessProfileControllerTest {

    @InjectMocks
    private BusinessProfileController businessProfileController;

    @Mock
    private BusinessProfileService businessProfileService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllBusinessProfiles() {
        List<BusinessProfileDto> mockBusinessProfileDtoList = new ArrayList<>();
        mockBusinessProfileDtoList.add(new BusinessProfileDto());

        when(businessProfileService.getAllBusinessProfiles()).thenReturn(mockBusinessProfileDtoList);

        ResponseEntity<List<BusinessProfileDto>> response = businessProfileController.getAllBusinessProfiles();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockBusinessProfileDtoList, response.getBody());
    }

    @Test
    void testGetBusinessProfileById() {
        int id = 1;
        BusinessProfileDto mockBusinessProfileDto = new BusinessProfileDto();

        when(businessProfileService.getBusinessProfileById(id)).thenReturn(mockBusinessProfileDto);

        ResponseEntity<BusinessProfileDto> response = businessProfileController.getBusinessProfileById(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockBusinessProfileDto, response.getBody());
    }

    @Test
    void testSaveBusinessProfile() {
        BusinessProfileDto inputBusinessProfileDto = new BusinessProfileDto();
        BusinessProfileDto savedBusinessProfileDto = new BusinessProfileDto();

        when(businessProfileService.saveBusinessProfile(inputBusinessProfileDto)).thenReturn(savedBusinessProfileDto);

        ResponseEntity<BusinessProfileDto> response = businessProfileController.saveBusinessProfile(inputBusinessProfileDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedBusinessProfileDto, response.getBody());
    }
}
