package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Product_Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductOrdersRepository extends JpaRepository<Product_Orders, Long> {

}
