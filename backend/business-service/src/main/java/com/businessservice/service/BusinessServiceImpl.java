package com.businessservice.service;

import com.businessservice.dto.BusinessDto;
import com.businessservice.entity.Business;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.BusinessMapper;
import com.businessservice.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusinessServiceImpl implements BusinessService {
    @Autowired
    private BusinessRepository businessRepository;

    @Override
    public List<BusinessDto> getBusinessByUserId(int userId) {
        List<Business> businesses = businessRepository.findByUserId(userId);
        return BusinessMapper.entityToDto(businesses);
    }

    @Override
    public BusinessDto getSingleBusiness(int id) {
        Optional<Business> business = businessRepository.findById(id);
        return BusinessMapper.convertEntityToDto(business.orElseThrow(() -> new NotFoundException("Business not found with id" + id)));
    }

    @Override
    public BusinessDto saveBusiness(BusinessDto businessDto) {
        Business business = BusinessMapper.convertDtoToEntity(businessDto);
        Business saveBusiness = businessRepository.save(business);
        return BusinessMapper.convertEntityToDto(saveBusiness);
    }
}
