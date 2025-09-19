import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


import { ShopContext } from '../components/Context'
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";

const SideBar = () => {
  const { sidebar, setSidebar } = useContext(ShopContext)
  return (
    <div className={`w-[250px] select-none min-h-screen ${sidebar ? "translate-x-0" : "-translate-x-full"} transform transition-transform duration-300 ease-in-out  flex flex-col items-center justify-between py-12 bg-white fixed top-0 z-50 `}>
      <div className='w-auto h-auto flex flex-col items-start justify-start gap-4'>

        <a href="/" className='text-2xl font-semibold flex flex-row items-center justify-center gap-2 '><span className='text-orange-500 text-2xl'><MdFoodBank /></span> Flavor</a>

        <div className='w-auto flex flex-col gap-2'>
          <Link to='/' className='px-4 hover:scale-105 '>Home</Link>
          <Link to='/menu' className='px-4 hover:scale-105 '>Menu</Link>
          <Link to='/order' className='px-4 hover:scale-105 '>Order</Link>
          <Link to='/reserve' className='px-4 hover:scale-105 '>Reserve</Link>
          <Link to='/branches' className='px-4 hover:scale-105 '>Branches</Link>
          <Link to='/gallery' className='px-4 hover:scale-105 '>Gallery</Link>
          <Link to='/about' className='px-4 hover:scale-105 '>About</Link>
          <Link to='/contact' className='px-4 hover:scale-105 '>Contact</Link>
          <Link to='/saved' className='px-4 hover:scale-105 '>Saved</Link>
        </div>

      </div>

      <p className={`${sidebar ? 'flex' : 'hidden'} text-3xl text-orange-400 cursor-pointer`} onClick={() => setSidebar(!sidebar)}><IoMdArrowDropleftCircle /></p>

    </div>
  )
}

export default SideBar
