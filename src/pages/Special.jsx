import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Special = () => {
    const {foodItems}= useContext(ShopContext)
    const selectedItems= foodItems.slice(1,5)
  return (
    <section className='w-full flex flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-semibold text-center'>Our special food items</h1>
        <div className='w-full flex flex-wrap justify-center gap-4 p-4'>
            {
                selectedItems.map((food)=>{
                    const {name, id, image}= food
                    return(
                        <div key={id} className='w-[400px] h-auto m-12 md:m-0 flex flex-col items-center justify-center gap-2'>
                            <img src={image} alt=""  className='w-full h-[300px] object-cover rounded-md'/>
                            
                            <Link to={`/foods/${name}`} className='w-full text-center text-lg font-semibold'>{name}</Link>
                        </div>
                    )
                })
            }

        </div>

      
    </section>
  )
}

export default Special
