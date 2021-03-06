package lk.phoneix.v1.demo.repository;

import lk.phoneix.v1.demo.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "select * from Product where category=?1",nativeQuery = true)
    public List<Product>getProductByCategory(String category);

    @Query(value = "select * from Product  where keywords like %?1%",nativeQuery = true)
    public List<Product>getProductByKeywords(String keyword);

    @Query(value = "select * from Product where pname=?1",nativeQuery = true)
    public List<Product> checkImageByProductName(String pname);

    @Query(value = "select * from Product where pname=?1",nativeQuery = true)
    public List<Product> getUploadProduct(String pname);

    @Query(value = "select imageName from Product where pname=?1",nativeQuery = true)
    public String getUploadFilePath(String pname);

    @Query("select a from Product a where a.pname = ?1")
    public Product getProductByPname(String pname);



}
