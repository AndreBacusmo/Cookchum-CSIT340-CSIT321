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

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("/api/favRecipes/getFavRecipe");
      setFavorites(response.data);
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
    <Paper elevation={3} style={{ padding: '1em', marginTop: '1em' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" component="h2">
          Favorite Recipes
        </Typography>
        <IconButton color="primary" aria-label="user profile">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Box>
      <Button variant="contained" color="primary" onClick={() => handleOpenDialog()} style={{ marginBottom: '1em' }}>
        Create Recipe
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Favorite ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Recipe ID</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell>Actions</TableCell>
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
                <TableCell>
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
        <DialogContent>
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
        <DialogActions>
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