package com.fashion.rent.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fashion.rent.model.Orders;
import com.fashion.rent.model.Product;
import com.fashion.rent.model.Users;
import com.fashion.rent.repo.OrderRepo;
import com.fashion.rent.repo.ProductRepo;
import com.fashion.rent.repo.UsersRepo;


@Service
public class OrderService {
    @Autowired
    private UsersRepo ur;

    @Autowired
    private ProductRepo pr;

    @Autowired
    private OrderRepo or;
     public Orders createOrder(Long userId, Long productId, String userAddress, String payMethod) {
        Users user = ur.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Product product = pr.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Orders order = new Orders();
        order.setUser(user);
        order.setProduct(product);
        order.setUserAddress(userAddress);
        order.setPayMethod(payMethod);
        order.setOrderConfirmed(false); // Default value for new orders

        return or.save(order);
    }
}


