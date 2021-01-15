package lk.phoneix.v1.demo.security.services.repos;



import lk.phoneix.v1.demo.models.Cart;

import java.util.List;

public interface CartServiceRepo {
    List<Cart> findAllCarts();

    Cart findCart(Long CartId);

    void deleteCart(Long CartId);

    void saveCart(Cart Cart);

    void updateCart(Cart Cart);
}
