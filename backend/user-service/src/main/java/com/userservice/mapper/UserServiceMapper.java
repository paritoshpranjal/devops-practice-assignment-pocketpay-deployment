package com.userservice.mapper;

import com.userservice.dto.UserResponse;
import com.userservice.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceMapper {
    @Autowired
    private static ModelMapper modelMapper;
    private UserServiceMapper() {
    }
    static {
        modelMapper = new ModelMapper();
    }
    public static User convertDtoToEntity(UserResponse userDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(userDTO, User.class);
    }
    public static UserResponse convertEntityToDto(User user){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(user, UserResponse.class);
    }

}
