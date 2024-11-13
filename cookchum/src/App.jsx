import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MealType from './components/MealType';
import Login from './components/Login'; // Import Login component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;