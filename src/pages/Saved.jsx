import React, { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Saved = () => {
  const { savedItem, removeFromSave, addToCart } = useContext(ShopContext)
  
    return (
      <div className='w-3/4 flex flex-col items-center justify-center gap-6'>
        <h1>Saved Items</h1>
        <div className='w-full grid grid-cols-4 justify-items-center'>
          <h1>Name</h1>
          <p>Price</p>
          <p>Add to Cart</p>
          <p>Remove</p>
        </div>
        {
          !savedItem ? <p>Saved data not found</p> : <div className='w-full'>
            {savedItem.map((item) => {
              const { name, new_price, id } = item
              return <div key={id} className='w-full grid grid-cols-4 justify-items-center'>
                <h1>{name}</h1>
  
                <p>${new_price}</p>
                <p onClick={()=> addToCart(id)}>Click here</p>
                <p onClick={()=> removeFromSave(id)}>Remove</p>
              </div>
  
            })}
          </div>
        }
  
      </div>
    )
}

export default Saved
