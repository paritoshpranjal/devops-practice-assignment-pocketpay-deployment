package com.businessservice.repository;

import com.businessservice.entity.TradingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingAddressRepository extends JpaRepository<TradingAddress, Integer> {
}
