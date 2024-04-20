package com.businessservice.mapper;

import com.businessservice.dto.BusinessProfileDto;
import com.businessservice.entity.BusinessProfile;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

public class BusinessProfileMapper {
    private static ModelMapper modelMapper;
    private BusinessProfileMapper() {
    }
    static {
        modelMapper=new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }
    public static BusinessProfile convertDtoToEntity(BusinessProfileDto businessProfileDto){
        return modelMapper.map(businessProfileDto, BusinessProfile.class);
    }
    public static BusinessProfileDto convertEntityToDto(BusinessProfile businessProfile){
        return modelMapper.map(businessProfile, BusinessProfileDto.class);
    }
    public static List<BusinessProfileDto> entityToDto(List<BusinessProfile> businessProfile){
        return businessProfile.stream().map(business -> modelMapper.map(business, BusinessProfileDto.class)).toList();
    }
}
