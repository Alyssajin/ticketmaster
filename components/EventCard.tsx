"use client";
import React from 'react'

const EventCard = ({ name, date, location, description, status, category }: EventCardProps) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.querySelector('h2')?.textContent
        console.log(title)
    }
    return (
        <div className='event-card' onClick={handleClick}>
            <img src='#' alt={name} />
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <p>{description}</p>
            <p>{status}</p>
            <p>{category}</p>
        </div>
    )
}

export default EventCard