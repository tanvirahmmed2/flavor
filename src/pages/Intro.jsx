import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Intro = () => {
  const {foodItems}=useContext(ShopContext)
  return (
    <div className='w-full relative h-[300px]'>
      <img src={foodItems[4].image} alt="" className='w-full h-[300px] object-cover blur-[1px]'/>
      <div className='w-full absolute top-1/2 flex items-center justify-center flex-col md:flex-row px-2 md:px-16 text-center gap-4'>
        <Link className='w-full p-1 shadow-md shadow-white font-semibold text-white bg-orange-400 rounded-md' to='/menu'>Menu</Link>
        <Link className='w-full p-1 shadow-md shadow-white font-semibold text-white bg-orange-400 rounded-md' to='/'>Order on spot</Link>
        <Link className='w-full p-1 shadow-md shadow-white font-semibold text-white bg-orange-400 rounded-md' to='/'>Home Delivery</Link>

      </div>


    </div>
  )
}

export default Intro
