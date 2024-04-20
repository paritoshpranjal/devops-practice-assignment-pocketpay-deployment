package com.businessservice.service;

import com.businessservice.dto.BusinessProfileDto;
import com.businessservice.entity.BusinessProfile;
import com.businessservice.entity.BusinessUserType;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.BusinessProfileMapper;
import com.businessservice.repository.BusinessProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class BusinessProfileServiceImplTest {

    @InjectMocks
    private BusinessProfileServiceImpl businessProfileService;

    @Mock
    private BusinessProfileRepository businessProfileRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateBusinessProfile() {
        BusinessProfileDto businessProfile = BusinessProfileDto.builder()
                .id(1)
                .firstName("John")
                .lastName("Doe")
                .dob(new Date())
                .country("USA")
                .businessUserType(BusinessUserType.DIRECTOR)
                .businessId(100)
                .build();

        assertNotNull(businessProfile);
        assertEquals(1, businessProfile.getId());
        assertEquals("John", businessProfile.getFirstName());
        assertEquals("Doe", businessProfile.getLastName());
        assertEquals("USA", businessProfile.getCountry());
        assertEquals(BusinessUserType.DIRECTOR, businessProfile.getBusinessUserType());
        assertEquals(100, businessProfile.getBusinessId());
    }

    @Test
    void testGetAllBusinessProfiles() {
        List<BusinessProfile> mockBusinessProfiles = new ArrayList<>();
        mockBusinessProfiles.add(new BusinessProfile());
        when(businessProfileRepository.findAll()).thenReturn(mockBusinessProfiles);

        List<BusinessProfileDto> result = businessProfileService.getAllBusinessProfiles();

        assertNotNull(result);
        assertEquals(mockBusinessProfiles.size(), result.size());
    }

    @Test
    void testGetBusinessProfileById() {
        int id = 1;
        BusinessProfile mockBusinessProfile = new BusinessProfile();
        when(businessProfileRepository.findById(id)).thenReturn(Optional.of(mockBusinessProfile));

        BusinessProfileDto result = businessProfileService.getBusinessProfileById(id);

        assertNotNull(result);
    }

    @Test
    void testGetBusinessProfileByIdNotFound() {
        int id = 1;
        when(businessProfileRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> businessProfileService.getBusinessProfileById(id));
    }

    @Test
    void testSaveBusinessProfile() {
        BusinessProfileDto businessProfileDto = new BusinessProfileDto();
        BusinessProfile businessProfile = BusinessProfileMapper.convertDtoToEntity(businessProfileDto);
        when(businessProfileRepository.save(businessProfile)).thenReturn(businessProfile);

        BusinessProfileDto result = businessProfileService.saveBusinessProfile(businessProfileDto);

        assertNotNull(result);
    }
}
