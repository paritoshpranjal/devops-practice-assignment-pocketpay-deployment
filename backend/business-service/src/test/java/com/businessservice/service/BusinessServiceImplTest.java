package com.businessservice.service;

import com.businessservice.dto.BusinessDto;
import com.businessservice.entity.Business;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.BusinessMapper;
import com.businessservice.repository.BusinessRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BusinessServiceImplTest {

    @InjectMocks
    private BusinessServiceImpl businessService;

    @Mock
    private BusinessRepository businessRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateBusiness() {
        BusinessDto business = BusinessDto.builder()
                .id(1)
                .name("Sample Business")
                .registrationNo("12345")
                .address("123 Main St")
                .businessCategory("Retail")
                .subCategory("Clothing")
                .businessSize("10-50")
                .build();

        assertNotNull(business);
        assertEquals(1, business.getId());
        assertEquals("Sample Business", business.getName());
        assertEquals("12345", business.getRegistrationNo());
        assertEquals("123 Main St", business.getAddress());
        assertEquals("Retail", business.getBusinessCategory());
        assertEquals("Clothing", business.getSubCategory());
        assertEquals("10-50", business.getBusinessSize());
    }

    @Test
    void testGetBusinessByUserId() {
        int userId = 1;
        List<Business> mockBusinesses = new ArrayList<>();
        mockBusinesses.add(new Business());
        when(businessRepository.findByUserId(userId)).thenReturn(mockBusinesses);

        List<BusinessDto> result = businessService.getBusinessByUserId(userId);

        assertNotNull(result);
        assertEquals(mockBusinesses.size(), result.size());
    }

    @Test
    void testGetSingleBusiness() {
        int id = 1;
        Business mockBusiness = new Business();
        when(businessRepository.findById(id)).thenReturn(Optional.of(mockBusiness));

        BusinessDto result = businessService.getSingleBusiness(id);

        assertNotNull(result);
    }

    @Test
    void testGetSingleBusinessNotFound() {
        int id = 1;
        when(businessRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> businessService.getSingleBusiness(id));
    }

    @Test
    void testSaveBusiness() {
        BusinessDto businessDto = new BusinessDto();
        Business business = BusinessMapper.convertDtoToEntity(businessDto);
        when(businessRepository.save(business)).thenReturn(business);

        BusinessDto result = businessService.saveBusiness(businessDto);

        assertNotNull(result);
    }
}
