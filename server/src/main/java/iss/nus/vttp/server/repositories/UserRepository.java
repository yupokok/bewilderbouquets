package iss.nus.vttp.server.repositories;




import iss.nus.vttp.server.enums.UserRole;
import iss.nus.vttp.server.models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);

    User findByRole(UserRole role);

    List<User> findAllByRole(UserRole role);


}