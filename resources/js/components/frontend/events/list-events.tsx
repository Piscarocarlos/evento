import React, { useState, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Event } from '@/types/event';
import { EventCard } from './event-card';
import { EventCarousel } from './event-caroussel';



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
    {
        id: 2,
        title: "Conférence Tech Innovation",
        description: "Découvrez les dernières innovations technologiques",
        category: "business",
        date: "22 Avril 2025",
        time: "09:00",
        location: "Lyon, France",
        price: "120€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 245
    },
    {
        id: 3,
        title: "Exposition d'Art Contemporain",
        description: "Explorez l'art contemporain de talents émergents",
        category: "arts",
        date: "5 Mai 2025",
        time: "10:00",
        location: "Marseille, France",
        price: "15€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 176
    },
    {
        id: 4,
        title: "Marathon de Paris",
        description: "Participez au célèbre marathon annuel de Paris",
        category: "sports",
        date: "12 Mai 2025",
        time: "08:00",
        location: "Paris, France",
        price: "80€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 1240
    },
    {
        id: 5,
        title: "Festival Gastronomique",
        description: "Dégustez les créations des meilleurs chefs de la région",
        category: "food",
        date: "18 Mai 2025",
        time: "11:00",
        location: "Bordeaux, France",
        price: "35€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 420
    },
    {
        id: 6,
        title: "Concert Rock en Plein Air",
        description: "Une soirée rock avec les groupes locaux et internationaux",
        category: "music",
        date: "1 Juin 2025",
        time: "20:00",
        location: "Toulouse, France",
        price: "25€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 520
    },
    {
        id: 7,
        title: "Forum de l'Emploi Tech",
        description: "Rencontrez les entreprises qui recrutent dans la tech",
        category: "business",
        date: "10 Juin 2025",
        time: "10:00",
        location: "Paris, France",
        price: "Gratuit",
        imageUrl: "/api/placeholder/400/250",
        attendees: 310
    },
    {
        id: 8,
        title: "Tournoi de Tennis",
        description: "Assistez aux matchs du tournoi annuel",
        category: "sports",
        date: "15 Juin 2025",
        time: "14:00",
        location: "Nice, France",
        price: "30€",
        imageUrl: "/api/placeholder/400/250",
        attendees: 185
    }
];


// Composant principal de liste d'événements
const ListEvents: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Filtrer les événements par catégorie
    const filteredEvents = activeTab === 'all'
        ? eventsData
        : eventsData.filter(event => event.category === activeTab);

    const categories = [
        { id: 'all', name: 'Tous' },
        { id: 'music', name: 'Musique' },
        { id: 'business', name: 'Business' },
        { id: 'arts', name: 'Arts & Culture' },
        { id: 'sports', name: 'Sports' },
        { id: 'food', name: 'Gastronomie' }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Événements à découvrir</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explorez notre sélection d'événements populaires par catégorie
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-white border">
                            {categories.map(category => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="px-4 py-2 data-[state=active]:text-green-600"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {categories.map(category => (
                        <TabsContent key={category.id} value={category.id} className="mt-0">
                            <EventCarousel events={filteredEvents} />
                        </TabsContent>
                    ))}
                </Tabs>

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
