// components/Runway.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

const Runway = () => {
  return (
    <Box sx={{borderRadius: 2, p: 3, mb: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <Box>
        <Typography variant="h6" color="#0A2472" className='text-2xl'>Runway</Typography>
        <Typography variant="h3" color="#0A2472" sx={{ marginTop: 1, marginBottom: 1 }}>68 Months</Typography>
        <Typography color="#0A2472">You have an average monthly burn of $26,700</Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Runway;
