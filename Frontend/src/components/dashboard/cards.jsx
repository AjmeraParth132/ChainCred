import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ title, amount, percentage }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{amount}</p>
      <span>{percentage}</span>
    </div>
  );
};

export default Cards;
