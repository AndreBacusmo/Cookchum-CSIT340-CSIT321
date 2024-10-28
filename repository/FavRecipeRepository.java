package appdevproject.cookchum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import appdevproject.cookchum.entity.FavRecipeEntity;

@Repository
public interface FavRecipeRepository extends JpaRepository<FavRecipeEntity, Integer>{
	
	//this is user-defined method to search a student record by name
	public FavRecipeEntity findByUserId(int userId);


	
	//you may define more methods for searching, for instance, in this interface

}