import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './layout/Home'
import SideBar from './layout/SideBar'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Food from './components/Food'
import Cart from './pages/Cart'
import Special from './pages/Special'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden relative'>
      <Navbar />
      <SideBar/>
      <div className='w-full min-h-screen mt-20 flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/foods/:name' element={<Food />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/special' element={<Special />} />
        </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
