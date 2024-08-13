package com.fashion.rent.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fashion.rent.model.User;


public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}