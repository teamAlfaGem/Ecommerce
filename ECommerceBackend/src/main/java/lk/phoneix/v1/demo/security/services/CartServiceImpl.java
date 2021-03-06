package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Cart;
import lk.phoneix.v1.demo.payloads.request.UpdateCartRequest;
import lk.phoneix.v1.demo.repository.CartRepository;
import lk.phoneix.v1.demo.security.services.repos.CartServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Component
@Transactional
public class CartServiceImpl implements CartServiceRepo {

    @Autowired
    CartRepository cartRepository;

    @Override
    public List<Cart> findAllCarts() {
        List<Cart>carts=cartRepository.findAll();
        return carts;
    }

    @Override
    public Cart findCart(Long cartId) {
        Cart cart=cartRepository.findById(cartId).get();
        return cart;
    }

    @Override
    public void deleteCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }

    @Override
    public Cart saveCart(Cart cart) {
        Cart _cart=cartRepository.save(cart);
        return _cart;
    }

    @Override
    public Cart updateCart(UpdateCartRequest cart) {
        Cart _cart=cartRepository.findById(cart.getId()).get();
        _cart.setQty(cart.getQty());
        Cart newCart= cartRepository.save(_cart);
        return newCart;
    }

    @Override
    public List<Cart> getCartByUserId(Long user_id) {
        List<Cart>carts=cartRepository.getCartByUserId(user_id);
        return carts;
    }

    @Override
    public Cart getCartByUserIdandProductId(Long userId, Long productId) {
        return cartRepository.getCartByUserIdAndProductId(userId, productId);
    }


}
