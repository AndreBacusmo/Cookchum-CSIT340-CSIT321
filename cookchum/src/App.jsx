import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MealType from './components/MealType';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <h2>What is your meal type</h2>
          <div className="meal-type-container">
            <MealType title="High Protein" image="path/to/high-protein.jpg" />
            <MealType title="Low Calorie" image="path/to/low-calorie.jpg" />
            <MealType title="High Often" image="path/to/high-often.jpg" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
