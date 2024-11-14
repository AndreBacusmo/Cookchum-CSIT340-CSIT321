import React from 'react';
import './MealType.css';

function MealType({ title, image }) {
  return (
    <div className="meal-type">
      <img src="src\images\image2.png" alt={title} className="meal-image" />
      <h3>{title}</h3>
    </div>
  );
}

export default MealType;
