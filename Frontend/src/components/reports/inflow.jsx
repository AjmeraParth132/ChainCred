// components/Inflow.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Inflow = () => {
  return (
    <Box sx={{ backgroundColor: '#D0E3FF;', borderRadius: 1, p: 3, mb: 2, fontFamily: 'Montserrat', fontSize: "16px", fontWeight: 600 }}>
      <Typography variant="h6" color="#0A2472">Inflow</Typography>
      <Typography variant="h3" color="#0A2472">$23,956.78</Typography>
      <Typography color="#0A2472">21.54% inc Compared to previous quarter</Typography>
    </Box>
  );
};



export default Inflow;

