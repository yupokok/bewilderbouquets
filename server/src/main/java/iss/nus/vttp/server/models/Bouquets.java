package iss.nus.vttp.server.models;

public class Bouquets {
    private String name;
    private String bouquetId;
    private String type;
    private String[] mushrooms;
    private String[] flowers;
    private String description;
    private int basePrice;
    private String image;
    private String wrap;

    

    

    public Bouquets(String name, String bouquetId, String type, String[] mushrooms, String[] flowers,
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
    public String[] getMushrooms() {
        return mushrooms;
    }
    public void setMushrooms(String[] mushrooms) {
        this.mushrooms = mushrooms;
    }
    public String[] getFlowers() {
        return flowers;
    }
    public void setFlowers(String[] flowers) {
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
