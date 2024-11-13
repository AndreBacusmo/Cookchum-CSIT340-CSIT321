import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import RegistrationForm from './RegistrationForm'; 
import UpdateAccount from './UpdateAccount'; // Import the UpdateAccount component
import FavoriteRecipesTab from './FavoriteTab';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/update" element={<UpdateAccount />} /> {/* Add this route */}
                <Route path="/FavoriteRecipe" element={<FavoriteRecipesTab/>}/>
            </Routes>
        </Router>
    );
}

export default App;
