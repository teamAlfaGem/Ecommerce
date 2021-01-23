package lk.phoneix.v1.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int qty;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="userId", referencedColumnName="id")
    private User user;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="productId", referencedColumnName="id")
    private Product product;

    public Cart() {
    }

    public Cart(int qty, User user, Product product) {
        this.qty = qty;
        this.user = user;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
