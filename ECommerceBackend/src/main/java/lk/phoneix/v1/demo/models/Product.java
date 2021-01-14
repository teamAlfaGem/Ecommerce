package lk.phoneix.v1.demo.models;

import java.util.*;
import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String brand;
    private String category;
    private double price;
    private String description;
    private String image;
    private String keyWords;

    @OneToMany(mappedBy="product")
    private List<Cart> carts=new ArrayList<>();

    @OneToMany(mappedBy="product")
    private List<Product_Orders> productOrders=new ArrayList<>();


    public Product() {
    }

    public Product(String name, String brand, String category, double price, String description, String image, String keyWords, List<Cart> carts, List<Product_Orders> productOrders) {
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.description = description;
        this.image = image;
        this.keyWords = keyWords;
        this.carts = carts;
        this.productOrders = productOrders;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getKeyWords() {
        return keyWords;
    }

    public void setKeyWords(String keyWords) {
        this.keyWords = keyWords;
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
}
