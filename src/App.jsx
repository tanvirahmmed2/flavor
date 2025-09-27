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
import Reserve from './pages/Reserve'
import Contact from './pages/Contact'
import Saved from './pages/Saved'
import Review from './pages/Review'
import Error from './pages/Error'
import Order from './pages/Order'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-full '>
        <Navbar />
        <SideBar />
        <div className='w-full min-h-[80vh] flex items-center justify-center my-20 p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='saved' element={<Saved/>} />
            <Route path='/reserve' element={<Reserve/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/menu/:name' element={<Food/>} />
            <Route path='/review' element={<Review/>} />
            <Route path='/orders' element={<Order/>} />
            <Route path='/*' element={<Error/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
