import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');  // For success or error messages
    const [showPopup, setShowPopup] = useState(false);  // For controlling the popup

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, email, password };

        try {
            const response = await axios.post('http://localhost:8080/api/supercook/postuserrecord', user);
            console.log('User created:', response.data);

            setMessage('Registration successful!');
            setShowPopup(true);  // Show success message
            handleClear();
        } catch (error) {
            // Check if the error message contains "Email already in use"
            if (error.response && error.response.data && error.response.data.message === "Email already in use") {
                setMessage('This email is already registered.');
            } else {
                setMessage('Registration failed. Please try again.');
            }
            setShowPopup(true);  // Show error message
        }
    };

    const handleClear = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleClosePopup = () => {
        setShowPopup(false);  // Hide the popup
    };

    return (
        <div className="registration-wrapper">
            <div className="registration-container">
            <h2 className="registration-title">Register Form</h2>
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="submit-button">Submit</button>
                        <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>

            {/* Popup Message */}
            {showPopup && (
                <div className="popup-message">
                    <div className="popup-content">
                        <p>{message}</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
