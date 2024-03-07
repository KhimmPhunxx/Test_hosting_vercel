import React, { useEffect } from 'react'

import { GiTeacher } from "react-icons/gi";
import { FaHtml5, FaMobile } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])


    const card = [
        {
            id : 1,
            title: "Training",
            desc: "Master Mobile and Web Development with our focused Course Training. Accelerate your skills for success.",
            icont: <GiTeacher />,
        },
        {
            id : 2,
            title: "Web Development",
            desc: "Bringing your online vision to life with Khodedev's expertise. We build dynamic and responsive websites tailored to your needs.",
            icont: <FaHtml5 />
        },
        {
            id : 3,
            title: "Mobile Development",
            desc: "Empowering ideas with Khodedev. Crafting innovative, user-friendly mobile applications for seamless on-the-go experiences.",
            icont: <FaMobile />
        }
    ]


  return (
    <div className='grid grid-cols-3 max-w-4xl mx-auto'>
        {
            card.map((item) => {
                return (
                    <div key={item.id} className='p-5' data-aos='fade-right'>
                        <div className='bg-white p-5 py-16 rounded-lg shadow-md'>
                            <div className='flex justify-center items-center'>
                                <div className='p-3 bg-blue-500 rounded-full text-white'>
                                    {item.icont}
                                   
                                </div>
                            </div>
                            <div className='pt-5'>
                                <h1 className='text-lg font-bold text-gray-800 text-center'>{item.title}</h1>
                                <p className='text-gray-600 text-center text-md line-clamp-4'>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Cards
