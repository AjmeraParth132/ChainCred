import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Home from './home/home'
import Login from './components/login'


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App
