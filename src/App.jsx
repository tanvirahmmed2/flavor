import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import SideBar from './layout/SideBar'
import Gallery from './pages/Gallery'
import Food from './components/Food'

const App = () => {
  return (
    <div className='w-full px-0 md:px-12'>
      <div className='w-full '>
        <Navbar />
        <SideBar />
        <div className='w-full min-h-[80vh] flex items-center justify-center my-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/menu/:name' element={<Food/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
