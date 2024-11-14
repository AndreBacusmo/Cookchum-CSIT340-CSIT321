import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MealType from './components/MealType';
import Login from './components/Login'; // Import Login component
import './App.css';
import Register from './components/Register';
import Footer from './components/footer';
import AboutUs from './components/AboutUs';
import FavoriteRecipesTab from './components/FavoriteTab'


function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <div>
          <Routes>
            <Route path="/" element={
              <main className="main-content">
                <h2>What is your meal type</h2>
                <div className="meal-type-container">
                  <MealType title="High Protein" image="/images/high-protein.jpg" />
                  <MealType title="Low Calorie" image="/images/low-calorie.jpg" />
                  <MealType title="High Often" image="/images/high-often.jpg" />
                </div>
                <Sidebar />
              </main>
            } />
            <Route path="/login" element={<Login />} />  {/* Login route */}
            <Route path="/register" element={<Register />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/FavoriteRecipe" element={<FavoriteRecipesTab/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;