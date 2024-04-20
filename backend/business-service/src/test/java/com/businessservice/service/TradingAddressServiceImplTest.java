package com.businessservice.service;

import com.businessservice.dto.TradingAddressDto;
import com.businessservice.entity.TradingAddress;
import com.businessservice.exception.NotFoundException;
import com.businessservice.mapper.TradingAddressMapper;
import com.businessservice.repository.TradingAddressRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TradingAddressServiceImplTest {

    @InjectMocks
    private TradingAddressServiceImpl tradingAddressService;

    @Mock
    private TradingAddressRepository tradingAddressRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateTradingAddress() {
        TradingAddressDto tradingAddress = TradingAddressDto.builder()
                .id(1)
                .address("123 Main St")
                .businessId(100)
                .build();

        assertNotNull(tradingAddress);
        assertEquals(1, tradingAddress.getId());
        assertEquals("123 Main St", tradingAddress.getAddress());
        assertEquals(100, tradingAddress.getBusinessId());
    }

    @Test
    void testGetAllTradingAddresses() {
        List<TradingAddress> mockTradingAddresses = new ArrayList<>();
        mockTradingAddresses.add(new TradingAddress());
        when(tradingAddressRepository.findAll()).thenReturn(mockTradingAddresses);

        List<TradingAddressDto> result = tradingAddressService.getAllTradingAddresses();

        assertNotNull(result);
        assertEquals(mockTradingAddresses.size(), result.size());
    }

    @Test
    void testGetTradingAddressById() {
        int id = 1;
        TradingAddress mockTradingAddress = new TradingAddress();
        when(tradingAddressRepository.findById(id)).thenReturn(Optional.of(mockTradingAddress));

        TradingAddressDto result = tradingAddressService.getTradingAddressById(id);

        assertNotNull(result);
    }

    @Test
    void testGetTradingAddressByIdNotFound() {
        int id = 1;
        when(tradingAddressRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NotFoundException.class, () -> tradingAddressService.getTradingAddressById(id));
    }

    @Test
    void testSaveTradingAddress() {
        TradingAddressDto tradingAddressDto = new TradingAddressDto();
        TradingAddress tradingAddress = TradingAddressMapper.convertDtoToEntity(tradingAddressDto);
        when(tradingAddressRepository.save(tradingAddress)).thenReturn(tradingAddress);

        TradingAddressDto result = tradingAddressService.saveTradingAddress(tradingAddressDto);

        assertNotNull(result);
    }
}
