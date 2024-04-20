package com.businessservice.repository;

import com.businessservice.entity.BusinessProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessProfileRepository extends JpaRepository<BusinessProfile, Integer> {
}
