import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import SideBar from './layout/SideBar'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden relative'>
      <Navbar />
      <SideBar/>
      <div className='w-full min-h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
