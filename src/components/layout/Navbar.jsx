

import React from 'react'
import { NavLink } from 'react-router-dom'

import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <NavLink to={"about"}>1st menu item</NavLink>,
    key: '0',
  },
  {
    label: <NavLink to={"contact"}>2nd menu item</NavLink>,
    key: '1',
  }
];

function Navbar() {
  return (
    <main className="w-full bg-white">
        <nav className="max-w-7xl mx-auto h-full flex justify-between shadow-sm">
            <div className='h-14'>
                
                <img className='w-full h-full object-cover' src="https://khodedev.com/wp-content/uploads/2023/12/cropped-Logo-KHODEDEV-1024x1024-1-scaled-2-1536x1536.jpg" alt="" />
            </div>
            <div className='p-3'>
                <ul className="flex space-x-10 text-lg">
                    <NavLink to="/" className="text-gray-700">Home</NavLink>
                    <NavLink to="about" className="text-gray-700">About</NavLink>
                    <NavLink to="contact" className="text-gray-700">Servie</NavLink>
                    <NavLink to="" className="text-gray-700">Blog</NavLink>

                    <div className="space-x-2">
                        <button className="bg-white hover:bg-gray-800 duration-200 border text-gray-600 hover:text-white px-3 py-1 rounded text-sm">Sign Up</button>
                    </div>
                    <div>
                    <Dropdown
                        menu={{
                        items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Click me
                            
                        </Space>
                        </a>
                    </Dropdown>
                    </div>
                </ul>
            </div>
        </nav>
    </main>
  )
}

export default Navbar

