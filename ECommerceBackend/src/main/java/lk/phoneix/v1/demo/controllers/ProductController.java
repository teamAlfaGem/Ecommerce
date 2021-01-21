package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.payloads.response.SaveProductResponce;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.*;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductServiceRepo productServiceRepo;

    @GetMapping
    public List<Product>findAllProducts(){
        return productServiceRepo.findAllProducts();
    }

    @GetMapping("/{category}")
    public List<Product>findProductByCategory(@PathVariable("category") String category){
        return productServiceRepo.findProductByCategory(category);
    }
    @GetMapping("/{keyword}")
    public List<Product>findProductByKeywords(@PathVariable("keyword") String keyword){
        return productServiceRepo.findProductByKeywords(keyword);
    }

    @PostMapping("/saveproduct")
    public SaveProductResponce saveProduct(@RequestParam("file")MultipartFile file,@RequestBody Product product){
        String productImageName=productServiceRepo.saveProduct(file,product);
        String imgDowloadUri= ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/imagefile/")
                .path(productImageName)
                .toUriString();
        return new SaveProductResponce(product.getPname(),product.getBrand(),product.getCategory(),product.getPrice(),product.getDescription(),productImageName,product.getUploadDir(),product.getKeyWords(),imgDowloadUri, file.getSize());
    }



}
