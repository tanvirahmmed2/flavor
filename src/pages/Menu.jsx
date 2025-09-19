import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../components/Context'

const Menu = () => {
    const [menuItem, setMenuItem] = useState("Desserts")
    const { foodItems } = useContext(ShopContext)

    const selectedItems = foodItems.filter((food) => food.category === menuItem)

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <h1 className='text-xl font-semibold text-center'>Grab your favourite Foods</h1>
            <div className='w-full flex flex-col gap-2 p-6'>
                <button onClick={() => setMenuItem("Pizza")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Pizza" ? "bg-orange-500" : "bg-gray-300"}`} >Pizza</button>
                <button onClick={() => setMenuItem("Burgers")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Burgers" ? "bg-orange-500" : "bg-gray-300"}`} >Burgers</button>
                <button onClick={() => setMenuItem("Pasta")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Pasta" ? "bg-orange-500" : "bg-gray-300"}`} >Pasta</button>
                <button onClick={() => setMenuItem("Salads")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Salads" ? "bg-orange-500" : "bg-gray-300"}`} >Salads</button>
                <button onClick={() => setMenuItem("Drinks")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Drinks" ? "bg-orange-500" : "bg-gray-300"}`} >Drinks</button>
                <button onClick={() => setMenuItem("Desserts")} className={`px-0 md:px-4 w-auto text-white rounded-md py-3 ${menuItem === "Desserts" ? "bg-orange-500" : "bg-gray-300"}`} >Desserts</button>
            </div>
            <div className='w-full relative h-[200px] p-6'>
                <img src={selectedItems[1].image} alt="" className='w-full h-full object-cover opacity-20'/>
                <p className='w-full text-center absolute top-1/2 text-xl font-bold text-orange-400'>Select most favourite {menuItem}</p>

            </div>
            <div className='w-full flex flex-wrap justify-center gap-2 p-2'>
                {
                    selectedItems.map((food) => {
                        const { name, id, image, new_price } = food
                        return <div key={id} className='sm:w-[200px] lg:w-[300px] relative w-full h-[220px] lg:[250px] rounded-md overflow-hidden group'>
                            <img src={image} alt=""  className='w-full h-full object-cover'/>
                            <div className='w-full  flex-row items-center justify-around absolute bottom-0 bg-white p-1 hidden group-hover:flex'>
                                <p>Price: {new_price}</p>
                                <Link to={`/menu/${name}`} className='font-semibold text-orange-400'>{name}</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Menu
