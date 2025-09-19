import React from 'react'
import Intro from '../pages/Intro'
import Menu from '../pages/Menu'
import Reserve from '../pages/Reserve'
import Contact from '../pages/Contact'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8'>
      <Intro/>
      <Menu/>
      <Reserve/>
      <Contact/>
    </div>
  )
}

export default Home
