package lk.phoneix.v1.demo.security.services.repos;

import lk.phoneix.v1.demo.models.Product;
import java.util.*;

public interface ProductServiceRepo {

    List<Product>findAllProducts();

    Product findProduct(Long productId);

    void deleteProduct(Long productId);

    void saveProduct(Product product);

    void updateProduct(Product product);

    List<Product>findProductByCategory(String category);
    List<Product>findProductByKeyWords(String keyword);

}
