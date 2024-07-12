import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, AccountBalance, CreditCard, Receipt, Notifications, Settings, ExitToApp } from '@mui/icons-material';
import './sidebar.css';
import logo from '../../../public/logo.png';
import Expense from './expenseModal';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-logo">
        <div className="flex flex-shrink-0">
          <img className="h-8 w-auto me-3 ps-0" src={logo} alt="Your Company" />
          <h2 className='text-xl font-bold cursor-pointer text-[#FFE344]'>ChainCred</h2>
        </div>
      </div>
     
      <nav>
        <ul>
          <div className="upper-sidebar">
          <button className="add-expense-button" onClick={() => document.getElementById("my_modal_1").showModal()}>+ Add Expense</button>
            <li><Link to="/"><Dashboard /> Dashboard</Link></li>
            
            {userType === 'company' && <li><Link to="/transactions"><AccountBalance /> Transactions</Link></li>}
          {userType === 'investor' &&
            <li><Link to="/investment"><CreditCard /> Investment</Link></li>
          }
          {userType === 'company' && <li><Link to="/reports"><Receipt /> Reports</Link></li>}
          <li><Link to="/notifications"><Notifications /> Notifications</Link></li>
            </div>
         <div className="lower-sidebar mt-10">
         <li><Link to="/settings"><Settings /> Settings</Link></li>
         <li><Link to="/logout"><ExitToApp /> Log out</Link></li>
         </div>
          
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
