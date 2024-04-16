package iss.nus.vttp.server.service;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import iss.nus.vttp.server.models.Bouquet;
import iss.nus.vttp.server.models.BouquetOrder;
import iss.nus.vttp.server.repositories.BouquetRepo;

@Service
public class BouquetService {

    @Autowired
    private BouquetRepo bouquetRepo;

    public List<Bouquet> getBouquets() {
    return bouquetRepo.getBouquets();
  }


  public List<Bouquet> getBouquetORders() {
    return bouquetRepo.getBouquets();
  }
    public String createCustomBouquet(Bouquet bouquet){
        String id = bouquetRepo.saveCustomisedBouquet(bouquet);
        System.out.printf("Saving custom bouquet...", id);
        return id;
    }

    public String createBouquetOrder(BouquetOrder bouquetOrder){
      String id = bouquetRepo.saveBouquetOrder(bouquetOrder);
      System.out.printf("Saving bouquet order...", id);
      return id;
    }

    public String updateBouquet(String bouquetId, Bouquet updatedBouquet) {
      Bouquet existingBouquet = bouquetRepo.findBouquetById(bouquetId).orElse(null);
      if (existingBouquet != null) {
          existingBouquet.setName(updatedBouquet.getName());
          existingBouquet.setDescription(updatedBouquet.getDescription());
          // Update other fields as needed
          return bouquetRepo.save(existingBouquet);
      } else {
          // Handle case where bouquet with given ID is not found
          return null;
      }
  }

  public void deleteBouquet(String bouquetId){
     bouquetRepo.deleteBouquetById(bouquetId);
  }
    
}
