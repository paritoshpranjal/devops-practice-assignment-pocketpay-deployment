package com.businessservice.service;

import com.businessservice.dto.TradingAddressDto;

import java.util.List;

public interface TradingAddressService {
    List<TradingAddressDto> getAllTradingAddresses();
    TradingAddressDto getTradingAddressById(int id);
    TradingAddressDto saveTradingAddress(TradingAddressDto tradingAddressDto);
}
