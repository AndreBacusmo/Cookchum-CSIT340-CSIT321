import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, IconButton, Avatar
} from '@mui/material';
import { Rating } from '@mui/material';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './FavoriteTab.css';

const FavoriteRecipesTab = () => {
  const [favorites, setFavorites] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ userId: '', recipeId: '', rating: '', dateAdded: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch the favorite recipes from the backend
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/favRecipes/getFavRecipe");
      setFavorites(response.data); // Assuming the response is an array of fav recipe objects
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  const handleOpenDialog = (recipe = null) => {
    if (recipe) {
      setFormData({
        userId: recipe.userId || '',
        recipeId: recipe.recipeId || '',
        rating: recipe.rating || '',
        dateAdded: recipe.dateAdded || ''
      });
      setEditMode(true);
      setEditId(recipe.favoriteId);
    } else {
      setFormData({ userId: '', recipeId: '', rating: '', dateAdded: '' });
      setEditMode(false);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({ userId: '', recipeId: '', rating: '', dateAdded: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editMode) {
        await axios.put(`/api/favRecipes/putFavRecipe?id=${editId}`, formData);
      } else {
        await axios.post("/api/favRecipes/postFavRecipe", formData);
      }
      fetchFavorites();
      handleCloseDialog();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/favRecipes/deleteFavRecipe/${id}`);
      fetchFavorites();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <Paper elevation={3} className="paper-container">
      <Box className="header-box">
        <Typography variant="h5" component="h2">
          Favorite Recipes
        </Typography>
        <IconButton color="primary" aria-label="user profile">
          <Avatar className="avatar-icon">
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Box>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-cell">Recipe Name</TableCell>
              {/*<TableCell className="table-cell">User ID</TableCell>
              <TableCell className="table-cell">Recipe ID</TableCell>*/}
              <TableCell className="table-cell">Rating</TableCell>
              <TableCell className="table-cell">Date Added</TableCell>
              <TableCell className="table-cell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.map((recipe) => (
              <TableRow key={recipe.favoriteId}>
                <TableCell>{recipe.favoriteId}</TableCell>
                <TableCell>{recipe.userId}</TableCell>
                <TableCell>{recipe.recipeId}</TableCell>
                <TableCell>
                  <Rating value={recipe.rating} readOnly precision={0.5} />
                </TableCell>
                <TableCell>{recipe.dateAdded}</TableCell>
                <TableCell className="table-cell-actions">
                  <Button variant="outlined" color="primary" onClick={() => handleOpenDialog(recipe)} style={{ marginRight: '0.5em' }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(recipe.favoriteId)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Creating/Editing Recipe */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editMode ? "Edit Recipe" : "Create Recipe"}</DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            label="User ID"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Recipe ID"
            name="recipeId"
            value={formData.recipeId}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Date Added"
            name="dateAdded"
            value={formData.dateAdded}
            onChange={handleChange}
            fullWidth
            margin="dense"
            type="date"
          />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editMode ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default FavoriteRecipesTab;
