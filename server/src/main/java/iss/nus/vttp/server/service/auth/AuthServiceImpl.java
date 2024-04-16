package iss.nus.vttp.server.service.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.io.IOException;
import iss.nus.vttp.server.enums.UserRole;
import iss.nus.vttp.server.models.User;
import iss.nus.vttp.server.models.dto.SignUpRequest;
import iss.nus.vttp.server.models.dto.UserDto;
import iss.nus.vttp.server.repositories.OrderRepository;
import iss.nus.vttp.server.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostConstruct
    public void createAdminAccount() {
        User adminAccount = userRepository.findByRole(UserRole.ADMIN);
        if (null == adminAccount) {
            User user = new User();
            user.setEmail("admin@test.com");
            user.setName("admin");
            user.setRole(UserRole.ADMIN);
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(user);
        }
    }

    @Transactional
    public UserDto createUser(SignUpRequest signupRequest) throws Exception {
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(UserRole.CUSTOMER);
        User createdUser = userRepository.save(user);

        // Order order = new Order();
        // order.setAmount(0L);
        // order.setTotalAmount(0L);
        // order.setDiscount(0L);
        // order.setUser(user);
        // order.setStatus(OrderStatus.Pending);

        // orderRepository.save(order);
        UserDto createdUserDto = new UserDto();
        createdUserDto.setId(createdUser.getId());
        return createdUserDto;
    }


    public Boolean hasUserWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }

    @Override
    public UserDto getUserById(Long userId) {
        UserDto userDto = new UserDto();
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            userDto = optionalUser.get().getUserDto();
        }
        return userDto;
    }

    @Override
    public UserDto updateUser(UserDto userDto) throws IOException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }


    // @Override
    // public ResponseEntity<?> updatePasswordById(ChangePasswordDto changePasswordDto) {
    //     User user = null;
    //     try {
    //         Optional<User> userOptional = userRepository.findById(changePasswordDto.getId());
    //         if (userOptional.isPresent()) {
    //             user = userOptional.get();
    //             if (this.bCryptPasswordEncoder.matches(changePasswordDto.getOldPassword(), user.getPassword())) {
    //                 user.setPassword(bCryptPasswordEncoder.encode(changePasswordDto.getNewPassword()));
    //                 User updateUser = userRepository.save(user);
    //                 UserDto userDto = new UserDto();
    //                 userDto.setId(updateUser.getId());
    //                 return ResponseEntity.status(HttpStatus.OK).body(userDto);
    //             } else {
    //                 return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Old password is incorrect");
    //             }
    //         } else {
    //             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    //         }
    //     } catch (Exception e) {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
    //     }
    // }
    
}
