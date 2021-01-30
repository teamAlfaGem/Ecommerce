package lk.phoneix.v1.demo.security.services.repos;

import lk.phoneix.v1.demo.models.User;

public interface UserServiceRepo {

    public User findById(long id);
}
