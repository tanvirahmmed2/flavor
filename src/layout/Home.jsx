import React from 'react'
import Intro from '../pages/Intro'
import Menu from '../pages/Menu'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8'>
      <Intro/>
      <Menu/>
    </div>
  )
}

export default Home
