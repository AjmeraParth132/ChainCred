import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Home from './home/home'
import Login from './components/login'
import Reports from './components/reports/reports'
import InvestmentsTable from './components/investments/investmentTable'
import InvestmentDetails from './components/investments/investmentDetails'
import FinanceStatementCompany from './components/dashboard/oneTimeInfoCompany'
import InvestmentForm from './components/dashboard/oneTimeInfoInvestor'



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/investor-form" element={<InvestmentForm/>} />
        <Route path = "/company-form" element={<FinanceStatementCompany/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/investment" element={<InvestmentsTable />} />
        <Route path="/investment/:company" element= {<InvestmentDetails />} />
        
      </Routes>
      
    </div>
  )
}

export default App
