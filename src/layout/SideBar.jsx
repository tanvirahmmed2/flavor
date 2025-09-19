import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";
import { ShopContext } from '../components/Context'

import { MdFoodBank } from "react-icons/md";

const SideBar = () => {
  const { sidebar, setSidebar } = useContext(ShopContext)
  return (
    <div className={`w-[250px] select-none min-h-screen ${sidebar ? "translate-x-0" : "-translate-x-full"} transform transition-transform duration-300 ease-in-out  flex flex-col items-center justify-between py-12 bg-white fixed top-0 z-50 `}>
      <div className='w-auto h-auto flex flex-col items-start justify-start gap-4'>
        
        <a href="/" className='text-2xl font-semibold flex flex-row items-center justify-center gap-2 '><span className='text-orange-500 text-2xl'><MdFoodBank /></span> Flavor</a>

        <div className='w-auto flex flex-col gap-2'>
          <Link to='/' className='px-4 hover:px-5 '>Home</Link>
        <Link to='/menu' className='px-4 hover:px-5 '>Menu</Link>
        <Link to='/order' className='px-4 hover:px-5 '>Order</Link>
        <Link to='/reserve' className='px-4 hover:px-5 '>Reserve</Link>
        </div>

      </div>

      <p className={`${sidebar ? 'flex' : 'hidden'} text-xl cursor-pointer`} onClick={() => setSidebar(!sidebar)}><RxCross2 /></p>

    </div>
  )
}

export default SideBar
