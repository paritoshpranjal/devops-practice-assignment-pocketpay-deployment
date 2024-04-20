package com.businessservice.controller;

import com.businessservice.dto.BusinessDto;
import com.businessservice.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @GetMapping
    public ResponseEntity<List<BusinessDto>> getBusinessByUserId(@RequestHeader("user_id") Integer userId) {
        List<BusinessDto> businessDto = businessService.getBusinessByUserId(userId);
        return new ResponseEntity<>(businessDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BusinessDto> getBusinessById(@PathVariable int id) {
        BusinessDto businessDto = businessService.getSingleBusiness(id);
        return new ResponseEntity<>(businessDto, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<BusinessDto> saveBusiness(@RequestBody BusinessDto businessDto) {
        BusinessDto savedBusinessDto = businessService.saveBusiness(businessDto);
        return new ResponseEntity<>(savedBusinessDto, HttpStatus.CREATED);
    }

}
