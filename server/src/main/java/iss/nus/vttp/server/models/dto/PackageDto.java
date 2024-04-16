package iss.nus.vttp.server.models.dto;

import lombok.Data;

@Data
public class PackageDto {

    private Long id;

    private String bouquet_order_id;

    private int finalPrice;

    private String senderName;
    private String senderNumber;

    private String recipientName;
    private String recipientNumber;

    private String deliveryAddress;
    private String occasion;

    private String message;

    private String userId;
    
}
