import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


import { MdFoodBank } from "react-icons/md";
import { CgMenuCheese } from "react-icons/cg";
import { ShopContext } from '../components/Context';


const Navbar = () => {

  const { sidebar, setSidebar } = useContext(ShopContext)

  return (
    <nav className='w-full h-16  border-opacity-65 rounded-md flex flex-row items-center justify-around'>
      <div>
        <a href="/" className='text-2xl font-semibold flex flex-row items-center justify-center gap-2 '><span className='text-orange-500 text-2xl'><MdFoodBank /></span> Flavor</a>
      </div>
      <div className='w-auto h-16 flex flex-row items-center justify-center gap-2'>

        <Link className='px-4 h-full hover:border-b-2 border-orange-400 flex items-center justify-center' to='/' >Home</Link>
        <Link className='px-4 h-full hover:border-b-2 border-orange-400 flex items-center justify-center' to='/menu' >Menu</Link>
        <Link className='px-4 h-full hover:border-b-2 border-orange-400 flex items-center justify-center' to='/order' >Order</Link>
      </div>

      <div className='w-auto h-16 flex flex-row items-center justify-center gap-4'>
        <Link className='px-4 p-1 bg-orange-400 text-white rounded-lg' to='/reserve'>Reserve</Link>
        <p className='text-3xl text-orange-500' onClick={() => setSidebar(!sidebar)}><CgMenuCheese /></p>
      </div>

    </nav>
  )
}

export default Navbar
