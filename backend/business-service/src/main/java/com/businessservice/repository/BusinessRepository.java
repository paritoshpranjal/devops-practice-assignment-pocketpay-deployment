package com.businessservice.repository;

import com.businessservice.entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusinessRepository extends JpaRepository<Business, Integer> {
    List<Business> findByUserId(int userId);
}
