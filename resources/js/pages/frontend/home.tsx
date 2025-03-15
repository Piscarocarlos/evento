import ListEvents from '@/components/frontend/events/list-events'
import Hero from '@/components/frontend/home/hero'
import FrontLayout from '@/components/frontend/layouts/front-layout'
import React from 'react'

function Home({categories}: any) {
    return (
        <FrontLayout>
            <Hero/>
            <ListEvents categories={categories} />
        </FrontLayout>
    )
}

export default Home
