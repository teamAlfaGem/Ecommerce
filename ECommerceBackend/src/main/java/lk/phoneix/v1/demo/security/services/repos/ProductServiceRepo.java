package lk.phoneix.v1.demo.security.services.repos;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.payloads.request.SaveProductRequest;
import lk.phoneix.v1.demo.payloads.request.UpdateProductRequest;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

public interface ProductServiceRepo {

    List<Product>findAllProducts();

    Product findProduct(Long productId);

    void deleteProduct(Long productId);

    String saveProduct(MultipartFile file, Product product);

    Product updateProductQty(Product product);
    Product updateProduct(UpdateProductRequest product);

    List<Product>findProductByCategory(String category);
    List<Product>findProductByKeywords(String keyword);
    List<Product>findProductByProductName(String pname);
    public Resource loadFileAsResource(String fileName) throws Exception;
    public String getUploadFileName(String pname);
    List<Resource> loadFilesAsResources();
    Product getProductByName(String pname);

}
