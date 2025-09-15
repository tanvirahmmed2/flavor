import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";
import { GiMeal } from "react-icons/gi";
import { ShopContext } from '../components/Context'

const SideBar = () => {
  const { sidebar, setSidebar } = useContext(ShopContext)
  return (
    <div className={`w-[250px] min-h-screen ${sidebar ? "translate-x-0" : "-translate-x-full"} transform transition-transform duration-300 ease-in-out  flex flex-col items-center justify-between py-12 bg-white fixed top-0 border-r-2 z-50`}>
      <div className='w-auto h-auto flex flex-col items-start justify-start gap-4'>

        <a href="/" className='text-3xl font-semibold flex flex-row h-16 items-center justify-center gap-3'> <span className='text-red-500'><GiMeal /></span> Flavor</a>
        <Link to='/special'  className='px-4 hover:px-6 '>Special</Link>
        <Link to='/offers'   className='px-4 hover:px-6 '>Offers</Link>
        <Link to='/about'    className='px-4 hover:px-6 '>About us</Link>
        <Link to='/location' className='px-4 hover:px-6 '>Loaction</Link>
        <Link to='/saved' className='px-4 hover:px-6 '>Saved</Link>
        <Link to='/cart' className='px-4     hover:px-6 '> Cart</Link>

      </div>

      <p className={`${sidebar ? 'flex' : 'hidden'} text-xl cursor-pointer`} onClick={() => setSidebar(!sidebar)}><RxCross2 /></p>

    </div>
  )
}

export default SideBar
