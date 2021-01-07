package lk.phoneix.v1.demo.models;

import javax.persistence.*;

@Entity
public class Product_Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int qty;
    private int amount;
    @ManyToOne
    @JoinColumn(name = "purchasedId",referencedColumnName="id")
    private Purchased purchased;

    @ManyToOne
    @JoinColumn(name="productId",referencedColumnName="id")
    private Product product;

    public Product_Orders() {
    }

    public Product_Orders(int qty, int amount, Purchased purchased, Product product) {
        this.qty = qty;
        this.amount = amount;
        this.purchased = purchased;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Purchased getPurchased() {
        return purchased;
    }

    public void setPurchased(Purchased purchased) {
        this.purchased = purchased;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
