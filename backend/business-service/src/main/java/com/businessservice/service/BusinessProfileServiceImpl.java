package com.businessservice.service;

import com.businessservice.dto.BusinessProfileDto;
import com.businessservice.entity.BusinessProfile;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.BusinessProfileMapper;
import com.businessservice.repository.BusinessProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BusinessProfileServiceImpl implements BusinessProfileService{
    @Autowired
    private BusinessProfileRepository businessProfileRepository;
    @Override
    public List<BusinessProfileDto> getAllBusinessProfiles() {
        List<BusinessProfile> businessProfiles = businessProfileRepository.findAll();
        return BusinessProfileMapper.entityToDto(businessProfiles);
    }

    @Override
    public BusinessProfileDto getBusinessProfileById(int id) {
        BusinessProfile businessProfile = businessProfileRepository.findById(id).orElseThrow(() -> new NotFoundException("Business Profile not found with id" + id));
        return BusinessProfileMapper.convertEntityToDto(businessProfile);
    }

    @Override
    public BusinessProfileDto saveBusinessProfile(BusinessProfileDto businessProfileDto) {
        BusinessProfile businessProfile = BusinessProfileMapper.convertDtoToEntity(businessProfileDto);
        BusinessProfile saveBusinessProfile = businessProfileRepository.save(businessProfile);
        return BusinessProfileMapper.convertEntityToDto(saveBusinessProfile);
    }
}
