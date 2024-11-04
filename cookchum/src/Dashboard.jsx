import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, username } = location.state || {};

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                await axios.delete(`http://localhost:8080/api/supercook/${userId}`);
                alert('Your account has been deleted successfully.');
                navigate('/'); // Redirect to login page
            } catch (error) {
                console.error('Error deleting account:', error);
                alert('There was an error deleting your account. Please try again.');
            }
        }
    };

    const handleUpdateAccount = () => {
        navigate('/update', { state: { userId, username } }); // Navigate to the update account page
    };
    const handleSavedRecipe= () => {
        navigate('/FavoriteRecipe', { state: { userId, username } }); // Navigate to the update account page
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="user-info">
                    <h2>Welcome to the Dashboard</h2>
                    <p><strong>User ID:</strong> {userId || "N/A"}</p>
                    <p><strong>Username:</strong> {username || "N/A"}</p>
                    
                    {/* Delete and Update Buttons */}
                    <div className="user-actions">
                        <button className="action-button delete-button" onClick={handleDeleteAccount}>Delete Account</button>
                        <button className="action-button update-button" onClick={handleUpdateAccount}>Update Account</button>
                    </div>
                </div>
                <nav className="menu">
                    <ul>
                        <li>Smart Thermometer</li>
                        <li>Meal Planning</li>
                        <li>Recipes</li>
                        <li>Articles</li>
                        <li onClick={handleSavedRecipe}>Saved Recipes</li>
                        <li >More Tools</li>
                        <li>Download the App</li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h3>What are your favorite cuisines?</h3>
                <div className="cuisine-options">
                    <button>American</button>
                    <button>Kid-Friendly</button>
                    <button>Italian</button>
                    <button>Asian</button>
                    <button>Mexican</button>
                    <button>Southern & Soul Food</button>
                    <button>French</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
