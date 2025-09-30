import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../components/Context'

const Cart = () => {
  const { cartItem, removeFromCart, getTotalAmount, user } = useContext(ShopContext)

  const [problem, setProblem] = useState('')

  const [order, setOrder] = useState({
    userId: user?._id || '',
    name: user?.name || 'Guest',
    details: cartItem,
    deliverymethod: 'dinein',
    paymethod: 'bkash',
    totalAmount: 0,
    phone: user?.phone || '',
    address: '',
  })

  useEffect(() => {
    setOrder((prev) => ({ ...prev, totalAmount: getTotalAmount(), details: cartItem }))
  }, [cartItem, getTotalAmount])

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrder((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!order.userId || !order.details.length || !order.phone) {
      setProblem("Please login and add items to cart first")
      return
    }

    try {
      const res = await fetch('http://localhost:5000/order/ordernow', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json', // fixed typo here
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      const data = await res.json()
      setProblem(data.message)
      if (data.success) {
        setOrder({
          userId: user?._id || '',
          email: user?.email || '',
          name: user?.name || 'Guest',
          details: cartItem,
          deliverymethod: 'dinein',
          paymethod: 'bkash',
          totalAmount: 0,
          phone: user?.phone || '',
          address: '',
        })
      }
    } catch (error) {
      setProblem(error.message + ' failed to submit order')
    }
  }

  return (
    <div className="w-3/4 flex flex-col items-center gap-6 py-6 text-xs md:text-base">
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
            const { name, new_price, quantity, _id } = item
            return (
              <div
                key={_id}
                className="w-full grid grid-cols-4 text-center items-center border-b border-gray-200 py-3 hover:bg-gray-50 transition"
              >
                <h1 className="font-medium">{name}</h1>
                <p>{quantity}</p>
                <p className="text-green-600 font-semibold">${new_price * quantity}</p>
                <p
                  onClick={() => removeFromCart(_id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                >
                  Remove
                </p>
              </div>
            )
          })}
        </div>
      )}

      {cartItem.length > 0 && (
        <div className="flex flex-col items-start gap-3 mt-4 bg-gray-50 p-6 rounded-md w-full max-w-md">
          <p>Name: {order.name}</p>
          <p>Total amount: <span className="text-green-600">${order.totalAmount}</span></p>

          <select
            name="deliverymethod"
            value={order.deliverymethod}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="dinein">Dine in</option>
            <option value="homedelivery">Home delivery</option>
          </select>

          <select
            name="paymethod"
            value={order.paymethod}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="bkash">Bkash</option>
            <option value="nagad">Nagad</option>
            <option value="card">Card</option>
          </select>

          {order.deliverymethod === 'homedelivery' && (
            <input
              type="text"
              name="address"
              value={order.address}
              placeholder="Your address"
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          )}
          <input
            type="text"
            name="phone"
            value={order.phone}
            placeholder="Enter your phone"
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full"
          >
            Order now!
          </button>
          <p>{problem}</p>
        </div>
      )}
    </div>
  )
}

export default Cart
