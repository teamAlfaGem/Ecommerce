package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


}
