package iss.nus.vttp.server.models.dto;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;

    private String password;
}
