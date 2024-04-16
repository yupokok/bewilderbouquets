package iss.nus.vttp.server;

import org.bson.Document;

import iss.nus.vttp.server.models.Bouquet;
import iss.nus.vttp.server.models.BouquetOrder;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;

public class Utils {

    public static Bouquet toBouquet(Document doc) {
    Bouquet bouquet = new Bouquet();
    bouquet.setId(doc.getObjectId("_id").toHexString());
    bouquet.setName(doc.getString("name"));
    bouquet.setBouquetId(doc.getString("bouquetId"));
    bouquet.setBasePrice(doc.getInteger("basePrice"));
    bouquet.setDescription(doc.getString("description"));
    bouquet.setImage(doc.getString("image"));
    bouquet.setType(doc.getString("type"));
    bouquet.setFlowers(doc.getList("flowers", String.class));
    bouquet.setMushrooms(doc.getList("mushrooms", String.class));
    bouquet.setWrap(doc.getString("wrap"));

    return bouquet;
  }

  public static JsonObject toJson(Bouquet bouquet) {

    JsonArrayBuilder flowersAB = Json.createArrayBuilder(bouquet.getFlowers());
    JsonArrayBuilder mushroomsAB = Json.createArrayBuilder(bouquet.getMushrooms());

    return Json.createObjectBuilder()
      .add("id", bouquet.getId())
      .add("bouquetId", bouquet.getBouquetId())
      .add("name", bouquet.getName())
      .add("type", bouquet.getType())
      .add("basePrice", bouquet.getBasePrice())
      .add("description", bouquet.getDescription())
      .add("flowers", flowersAB)
      .add("mushrooms", mushroomsAB)
      .add("wrap", bouquet.getWrap())
      .add("image", bouquet.getImage())
      .build();
  }

  public static Document toDocument(Bouquet bouquet) {
    Document doc = new Document();
    
     doc.put("bouquetId", bouquet.getBouquetId());
     doc.put("name", bouquet.getName());
     doc.put("type", bouquet.getType());
     doc.put("basePrice", bouquet.getBasePrice());
     doc.put("description", bouquet.getDescription());
     doc.put("flowers", bouquet.getFlowers());
     doc.put("mushrooms", bouquet.getMushrooms());
     doc.put("wrap", bouquet.getWrap());
     doc.put("image", bouquet.getImage());
    return doc;
}

public static Document toDocumentBO(BouquetOrder bouquetOrder) {
    Document doc = new Document();
     doc.put("bouquetId", bouquetOrder.getBouquetId());
     doc.put("name", bouquetOrder.getName());
     doc.put("image", bouquetOrder.getImage());
     doc.put("wrap", bouquetOrder.getWrap());
     doc.put("size", bouquetOrder.getSize());
     doc.put("finalPrice", bouquetOrder.getFinalPrice());
    return doc;
}

public static BouquetOrder toBouquetOrder(Document doc) {
  BouquetOrder bouquetOrder = new BouquetOrder();
  bouquetOrder.setBouquetOrderId(doc.getObjectId("_id").toHexString());
  bouquetOrder.setName(doc.getString("name"));
  bouquetOrder.setBouquetId(doc.getString("bouquetId"));
  bouquetOrder.setImage(doc.getString("image"));
  bouquetOrder.setSize(doc.getString("size"));
  bouquetOrder.setWrap(doc.getString("wrap"));

  return bouquetOrder;
}
}
