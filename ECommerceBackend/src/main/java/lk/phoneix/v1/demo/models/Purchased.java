package lk.phoneix.v1.demo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "userId",referencedColumnName = "id")
    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy="purchased")
    private List<Product_Orders> productOrders=new ArrayList<>();

    public Purchased() {
    }

    public Purchased(String firstName, String lastName, @NotBlank @Email String email, String address, String city, String state, int zip, @Size(max = 255) String cardName, @Size(max = 20) String cardNumber, Date expDate, int amount, int cvv, User user, List<Product_Orders> productOrders) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expDate = expDate;
        this.amount = amount;
        this.cvv = cvv;
        this.user = user;
        this.productOrders = productOrders;
    }

    public Purchased(String firstName, String lastName, @NotBlank @Email String email, String address, String city, String state, int zip, @Size(max = 255) String cardName, @Size(max = 20) String cardNumber, Date expDate, int amount, int cvv, User user) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expDate = expDate;
        this.amount = amount;
        this.cvv = cvv;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product_Orders> getProductOrders() {
        return productOrders;
    }

    public void setProductOrders(List<Product_Orders> productOrders) {
        this.productOrders = productOrders;
    }
}
