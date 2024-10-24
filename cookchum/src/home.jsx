import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import './Home.css';

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleDescription, setVisibleDescription] = useState(null);

  const handleCategoryChange = (event, newCategories) => {
    setSelectedCategories(newCategories);
  };

  const showDescription = (recipe) => {
    setVisibleDescription(recipe);
  };

  const closeDescription = () => {
    setVisibleDescription(null);
  };

  return (
    <div className="container">
      <header className="header">
        <img src="/cookchum logo.png" alt="CookChum Logo" className="logo"/>
        <h1>CookChum</h1>
        <input type="text" placeholder="Search" className="search-bar" />
        <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
      </header>

      <div className="content">
        <div className="category-section">
          <h2>Categories</h2>
          <ToggleButtonGroup
            value={selectedCategories}
            onChange={handleCategoryChange}
            aria-label="Recipe Categories"
            className="toggle-group"
          >
            <ToggleButton value="Egg, Milk and Milk Products">Egg, Milk and Milk Products</ToggleButton>
            <ToggleButton value="Fruits">Fruits</ToggleButton>
            <ToggleButton value="Herbs and Spices">Herbs and Spices</ToggleButton>
            <ToggleButton value="Grain">Grain</ToggleButton>
            <ToggleButton value="Meat">Meat</ToggleButton>
            <ToggleButton value="Pasta">Pasta</ToggleButton>
            <ToggleButton value="Fish">Fish</ToggleButton>
            <ToggleButton value="Vegetables">Vegetables</ToggleButton>
            <ToggleButton value="Nuts">Nuts</ToggleButton>
            <ToggleButton value="Sweets">Sweets</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="recipes-section">
          <h2>Popular Recipes</h2>
          <div className="recipe-grid">
            <div className="recipe-card">
              <img src="https://www.chilesandsmoke.com/wp-content/uploads/2022/12/Smoked-Pork-Steaks_Featured-001.jpg" alt="Smoked Pork Steak" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('porkSteak')}>Show Description</button>
            </div>

            <div className="recipe-card">
              <img src="https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead.jpg" alt="Grilled Chicken" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('grilledChicken')}>Show Description</button>
            </div>

            <div className="recipe-card">
              <img src="https://www.allrecipes.com/thmb/dcJLnSZrqStUxwGsc87idivCylE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24712-ginger-veggie-stir-fry-DDMFS-4X3-3f25aaf303e04c849a71cc1e448dae6d.jpg" alt="Vegetable Stir-Fry" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('veggieStirFry')}>Show Description</button>
            </div>

            <div className="recipe-card">
              <img src="https://bakewithzoha.com/wp-content/uploads/2024/05/mango-float-featured.jpg" alt="Mango Float" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('mangoFloat')}>Show Description</button>
            </div>

            <div className="recipe-card">
              <img src="https://cicili.tv/wp-content/uploads/2021/09/Egg-Rolls2-scaled.jpeg" alt="Egg Rolls" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('eggRoll')}>Show Description</button>
            </div>

            <div className="recipe-card">
              <img src="https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg" alt="Pizza" className="recipe-img"/>
              <button className="description-button" onClick={() => showDescription('pizza')}>Show Description</button>
            </div>
          </div>

          {/* Description Modal */}
          {visibleDescription && (
            <div className="description-overlay">
              <div className="description-content">
                <button className="close-button" onClick={closeDescription}>×</button>
                {visibleDescription === 'porkSteak' && (
                  <div>
                    <img src="https://www.chilesandsmoke.com/wp-content/uploads/2022/12/Smoked-Pork-Steaks_Featured-001.jpg" alt="Smoked Pork Steak" className="description-img"/>
                    <h4>Smoked Pork Steak</h4>
                    <p>A succulent, medium-rare steak cooked to perfection with a seared crust and juicy center.</p>
                  </div>
                )}
                {visibleDescription === 'grilledChicken' && (
                  <div>
                    <img src="https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead.jpg" alt="Grilled Chicken" className="description-img"/>
                    <h4>Grilled Chicken</h4>
                    <p>A juicy grilled chicken recipe, seasoned with herbs and spices, offering a burst of flavors.</p>
                  </div>
                )}
                {visibleDescription === 'veggieStirFry' && (
                  <div>
                    <img src="https://www.allrecipes.com/thmb/dcJLnSZrqStUxwGsc87idivCylE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24712-ginger-veggie-stir-fry-DDMFS-4X3-3f25aaf303e04c849a71cc1e448dae6d.jpg" alt="Vegetable Stir-Fry" className="description-img"/>
                    <h4>Vegetable Stir-Fry</h4>
                    <p>A healthy, colorful vegetable stir-fry, packed with vibrant flavors and nutrients.</p>
                  </div>
                )}
                {visibleDescription === 'mangoFloat' && (
                  <div>
                    <img src="https://bakewithzoha.com/wp-content/uploads/2024/05/mango-float-featured.jpg" alt="Mango Float" className="description-img"/>
                    <h4>Mango Float</h4>
                    <p>Sweet and savory mango float, a perfect dessert for any occasion.</p>
                  </div>
                )}
                {visibleDescription === 'eggRoll' && (
                  <div>
                    <img src="https://cicili.tv/wp-content/uploads/2021/09/Egg-Rolls2-scaled.jpeg" alt="Egg Rolls" className="description-img"/>
                    <h4>Egg Rolls</h4>
                    <p>Crunchy on the outside, filled with flavorful ingredients inside, perfect for a quick snack.</p>
                  </div>
                )}
                {visibleDescription === 'pizza' && (
                  <div>
                    <img src="https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg" alt="Pizza" className="description-img"/>
                    <h4>Pizza</h4>
                    <p>Classic pizza with a crispy crust, topped with fresh ingredients and melted cheese.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
