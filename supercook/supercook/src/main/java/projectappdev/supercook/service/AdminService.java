package projectappdev.supercook.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import projectappdev.supercook.Request.AdminRequest;
import projectappdev.supercook.entity.AdminEntity;
import projectappdev.supercook.repository.AdminRepository;

@Service
public class AdminService {
    
    @Autowired
    AdminRepository userRepository;
    public AdminEntity  addUser(AdminEntity  user) {
        return userRepository.save(user);
    }

    public Boolean loginUser(AdminRequest loginRequest) {
        Optional<AdminEntity> user = userRepository.findById(loginRequest.getUserId());
        AdminEntity user1 = user.get();

        if(user1 == null){
            return false;
        }


        if(!user1.getPassword().equals(loginRequest.getPassword())){
            return false;
        }

        return true;

}
}