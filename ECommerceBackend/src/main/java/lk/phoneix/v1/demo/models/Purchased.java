package lk.phoneix.v1.demo.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.util.*;

@Entity
public class Purchased {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    @NotBlank
    @Email
    private String email;
    private String address;
    private String city;
    private String state;
    private int zip;
    @Size(max = 255)
    private String cardName;
    @Size(max = 20)
    private String cardNumber;
    private Date expDate;
    private int amount;
    private int cvv;

    @ManyToOne
    @JoinColumn(name = "userId",referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy="purchased")
    private List<Product_Orders> productOrders=new ArrayList<>();


}
