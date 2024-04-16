package iss.nus.vttp.server.models;

import java.util.List;

public class Bouquet {
    private String id;
    
    private String name;
    private String bouquetId;
    private String type;
    private List<String> mushrooms;
    private List<String> flowers;
    private String description;
    private int basePrice;
    private String image;
    private String wrap;

    

    

    public Bouquet(String name, String bouquetId, String type, List<String> mushrooms, List<String> flowers,
            String description, int basePrice, String image, String wrap) {
        this.name = name;
        this.bouquetId = bouquetId;
        this.type = type;
        this.mushrooms = mushrooms;
        this.flowers = flowers;
        this.description = description;
        this.basePrice = basePrice;
        this.image = image;
        this.wrap = wrap;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Bouquet() {
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBouquetId() {
        return bouquetId;
    }
    public void setBouquetId(String bouquetId) {
        this.bouquetId = bouquetId;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public List<String> getMushrooms() {
        return mushrooms;
    }
    public void setMushrooms(List<String> mushrooms) {
        this.mushrooms = mushrooms;
    }
    public List<String> getFlowers() {
        return flowers;
    }
    public void setFlowers(List<String> flowers) {
        this.flowers = flowers;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getBasePrice() {
        return basePrice;
    }
    public void setBasePrice(int basePrice) {
        this.basePrice = basePrice;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getWrap() {
        return wrap;
    }
    public void setWrap(String wrap) {
        this.wrap = wrap;
    }

}
