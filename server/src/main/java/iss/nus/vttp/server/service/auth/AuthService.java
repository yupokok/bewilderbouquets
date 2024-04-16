package iss.nus.vttp.server.service.auth;

import org.springframework.http.ResponseEntity;

import io.jsonwebtoken.io.IOException;
import iss.nus.vttp.server.models.dto.SignUpRequest;
import iss.nus.vttp.server.models.dto.UserDto;

public interface AuthService {

    Boolean hasUserWithEmail(String email);
    UserDto createUser(SignUpRequest signupRequest) throws Exception;


    UserDto getUserById(Long userId);

    UserDto updateUser(UserDto userDto) throws IOException;

//    ResponseEntity<?> updatePasswordById(ChangePasswordDto changePasswordDto);
    
}
