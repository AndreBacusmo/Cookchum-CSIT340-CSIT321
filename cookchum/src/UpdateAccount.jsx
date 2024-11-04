import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UpdateAccount.css'
import axios from 'axios';

const UpdateAccount = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, username, email } = location.state || {};

    // State for user input
    const [newUsername, setNewUsername] = useState(username || '');
    const [newEmail, setNewEmail] = useState(email || '');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handle the update request
    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const updatedUserData = {
            username: newUsername,
            email: newEmail,
            password: newPassword, // Send new password only if user wants to change it
        };
    
        try {
            const response = await axios.put(`http://localhost:8080/api/supercook/${userId}`, updatedUserData);
            
            if (response.status === 200) {
                console.log('Update successful:', response.data);
                navigate('/dashboard', { state: { userId, username: newUsername } });
            } else {
                console.error('Unexpected response:', response);
                setErrorMessage('There was an error updating your account. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error); // Log the error for debugging
    
            if (error.response) {
                console.error('Error response data:', error.response.data);
                setErrorMessage(`Error: ${error.response.data.message || 'An unexpected error occurred. Please try again.'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                setErrorMessage('No response received from the server. Please try again.');
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        }
    };
    

    return (
<div className="update-account-container">
  <div className="update-account-form">
    <h2>Update Account</h2>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <form onSubmit={handleUpdate}>
      <div className="form-group">
        <label>User ID: {userId}</label>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Leave blank to keep current password"
        />
      </div>
      <button type="submit" className="update-button">Update</button>
    </form>
  </div>
</div>

    );
};

export default UpdateAccount;
