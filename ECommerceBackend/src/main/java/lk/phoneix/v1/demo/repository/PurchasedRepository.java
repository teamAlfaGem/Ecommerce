package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Purchased;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface PurchasedRepository extends JpaRepository<Purchased, Long> {
    @Query(value = "select * from Cart where user_id=?1",nativeQuery = true)
    public List<Purchased> getPurchasedByUserId(Long user_id);
}
