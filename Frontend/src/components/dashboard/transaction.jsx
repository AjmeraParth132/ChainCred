// Transactions.jsx
import React from 'react';
import './transactions.css';
import Expense from './expenseModal';
import Income from './incomeModal';

const transactions = [
  {
    id: 1,
    name: "Netflix",
    date: "09 Feb 2022",
    time: "10:40AM",
    amount: "+$50.00",
    status: "Success",
    statusClass: "success",
  },
  {
    id: 2,
    name: "Issac Newton",
    date: "09 Feb 2022",
    time: "10:40AM",
    amount: "+$95.00",
    status: "Failed",
    statusClass: "failed",
  },
  {
    id: 3,
    name: "Ruskin Bond",
    date: "09 Feb 2022",
    time: "10:40AM",
    amount: "-$46.00",
    status: "Pending",
    statusClass: "pending",
  },
  {
    id: 4,
    name: "Amazon Prime",
    date: "09 Feb 2022",
    time: "10:40AM",
    amount: "+$46.00",
    status: "Success",
    statusClass: "success",
  },
];

const Transactions = () => {
  return (
    <div className="transactions-container w-[100%]">
      <div className="transactions-header">
        <h2>Latest Transactions</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="transactions-list">
        {transactions.map(transaction => (
          <div className="transaction-item" key={transaction.id}>
            <div className="transaction-details">
              <div className="transaction-avatar" />
              <div className="transaction-name">{transaction.name}</div>
            </div>
            <div className="transaction-date">{transaction.date}</div>
            <div className="transaction-time">{transaction.time}</div>
            <div className={`transaction-amount ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
              {transaction.amount}
            </div>
            <div className={`transaction-status ${transaction.statusClass}`}>
              {transaction.status}
            </div>
          </div>
        ))}
      </div>
      <div className='row-transaction'>
        <button className="add-expense-button" onClick={() => document.getElementById("my_modal_1").showModal()}>+ Add Expense</button>
        <Expense />
        <button className="add-expense-button" onClick={() => document.getElementById('my_modal_2').showModal()}>+ Add Income</button>
        <Income/>
      </div>
    </div>
  );
};

export default Transactions;
