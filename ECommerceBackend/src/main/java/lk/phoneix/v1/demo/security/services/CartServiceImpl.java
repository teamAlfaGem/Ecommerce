package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Cart;
import lk.phoneix.v1.demo.security.services.repos.CartServiceRepo;

import java.util.List;

public class CartServiceImpl implements CartServiceRepo {
    @Override
    public List<Cart> findAllCarts() {
        return null;
    }

    @Override
    public Cart findCart(Long CartId) {
        return null;
    }

    @Override
    public void deleteCart(Long CartId) {

    }

    @Override
    public void saveCart(Cart Cart) {

    }

    @Override
    public void updateCart(Cart Cart) {

    }
}
