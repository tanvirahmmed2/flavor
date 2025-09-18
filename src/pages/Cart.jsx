import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Cart = () => {
  const { cartItem, removeFromCart } = useContext(ShopContext)

  return (
    <div className='w-3/4 flex flex-col items-center justify-center gap-6'>
      <h1>Cart</h1>
      <div className='w-full grid grid-cols-4 justify-items-center'>
        <h1>Name</h1>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      {
        !cartItem ? <p>cart data not found</p> : <div className='w-full'>
          {cartItem.map((item) => {
            const { name, new_price, quantity, id } = item
            return <div key={id} className='w-full grid grid-cols-4 justify-items-center'>
              <h1>{name}</h1>

              <p>{quantity}</p>
              <p>${new_price*quantity}</p>
              <p onClick={()=> removeFromCart(id)}>Remove</p>
            </div>

          })}
        </div>
      }

    </div>
  )
}

export default Cart
