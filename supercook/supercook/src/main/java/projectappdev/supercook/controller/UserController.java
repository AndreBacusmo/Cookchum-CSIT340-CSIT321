package projectappdev.supercook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import projectappdev.supercook.entity.UserEntity;
import projectappdev.supercook.service.UserService;

import java.util.List;

@RestController
@RequestMapping(method = RequestMethod.GET,path="/api/supercook")
public class UserController {

    @Autowired
    UserService userservice;

    @GetMapping("/print")
    public String print() {
        return "Hello, Firstname Lastname";
    }

    // Create (Post) a new student record
    @PostMapping("/postuserrecord")
    public UserEntity postUserRecord(@RequestBody UserEntity user) {
        return userservice.postUserRecord(user);
    }
  
    // Read (Get) all student records
    @GetMapping("/getAllUsers")
    public List <UserEntity> getAllUsers() {
        return userservice.getAllUsers();
    }

    // UPDATE admin
    @PutMapping("/{id}")
    public UserEntity updateUser(@PathVariable int id, @RequestBody UserEntity updatedUser) {
        return userservice.updateUserDetails(updatedUser, id);
    }

    // DELETE request to delete an admin by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userservice.deleteUser(id);
    }
}