// components/Spendings.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Salary', value: 400 },
  { name: 'HR costs', value: 300 },
  { name: 'Reimbursements', value: 300 },
  { name: 'Meals & Entertainment', value: 200 },
  { name: 'Computer Supplies', value: 278 },
  { name: 'Travel Expenses', value: 189 },
  { name: 'Others', value: 239 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA47BC', '#FF7043', '#8E24AA'];

const Spendings = () => {
  return (
    <Box sx={{ backgroundColor: '#192231', borderRadius: 2, p: 3, mb: 2 }}>
      <Typography variant="h6" color="#ffffff">Spendings</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Spendings;
