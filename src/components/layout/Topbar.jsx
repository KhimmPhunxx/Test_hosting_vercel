import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Topbar() {
  return (
   <main className='max-w-7xl mx-auto p-2 bg-white flex justify-between' >

        {/* iformation website */}
       <div className='flex space-x-8'>

         <NavLink className='flex space-x-1'>
            <IoLocationOutline className=' text-xl mt-[2px]' /> <h1>Phnom Penh</h1>
         </NavLink>

         <NavLink to={"mailto:example@gmail.com"} className='flex space-x-1'>
            <CiMail className=' text-xl mt-[2px]' />  <h1>example@gmail.com</h1>
         </NavLink>

       </div>

        {/* icon media */}
       <div className='flex space-x-4'>

            <NavLink target='_blank' to={"https://react-icons.github.io/react-icons/search/#q=facebook"} > <FaFacebookF className='text-xl text-gray-600' /></NavLink>
           
            <NavLink to={""}> <FaInstagram className='text-xl text-gray-600' /> </NavLink>

            <NavLink>  <FaTwitter className='text-xl text-gray-600' /> </NavLink>
            
            <NavLink> <FaLinkedinIn className='text-xl text-gray-600' /> </NavLink>
            

       </div>
   </main>
  )
}

export default Topbar
