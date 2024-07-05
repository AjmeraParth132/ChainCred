import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, AccountBalance, CreditCard, Receipt, Notifications, Settings, ExitToApp } from '@mui/icons-material';
import './sidebar.css';
import logo from '../../../public/logo.png'


function Sidebar() {
  return (
    <div className=''>
    <div className="sidebar p-8">

      <div className="sidebar-logo me-[30px]">
      <div className="flex flex-shrink-0">
          <img className="h-8 w-auto me-3 ps-0" src={logo} alt="Your Company" />
          <h2 className='text-xl font-bold cursor-pointer text-[#FFE344]'>ChainCred</h2>
        </div>
        
      </div>
      <nav>
        <ul>
            <div className="upper-sidebar">
            <li><Link to="/"><Dashboard /> Dashboard</Link></li>
          <li><Link to="/transactions"><AccountBalance /> Transactions</Link></li>
          <li><Link to="/cards"><CreditCard /> Cards</Link></li>
          <li><Link to="/investment"><CreditCard /> Investment</Link></li>
          <li><Link to="/reports"><Receipt /> Reports</Link></li>
          <li><Link to="/bank-accounts"><AccountBalance /> Bank Accounts</Link></li>
          <li><Link to="/notifications"><Notifications /> Notifications</Link></li>
            </div>
         <div className="lower-sidebar mt-32">
         <li><Link to="/settings"><Settings /> Settings</Link></li>
         <li><Link to="/logout"><ExitToApp /> Log out</Link></li>
         </div>
          
        </ul>
      </nav>
    </div>
    </div>
  );
}

export default Sidebar;
