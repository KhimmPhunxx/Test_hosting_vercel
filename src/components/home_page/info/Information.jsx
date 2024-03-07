import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Information() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const data = [
        {
            id : 1,
            title : "Beautiful website design with modern UI",
            subtile : "Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.",
            image : "https://khodedev.com/wp-content/themes/prespa-pro/assets/img/patterns/how-it-works-part-1.png"
        },
        {
            id : 2,
            title : "Mobile app development with cutting-edge technology",
            subtile : "Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.",
            image : "https://khodedev.com/wp-content/themes/prespa-pro/assets/img/patterns/how-it-works-part-2.png"
        },
        {
            id : 3,
            title : "Training and mentorship for aspiring developers",
            subtile : "Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.",
            image : "https://khodedev.com/wp-content/themes/prespa-pro/assets/img/patterns/how-it-works-part-3.png"
        }

    ]

  return (
    <main className='max-w-5xl mx-auto border'>
        <h1 className=' text-center text-4xl font-bold text-gray-800'>Experience the Next Generation of Creativity</h1>
        <p className='text-center text-xl text-gray-600'>Elementum quia fugit cum euismod, varius hymenaeos.</p>
        {
            data.slice(0, 1).map((item) => {
                return (
                    <div key={item.id} className='grid grid-cols-2 p-5 gap-8' data-aos="fade-right">
                        <div>
                            <img className='w-full h-full object-cover' src={item.image} alt="" />
                        </div>
                        <div className='space-y-10'>
                            <h1 className='text-2xl font-bold text-gray-800'>{item.title}</h1>
                            <p className='text-gray-600 text-xl line-clamp-4'>{item.subtile}</p>

                            {/* create button for me  */}
                            <div className='flex space-x-3'>
                                <button className='py-3 px-6 bg-blue-500 text-white rounded-lg'>Get Started</button>
                            </div>
                        </div>

                    </div>
                )
            })
        }

        {
            data.slice(1, 2).map((item) => {
                return (
                    <div key={item.id} className='grid grid-cols-2 p-5 gap-8' data-aos="fade-left">
                        <div className=' space-y-10'>
                            <h1 className='text-2xl font-bold text-gray-800'>{item.title}</h1>
                            <p className='text-gray-600 text-md line-clamp-4'>{item.subtile}</p>
                            <div className='flex space-x-3'>
                                <button className='py-3 px-6 bg-blue-500 text-white rounded-lg'>Get Started</button>
                            </div>
                        </div>
                        <div>
                            <img className='w-full h-full object-cover' src={item.image} alt="" />
                        </div>
                    </div>
                )
            })
        }

        {
            data.slice(2, 3).map((item) => {
                return (
                    <div key={item.id} className='grid grid-cols-2 p-5 gap-8' data-aos="fade-up">
                        <div>
                            <img className='w-full h-full object-cover' src={item.image} alt="" />
                        </div>
                        <div className=' space-y-10'>
                            <h1 className='text-2xl font-bold text-gray-800'>{item.title}</h1>
                            <p className='text-gray-600 text-md line-clamp-4'>{item.subtile}</p>
                            <div className='flex space-x-3'>
                                <button className='py-3 px-6 bg-blue-500 text-white rounded-lg'>Get Started</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </main>
  )
}

export default Information
