package com.appdevproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.appdevproject.demo.entity.ingredientEntity;
import com.appdevproject.demo.service.ingredientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ingredients")
public class ingredientController {

    @Autowired
    private ingredientService ingredientService;
    
    @GetMapping("/print")
    public String print() {
    	return "Hello Friend!";
    }

    // Create a new ingredient
    @PostMapping("/postIngredients")
    public ingredientEntity createIngredient(@RequestBody ingredientEntity ingredient) {
        return ingredientService.saveIngredient(ingredient);
    }

    // Get all ingredients
    @GetMapping("/getAllIngredients")
    public List<ingredientEntity> getAllIngredients() {
        return ingredientService.getAllIngredients();
    }

    // Get ingredient by ID
    @GetMapping("/getIngredients/{id}")
    public ResponseEntity<ingredientEntity> getIngredientById(@PathVariable int id) {
        Optional<ingredientEntity> ingredient = ingredientService.getIngredientById(id);
        return ingredient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update an ingredient
    @PutMapping("/updateIngredients/{id}")
    public ResponseEntity<ingredientEntity> updateIngredient(@PathVariable int id, @RequestBody ingredientEntity ingredientDetails) {
        Optional<ingredientEntity> existingIngredient = ingredientService.getIngredientById(id);
        if (existingIngredient.isPresent()) {
            ingredientEntity ingredient = existingIngredient.get();
            ingredient.setName(ingredientDetails.getName());
            return ResponseEntity.ok(ingredientService.saveIngredient(ingredient));
        }
        return ResponseEntity.notFound().build();
    }

    // Delete an ingredient
    @DeleteMapping("/deleteIngredients/{id}")
    public ResponseEntity<Void> deleteIngredient(@PathVariable int id) {
        if (ingredientService.getIngredientById(id).isPresent()) {
            ingredientService.deleteIngredient(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
