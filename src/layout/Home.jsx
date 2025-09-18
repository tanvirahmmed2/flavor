import React from 'react'
import Intro from '../pages/Intro'
import Special from '../pages/Special'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12'>
      
      <Intro/>
      <Special/>
    </div>
  )
}

export default Home
