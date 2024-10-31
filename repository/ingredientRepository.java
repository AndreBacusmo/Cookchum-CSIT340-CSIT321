package com.appdevproject.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.appdevproject.demo.entity.ingredientEntity;

@Repository
public interface ingredientRepository extends JpaRepository<ingredientEntity, Integer> {
    // Additional custom queries can be defined here if needed
}
