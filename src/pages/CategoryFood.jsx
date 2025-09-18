import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryFood = () => {
    const {category}= useParams()
  return (
    <div>
        <h1>{category}</h1>
      
    </div>
  )
}

export default CategoryFood
