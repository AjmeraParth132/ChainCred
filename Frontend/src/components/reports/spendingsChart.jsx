import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Salary', 'HR costs', 'Reimbursements', 'Meals & Entertainment', 'Computer Supplies', 'Travel Expenses', 'Others'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120, 80, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF'],
    },
  ],
};

const SpendingsChart = () => {
  return <Doughnut data={data} />;
};

export default SpendingsChart;
