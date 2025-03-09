import ListEvents from '@/components/frontend/events/list-events'
import Hero from '@/components/frontend/home/hero'
import FrontLayout from '@/components/frontend/layouts/front-layout'
import React from 'react'

function Home() {
    return (
        <FrontLayout>
            <Hero/>
            <ListEvents/>
        </FrontLayout>
    )
}

export default Home
