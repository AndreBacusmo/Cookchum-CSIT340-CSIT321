// src/IngredientCrud.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

const IngredientCrud = () => {
    const [ingredients, setIngredients] = useState([]);
    const [ingredientId, setIngredientId] = useState(null);
    const [ingredientName, setIngredientName] = useState('');

    const apiUrl = 'http://localhost:8080/api/ingredients';

    useEffect(() => {
        fetchIngredients();
    }, []);

    const fetchIngredients = async () => {
        const response = await axios.get(`${apiUrl}/getAllIngredients`);
        setIngredients(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ingredientData = { name: ingredientName };

        if (ingredientId) {
            await axios.put(`${apiUrl}/updateIngredients/${ingredientId}`, ingredientData);
        } else {
            await axios.post(`${apiUrl}/postIngredients`, ingredientData);
        }

        resetForm();
        fetchIngredients();
    };

    const resetForm = () => {
        setIngredientId(null);
        setIngredientName('');
    };

    const handleEdit = (ingredient) => {
        setIngredientId(ingredient.ingredientId);
        setIngredientName(ingredient.name);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${apiUrl}/deleteIngredients/${id}`);
        fetchIngredients();
    };

    return (
        <div className="ingredient-crud">
            <h1>Ingredient Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingredient Name"
                    value={ingredientName}
                    onChange={(e) => setIngredientName(e.target.value)}
                    required
                />
                <button type="submit">{ingredientId ? 'Update' : 'Add'} Ingredient</button>
            </form>

            <h2>Ingredient List</h2>
            <ul className="ingredient-list">
                {ingredients.map((ingredient) => (
                    <li key={ingredient.ingredientId} className="ingredient-item">
                        <span className="ingredient-name">{ingredient.name}</span>
                        <div className="button-container">
                            <button onClick={() => handleEdit(ingredient)} className="edit">Edit</button>
                            <button onClick={() => handleDelete(ingredient.ingredientId)} className="delete">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientCrud;
