"use client";
import React from 'react'

const EventCategory = () => {
    const categories = ["Music", "Sports", "Arts", "Food & Drink"]
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const category = e.currentTarget.querySelector('h2')?.textContent
        console.log(category)
    }
    return (
        <section className='event-category'>
            <div className='event-category-content flex'>
                {categories.map((category, index) => (
                    <div key={index} className='event-category-item ' onClick={handleClick}>
                        <img src="#" alt={category} />
                        <h2>{category}</h2>
                        <p>Find the best {category.toLowerCase()} events in your area</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EventCategory