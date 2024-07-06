// components/Profit.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Profit = () => {
  return (
    <Box sx={{ backgroundColor: '#051650', borderRadius: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#ffffff">Profit</Typography>
      <Typography variant="h3" color="#ffffff">$22,874.00</Typography>
      <Typography color="#ffffff">23.76% inc Compared to previous quarter</Typography>
    </Box>
  );
};

export default Profit;
