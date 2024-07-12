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
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardSidebar}>
        <Sidebar />
      </div>
      <div className={styles.dashboardContent}>
        <Header />
        <div className={styles.mainContent}>
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
      <div className={styles.amountTransfer}>
        <AmountTransfer />
      </div>
    </div>
  );
};

export default Dashboard;
