package com.businessservice.controller;

import com.businessservice.dto.TradingAddressDto;
import com.businessservice.service.TradingAddressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class TradingAddressControllerTest {

    @InjectMocks
    private TradingAddressController tradingAddressController;

    @Mock
    private TradingAddressService tradingAddressService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTradingAddresses() {
        List<TradingAddressDto> mockTradingAddressDtoList = new ArrayList<>();
        mockTradingAddressDtoList.add(new TradingAddressDto());

        when(tradingAddressService.getAllTradingAddresses()).thenReturn(mockTradingAddressDtoList);

        ResponseEntity<List<TradingAddressDto>> response = tradingAddressController.getAllTradingAddresses();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockTradingAddressDtoList, response.getBody());
    }

    @Test
    void testGetTradingAddressById() {
        int id = 1;
        TradingAddressDto mockTradingAddressDto = new TradingAddressDto();

        when(tradingAddressService.getTradingAddressById(id)).thenReturn(mockTradingAddressDto);

        ResponseEntity<TradingAddressDto> response = tradingAddressController.getBusinessProfileById(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockTradingAddressDto, response.getBody());
    }
    @Test
    void testSaveTradingAddress() {
        TradingAddressDto inputTradingAddressDto = new TradingAddressDto();
        TradingAddressDto savedTradingAddressDto = new TradingAddressDto();

        when(tradingAddressService.saveTradingAddress(inputTradingAddressDto)).thenReturn(savedTradingAddressDto);

        ResponseEntity<TradingAddressDto> response = tradingAddressController.saveTradingAddress(inputTradingAddressDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedTradingAddressDto, response.getBody());
    }
}
