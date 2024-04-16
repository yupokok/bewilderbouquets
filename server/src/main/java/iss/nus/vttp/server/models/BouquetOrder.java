package iss.nus.vttp.server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "bouquet_orders")
public class BouquetOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String bouquetOrderId;
    private String bouquetId;
    private String name;
    private String image;
    private String wrap;
    private int finalPrice;
    private String size;

    

    public String getBouquetId() {
        return bouquetId;
    }
    public void setBouquetId(String bouquetId) {
        this.bouquetId = bouquetId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
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

    public String getBouquetOrderId() {
        return bouquetOrderId;
    }
    public void setBouquetOrderId(String bouquetOrderId) {
        this.bouquetOrderId = bouquetOrderId;
    }
    public int getFinalPrice() {
        return finalPrice;
    }
    public void setFinalPrice(int finalPrice) {
        this.finalPrice = finalPrice;
    }
    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }
    
}
