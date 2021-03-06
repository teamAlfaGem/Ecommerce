package lk.phoneix.v1.demo.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.*;
import javax.persistence.*;

@Component
@ConfigurationProperties(prefix = "file")
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String pname;
    private String brand;
    private String category;
    private double price;
    private int qty;
    private boolean isFeatured;
    private String description;
    private String imageName;
    private String uploadDir;
    private String keywords;

    @JsonManagedReference
    @OneToMany(mappedBy="product")
    private List<Cart> carts=new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy="product")
    private List<Product_Orders> productOrders=new ArrayList<>();


    public Product() {
    }


    public Product(String pname, String brand, String category, double price, int qty, boolean isFeatured, String description, String imageName, String uploadDir, String keywords) {
        this.pname = pname;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.qty = qty;
        this.isFeatured = isFeatured;
        this.description = description;
        this.imageName = imageName;
        this.uploadDir = uploadDir;
        this.keywords = keywords;
    }


    public Product(String pname, String brand, String category, double price, int qty, boolean isFeatured, String description, String imageName, String uploadDir, String keywords, List<Cart> carts, List<Product_Orders> productOrders) {
        this.pname = pname;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.qty = qty;
        this.isFeatured = isFeatured;
        this.description = description;
        this.imageName = imageName;
        this.uploadDir = uploadDir;
        this.keywords = keywords;
        this.carts = carts;
        this.productOrders = productOrders;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keyWords) {
        this.keywords = keywords;
    }

    public List<Cart> getCarts() {
        return carts;
    }

    public void setCarts(List<Cart> carts) {
        this.carts = carts;
    }

    public List<Product_Orders> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<Product_Orders> productOrders) {
        this.productOrders = productOrders;
    }

    public boolean isFeatured() {
        return isFeatured;
    }

    public void setFeatured(boolean featured) {
        isFeatured = featured;
    }
}
