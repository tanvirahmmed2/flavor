import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Intro = () => {
  const { foodItems } = useContext(ShopContext)
  const [randomImage, setRandomImage] = useState(null)

  useEffect(() => {
    if (foodItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * foodItems.length)
      setRandomImage(foodItems[randomIndex])
    }
  }, [foodItems])

  return (
    <div className="relative w-full h-[300px]">
      <img
        src={randomImage?.image || '/fallback.jpg'}
        alt={randomImage?.name || 'Food banner'}
        className="w-full h-full object-cover blur-[1px] rounded-md"
      />

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-4">
        <Link className="px-6 w-[300px] text-center py-2 shadow-md font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500 transition" to="/menu">
          Menu
        </Link>
        <Link className="px-6 w-[300px] text-center py-2 shadow-md font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500 transition" to="/">
          Order on spot
        </Link>
        <Link className="px-6 w-[300px] text-center py-2 shadow-md font-semibold text-white bg-orange-400 rounded-md hover:bg-orange-500 transition" to="/">
          Home Delivery
        </Link>
      </div>
    </div>
  )
}

export default Intro
