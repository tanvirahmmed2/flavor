import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import SideBar from './layout/SideBar'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import Food from './components/Food'
import Menu from './pages/Menu'

const App = () => {
  return (
    <div className='w-full '>
      <div className='w-full '>
        <Navbar />
        <SideBar />
        <div className='w-full min-h-[80vh] flex items-center justify-center my-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/order' element={<Cart/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/menu/:name' element={<Food/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
