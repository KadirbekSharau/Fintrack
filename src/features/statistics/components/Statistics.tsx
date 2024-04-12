import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis } from '@mui/x-charts';

// Assuming you have your expense and income data formatted appropriately
const expenseData = [
  { x: 'Mar', y: 1200 },
  { x: 'Apr', y: 1500 },
  { x: 'May', y: 1000 },
  // ... other months
];

const incomeData = [
  { x: 'Mar', y: 1800 },
  { x: 'Apr', y: 1300 },
  { x: 'May', y: 1600 },
  // ... other months
];

const Statistics = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Financial Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#f1f3f6', p: 2, borderRadius: 2 }}>
            <Typography variant="body1">Expenses</Typography>
            <LineChart sx={{ height: 300 }} data={expenseData}>
              <Line label="Expenses" dataKey="y" />
              <XAxis />
              <YAxis />
            </LineChart>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#f1f3f6', p: 2, borderRadius: 2 }}>
            <Typography variant="body1">Income</Typography>
            <LineChart sx={{ height: 300 }} data={incomeData}>
              <Line label="Income" dataKey="y" />
              <XAxis />
              <YAxis />
            </LineChart>
          </Box>
        </Grid>
        {/* Add more charts or content here */}
      </Grid>
      <Divider variant="middle" />
      {/* Add transactions list or other content here */}
    </Box>
  );
};

export default Statistics;
