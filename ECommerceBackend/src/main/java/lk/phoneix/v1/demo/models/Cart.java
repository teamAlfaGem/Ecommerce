package lk.phoneix.v1.demo.models;

import javax.persistence.*;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int qty;

    @ManyToOne
    @JoinColumn(name="userId", referencedColumnName="id")
    private User user;
    @ManyToOne
    @JoinColumn(name="productId", referencedColumnName="id")
    private Product product;



}
