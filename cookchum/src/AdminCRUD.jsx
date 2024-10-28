// src/components/AdminCRUD.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCRUD = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllUsers');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'put' : 'post';
    const url = isEditing
      ? `http://localhost:8080/updateUser/${formData.email}`
      : 'http://localhost:8080/addUser';

    try {
      await axios({
        method,
        url,
        data: formData
      });
      setMessage(isEditing ? 'User updated successfully!' : 'User added successfully!');
      setShowPopup(true);
      fetchUsers();
      resetForm();
    } catch (error) {
      console.error(isEditing ? "Error updating user:" : "Error adding user:", error);
      setMessage('Action failed. Please try again.');
      setShowPopup(true);
    }
  };

  const resetForm = () => {
    setFormData({ email: '', name: '', password: '' });
    setIsEditing(false);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:8080/deleteUser/${email}`);
      setMessage('User deleted successfully!');
      setShowPopup(true);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      setMessage('Failed to delete user.');
      setShowPopup(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Admin User Management</h2>

      {/* Form to Add/Edit User */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <div style={styles.buttonGroup}>
          <button type="submit" style={{ ...styles.button, backgroundColor: isEditing ? '#4CAF50' : '#007bff' }}>
            {isEditing ? "Update User" : "Add User"}
          </button>
          <button type="button" onClick={resetForm} style={{ ...styles.button, backgroundColor: '#888' }}>Clear</button>
        </div>
      </form>

      {/* User List */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => handleEdit(user)} style={styles.editButton}>Edit</button>
                  <button onClick={() => handleDelete(user.email)} style={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <p>{message}</p>
            <button onClick={handleClosePopup} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '1.8em',
    color: '#444',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  tableContainer: {
    width: '100%',
    maxWidth: '600px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  popup: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AdminCRUD;
