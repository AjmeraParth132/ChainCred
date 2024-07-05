
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUniversity, faWallet, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import './amountTransfer.css';

const AmountTransfer = () => {
  return (
    <div className="sidebar-container">
      <div className="profile">
        <div className="avatar" />
        <div>
          <div className="name">Parth Ajmera</div>
          <div className="email">partha@mail.com</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card glass">
        <div className="card-background">
   
          
        </div>
          <div>Parth Ajmera</div>
          <div className="card-details">
            <div>Amazon Platinum</div>
            <div>1234 .... .... 5678</div>
            <div>$56,745.89</div>
          </div>
       
        </div>
      </div>
      <div className="amount-transfer-container">
        <div className="transfer-item">
          <div className="transfer-icon card-icon">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div className="transfer-text">
            Transfer via Card<br />$12,000
          </div>
        </div>
        <div className="transfer-item">
          <div className="transfer-icon bank-icon">
            <FontAwesomeIcon icon={faUniversity} />
          </div>
          <div className="transfer-text">
            Transfer to Same Bank<br />$45,000
          </div>
        </div>
        <div className="transfer-item">
          <div className="transfer-icon wallet-icon">
            <FontAwesomeIcon icon={faWallet} />
          </div>
          <div className="transfer-text">
            Transfer via Wallet<br />$40,000
          </div>
        </div>
        <div className="transfer-item">
          <div className="transfer-icon wallet2-icon">
            <FontAwesomeIcon icon={faPiggyBank} />
          </div>
          <div className="transfer-text">
            Transfer via Wallet<br />$11,500
          </div>
        </div>
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default AmountTransfer;
