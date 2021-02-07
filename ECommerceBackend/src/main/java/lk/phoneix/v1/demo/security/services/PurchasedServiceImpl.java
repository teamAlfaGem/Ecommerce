package lk.phoneix.v1.demo.security.services;

import lk.phoneix.v1.demo.models.Purchased;
import lk.phoneix.v1.demo.repository.PurchasedRepository;
import lk.phoneix.v1.demo.security.services.repos.PurchasedServiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
@Component
@Transactional
public class PurchasedServiceImpl implements PurchasedServiceRepo {

    @Autowired
    PurchasedRepository purchasedRepository;

    @Override
    public List<Purchased> findAllPurchaseds() {
        return null;
    }

    @Override
    public Purchased savePurchased(Purchased purchased) {
        Purchased _purchased=purchasedRepository.save(purchased);
        return _purchased;
    }

    @Override
    public List<Purchased> getPurchasedByUserId(Long userId) {
        List<Purchased> purchaseds=purchasedRepository.getPurchasedByUserId(userId);
        return purchaseds;
    }
}
