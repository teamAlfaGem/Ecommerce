package lk.phoneix.v1.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {


}
