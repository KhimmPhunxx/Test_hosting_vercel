import React from 'react'
import Hero_Section from '../../components/home_page/hero_sections/Hero_Section'
import Cards from '../../components/home_page/cards/Cards'
import Information from '../../components/home_page/info/Information'

function HomePage() {
  return (
   <main>
      <section className=''>
        <Hero_Section />
      </section>

      <section className='mt-10'>
       <Cards />
      </section>

      <section className='mt-10'>
       <Information />
      </section>

      
   </main>
  )
}

export default HomePage
