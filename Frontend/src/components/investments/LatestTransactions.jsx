// src/components/LatestTransactions.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './LatestTransactions.module.css';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Inflow',
      backgroundColor: '#36A2EB',
      data: [65, 59, 80, 81, 56, 55, 40, 62, 78, 95, 47, 64],
    },
    {
      label: 'Outflow',
      backgroundColor: '#FF6384',
      data: [45, 39, 60, 71, 46, 35, 20, 42, 58, 75, 27, 44],
    },
  ],
};

const LatestTransactions = () => {
  return (
    <div className="chart-container">
      <h3>Latest Transactions</h3>
      <Bar data={data} />
      <p>View all</p>
    </div>
  );
};

export default LatestTransactions;
