import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Cart = () => {
  const { cartItem, removeFromCart, getTotalAmount } = useContext(ShopContext)

  return (
    <div className="w-3/4 flex flex-col items-center gap-6 py-6">
      <h1 className="text-2xl font-bold text-gray-800">Cart</h1>

      <div className="w-full grid grid-cols-4 text-center font-semibold bg-gray-100 p-3 rounded-lg">
        <h1>Name</h1>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>

      {!cartItem || cartItem.length === 0 ? (
        <p className="text-gray-500 italic">Cart data not found</p>
      ) : (
        <div className="w-full">
          {cartItem.map((item) => {
            const { name, new_price, quantity, id } = item
            return (
              <div
                key={id}
                className="w-full grid grid-cols-4 text-center items-center border-b border-gray-200 py-3 hover:bg-gray-50 transition"
              >
                <h1 className="font-medium">{name}</h1>
                <p>{quantity}</p>
                <p className="text-green-600 font-semibold">
                  ${new_price * quantity}
                </p>
                <p
                  onClick={() => removeFromCart(id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                >
                  Remove
                </p>
              </div>
            )
          })}
        </div>
      )}

      <div className="flex flex-col items-center gap-3 mt-4">
        <p className="text-lg font-semibold text-gray-800">
          Total amount: <span className="text-green-600">${getTotalAmount()}</span>
        </p>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Pay now!
        </button>
      </div>
    </div>
  )
}

export default Cart
