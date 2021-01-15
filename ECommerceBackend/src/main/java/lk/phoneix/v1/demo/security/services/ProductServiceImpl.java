package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.repository.ProductRepository;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
@Transactional
public class ProductServiceImpl implements ProductServiceRepo {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAllProducts() {
        List<Product>products=productRepository.findAll();
        return products;
    }

    @Override
    public Product findProduct(Long productId) {
        return null;
    }

    @Override
    public void deleteProduct(Long productId) {

    }

    @Override
    public void saveProduct(Product product) {

    }

    @Override
    public void updateProduct(Product product) {

    }

    @Override
    public List<Product> findProductByCategory(String category) {
        List<Product>products=productRepository.getProductByCategory(category);
        return products;
    }

    @Override
    public List<Product> findProductByKeywords(String keyword) {
        List<Product>products=productRepository.getProductByKeywords(keyword);
        return products;
    }

}
