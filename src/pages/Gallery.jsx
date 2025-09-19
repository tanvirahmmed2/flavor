import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Gallery = () => {
    const {foodItems}= useContext(ShopContext)
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8'>
        <h1 className='text-xl font-semibold text-center text-orange-400'>Explore Our Food Gallery</h1>
        <div className='w-full flex flex-wrap justify-center gap-4'>
            {
                foodItems.map((food)=>{
                    const {name, id, image}= food
                    return <div key={id} className='w-[170px] h-[250px] group overflow-hidden rounded-md relative'>
                        <img src={image} alt="" className='w-full h-full object-cover group-hover:scale-110 transition duration-500'/>
                        <Link to={`/menu/${name }`} className='w-full text-center absolute bottom-0 text-white bg-orange-400 font-semibold p-1 group-hover:inline-block hidden transition duration-500'>{name }</Link>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Gallery