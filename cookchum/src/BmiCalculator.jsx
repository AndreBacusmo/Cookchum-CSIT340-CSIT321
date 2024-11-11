import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [unit, setUnit] = useState('metric'); // New state for unit type

  const calculateBMI = () => {
    let weightInKg;
    let heightInMeters;

    if (unit === 'metric') {
      weightInKg = parseFloat(weight);
      heightInMeters = parseFloat(height) / 100; // Convert cm to meters
    } else {
      weightInKg = parseFloat(weight) * 0.453592; // Convert lbs to kg
      heightInMeters = parseFloat(height) * 0.0254; // Convert inches to meters
    }

    if (weightInKg > 0 && heightInMeters > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      let msg = '';
      let suggestionText = '';
      if (bmiValue < 18.5) {
        msg = "Underweight";
        suggestionText = "Consider a balanced diet with more calories to reach a healthier weight.";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        msg = "Normal weight";
        suggestionText = "Maintain your healthy weight by staying active and eating a balanced diet.";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        msg = "Overweight";
        suggestionText = "Regular exercise and mindful eating can help lower your BMI.";
      } else if (bmiValue >= 30 && bmiValue < 34.9) {
        msg = "Obese Class 1";
        suggestionText = "A balanced diet and physical activity are recommended for weight management.";
      } else if (bmiValue >= 35 && bmiValue < 39.9) {
        msg = "Obese Class 2";
        suggestionText = "Consult a healthcare provider for guidance on weight management.";
      } else {
        msg = "Obese Class 3";
        suggestionText = "Seeking medical advice may be beneficial for a healthier BMI.";
      }
      setMessage(msg);
      setSuggestion(suggestionText);
    } else {
      alert("Please enter valid weight and height");
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
    setSuggestion('');
  };

  return (
    <Grid container spacing={4} sx={{ maxWidth: 900, mx: 'auto', mt: 5 }}>
      {/* Main BMI Calculator */}
      <Grid item xs={12} md={6}>
        <Paper elevation={4} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom align="center">BMI Calculator</Typography>
          
          {/* Unit Selector */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Unit</InputLabel>
            <Select value={unit} onChange={(e) => setUnit(e.target.value)} label="Unit">
              <MenuItem value="metric">Metric (kg, cm)</MenuItem>
              <MenuItem value="imperial">Standard (lbs, in)</MenuItem>
            </Select>
          </FormControl>

          {/* Weight Input */}
          <TextField
            label={unit === 'metric' ? "Weight (kg)" : "Weight (lbs)"}
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />

          {/* Height Input */}
          <TextField
            label={unit === 'metric' ? "Height (cm)" : "Height (in)"}
            variant="outlined"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={calculateBMI} sx={{ mr: 1 }}>
              Calculate BMI
            </Button>
            <Button variant="outlined" color="secondary" onClick={resetFields}>
              Reset
            </Button>
          </Box>

          {bmi && (
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="h6">Your BMI: {bmi}</Typography>
              <Typography color="text.secondary">{message}</Typography>
              <Typography sx={{ mt: 1 }}>{suggestion}</Typography>
            </Box>
          )}
        </Paper>
      </Grid>

      {/* BMI Classification Table */}
      <Grid item xs={12} md={6}>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h6" align="center" gutterBottom>
              BMI Classification
            </Typography>
            <Box component="table" sx={{ width: '100%', mt: 2, borderSpacing: '10px' }}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>BMI Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Underweight</td>
                  <td>&lt; 18.5</td>
                </tr>
                <tr>
                  <td>Normal weight</td>
                  <td>18.5 - 24.9</td>
                </tr>
                <tr>
                  <td>Overweight</td>
                  <td>25 - 29.9</td>
                </tr>
                <tr>
                  <td>Obese Class 1</td>
                  <td>30 - 34.9</td>
                </tr>
                <tr>
                  <td>Obese Class 2</td>
                  <td>35 - 39.9</td>
                </tr>
                <tr>
                  <td>Obese Class 3</td>
                  <td>&gt;= 40</td>
                </tr>
              </tbody>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BMICalculator;
