package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Product_Orders;
import lk.phoneix.v1.demo.repository.ProductOrdersRepository;
import lk.phoneix.v1.demo.security.services.repos.ProductOrdersServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
@Transactional
public class ProductOrdersServiceImpl implements ProductOrdersServiceRepo {

    @Autowired
    ProductOrdersRepository productOrdersRepository;

    @Override
    public Product_Orders saveOrders(Product_Orders productOrders) {
        Product_Orders _proProductorders = productOrdersRepository.save(productOrders);
        return _proProductorders;
    }
}
