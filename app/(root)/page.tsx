import React from 'react'
import HeaderBox from '@/components/HeaderBox'

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
      </div>
    </section>
  )
}

export default Home