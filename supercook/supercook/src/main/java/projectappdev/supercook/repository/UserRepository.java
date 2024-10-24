package projectappdev.supercook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projectappdev.supercook.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    
    // User-defined method to search for a student by name
    public UserEntity findByUsername(String username);
}