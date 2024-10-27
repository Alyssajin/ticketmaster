
import EventsDisplayAll from '@/components/EventsDisplayAll'
import React from 'react'

const page = () => {
    const categories = ["Music", "Sports", "Arts", "Food & Drink"]
    return (
        <>
            <EventsDisplayAll category={categories[0]} />
        </>
    )
}

export default page