import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ goToHomepage }) {
  const [selectedMealType, setSelectedMealType] = useState('');
  const navigate = useNavigate();

  const handleMealTypeChange = (event) => {
    setSelectedMealType(event.target.value);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleSavedRecipe = () => {
    navigate('/FavoriteRecipe');
  };

  return (
    <aside className="sidebar">
      <div className="login-signup">
        <button onClick={handleSignInClick}>Sign in / Sign up</button>
      </div>
      <input type="text" placeholder="Search..." className="search-bar" />

      <section className="ingredients">
        <h3>Ingredients</h3>
        <div className="tags">
          {['Healthy', 'Sausage', 'Vegetarian', 'Bread', 'Kid foods', 'Vitamins', 'Snacks', 'Tiffin', 'Meat', 'Lunch', 'Dinner'].map((item, index) => (
            <button key={index} className="tag">{item}</button>
          ))}
        </div>
      </section>

      <section className="rating">
        <h3>Rating</h3>
        {/* Render rating options */}
      </section>

      <section className="meal-type">
        <h3>Meal Type</h3>
        <div className="meal-type-options">
          <label className="radio-option">
            <input
              type="radio"
              value="High Calorie"
              checked={selectedMealType === 'High Calorie'}
              onChange={handleMealTypeChange}
            />
            High Calorie
          </label>
          <label className="radio-option">
            <input
              type="radio"
              value="Low Calorie"
              checked={selectedMealType === 'Low Calorie'}
              onChange={handleMealTypeChange}
            />
            Low Calorie
          </label>
          <label className="radio-option">
            <input
              type="radio"
              value="High Protein"
              checked={selectedMealType === 'High Protein'}
              onChange={handleMealTypeChange}
            />
            High Protein
          </label>
          <label className="radio-option">
            <input
              type="radio"
              value="Low Carbs"
              checked={selectedMealType === 'Low Carbs'}
              onChange={handleMealTypeChange}
            />
            Low Carbs
          </label>
        </div>
      </section>

      <button onClick={handleSavedRecipe} className="homepage-button">
        Favorite Recipe
      </button>
    </aside>
  );
}

export default Sidebar;
