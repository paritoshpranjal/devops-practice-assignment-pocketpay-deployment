package com.businessservice.mapper;

import com.businessservice.dto.BusinessDto;
import com.businessservice.entity.Business;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

public class BusinessMapper {
    private static ModelMapper modelMapper;
    private BusinessMapper() {
    }
    static {
        modelMapper=new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }
    public static Business convertDtoToEntity(BusinessDto businessDto){
        return modelMapper.map(businessDto, Business.class);
    }
    public static BusinessDto convertEntityToDto(Business business){
        return modelMapper.map(business, BusinessDto.class);
    }
    public static List<BusinessDto> entityToDto(List<Business> businesses){
        return businesses.stream().map(business -> modelMapper.map(business, BusinessDto.class)).toList();
    }
}
