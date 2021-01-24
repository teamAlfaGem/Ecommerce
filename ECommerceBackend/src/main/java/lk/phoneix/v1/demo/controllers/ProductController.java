package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.payloads.request.SaveProductRequest;
import lk.phoneix.v1.demo.payloads.response.SaveProductResponce;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductServiceRepo productServiceRepo;

//    @GetMapping
//    public List<Product>findAllProducts(){
//        return productServiceRepo.findAllProducts();
//    }
//
//    @GetMapping("/{category}")
//    public List<Product>findProductByCategory(@PathVariable("category") String category){
//        return productServiceRepo.findProductByCategory(category);
//    }
//    @GetMapping("/{keyword}")
//    public List<Product>findProductByKeywords(@PathVariable("keyword") String keyword){
//        return productServiceRepo.findProductByKeywords(keyword);
//    }

    @PostMapping("/saveproduct")
    public SaveProductResponce saveProduct(@RequestParam("file") MultipartFile file,@RequestParam("pname") String pname,@RequestParam("brand") String brand,@RequestParam("category") String category,@RequestParam("price") double price,@RequestParam("description") String description,@RequestParam("imageName") String imageName,@RequestParam("uploadDir") String uploadDir,@RequestParam("keywords") String keyWords){
        Product product=new Product(pname,brand,category,price,description,imageName,uploadDir,keyWords);
        String productImageName=productServiceRepo.saveProduct(file,product);
        String imgDowloadUri= ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/imagefile/")
                .path(productImageName)
                .toUriString();
        return new SaveProductResponce(pname,brand,category,price,description,productImageName,uploadDir,keyWords,imgDowloadUri, file.getSize());
    }

//    public List<Resource> getProducts(){
//
//    }
//    @GetMapping("getproduct")
//    public ResponseEntity<Resource> getProduct(@RequestParam("pname") String pname, HttpServletRequest request){
//        String fileName=productServiceRepo.getUploadFileName(pname);
//        Resource resource=null;
//        if(fileName != null && !fileName.isEmpty()){
//            try {
//                resource= productServiceRepo.loadFileAsResource(fileName);
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//            String contentType=null;
//
//        }
//
//    }



}
