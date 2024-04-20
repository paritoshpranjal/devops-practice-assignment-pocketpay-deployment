package com.businessservice.controller;

import com.businessservice.dto.TradingAddressDto;
import com.businessservice.service.TradingAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business/tradingAddress")
public class TradingAddressController {
    @Autowired
    private TradingAddressService tradingAddressService;

    @GetMapping
    public ResponseEntity<List<TradingAddressDto>> getAllTradingAddresses() {
        List<TradingAddressDto> tradingAddressDto = tradingAddressService.getAllTradingAddresses();
        return new ResponseEntity<>(tradingAddressDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TradingAddressDto> getBusinessProfileById(@PathVariable int id) {
        TradingAddressDto tradingAddressDto = tradingAddressService.getTradingAddressById(id);
        return new ResponseEntity<>(tradingAddressDto, HttpStatus.OK);
    }
    @PostMapping("/")
    public ResponseEntity<TradingAddressDto> saveTradingAddress(@RequestBody TradingAddressDto tradingAddressDto) {
        TradingAddressDto savedTradingAddressDto = tradingAddressService.saveTradingAddress(tradingAddressDto);
        return new ResponseEntity<>(savedTradingAddressDto, HttpStatus.CREATED);
    }

}
