package lk.phoneix.v1.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;

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
}
