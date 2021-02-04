package lk.phoneix.v1.demo.security.services.repos;

import lk.phoneix.v1.demo.models.Purchased;
import java.util.*;

public interface PurchasedServiceRepo {
    List<Purchased> findAllPurchaseds();
    Purchased savePurchased(Purchased purchased);
    List<Purchased> getPurchasedByUserId(Long userId);
}
