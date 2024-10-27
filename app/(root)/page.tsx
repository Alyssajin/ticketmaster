import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import Hero from '@/components/Hero'
import EventCategory from '@/components/EventCategory'
import EventsDisplayAll from '@/components/EventsDisplayAll'

const Home = () => {
  const loggedIn = { firstName: 'John', lastName: 'Doe' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='home'
            user={loggedIn?.firstName || 'Guest'}
          />
        </header>
        <Hero />
        <EventCategory />
      </div>
      {/* footer */}
    </section>
  )
}

export default Home