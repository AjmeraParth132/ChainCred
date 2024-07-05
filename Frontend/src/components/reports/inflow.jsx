// components/Inflow.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Inflow = () => {
  return (
    <Box sx={{ backgroundColor: '#051650', borderRadius: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#ffffff">Inflow</Typography>
      <Typography variant="h3" color="#ffffff">$23,956.78</Typography>
      <Typography color="#ffffff">21.54% inc Compared to previous quarter</Typography>
    </Box>
  );
};

export default Inflow;

