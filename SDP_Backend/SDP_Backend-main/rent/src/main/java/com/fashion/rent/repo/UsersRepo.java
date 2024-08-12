package com.fashion.rent.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fashion.rent.model.Users;



public interface UsersRepo extends JpaRepository<Users,Long> {
    Users findByEmail(String email);
}
