package com.fashion.rent.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.fashion.rent.model.Product;



public interface ProductRepo extends JpaRepository<Product,Long>{

    
} 