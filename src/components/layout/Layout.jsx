import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Layout() {
  return (
   <main className="w-full">
      <div className='border  bg-white'>
        <Topbar />
      </div>
      
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
        
        <Outlet />

        <Footer />
   </main>
  )
}

export default Layout
