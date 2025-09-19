import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import SideBar from './layout/SideBar'

const App = () => {
  return (
    <div className='w-full px-0 md:px-12'>
      <div className='w-full '>
        <Navbar />
        <SideBar />
        <div className='w-full min-h-screen flex items-center justify-center py-12'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
