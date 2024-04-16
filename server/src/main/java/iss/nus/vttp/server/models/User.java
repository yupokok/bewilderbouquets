package iss.nus.vttp.server.models;



import iss.nus.vttp.server.enums.UserRole;
import iss.nus.vttp.server.models.dto.UserDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String name;

    private UserRole role;


    public UserDto getUserDto() {
        UserDto userDto = new UserDto();
        userDto.setId(id);
        userDto.setName(name);
        userDto.setEmail(email);
        userDto.setRole(role);
        return userDto;
    }
}
    

