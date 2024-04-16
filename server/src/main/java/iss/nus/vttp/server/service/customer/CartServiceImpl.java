package iss.nus.vttp.server.service.customer;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import iss.nus.vttp.server.enums.OrderStatus;
import iss.nus.vttp.server.models.Order;
import iss.nus.vttp.server.models.Packages;
import iss.nus.vttp.server.models.dto.PackageDto;
import iss.nus.vttp.server.repositories.OrderRepository;
import iss.nus.vttp.server.repositories.PackagesRepo;
import iss.nus.vttp.server.repositories.UserRepository;

public class CartServiceImpl {
    
    @Autowired
    private OrderRepository orderRepo;
    
    @Autowired
    UserRepository userRepo;

    @Autowired
    PackagesRepo packageRepo;

    // public ResponseEntity<?> addPackageToCart(PackageDto addPackage){
    //     Order activeOrder = orderRepo.findUserIdAndStatus(addPackage.getUserId(),OrderStatus.PENDING);

    //     Optional<Packages> optionalPackages = packageRepo.findByProductIandIdAndOrderId(addPackage.getBouquet_order_id(), activeOrder.getId(), addPackage.getUserId());

    //     Optional<Bea>
    } 

