package com.rollnumber.sdp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rollnumber.sdp.model.Users;
import com.rollnumber.sdp.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;

    public List<Users> getUsers() {
        return urepo.findAll();
        // urepo.findAll() -> select * from Users;
    }

    public Users addUsers(Users user) {
        return urepo.save(user);
    }

    public String deleteUser(Long uid) {
        urepo.deleteById(uid);
        return "User Deleted " + uid;
    }
}