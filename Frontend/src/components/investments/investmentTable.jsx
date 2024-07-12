import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IVT.css';
import Sidebar from '../dashboard/sidebar';

const investments = [
  { company: 'Netflix', ceo: 'Grace Moreta', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Setu', ceo: 'Allison Siphron', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Cred', ceo: 'Angel Westervelt', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Razorpay', ceo: 'Makenna Doman', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Scaler', ceo: 'Ahmad Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Finny', ceo: 'Kaylynn Madsen', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'MakeMyTrip', ceo: 'Lydia Baptista', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Clientelle', ceo: 'Kaylynn Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Razorpay', ceo: 'Makenna Doman', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Scaler', ceo: 'Ahmad Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Finny', ceo: 'Kaylynn Madsen', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'MakeMyTrip', ceo: 'Lydia Baptista', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Clientelle', ceo: 'Kaylynn Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Razorpay', ceo: 'Makenna Doman', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Scaler', ceo: 'Ahmad Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Finny', ceo: 'Kaylynn Madsen', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'MakeMyTrip', ceo: 'Lydia Baptista', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Clientelle', ceo: 'Kaylynn Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Razorpay', ceo: 'Makenna Doman', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Scaler', ceo: 'Ahmad Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Finny', ceo: 'Kaylynn Madsen', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'MakeMyTrip', ceo: 'Lydia Baptista', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Clientelle', ceo: 'Kaylynn Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Razorpay', ceo: 'Makenna Doman', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Scaler', ceo: 'Ahmad Vetrovs', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Finny', ceo: 'Kaylynn Madsen', date: '07 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'MakeMyTrip', ceo: 'Lydia Baptista', date: '25 Aug, 4:32 pm', investment: '$ 4 million' },
  { company: 'Clientelle', ceo: 'Kaylynn Vetrovs', date: '20 Aug, 4:32 pm', investment: '$ 4 million' },
];

const InvestmentsTable = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const handleRowClick = (company) => {
    navigate(`/investment/${company}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedInvestments = investments
    .filter((investment) =>
      investment.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investment.ceo.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="IV-content">
      <div className="dashboard-sidebar me-10">
        <Sidebar />
      </div>
      <div className="me-5 w-[16%]">
        {/* <Sidebar /> */}
      </div>
      <div className="IV ">
        <div className="header mt-4">
          <h1 className="font-Montserrat">Hello Parth!</h1>
          <label className="input flex items-center border-transparent bg-[#908c9366] rounded-3xl">
            <input 
              type="text" 
              className="grow me-5" 
              placeholder="Search by company or CEO"
              value={searchQuery}
              onChange={handleSearchChange} 
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="sort-container">
          <label className="text-slate-300">
            Sort By Date:
            <select 
              className="sort" 
              value={sortOrder} 
              onChange={handleSortOrderChange}
            >
              <option value="newest" className='sort-options text-black bg-slate-900'>Newest First</option>
              <option value="oldest" className='sort-options text-black bg-slate-900'>Oldest First</option>
            </select>
          </label>
        </div>

        </div>
        <div className="head ms-5">
        <p className="welcome">Welcome Back!</p>
        <h2>Investments</h2>
        </div>
       
        
        <div className="table-container mt-10">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>CEO</th>
                <th>Purchase Date</th>
                <th>Investment</th>
              </tr>
            </thead>
            <tbody>
              {sortedInvestments.map((investment, index) => (
                <tr key={index} onClick={() => handleRowClick(investment.company)}>
                  <td>{investment.company}</td>
                  <td>{investment.ceo}</td>
                  <td>{investment.date}</td>
                  <td className="text-green-500">{investment.investment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsTable;
