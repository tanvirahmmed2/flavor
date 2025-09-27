import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../components/Context'

const Review = () => {

  const {review}= useContext(ShopContext)
  return (
    <section className='w-full flex-col flex items-center justify-center gap-4'>
      {
        review===null? <p>no review found</p>: <div className='w-full flex flex-row items-center justify-center gap-2'>
          <h1>Name:</h1>
          <p>review</p>
        </div>
    }
    </section>
  )
}

export default Review
