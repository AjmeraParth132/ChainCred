import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import "./reports.css";
import Runway from "./runway";
import Inflow from "./inflow";
import Outflow from "./outflow";
import Profit from "./profit";
import Sidebar from "../dashboard/sidebar";


const dataPie1 = [
  { name: "Salary", value: 400 },
  { name: "HR costs", value: 300 },
  { name: "Reimbursements", value: 300 },
  { name: "Meals & Entertainment", value: 200 },
  { name: "Computer Supplies", value: 278 },
  { name: "Travel Expenses", value: 189 },
  { name: "Others", value: 239 },
];

const dataPie2 = [
  { name: "Equipment", value: 2400 },
  { name: "Set up costs", value: 4567 },
  { name: "Others", value: 1398 },
];

const dataLine = [
  { name: "Aug 1", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Aug 2", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Aug 3", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Aug 4", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Aug 5", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Aug 6", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Aug 7", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug 8", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Aug 9", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Aug 10", uv: 1890, pv: 4800, amt: 2181 },
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

const Reports = () => {
  return (
    <div className="reports-container">
      
      <div className="dashboard-sidebar bg-slate-900">
        <Sidebar/>
      </div>
      <div className="me-20 w-[350px]">
        {/* <Sidebar /> */}
      </div>
      <div className="reports ms-2">
        <div className="header">
        <h1 className="report-heading font-bold text-4xl mb-10">Reports</h1>
        <div className='profileIcon'>
          <span>P</span>
        </div>
       
        </div>
        <div className="tabs mb-10 ms-5">
          <div className="tab"><a href="">Balance Sheet</a></div>
          <div className="tab"><a href="">Profit & Loss</a></div>
          <div className="tab"><a href="">Spendings</a></div>
          <div className="tab"><a href="">KPI</a></div>
          <div className="tab"><a href="">Overview</a></div>
        </div>
        
        <div className="content-container">
          <div className="spendings-chart">
            <h2 className="text-2xl">Spendings</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPie1}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {dataPie1.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              {dataPie1.map((entry, index) => (
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
          <div className="runway">
            <Runway />
          </div>
          <div className="">
            <div className="inflow">
              <Inflow />
            </div>
            <div className="outflow ">
              <Outflow />
            </div>
            <div className="profit">
              <Profit />
            </div>
          </div>
          <div className="total-asset-balance h-[360px]">
            <div className="TAB ">
            <h2 className="text-2xl">Total Asset Balance</h2>
            <div className="previous-week text-black mb-5">Previous week</div>
            </div>
            
            <ResponsiveContainer width="100%" height={270}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="outflow-chart">
            <h2 className="text-2xl">Outflow</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={dataPie2}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {dataPie2.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend">
              {dataPie2.map((entry, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Reports;
