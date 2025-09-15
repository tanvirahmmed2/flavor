import React, { useContext } from 'react'

import { Link } from 'react-router-dom';


import { ShopContext } from '../components/Context'
import { FaBars } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { GiMeal } from "react-icons/gi";

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(ShopContext)
  return (
    <nav className='w-full h-16 flex flex-row items-center justify-around fixed top-0 border-b-2 z-40 bg-white'>
      <a href="/" className='text-3xl font-semibold flex flex-row h-16 items-center justify-center gap-3'> <span className='text-red-500'><GiMeal /></span> Flavor</a>
      <div className='w-auto h-16 hidden md:flex flex-row items-center justify-center gap-2 font-semibold'>
        <Link to='/special' className='px-4 hover:border-b-2  h-16 flex items-center justify-center border-red-700'>Special</Link>
        <Link to='/offers' className='px-4 hover:border-b-2  h-16 flex items-center justify-center border-red-700'>Offers</Link>
        <Link to='/about' className='px-4 hover:border-b-2  h-16 flex items-center justify-center border-red-700'>About us</Link>
        <Link to='/location' className='px-4 hover:border-b-2  h-16 flex items-center justify-center border-red-700'>Loaction</Link>

      </div>

      <div className=' w-auto h-16 flex flex-row items-center justify-center gap-4 font-semibold'>
        <p className='text-2xl px-3 cursor-pointer'><CiShoppingCart /></p>
        <p className={` text-xl  cursor-pointer`} onClick={() => setSidebar(!sidebar)}><FaBars /></p>
      </div>

    </nav>
  )
}

export default Navbar
