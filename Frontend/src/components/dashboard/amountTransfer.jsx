import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUniversity, faWallet, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import styles from './amountTransfer.module.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { PlayForWork } from '@mui/icons-material';

const AmountTransfer = () => {
  const [name, setName] = useState("Parth Ajmera");
  const [email, setEmail] = useState("parth.ajmera@chaincred.com");
  useEffect(() => {
    const onSubmit = async () => {
      try {
        const userType = localStorage.getItem("UserType");
        const userId = JSON.parse(localStorage.getItem("User"));
        const endpoint = userType === "company" ? `/companies/get_company/${userId}/` : `/investors/get_investor/${userId}/`;
        const res = await axios.get(`http://127.0.0.1:8000${endpoint}`);

        // console.log("API Response:", res);

        const username = res.data.username;
        const email = res.data.email;
        localStorage.setItem("Name", username);
        setName(username);
        setEmail(email);
      }
      catch (error) {
        console.error('Error:', error);
      }
    };
    onSubmit();
  }, []);


  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.profile}>
        <div className={styles.avatar} />
        <div>
          <div className={styles.name}>{name }</div>
          <div className={styles.email}>{email }</div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.glass}`}>
          <div className={styles.cardBackground}></div>
          <div>{name}</div>
          <div className={styles.cardDetails}>
            <div>Amazon Platinum</div>
            <div>1234 .... .... 5678</div>
            <div>$56,745.89</div>
          </div>
        </div>
      </div>
      <div className={styles.amountTransferContainer}>
        <div className={styles.transferItem}>
          <div className={`${styles.transferIcon} ${styles.cardIcon}`}>
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div className={styles.transferText}>
            Transfer via Card<br />$12,000
          </div>
        </div>
        <div className={styles.transferItem}>
          <div className={`${styles.transferIcon} ${styles.bankIcon}`}>
            <FontAwesomeIcon icon={faUniversity} />
          </div>
          <div className={styles.transferText}>
            Transfer to Same Bank<br />$45,000
          </div>
        </div>
        <div className={styles.transferItem}>
          <div className={`${styles.transferIcon} ${styles.walletIcon}`}>
            <FontAwesomeIcon icon={faWallet} />
          </div>
          <div className={styles.transferText}>
            Transfer via Wallet<br />$40,000
          </div>
        </div>
        <div className={styles.transferItem}>
          <div className={`${styles.transferIcon} ${styles.wallet2Icon}`}>
            <FontAwesomeIcon icon={faPiggyBank} />
          </div>
          <div className={styles.transferText}>
            Transfer via Wallet<br />$11,500
          </div>
        </div>
      </div>
      <button className={styles.viewAllButton}>View All</button>
    </div>
  );
};

export default AmountTransfer;
