package iss.nus.vttp.server.models.dto;

import lombok.Data;


import iss.nus.vttp.server.enums.UserRole;

@Data
public class UserDto {

    private Long id;

    private String email;

    private String name;

    private UserRole role;


}
