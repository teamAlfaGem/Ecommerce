package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Purchased;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchasedRepository extends JpaRepository<Purchased, Long> {
}
