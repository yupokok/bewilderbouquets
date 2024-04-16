package iss.nus.vttp.server.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class OrderRepository {

    @Autowired
    private JdbcTemplate template;

    public static final String SQL_INSERT_ORDER = """
      insert into orders(order_id, name, date, email) values(?,?,?,?)
      """;

    public static final String SQL_INSERT_PACKAGE = """
      insert into packages(package_id, bouquet_order_id, final_price, sender_name, sender_number, recipient_name, recipient_nuber, delivery_address, occasion, message, order_id) values(?,?,?,?,?)
      """;


      

    
    
}
