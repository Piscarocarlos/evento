import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Event } from '@/types/event';
import { EventCard } from './event-card';



// Données d'exemple
const eventsData: Event[] = [
    {
        id: 1,
        title: "Festival de Jazz",
        description: "Un festival de jazz avec les meilleurs artistes internationaux",
        category: "music",
        date: "15 Avril 2025",
        time: "19:00",
        location: "Paris, France",
        price: "45€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 358
    },
];


// Composant principal de liste d'événements
const ListEvents = ({ categories }: any) => {
    const [activeTab, setActiveTab] = useState('all');

    // Filtrer les événements par catégorie
    const filteredEvents = activeTab === 'all'
        ? eventsData
        : eventsData.filter(event => event.category === activeTab);

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Événements à découvrir</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explorez notre sélection d'événements populaires par catégorie
                    </p>
                </div>

                {
                    categories?.map((category: any, index: any) => {
                        return <div key={index} className='mb-5'>
                            <h2 className='text-2xl mb-3 font-bold'>{category?.name}</h2>
                            <div>
                                {
                                    category?.events?.map((event: any, key: any) => {
                                        return <EventCard event={event} />
                                    })
                                }
                            </div>
                        </div>
                    })
                }

                <div className="flex justify-center mt-10">
                    <Button className="bg-green-600 hover:bg-green-700">
                        Voir tous les événements
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ListEvents;
