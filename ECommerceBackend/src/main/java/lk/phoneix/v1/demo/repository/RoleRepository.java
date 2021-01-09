package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.ERole;
import lk.phoneix.v1.demo.models.Role;
import lk.phoneix.v1.demo.models.User;

import java.util.Optional;

public interface RoleRepository {
    Optional<Role> findByName(ERole name);

}
