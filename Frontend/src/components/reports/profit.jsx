// components/Profit.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Profit = () => {
  return (
    <Box sx={{ backgroundColor: '#D0E3FF;', borderRadius: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#0A2472">Profit</Typography>
      <Typography variant="h3" color="#0A2472">$22,874.00</Typography>
      <Typography color="#0A2472">23.76% inc Compared to previous quarter</Typography>
    </Box>
  );
};

export default Profit;
