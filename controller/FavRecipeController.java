package appdevproject.cookchum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import appdevproject.cookchum.entity.FavRecipeEntity;
import appdevproject.cookchum.service.FavRecipeService;
@RestController
@RequestMapping("/api/favRecipes")
public class FavRecipeController {

	@Autowired
		FavRecipeService fserv;
		
		
		//Create of CRUD
		@PostMapping("/postFavRecipe")
		public FavRecipeEntity postFavRecipeRecord(@RequestBody FavRecipeEntity recipe) {
			return fserv.postFavRecipeRecord(recipe);
		}
		
		//Read of CRUD
		@GetMapping("/getFavRecipe")
		public List<FavRecipeEntity> getFavRecipeRecord(){
			System.out.println("getAllStudents method was called");
			return fserv.getFavRecipeRecord();
		}
		//Update of CRUD
		@PutMapping("/putFavRecipe")
		public FavRecipeEntity putFavRecipeDetails(@RequestParam int id,@RequestBody FavRecipeEntity newFavRecipe){
			return fserv.putFavRecipeDetails(id, newFavRecipe);
		}
		//Delete of CRUD
		@DeleteMapping("/deleteFavRecipe/{id}")
		public String deteleFavRecipe(@PathVariable int id) {
			return fserv.deteleFavRecipe(id);
		}
	
}
