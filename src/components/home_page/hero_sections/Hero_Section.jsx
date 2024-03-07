import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero_Section() {

    useEffect(() => {
        AOS.init({
            duration: 900
        })

    }, [])

  return (
    <main className='w-full mx-auto h-[500px] bg-slate-100'>
        <div className='max-w-7xl mx-auto h-full  grid grid-cols-2' data-aos="fade-up">
            <div className='text'> 
                <div className='pt-24 w-[70%] space-y-12'>
                    <h1 className=' text-4xl font-bold text-gray-800'>Shaping Futures with Expertly Crafted Software Solutions</h1>
                    <p className='text-md text-gray-600 font-[400]'>We offer high speed, unparalleled security and 24/7 support.</p>
                    <div className='space-x-4'>
                        <button className='py-4 rounded-lg px-7 bg-blue-500 text-white' >Request demo</button>
                        <button className='py-4 rounded-lg px-7 bg-gray-200 text-gray-700' >Request demo</button>
                    </div>
                </div>
            </div>

            <div className='p-5'>
               <img className=' pt-20' src="https://khodedev.com/wp-content/themes/prespa-pro/assets/img/patterns/header-illustration.png" alt="" />
            </div>
        </div>
    </main>
  )
}

export default Hero_Section
