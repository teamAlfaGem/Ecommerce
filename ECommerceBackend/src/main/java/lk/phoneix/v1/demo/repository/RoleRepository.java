package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.ERole;
import lk.phoneix.v1.demo.models.Role;
import lk.phoneix.v1.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);

}
