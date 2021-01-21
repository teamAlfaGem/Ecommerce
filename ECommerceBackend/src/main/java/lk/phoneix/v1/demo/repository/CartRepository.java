package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    @Query(value = "select * from Cart where user_id=?1",nativeQuery = true)
    public List<Cart> getCartByUserId(Long user_id);

}
