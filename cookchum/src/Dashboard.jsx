import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, username } = location.state || {};

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes] = useState([
        { name: "Pasta", ingredients: ["Garlic", "Olive Oil", "Tomato"] },
        { name: "Garlic Bread", ingredients: ["Butter", "Garlic", "Bread"] },
        { name: "Omelette", ingredients: ["Egg", "Milk", "Salt"] },
        { name: "Stir-Fry Vegetables", ingredients: ["Carrot", "Bell Pepper", "Garlic"] },
    ]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const ingredientCategories = {
        "Pantry Essentials": ["Butter", "Egg", "Garlic", "Milk", "Onion", "Sugar", "Olive Oil"],
        "Vegetables & Greens": ["Garlic", "Onion", "Bell Pepper", "Carrot", "Scallion"],
    };

    // Handle ingredient click
    const handleIngredientClick = (ingredient) => {
        let updatedIngredients;
        if (selectedIngredients.includes(ingredient)) {
            // Deselect ingredient if it's already selected
            updatedIngredients = selectedIngredients.filter(i => i !== ingredient);
        } else {
            // Add ingredient to selected list
            updatedIngredients = [...selectedIngredients, ingredient];
        }
        setSelectedIngredients(updatedIngredients);

        // Update filtered recipes based on selected ingredients
        const matchedRecipes = recipes.filter(recipe =>
            updatedIngredients.every(selected => recipe.ingredients.includes(selected))
        );
        setFilteredRecipes(updatedIngredients.length > 0 ? matchedRecipes : []);
    };

    const handleSavedRecipe = () => {
        // Check if user is logged in
        if (!userId) {
            // If not logged in, prompt for login information
            const loginUsername = prompt("Enter your username:");
            const loginPassword = prompt("Enter your password:");
            // Here, you'd typically verify login credentials
            if (loginUsername && loginPassword) {
                alert("Login successful! Redirecting to favorited recipes...");
                navigate('/FavoriteRecipe', { state: { userId: loginUsername, username: loginUsername } });
            } else {
                alert("Login failed. Please try again.");
            }
        } else {
            // If logged in, navigate to favorited recipes
            navigate('/FavoriteRecipe', { state: { userId, username } });
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="search-bar">
                    <input type="text" placeholder="Add/remove/paste ingredients" />
                </div>
                <div className="ingredient-categories">
                    {Object.keys(ingredientCategories).map((category) => (
                        <div key={category} className="category">
                            <h4>{category}</h4>
                            <div className="ingredients-list">
                                {ingredientCategories[category].map((ingredient) => (
                                    <button 
                                        key={ingredient}
                                        onClick={() => handleIngredientClick(ingredient)}
                                        className={`ingredient-button ${selectedIngredients.includes(ingredient) ? 'selected' : ''}`}
                                    >
                                        {ingredient}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <nav className="menu">
                    <ul>
                        <li onClick={handleSavedRecipe}>Saved Recipes</li>
                        <li>More Tools</li>
                        <li>Download the App</li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h3>Recipes with Selected Ingredients</h3>
                {filteredRecipes.length > 0 ? (
                    <ul className="recipe-list">
                        {filteredRecipes.map((recipe, index) => (
                            <li key={index} className="recipe-item">
                                {recipe.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recipes match the selected ingredients.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
