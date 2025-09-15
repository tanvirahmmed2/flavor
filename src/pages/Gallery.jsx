import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { ShopContext } from '../components/Context'

const Gallery = () => {
    const {foodItems}= useContext(ShopContext)
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-semibold text-center'>Explore our photo gallery</h1>
        <div className='w-full flex flex-wrap justify-center gap-6 p-4'>
            {
                foodItems.map((food)=>{
                    const {image, name, id}= food
                    return(
                        <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.6}} key={id}>

                            <Link to={`/foods/${name}`}>
                                <img src={image} alt=""  className='w-[150px] h-[200px] object-cover rounded-md'/>
                            </Link>
                        </motion.div>
                    )
                })
            }

        </div>

    </section>
  )
}

export default Gallery
