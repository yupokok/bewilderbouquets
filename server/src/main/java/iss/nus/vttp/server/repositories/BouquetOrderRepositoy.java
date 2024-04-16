package iss.nus.vttp.server.repositories;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import iss.nus.vttp.server.models.BouquetOrder;

@Repository
public class BouquetOrderRepositoy {

    // bouquet_order_id char(8)
    // bouquet_id char(24) not null,
    // name char(128) not null,
    // size char(128),
    // wrap char(128)
    // final_price int,
    // image_url varchar(128),
    // primary key(bouquet_order_id)
    // )

    @Autowired
    private JdbcTemplate template;

    public static final String SQL_INSERT_BOUQUET_ORDER = """
            insert into bouquet_orders (bouquet_order_id, bouquet_id, name, size, wrap, final_price, image_url)
            	values (?,?,?,?,?,?,?)
            """;

    public String createBouquetOrder(BouquetOrder bouquetOrder) throws Exception {

    int orderRows = template.update(SQL_INSERT_BOUQUET_ORDER, bouquetOrder.getBouquetOrderId(), bouquetOrder.getBouquetId(), bouquetOrder.getName(),bouquetOrder.getSize(),bouquetOrder.getWrap(),
                                            bouquetOrder.getFinalPrice(), bouquetOrder.getImage());

        if (orderRows <= 0)
            throw new Exception("Order cannot be inserted");
        

            System.out.printf("Saving OrderSummary,,,", bouquetOrder.getBouquetOrderId());
            return bouquetOrder.getBouquetId();

    }

}
