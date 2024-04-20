package com.businessservice.mapper;

import com.businessservice.dto.TradingAddressDto;
import com.businessservice.entity.TradingAddress;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

public class TradingAddressMapper {
    private static ModelMapper modelMapper;
    private TradingAddressMapper(){
    }
    static {
        modelMapper=new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
    }
    public static TradingAddress convertDtoToEntity(TradingAddressDto tradingAddressDto){
        return modelMapper.map(tradingAddressDto, TradingAddress.class);
    }
    public static TradingAddressDto convertEntityToDto(TradingAddress tradingAddress){
        return modelMapper.map(tradingAddress, TradingAddressDto.class);
    }
    public static List<TradingAddressDto> entityToDto(List<TradingAddress> tradingAddresses){
        return tradingAddresses.stream().map(address -> modelMapper.map(address, TradingAddressDto.class)).toList();
    }
}
