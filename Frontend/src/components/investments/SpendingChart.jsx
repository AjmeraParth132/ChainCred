import React from 'react';
// import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', inflow: 400, outflow: 240 },
  { name: 'Feb', inflow: 300, outflow: 139 },
  { name: 'Mar', inflow: 200, outflow: 980 },
  { name: 'Apr', inflow: 278, outflow: 390 },
  { name: 'May', inflow: 189, outflow: 480 },
  { name: 'Jun', inflow: 239, outflow: 380 },
  { name: 'Jul', inflow: 349, outflow: 430 },
  { name: 'Aug', inflow: 400, outflow: 240 },
  { name: 'Sep', inflow: 300, outflow: 139 },
  { name: 'Oct', inflow: 200, outflow: 980 },
  { name: 'Nov', inflow: 278, outflow: 390 },
  { name: 'Dec', inflow: 189, outflow: 480 },
];

const Chart = () => {
  return (
    <div className="chart">
      <h2>Latest Transactions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="inflow" stroke="#8884d8" />
          <Line type="monotone" dataKey="outflow" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
