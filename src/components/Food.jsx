import React, { useContext } from 'react'
import { ShopContext } from './Context'
import { useParams } from 'react-router-dom'

const Food = () => {
    const { name } = useParams()
    const { foodItems } = useContext(ShopContext)
    const food = foodItems.find((food) => food.name === name)
    return (
        <section className='w-3/4 border-2 border-black/30 rounded-md h-full flex flex-col md:flex-row items-center justify-center gap-6 p-4'>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <img src={food.image} alt="" className='rounded-md' />
                <p>{food.name}</p>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-2'>
                <p className='px-4 p-1 bg-green-500 text-white rounded-2xl'>{food.category}</p>
                <h1 className='text-3xl font-semibold'>{food.name}</h1>
                <p>{food.description}</p>

                <p className='italic'>⭐Rating: {food.rating}/5</p>
                <div className='flex flex-row gap-6'>
                    <p>Old Price: ${food.old_price}</p>
                    <p>New Price: ${food.new_price}</p>
                </div>
                <p>Quantity:
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </p>
                <div className='w-auto flex flex-row gap-4'>
                    <button className='px-4 p-1 bg-blue-100 rounded-md'>save</button>
                    <button className='px-4 p-1 bg-red-500 text-white rounded-md'>Add to cart</button>
                </div>


            </div>

        </section>
    )
}

export default Food
