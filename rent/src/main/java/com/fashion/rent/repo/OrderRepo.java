package com.fashion.rent.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fashion.rent.model.Orders;




public interface OrderRepo extends JpaRepository<Orders, Long> {
}