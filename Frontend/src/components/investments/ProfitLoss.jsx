// src/components/ProfitLoss.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './ProfitLoss.module.css';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Inflow',
      fill: false,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      data: [65, 59, 80, 81, 56, 55, 40, 62, 78, 95, 47, 64],
    },
    {
      label: 'Outflow',
      fill: false,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      data: [45, 39, 60, 71, 46, 35, 20, 42, 58, 75, 27, 44],
    },
  ],
};

const ProfitLoss = () => {
  return (
    <div className="chart-container">
      <h3>Profit & Loss Statement</h3>
      <Line data={data} />
      <p>View all</p>
    </div>
  );
};

export default ProfitLoss;
