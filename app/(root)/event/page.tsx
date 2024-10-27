import EventDisplay from '@/components/EventDisplay'
import React from 'react'

const page = () => {
    const event = {
        id: '1',
        name: 'Event Name',
        date: '2021-01-01',
        location: 'Event Location',
        description: 'Event Description',
        status: 'Event Status',
        category: 'Event Category'
    }
    return (
        <>
            <EventDisplay
                id={event.id}
                name={event.name}
                date={event.date}
                location={event.location}
                description={event.description}
                status={event.status}
                category={event.category}
            />
        </>
    )
}

export default page