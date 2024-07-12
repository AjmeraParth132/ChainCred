import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Cards from "./cards";
import Transactions from "./transaction";
import Chart from "./chart";
import AmountTransfer from "./amountTransfer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={`${styles.dashboardContainer} justify-stretch`}>
      <div className={`${styles.dashboardSidebar} me-10 justify-start`}>
        <Sidebar />
      </div>
      <div className="me-5 w-[16%]">
        {/* <Sidebar /> */}
      </div>
      <div className={styles.dashboardContent}>
        <div className={styles.mainContent}>
          <Header />
          <div className={styles.dashboardStats}>
            <div className={`${styles.stat} glass`}>
              <h3>Account Balance</h3>
              <p>$56,500</p>
            </div>
            <div className={`${styles.stat} glass`}>
              <h3>Last month Income</h3>
              <p>$10,550</p>
            </div>
            <div className={`${styles.stat} glass`}>
              <h3>Last month Expenses</h3>
              <p>$46,505</p>
            </div>
          </div>
          <Chart />
          <Transactions />
        </div>
      </div>
      <div className={`${styles.amountTransfer} ms-10 justify-end`}>
        <AmountTransfer />
      </div>
    </div>
  );
};

export default Dashboard;
