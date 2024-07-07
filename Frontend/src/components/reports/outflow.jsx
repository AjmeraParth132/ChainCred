// components/Outflow.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Outflow = () => {
  return (
    <Box sx={{ backgroundColor: '#D0E3FF;', borderRadius: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#0A2472">Outflow</Typography>
      <Typography variant="h3" color="#0A2472">$45,987.00</Typography>
      <Typography color="#0A2472">32.26% inc Compared to previous quarter</Typography>
    </Box>
  );
};

export default Outflow;
