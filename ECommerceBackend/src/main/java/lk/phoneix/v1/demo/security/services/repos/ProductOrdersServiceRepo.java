package lk.phoneix.v1.demo.security.services.repos;


import lk.phoneix.v1.demo.models.Product_Orders;

public interface ProductOrdersServiceRepo {
    Product_Orders saveOrders(Product_Orders productOrders);
}
