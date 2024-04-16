package iss.nus.vttp.server.models;

import java.util.UUID;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import iss.nus.vttp.server.enums.OrderStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "packages")
public class Packages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long package_id;

    private String bouquet_order_id;

    private int final_price;

    private String sender_name;
    private String sender_number;

    private String recipient_name;
    private String recipient_number;

    private String delivery_address;
    private String occasion;

    private String message;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="order_id")
    private Order order;


    

    // package_id char(26) not null,
    // bouquet_order_id char(24) not null,
    // final_price int,

    // sender_name char not null,
    // sender_number char(8) not null, 

    // recipient_name char not null,
    // recipient_number char not null,
    // delivery_address varchar(128) not null,

    // occasion char,
    // message text,

    // order_id char(26) not null,

    
}
