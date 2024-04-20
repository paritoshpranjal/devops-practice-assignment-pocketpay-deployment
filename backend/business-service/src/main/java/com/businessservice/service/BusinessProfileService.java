package com.businessservice.service;

import com.businessservice.dto.BusinessProfileDto;

import java.util.List;

public interface BusinessProfileService {
    List<BusinessProfileDto> getAllBusinessProfiles();
    BusinessProfileDto getBusinessProfileById(int id);
    BusinessProfileDto saveBusinessProfile(BusinessProfileDto businessProfileDto);
}
