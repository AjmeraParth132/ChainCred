import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

const Charts = () => {
  const doughnutData = {
    labels: ['Salary', 'HR Costs', 'Reimbursements', 'Meals & Entertainment', 'Computer Supplies', 'Travel Expenses', 'Others'],
    datasets: [
      {
        label: 'Spendings',
        data: [300, 50, 100, 80, 60, 30, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(99, 255, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(99, 255, 132, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inflow',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 85, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Outflow',
        data: [28, 48, 40, 19, 86, 27, 90, 78, 60, 55, 40, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inflow',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 85, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Outflow',
        data: [28, 48, 40, 19, 86, 27, 90, 78, 60, 55, 40, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart spending">
        <h2>Spendings</h2>
        {/* <Doughnut data={doughnutData} /> */}
      </div>
      <div className="chart latest-transactions">
        <h2>Latest Transactions</h2>
        {/* <Bar data={barData} /> */}
      </div>
      <div className="chart profit-loss">
        <h2>Profit & Loss statement</h2>
        {/* <Line data={lineData} /> */}
      </div>
    </div>
  );
};

export default Charts;
