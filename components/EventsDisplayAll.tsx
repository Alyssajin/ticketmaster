import React from 'react'
import EventCard from './EventCard'

const EventsDisplayAll = ({ category }: EventsDisplayAllProps) => {
    const events = [
        {
            name: 'Event 1',
            date: '2021-09-01',
            location: 'Location 1',
            description: 'Description 1',
            status: 'Status 1',
            category: 'Music',
            image: '#'
        },
        {
            name: 'Event 2',
            date: '2021-09-02',
            location: 'Location 2',
            description: 'Description 2',
            status: 'Status 2',
            category: 'Sports',
            image: '#'
        },
        {
            name: 'Event 3',
            date: '2021-09-03',
            location: 'Location 3',
            description: 'Description 3',
            status: 'Status 3',
            category: 'Arts',
            image: '#'
        },
        {
            name: 'Event 4',
            date: '2021-09-04',
            location: 'Location 4',
            description: 'Description 4',
            status: 'Status 4',
            category: 'Food & Drink',
            image: '#'
        }
    ]

    return (
        <section className='events-display-all'>
            <div className='events-display-all-contents flex gap-5 w-full justify-between'>
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        name={event.name}
                        date={event.date}
                        location={event.location}
                        description={event.description}
                        status={event.status}
                        category={event.category}
                    />
                ))}
            </div>
        </section>
    )
}

export default EventsDisplayAll