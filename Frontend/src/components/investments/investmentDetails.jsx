// src/components/InvestmentDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './InvestmentDetails.module.css';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend
} from 'recharts';
import Sidebar from '../dashboard/sidebar';

const pieData = [
  { name: "Salary", value: 400 },
  { name: "HR costs", value: 300 },
  { name: "Reimbursements", value: 300 },
  { name: "Meals & Entertainment", value: 200 },
  { name: "Computer Supplies", value: 278 },
  { name: "Travel Expenses", value: 189 },
  { name: "Others", value: 239 },
];

const barData = [
  { name: "Jan", inflow: 65, outflow: 28 },
  { name: "Feb", inflow: 59, outflow: 48 },
  { name: "Mar", inflow: 80, outflow: 40 },
  { name: "Apr", inflow: 81, outflow: 19 },
  { name: "May", inflow: 56, outflow: 86 },
  { name: "Jun", inflow: 55, outflow: 27 },
  { name: "Jul", inflow: 40, outflow: 90 },
  { name: "Aug", inflow: 45, outflow: 78 },
  { name: "Sep", inflow: 60, outflow: 60 },
  { name: "Oct", inflow: 70, outflow: 55 },
  { name: "Nov", inflow: 85, outflow: 40 },
  { name: "Dec", inflow: 90, outflow: 65 },
];

const lineData = [
  { name: "Jan", inflow: 65, outflow: 28 },
  { name: "Feb", inflow: 59, outflow: 48 },
  { name: "Mar", inflow: 80, outflow: 40 },
  { name: "Apr", inflow: 81, outflow: 19 },
  { name: "May", inflow: 56, outflow: 86 },
  { name: "Jun", inflow: 55, outflow: 27 },
  { name: "Jul", inflow: 40, outflow: 90 },
  { name: "Aug", inflow: 45, outflow: 78 },
  { name: "Sep", inflow: 60, outflow: 60 },
  { name: "Oct", inflow: 70, outflow: 55 },
  { name: "Nov", inflow: 85, outflow: 40 },
  { name: "Dec", inflow: 90, outflow: 65 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A9A9A9",
  "#8884D8",
  "#FF6347",
];

const InvestmentDetails = () => {
  const { company } = useParams();

  return (
    <div className={styles.investmentDetails}>
        <div className="dashboard-sidebar me-10">
        <Sidebar />
      </div>
      <div className="me-5 w-[220px]">
        <Sidebar />
      </div>
      <div className="content w-[1150px]">
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.headerTitle}>Investments</h1>
          <p className={styles.welcomeMessage}>Welcome back, Parth!</p>
        </div>
        <div className={styles.profileIcon}>
          <span>P</span>
        </div>
      </header>
      <div className={styles.companySection}>
        <div className={styles.companyIcon}></div>
        <h2 className={styles.companyName}>{company}</h2>
     
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <h3>Spendings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="legend">
              {pieData.map((entry, index) => (
                <div key={`legend-${index}`} className="legend-item">
                  <div
                    className="color-box"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>

        </div>
        <div className={styles.chart}>
          <h3>Latest Transactions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inflow" fill="#82ca9d" />
              <Bar dataKey="outflow" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chart}>
          <h3>Profit & Loss Statement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
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
      </div>
      </div>
      
    </div>
  );
};

export default InvestmentDetails;
