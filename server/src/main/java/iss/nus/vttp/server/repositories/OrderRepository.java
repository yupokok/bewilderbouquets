package iss.nus.vttp.server.repositories;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import iss.nus.vttp.server.enums.OrderStatus;
import iss.nus.vttp.server.models.Order;
import iss.nus.vttp.server.models.dto.PackageDto;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long>{



  // Order findUserIdAndStatus(Long userId, OrderStatus orderStatus){}

    public static final String SQL_INSERT_ORDER = """
      insert into orders(order_id, name, date, email) values(?,?,?,?)
      """;

    public static final String SQL_INSERT_PACKAGE = """
      insert into packages(package_id, bouquet_order_id, final_price, sender_name, sender_number, recipient_name, recipient_nuber, delivery_address, occasion, message, order_id) values(?,?,?,?,?)
      """;

      // public static String createPackage(PackageDto order) throws Exception {

      //   // String packageId = UUID.randomUUID().toString().substring(0, 8);
      //   // String bouquetOrderId = bouquet.createPizza(order.getSize(), order.isThickCrust(), order.getSauce(),
      //   //     order.getToppings(), order.getComments());
      //   // int orderRows = SQLtemplate.update(SQL_INSERT_ORDER_SUMMARY, orderId, order.getName(), order.getEmail(),
      //   //     pizzaId);
    
      //   if (orderRows <= 0)
      //     throw new Exception("Order cannot be inserted");
      //   System.out.printf("Saving OrderSummary,,,", orderId);
    
      //   return orderId;
      // }


      

    
    
}
