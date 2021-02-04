package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Product_Orders;
import lk.phoneix.v1.demo.security.services.repos.ProductOrdersServiceRepo;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@Transactional
public class ProductOrdersServiceImpl implements ProductOrdersServiceRepo {
    @Override
    public Product_Orders saveOrders(Product_Orders productOrders) {
        return null;
    }
}
