package com.businessservice.controller;

import com.businessservice.dto.BusinessProfileDto;
import com.businessservice.service.BusinessProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business/businessProfile")
public class BusinessProfileController {
    @Autowired
    private BusinessProfileService businessProfileService;

    @GetMapping
    public ResponseEntity<List<BusinessProfileDto>> getAllBusinessProfiles() {
        List<BusinessProfileDto> businessProfileDto = businessProfileService.getAllBusinessProfiles();
        return new ResponseEntity<>(businessProfileDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BusinessProfileDto> getBusinessProfileById(@PathVariable int id) {
        BusinessProfileDto businessProfileDto = businessProfileService.getBusinessProfileById(id);
        return new ResponseEntity<>(businessProfileDto, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<BusinessProfileDto> saveBusinessProfile(@RequestBody BusinessProfileDto businessProfileDto) {
        BusinessProfileDto savedBusinessProfileDto = businessProfileService.saveBusinessProfile(businessProfileDto);
        return new ResponseEntity<>(savedBusinessProfileDto, HttpStatus.CREATED);
    }

}
