package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.payloads.request.SaveProductRequest;
import lk.phoneix.v1.demo.payloads.response.SaveProductResponce;
import lk.phoneix.v1.demo.repository.ProductRepository;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.*;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductServiceRepo productServiceRepo;
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product>findAllProducts(){
        return productServiceRepo.findAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<Product>findProductByCategory(@PathVariable("category") String category){
        return productServiceRepo.findProductByCategory(category);
    }
    @GetMapping("/keyword/{keyword}")
    public List<Product>findProductByKeywords(@PathVariable("keyword") String keyword){
        return productServiceRepo.findProductByKeywords(keyword);
    }

    @PostMapping("/saveproduct")
    public SaveProductResponce saveProduct(@RequestParam("file") MultipartFile file,@RequestParam("pname") String pname,@RequestParam("brand") String brand,@RequestParam("category") String category,@RequestParam("price") double price,@RequestParam("description") String description,@RequestParam("imageName") String imageName,@RequestParam("uploadDir") String uploadDir,@RequestParam("keywords") String keyWords){
        Product product=new Product(pname,brand,category,price,description,imageName,uploadDir,keyWords);
        String productImageName=productServiceRepo.saveProduct(file,product);
        String imgDowloadUri= ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/product/getproduct/byimgname/")
                .path(productImageName)
                .toUriString();
        System.out.println(imgDowloadUri);
        Product productGet=productServiceRepo.getProductByName(pname);
        productGet.setUploadDir(imgDowloadUri);
        productRepository.save(productGet);
        return new SaveProductResponce(pname,brand,category,price,description,productImageName,uploadDir,keyWords,imgDowloadUri, file.getSize());

    }

//    @PostMapping("/saveproduct")
//    public SaveProductResponce saveProduct(@Valid @RequestBody SaveProductRequest productRequest){
//        Product product=new Product(productRequest.getPname(),productRequest.getBrand(),productRequest.getCategory(),productRequest.getPrice(),productRequest.getDescription(),productRequest.getImageName(),productRequest.getUploadDir(),productRequest.getKeyWords());
//        String productImageName=productServiceRepo.saveProduct(productRequest.getFile(),product);
//        String imgDowloadUri= ServletUriComponentsBuilder.fromCurrentContextPath()
//                .path("/api/product/getproduct/")
//                .path(productImageName)
//                .toUriString();
//        System.out.println(imgDowloadUri);
//        Product productGet=productServiceRepo.getProductByName(productRequest.getPname());
//        productGet.setUploadDir(imgDowloadUri);
//        productRepository.save(productGet);
//        return new SaveProductResponce(productRequest.getPname(),productRequest.getBrand(),productRequest.getCategory(),productRequest.getPrice(),productRequest.getDescription(),productImageName,productRequest.getUploadDir(),productRequest.getKeyWords(),imgDowloadUri, productRequest.getFile().getSize());
//
//    }


    @GetMapping("/getproduct/byimgname/{imagename}")
    public ResponseEntity<Resource> getProduct(@PathVariable("imagename") String imagename, HttpServletRequest request){
        String contentType=null;
        Resource resource=null;
        try {
            resource= productServiceRepo.loadFileAsResource(imagename);

            contentType=request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(contentType==null){
            contentType="application/octet-stream";
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+resource.getFilename()+"\"")
                .body(resource);

    }

    @GetMapping("getproduct/byid/{productId}")
    public Product findProduct(@PathVariable("productId") long productId){
        return productServiceRepo.findProduct(productId);
    }



}
