import React, { useState } from 'react';
import { Search, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Card,
    CardContent,
} from '@/components/ui/card';

const Hero: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');

    return (
        <div className="relative">
            {/* Background avec overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/images/event-back.jpg"
                    alt="Events background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-gray-900/70" />
            </div>

            {/* Contenu */}
            <div className="relative container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Découvrez des événements exceptionnels
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Trouvez et participez aux meilleurs événements près de chez vous ou partout dans le monde
                    </p>
                </div>

                {/* Barre de recherche */}
                <Card className="max-w-4xl mx-auto shadow-xl relative z-10 overflow-hidden">
                    <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                            {/* Input de recherche */}
                            <div className="relative flex-grow md:border-r border-gray-200">
                                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                <Input
                                    placeholder="Rechercher un événement..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="border-0 pl-12 h-12 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </div>

                            {/* Catégorie */}
                            <div className="md:w-64 border-t md:border-t-0 border-gray-200">
                                <div className="flex items-center h-12">
                                    <Calendar className="ml-4 h-5 w-5 text-gray-400" />
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger className="border-0 h-12 rounded-none focus:ring-0 pl-2">
                                            <SelectValue placeholder="Catégorie" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">Toutes les catégories</SelectItem>
                                            <SelectItem value="music">Concerts & Festivals</SelectItem>
                                            <SelectItem value="business">Conférences</SelectItem>
                                            <SelectItem value="sports">Sports</SelectItem>
                                            <SelectItem value="arts">Arts & Culture</SelectItem>
                                            <SelectItem value="food">Gastronomie</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Bouton de recherche */}
                            <Button
                                className="h-12 px-6 rounded-none bg-green-600 hover:bg-green-700 text-white"
                            >
                                <span className="mr-2">Rechercher</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats rapides */}
                <div className="flex justify-center mt-10 space-x-4 md:space-x-12 text-white">
                    <div className="text-center">
                        <p className="text-3xl font-bold">5000+</p>
                        <p className="text-sm mt-1 text-gray-200">Événements</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">120</p>
                        <p className="text-sm mt-1 text-gray-200">Villes</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">10K+</p>
                        <p className="text-sm mt-1 text-gray-200">Utilisateurs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
