import React from 'react'

import Login from '../components/login'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Dashboard from '../components/dashboard/dashboard'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='mt-[70px] mb-0'>
      <Dashboard />
      </div>
     
    </div>
  )
}

export default Home
