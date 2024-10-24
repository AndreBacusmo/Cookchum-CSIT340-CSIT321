package projectappdev.supercook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import projectappdev.supercook.Request.AdminRequest;
import projectappdev.supercook.entity.AdminEntity;
import projectappdev.supercook.service.AdminService;

@RestController
public class AdminController {

    @Autowired
    AdminService userService;

    @PostMapping("/addUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public AdminEntity addUser(@RequestBody AdminEntity user) {
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody AdminRequest loginRequest){
        return userService.loginUser(loginRequest);
    }
}
