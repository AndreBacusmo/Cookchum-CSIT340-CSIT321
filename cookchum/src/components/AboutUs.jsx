// Importing necessary libraries
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AboutUs.css'; // Import the CSS file

// AboutUs Component
const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page in history
  };

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>Welcome to CookChum!</h2>
        <p><em>"Healthy and Fresh Grocery since 2024"</em></p>
        
        <p>
          At CookChum, we believe that health starts with the freshest ingredients. 
          We strive to bring you a curated selection of nutritious and delicious meal options that fit your lifestyle.
        </p>

        <h3>Mission</h3>
        <ul>
          <li>To promote healthy eating habits.</li>
          <li>To offer diverse meal options, catering to different dietary needs.</li>
          <li>To make grocery shopping convenient, affordable, and enjoyable.</li>
        </ul>

        <h3>Core Values</h3>
        <ul>
          <li><strong>Freshness:</strong> Delivering only the best ingredients.</li>
          <li><strong>Quality:</strong> Upholding the highest standards in all products.</li>
          <li><strong>Sustainability:</strong> Supporting local farmers and eco-friendly practices.</li>
          <li><strong>Customer-Centric:</strong> Your health and satisfaction are our priorities.</li>
        </ul>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Wide variety of meal types: High Protein, Low Calorie, Vegan, etc.</li>
          <li>Easy navigation and meal planning.</li>
          <li>Exceptional customer service and fast delivery.</li>
        </ul>

        {/* Return Button */}
        <button className="return-button" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default AboutUs;
