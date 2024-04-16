package iss.nus.vttp.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import iss.nus.vttp.server.models.Packages;

@Repository
public interface PackagesRepo extends JpaRepository<Packages,Long>{

    // Optional<Packages> findByProductIandIdAndOrderId( Long bouquetOrderId, Long orderId, Long userId){

    }

    
    

