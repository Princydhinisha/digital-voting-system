package com.example.digitalvote.controller;

import com.example.digitalvote.model.User;
import com.example.digitalvote.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;



import java.util.List;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    // Create user (Signup)
   @PostMapping("/add")
public ResponseEntity<?> addUser(@RequestBody User user) {
    try {
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    } catch (Exception e) {
        return ResponseEntity
                .status(409)
                .body("Email already exists");
    }
}
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user) {

    Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

    if (existingUser.isEmpty()) {
        return ResponseEntity.status(404).body("User not found");
    }

    User dbUser = existingUser.get();

    if (!dbUser.getPassword().equals(user.getPassword())) {
        return ResponseEntity.status(401).body("Invalid password");
    }

    return ResponseEntity.ok(dbUser);
}


    // Get all users (testing)
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}

