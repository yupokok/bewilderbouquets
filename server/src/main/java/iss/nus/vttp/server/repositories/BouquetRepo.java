package iss.nus.vttp.server.repositories;

import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import iss.nus.vttp.server.Utils;
import iss.nus.vttp.server.models.Bouquet;
import iss.nus.vttp.server.models.BouquetOrder;


@Repository
public class BouquetRepo {

    @Autowired
    private MongoTemplate mongotemplate;
    @Autowired

    public List<Bouquet> getBouquets() {
        return mongotemplate.findAll(Document.class, "bouquets").stream().map(Utils::toBouquet).toList();
    }

    public String saveCustomisedBouquet(Bouquet bouquet) {
		Document doc = mongotemplate.insert(Utils.toDocument(bouquet), "customised");
        System.out.printf("SAVING INTO MONGO", doc);
		return doc.getObjectId("_id").toHexString();
	} 

    public String saveBouquetOrder(BouquetOrder bouquetOrder){
        Document doc = mongotemplate.insert(Utils.toDocumentBO(bouquetOrder), "bouquet_orders");
        return doc.getObjectId("_id").toHexString(); 
    }

}
