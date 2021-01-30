package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.exception.FileStorageException;
import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.payloads.request.SaveProductRequest;
import lk.phoneix.v1.demo.repository.ProductRepository;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
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
        Product product=productRepository.findById(productId).get();
        return product;
    }

    @Override
    public void deleteProduct(Long productId) {

    }

    @Override
    public String saveProduct(MultipartFile file, Product product) {

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
            fileName=product.getPname()+"_"+product.getBrand()+"_"+product.getCategory()+"_"+fileExtension;
            Path targetLocation=this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(),targetLocation, StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Got image to save");
            List<Product> products=productRepository.checkImageByProductName(product.getPname());
            System.out.println("working");
            product.setImageName(fileName);
            productRepository.save(product);
            return fileName;
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

    @Override
    public List<Product> findProductByProductName(String pname)  {
        List<Product>products=productRepository.getUploadProduct(pname);
        return products;
    }

    @Override
    public Resource loadFileAsResource(String fileName) throws Exception{
        try {
            Path filePath=this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource=new UrlResource(filePath.toUri());
            if(resource.exists()){
                return resource;
            }else {
                throw new FileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new FileNotFoundException("File not found " + fileName);
        }
    }

    @Override
    public String getUploadFileName(String pname) {
        return productRepository.getUploadFilePath(pname);
    }

    @Override
    public List<Resource> loadFilesAsResources() {
        return null;
    }

    @Override
    public Product getProductByName(String pname) {
        return productRepository.getProductByPname(pname);
    }

}
