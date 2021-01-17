package lk.phoneix.v1.demo.security.services.repos;



import lk.phoneix.v1.demo.models.Cart;

import java.util.List;

public interface CartServiceRepo {
    List<Cart> findAllCarts();

    Cart findCart(Long cartId);

    void deleteCart(Long cartId);

    void saveCart(Cart cart);

    void updateCart(Cart cart);
    public List<Cart> getCartByUserId(Long user_id);

}
