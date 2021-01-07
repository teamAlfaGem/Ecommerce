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


}
