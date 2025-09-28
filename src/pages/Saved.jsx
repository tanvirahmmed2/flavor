import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Saved = () => {
  const { savedItem, removeFromSave, addToCart } = useContext(ShopContext)

  return (
    <div className="w-3/4 flex flex-col items-center gap-6 py-6 text-[10px] md:text-base">
      <h1 className="text-2xl font-bold text-gray-800">Saved Items</h1>

      <div className="w-full grid grid-cols-4 text-center font-semibold bg-gray-100 p-3 rounded-lg">
        <h1>Name</h1>
        <p>Price</p>
        <p>Add to Cart</p>
        <p>Remove</p>
      </div>

      {!savedItem || savedItem.length === 0 ? (
        <p className="text-gray-500 italic">Saved data not found</p>
      ) : (
        <div className="w-full">
          {savedItem.map((item) => {
            const { name, new_price, id } = item
            return (
              <div
                key={id}
                className="w-full grid grid-cols-4 text-center items-center border-b border-gray-200 py-3 hover:bg-gray-50 transition"
              >
                <h1 className="font-medium">{name}</h1>
                <p className="text-green-600 font-semibold">${new_price}</p>
                <p
                  onClick={() => addToCart(id)}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                >
                  Click here
                </p>
                <p
                  onClick={() => removeFromSave(id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                >
                  Remove
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Saved
