package projectappdev.supercook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import projectappdev.supercook.Request.LoginRequest;
import projectappdev.supercook.entity.UserEntity;
import projectappdev.supercook.repository.UserRepository;
import projectappdev.supercook.service.UserService;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public UserEntity addUser(@RequestBody UserEntity user) {
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest){
        return userService.loginUser(loginRequest);
    }
}
