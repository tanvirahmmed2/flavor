import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Menu = () => {
    const [menuItem, setMenuItem] = useState("pizza")
    const { foodItems } = useContext(ShopContext)
    const selectedItems = foodItems.filter((food) => food.category === menuItem)

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <h1 className='text-xl font-semibold text-center'>Grab Delicious Foods</h1>
            <div className='w-full flex flex-col gap-2 '>
                <button onClick={() => setMenuItem("pizza")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "pizza" ? "bg-orange-500" : "bg-gray-300"}`} >Pizza</button>
                <button onClick={() => setMenuItem("burger")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "burger" ? "bg-orange-500" : "bg-gray-300"}`} >Burgers</button>
                <button onClick={() => setMenuItem("pasta")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "pasta" ? "bg-orange-500" : "bg-gray-300"}`} >Pasta</button>
                <button onClick={() => setMenuItem("salad")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "salad" ? "bg-orange-500" : "bg-gray-300"}`} >Salads</button>
                <button onClick={() => setMenuItem("drinks")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "drinks" ? "bg-orange-500" : "bg-gray-300"}`} >Drinks</button>
                <button onClick={() => setMenuItem("dessert")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "dessert" ? "bg-orange-500" : "bg-gray-300"}`} >Desserts</button>
            </div>
            <p className='text-2xl font-semibold text-center'>Select your most favourite {menuItem}</p>
            <div className='w-full flex flex-wrap justify-center gap-4 md:gap-2 '>
                {
                    selectedItems.map((food) => {
                        const { name, id, image, new_price } = food
                        return <div key={id} className='sm:w-[200px] lg:w-[300px] relative w-full h-[220px] lg:[250px] rounded-md overflow-hidden group'>
                            <img src={image} alt=""  className='w-full h-full object-cover'/>
                            <div className='w-full  flex-row items-center justify-around absolute bottom-0 bg-white/90 p-1 hidden group-hover:flex'>
                                <p>Price: {new_price}</p>
                                <Link to={`/menu/${name}`} className='font-semibold text-orange-600'>{name}</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Menu
