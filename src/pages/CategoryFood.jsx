import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const CategoryFood = () => {
    const { category } = useParams()
    const { foodItems } = useContext(ShopContext)
    const selectedFood = foodItems.filter((food) => food.category === category)
    return (
        <div className='w-full flex flex-col items-center justify-start gap-6'>
            <h1 className='text-2xl font-semibold'>{category}</h1>
            <div className='w-full flex flex-wrap justify-center gap-4'>
                {
                    selectedFood.map((food) => {
                        const { name, image, id, old_price, new_price } = food
                        return <div key={id} className='w-[240px] relative group h-[300px] shadow-sm shadow-orange-300 overflow-hidden flex flex-col items-center justify-center rounded-md'>
                            <img src={image} alt="" className='w-[240px] h-[300px] object-cover' />
                            <div className='absolute bg-white w-full h-auto flex opacity-70 group-hover:opacity-100 transition duration-500 flex-col items-center justify-center bottom-0 py-2'>
                                <Link to={`/foods/${name}`} className='w-full text-center text-xl font-semibold'>{name}</Link>
                                <div className='w-full flex flex-row items-center justify-between p-2'>
                                    <p>Price: </p>
                                    <p className=' line-through text-orange-600'>${old_price}</p>
                                    <p className='text-xl'>${new_price}</p>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default CategoryFood
