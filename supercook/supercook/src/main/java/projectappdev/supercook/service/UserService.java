package projectappdev.supercook.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import projectappdev.supercook.Request.LoginRequest;
import projectappdev.supercook.entity.UserEntity;
import projectappdev.supercook.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;
    public UserEntity  addUser(UserEntity  user) {
        return userRepository.save(user);
    }

    public Boolean loginUser(LoginRequest loginRequest) {
        Optional<UserEntity> user = userRepository.findById(loginRequest.getUserId());
        UserEntity user1 = user.get();

        if(user1 == null){
            return false;
        }


        if(!user1.getPassword().equals(loginRequest.getPassword())){
            return false;
        }

        return true;

}
}