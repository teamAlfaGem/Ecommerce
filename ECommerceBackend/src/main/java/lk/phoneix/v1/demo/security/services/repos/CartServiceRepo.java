package lk.phoneix.v1.demo.security.services.repos;



import lk.phoneix.v1.demo.models.Cart;
import lk.phoneix.v1.demo.payloads.request.UpdateCartRequest;

import java.util.List;

public interface CartServiceRepo {
    List<Cart> findAllCarts();

    Cart findCart(Long cartId);

    void deleteCart(Long cartId);

    Cart saveCart(Cart cart);

    Cart updateCart(UpdateCartRequest cart);
    public List<Cart> getCartByUserId(Long user_id);

    public Cart getCartByUserIdandProductId(Long userId,Long productId);


}
