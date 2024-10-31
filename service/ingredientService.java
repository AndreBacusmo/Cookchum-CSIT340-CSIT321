package com.appdevproject.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appdevproject.demo.entity.ingredientEntity;
import com.appdevproject.demo.repository.ingredientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ingredientService {

    @Autowired
    private ingredientRepository ingredientRepository;

    // Get all ingredients
    public List<ingredientEntity> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    // Get ingredient by ID
    public Optional<ingredientEntity> getIngredientById(int id) {
        return ingredientRepository.findById(id);
    }

    // Save or update an ingredient
    public ingredientEntity saveIngredient(ingredientEntity ingredient) {
        return ingredientRepository.save(ingredient);
    }

    // Delete an ingredient
    public void deleteIngredient(int id) {
        ingredientRepository.deleteById(id);
    }
}
