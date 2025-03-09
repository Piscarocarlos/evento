import React from 'react';
import { Calendar, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Section newsletter */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 py-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold text-white mb-2">Restez informé</h3>
                            <p className="text-gray-400">
                                Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres exclusives.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <Input
                                    type="email"
                                    placeholder="Votre adresse email"
                                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-green-500"
                                />
                                <Button className="bg-green-600 hover:bg-green-700 text-white">
                                    S'abonner
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section principale */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et à propos */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="h-6 w-6 text-green-500" />
                            <span className="text-white font-bold text-xl">EventApp</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Découvrez et participez aux meilleurs événements près de chez vous ou partout dans le monde.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Événements
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Créer un événement
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Calendrier
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    À propos de nous
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Catégories */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Catégories</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Musique
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Business
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Arts & Culture
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Sports
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Gastronomie
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                    Toutes les catégories
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                <span className="text-gray-400">
                                    123 Avenue des Événements,<br />75000 Paris, France
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-green-500 mr-3" />
                                <a href="tel:+33123456789" className="text-gray-400 hover:text-green-500">
                                    +33 1 23 45 67 89
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-green-500 mr-3" />
                                <a href="mailto:contact@eventapp.com" className="text-gray-400 hover:text-green-500">
                                    contact@eventapp.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-950 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} EventApp. Tous droits réservés.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Politique de confidentialité</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Conditions d'utilisation</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
