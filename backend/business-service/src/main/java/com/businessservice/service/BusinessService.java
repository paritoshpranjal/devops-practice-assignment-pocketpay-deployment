package com.businessservice.service;

import com.businessservice.dto.BusinessDto;

import java.util.List;

public interface BusinessService {
    List<BusinessDto> getBusinessByUserId(int useId);

    BusinessDto getSingleBusiness(int id);

    BusinessDto saveBusiness(BusinessDto businessDto);
}
