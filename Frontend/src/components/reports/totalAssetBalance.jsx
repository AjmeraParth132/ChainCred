// components/TotalAssetBalance.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Aug 1', uv: 4000 },
  { name: 'Aug 2', uv: 3000 },
  { name: 'Aug 3', uv: 2000 },
  { name: 'Aug 4', uv: 2780 },
  { name: 'Aug 5', uv: 1890 },
  { name: 'Aug 6', uv: 2390 },
  { name: 'Aug 7', uv: 3490 },
  { name: 'Aug 8', uv: 2780 },
  { name: 'Aug 9', uv: 1890 },
  { name: 'Aug 10', uv: 2390 },
];

const TotalAssetBalance = () => {
  return (
    <Box sx={{ backgroundColor: '#192231', borderRadius: 2, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#ffffff">Total Asset Balance</Typography>
      <Typography variant="h3" color="#ffffff">$1,684,513.89</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TotalAssetBalance;
