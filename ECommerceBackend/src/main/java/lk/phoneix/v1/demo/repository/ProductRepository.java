package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from Product where category=?0",nativeQuery = true)
    public List<Product>getProductByCategory(String category);


}
