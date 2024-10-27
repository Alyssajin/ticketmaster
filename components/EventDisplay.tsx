import React from 'react'

const EventDisplay = ({ name, date, location, description, status, category } : EventDisplayProps) => {
  return (
    <section className='event-display'>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
        <p>{status}</p>
        <p>{category}</p>

    </section>

  )
}

export default EventDisplay