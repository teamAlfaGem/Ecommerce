package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.exception.FileStorageException;
import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.repository.ProductRepository;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Component
@Transactional
public class ProductServiceImpl implements ProductServiceRepo {

    public Path fileStorageLocation;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    public ProductServiceImpl(Product product){
        this.fileStorageLocation= Paths.get(product.getUploadDir()).toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (IOException e) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", e);
        }
    }

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
    public void saveProduct(MultipartFile file,Product product) {
        String originalFileName= StringUtils.cleanPath(file.getOriginalFilename());
        String fileName="";
        try {
            if (originalFileName.contains("..")) {
                throw new FileStorageException("Sorry File name contains invalid path sequence" + originalFileName);
            }
            String fileExtension="";
            try{
                fileExtension=originalFileName.substring(originalFileName.lastIndexOf("."));
            }catch (Exception e){
                fileExtension="";
            }
            fileName=product.getPname()+"_"+fileExtension;
            Path targetLocation=this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(),targetLocation, StandardCopyOption.REPLACE_EXISTING);

            Product productImg=productRepository.checkImageByProductName(product.getPname());

            if (productImg!=null){
                productImg.setImageName(fileName);
                productRepository.save(productImg);
            }else {
                Product newProduct=new Product();
                newProduct.setImageName(fileName);
                productRepository.save(newProduct);
            }
        }catch (IOException ex){
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
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
