package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.Cart;
import lk.phoneix.v1.demo.models.Product;
import lk.phoneix.v1.demo.models.User;
import lk.phoneix.v1.demo.payloads.request.SaveCartRequest;
import lk.phoneix.v1.demo.payloads.response.CartResponse;
import lk.phoneix.v1.demo.security.services.repos.CartServiceRepo;
import lk.phoneix.v1.demo.security.services.repos.ProductServiceRepo;
import lk.phoneix.v1.demo.security.services.repos.UserServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartServiceRepo cartServiceRepo;
    @Autowired
    UserServiceRepo userServiceRepo;
    @Autowired
    ProductServiceRepo productServiceRepo;

    @PostMapping("/savecart")
    public ResponseEntity<Cart> saveCart(@Valid @RequestBody SaveCartRequest saveCartRequest){
        try {
            Product product = productServiceRepo.findProduct(saveCartRequest.getProductId());
            User user = userServiceRepo.findById(saveCartRequest.getUserId());
            Cart cart = new Cart(saveCartRequest.getQty(), user, product);
            Cart _cart = cartServiceRepo.saveCart(cart);
            return new ResponseEntity<>(_cart, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Cart> findAllCarts(){
        return cartServiceRepo.findAllCarts();
    }

    @GetMapping("/getcart/{userId}")
    public List<CartResponse> findCartsByUser(@PathVariable("userId") long userId){
        List<Cart>carts= cartServiceRepo.getCartByUserId(userId);
        List<CartResponse> cartResponses=new ArrayList<>();
        for (Cart cart:carts) {
            CartResponse cartResponse=new CartResponse(cart.getId(), cart.getQty(),cart.getUser().getId(),cart.getProduct().getId());
            cartResponses.add(cartResponse);
        }
        return cartResponses;
    }

}
