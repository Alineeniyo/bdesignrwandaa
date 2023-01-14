import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './home/hero'
const Layout = ({children}) => {
  return (
    <div className='overflow-hidden'>
     <Navbar/>
      {children}
     <Footer/>
    </div>
  )
}

export default Layout