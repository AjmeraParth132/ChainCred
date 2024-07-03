import React from 'react';
import './cards.css'; // You can use this file for styling

const Cards = ({ title, amount, percentage }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{amount}</p>
      <span>{percentage}</span>
    </div>
  );
};

export default Cards;
