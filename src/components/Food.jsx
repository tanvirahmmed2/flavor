import React, { useContext } from 'react'
import { ShopContext } from './Context'
import { useParams } from 'react-router-dom'

const Food = () => {
  const { name } = useParams()
  const { foodItems, addToCart } = useContext(ShopContext)
  const food = foodItems.find((item) => item.name === name)

  if (!food) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Food item not found 😢</p>
      </div>
    )
  }

  return (
    <section className="w-11/12 md:w-3/4 mx-auto my-10 border border-gray-200 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-white">
      
      {/* Food image */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4">
        <img
          src={food.image}
          alt={food.name}
          className="rounded-lg shadow-md object-cover w-full max-h-[400px]"
        />
      </div>

      {/* Food details */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
        <span className="px-4 py-1 text-sm font-medium bg-green-500 text-white rounded-full">
          {food.category}
        </span>

        <h1 className="text-3xl font-semibold text-gray-800">{food.name}</h1>
        <p className="text-gray-600">{food.description}</p>

        <p className="italic text-yellow-600">⭐ Rating: {food.rating}/5</p>

        <div className="flex items-center gap-6">
          <p className="line-through text-gray-400 text-lg">${food.old_price}</p>
          <p className="text-2xl text-orange-600 font-bold">${food.new_price}</p>
        </div>

        

        <div className="flex gap-4 mt-2">
          <button className="px-4 py-2 border border-blue-300 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition">
            Save
          </button>
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md transition" onClick={() => addToCart(food.id)}>
            Add to Cart
          </button>
        </div>
      </div>

    </section>
  )
}

export default Food
