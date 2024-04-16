package iss.nus.vttp.server.repositories;

import java.util.List;
import java.util.Optional;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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

    public List<BouquetOrder> getBouquetOrders() {
        return mongotemplate.findAll(Document.class, "bouquet_orders").stream().map(Utils::toBouquetOrder).toList();
    }

    public String saveCustomisedBouquet(Bouquet bouquet) {
        Document doc = mongotemplate.insert(Utils.toDocument(bouquet), "customised");
        System.out.printf("SAVING INTO MONGO", doc);
        return doc.getObjectId("_id").toHexString();
    }

    public String saveBouquetOrder(BouquetOrder bouquetOrder) {
        Document doc = mongotemplate.insert(Utils.toDocumentBO(bouquetOrder), "bouquet_orders");
        return doc.getObjectId("_id").toHexString();
    }

    public Optional<Bouquet> findBouquetById(String bouquetId) {
        Query query = new Query(Criteria.where("bouquetId").is(bouquetId));
        Bouquet bouquet = mongotemplate.findOne(query, Bouquet.class);
        return Optional.ofNullable(bouquet);
    }

    public String save(Bouquet bouquet) {
        Document doc = mongotemplate.insert(Utils.toDocument(bouquet), "bouquets");
        System.out.printf("SAVING INTO MONGO", doc);
        return doc.getObjectId("_id").toHexString();
    }

    public void deleteBouquetById(String bouquetId) {
        Query query = new Query(Criteria.where("bouquetId").is(bouquetId));
        mongotemplate.remove(query, Bouquet.class);

    }
}
