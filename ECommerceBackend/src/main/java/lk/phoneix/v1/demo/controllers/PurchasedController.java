package lk.phoneix.v1.demo.controllers;

import lk.phoneix.v1.demo.models.*;
import lk.phoneix.v1.demo.payloads.request.PurchasedRequest;
import lk.phoneix.v1.demo.payloads.response.PurchasedResponse;
import lk.phoneix.v1.demo.security.services.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/purchased")
public class PurchasedController {

    @Autowired
    ProductServiceRepo productServiceRepo;
    @Autowired
    PurchasedServiceRepo purchasedServiceRepo;
    @Autowired
    UserServiceRepo userServiceRepo;
    @Autowired
    ProductOrdersServiceRepo productOrdersServiceRepo;
    @Autowired
    CartServiceRepo cartServiceRepo;

    @PostMapping("/savepirchased")
    public ResponseEntity<PurchasedResponse> savePurchased(@Valid @RequestBody PurchasedRequest purchasedRequest){
        try {
            User user = userServiceRepo.findById(purchasedRequest.getUserId());
            List<Cart> carts = cartServiceRepo.getCartByUserId(purchasedRequest.getUserId());
            Purchased purchased = new Purchased(purchasedRequest.getFirstName(), purchasedRequest.getLastName(), purchasedRequest.getEmail(), purchasedRequest.getAddress(), purchasedRequest.getCity(), purchasedRequest.getState(), purchasedRequest.getZip(), purchasedRequest.getCardName(), purchasedRequest.getCardNumber(), purchasedRequest.getExpDate(), purchasedRequest.getAmount(), purchasedRequest.getCvv(), user);
            Product_Orders productOrders = new Product_Orders();
            productOrders.setAmount(purchasedRequest.getAmount());
            productOrders.setPurchased(purchased);
            Purchased _purchased = purchasedServiceRepo.savePurchased(purchased);
            List<Long> productIds = purchasedRequest.getProductIds();
            PurchasedResponse purchasedResponse=new PurchasedResponse();
            for (long productId : productIds) {
                Product product = productServiceRepo.findProduct(productId);
                Cart cart = cartServiceRepo.getCartByUserIdandProductId(purchasedRequest.getUserId(), product.getId());
                cartServiceRepo.deleteCart(cart.getId());
                productOrders.setProduct(product);
                productOrders.setQty(cart.getQty());
                productOrdersServiceRepo.saveOrders(productOrders);
            }
            return new ResponseEntity<>(purchasedResponse,HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
