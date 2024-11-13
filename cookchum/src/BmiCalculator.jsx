import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [unit, setUnit] = useState('metric');

  const calculateBMI = () => {
    let weightInKg;
    let heightInMeters;

    if (unit === 'metric') {
      weightInKg = parseFloat(weight);
      heightInMeters = parseFloat(height) / 100;
    } else {
      weightInKg = parseFloat(weight) * 0.453592;
      heightInMeters = ((parseFloat(feet) * 12) + parseFloat(inches)) * 0.0254;
    }

    if (weightInKg > 0 && heightInMeters > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      let msg = '';
      let suggestionText = '';
      if (bmiValue < 18.5) {
        msg = "Underweight";
        suggestionText = "Nourishing your body with balanced meals and healthy fats can help you reach a healthier weight.";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        msg = "Normal weight";
        suggestionText = "You're at a healthy weight! Keep fueling your body with a variety of nutritious foods to maintain your balance.";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        msg = "Overweight";
        suggestionText = "You're on the heavier side. Embrace healthy eating habits with plenty of fruits, vegetables, and whole grains for a balanced diet.";
      } else if (bmiValue >= 30 && bmiValue < 34.9) {
        msg = "Obese Class 1";
        suggestionText = "Consider making mindful food choices that focus on whole, nutritious foods to support a healthier lifestyle.";
      } else if (bmiValue >= 35 && bmiValue < 39.9) {
        msg = "Obese Class 2";
        suggestionText = "Incorporating nutrient-rich foods and portion control into your diet can be empowering for your health journey.";
      } else {
        msg = "Obese Class 3";
        suggestionText = "Taking small steps towards nourishing, healthy food choices can make a big difference in your wellness journey.";
      }
      setMessage(msg);
      setSuggestion(suggestionText);
    } else {
      alert("Please enter valid weight and height");
    }
  };

  const handleInchesChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) < 12)) {
      setInches(value);
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setFeet('');
    setInches('');
    setBmi(null);
    setMessage('');
    setSuggestion('');
  };

  return (
    <Grid container spacing={4} sx={{ maxWidth: 900, mx: 'auto', mt: 5 }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={4} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom align="center">BMI Calculator</Typography>
          
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Unit</InputLabel>
            <Select value={unit} onChange={(e) => setUnit(e.target.value)} label="Unit">
              <MenuItem value="metric">Metric (kg, cm)</MenuItem>
              <MenuItem value="imperial">Standard (lbs, ft, in)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label={unit === 'metric' ? "Weight (kg)" : "Weight (lbs)"}
            variant="outlined"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />

          {unit === 'metric' ? (
            <TextField
              label="Height (cm)"
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Height (ft)"
                variant="outlined"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                margin="normal"
                type="number"
              />
              <TextField
                label="Height (in)"
                variant="outlined"
                value={inches}
                onChange={handleInchesChange}
                margin="normal"
                type="number"
              />
            </Box>
          )}

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
              <Typography variant="h6">Your BMI is: {bmi}</Typography>
              <Typography color="text.secondary">{message}</Typography>
              <Typography sx={{ mt: 1 }}>{suggestion}</Typography>
            </Box>
          )}
        </Paper>
      </Grid>

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
