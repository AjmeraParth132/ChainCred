import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Cards from "./cards";
import Transactions from "./transaction";
import Chart from "./chart";
import AmountTransfer from "./amountTransfer";

import "./dashboard.css"; // You can use this file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container justify-stretch">
      
      <div className="dashboard-sidebar me-10 justify-start ">
        <Sidebar />
      </div>
      <div className="me-5 w-[220px]">
        {/* <Sidebar /> */}
      </div>
      <div className="dashboard-content">
        <div className="main-content">
          
         
          <Header />
         
          <div className="dashboard-stats">
            <div className="stat glass">
              <h3>Outstanding Balance</h3>
              <p>$56,500</p>
            </div>
            <div className="stat glass">
              <h3>Total Income</h3>
              <p>$10,550</p>
            </div>
            <div className="stat glass">
              <h3>Total Expenses</h3>
              <p>$46,505</p>
            </div>
          </div>

          <Chart />
          <Transactions />
        </div>
      </div>
      <div className="amount-transfer ms-10 justify-end">
          <AmountTransfer />
        </div>
    </div>
  );
};

export default Dashboard;
