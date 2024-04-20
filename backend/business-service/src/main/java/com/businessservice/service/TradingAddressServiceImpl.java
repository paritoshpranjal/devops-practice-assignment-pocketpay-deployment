package com.businessservice.service;

import com.businessservice.dto.TradingAddressDto;
import com.businessservice.entity.TradingAddress;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.TradingAddressMapper;
import com.businessservice.repository.TradingAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TradingAddressServiceImpl implements TradingAddressService {
    @Autowired
    private TradingAddressRepository tradingAddressRepository;

    @Override
    public List<TradingAddressDto> getAllTradingAddresses() {
        List<TradingAddress> tradingAddresses = tradingAddressRepository.findAll();
        return TradingAddressMapper.entityToDto(tradingAddresses);
    }

    @Override
    public TradingAddressDto getTradingAddressById(int id) {
        TradingAddress tradingAddress = tradingAddressRepository.findById(id).orElseThrow(() -> new NotFoundException("TradingAddress not found with id" + id));
        return TradingAddressMapper.convertEntityToDto(tradingAddress);
    }

    @Override
    public TradingAddressDto saveTradingAddress(TradingAddressDto tradingAddressDto) {
        TradingAddress tradingAddress = TradingAddressMapper.convertDtoToEntity(tradingAddressDto);
        TradingAddress saveTradingAddress = tradingAddressRepository.save(tradingAddress);
        return TradingAddressMapper.convertEntityToDto(saveTradingAddress);
    }
}
