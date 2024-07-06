// components/Outflow.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Outflow = () => {
  return (
    <Box sx={{ backgroundColor: '#051650', borderRadius: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#ffffff">Outflow</Typography>
      <Typography variant="h3" color="#ffffff">$45,987.00</Typography>
      <Typography color="#ffffff">32.26% inc Compared to previous quarter</Typography>
    </Box>
  );
};

export default Outflow;
