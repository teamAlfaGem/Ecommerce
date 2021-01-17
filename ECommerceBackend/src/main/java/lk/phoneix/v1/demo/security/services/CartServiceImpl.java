package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Cart;
import lk.phoneix.v1.demo.repository.CartRepository;
import lk.phoneix.v1.demo.security.services.repos.CartServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

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
        return null;
    }

    @Override
    public void deleteCart(Long cartId) {

    }

    @Override
    public void saveCart(Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public void updateCart(Cart cart) {

    }

    @Override
    public List<Cart> getCartByUserId(Long user_id) {
        List<Cart>carts=cartRepository.getCartByUserId(user_id);
        return carts;
    }
}
