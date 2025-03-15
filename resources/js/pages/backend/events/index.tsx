import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { PlusCircle, Edit, Trash2, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Badge } from '@/components/ui/badge';
import { Link, useForm } from '@inertiajs/react';



function Events({list_events}: any) {
    const [events, setEvents] = useState(list_events);
    const [searchQuery, setSearchQuery] = useState('');
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const {delete: destroy} = useForm({

    })

    // Filtrer les catégories en fonction de la recherche
    const filteredEvents = events?.filter(
        (event: any) => event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Formatage de la date
    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(date);
    };


    // Simuler la suppression d'une catégorie
    const handleDeleteevent = (id: any) => {
        destroy(route('events.destroy', id))
    };

    return (
        <AppLayout>
            <div className="w-full mx-auto py-6 px-4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Gestion des évènements</h1>
                        <p className="text-gray-500">Gérez les évènements de votre application</p>
                    </div>
                    <Link href={route('events.create')}>
                        <Button>Ajouter un évènement</Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle>Liste des évènements</CardTitle>
                        <CardDescription>
                            Total: {events?.length} évènements
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="flex justify-between mb-4">
                            <div className="relative w-72">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    placeholder="Rechercher une évènement..."
                                    className="pl-8"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <Button variant="outline" size="sm">
                                <Filter className="h-4 w-4 mr-2" />
                                Filtrer
                            </Button>
                        </div>

                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12">ID</TableHead>
                                        <TableHead>Titre</TableHead>
                                        <TableHead className="hidden md:table-cell">Lieu</TableHead>
                                        <TableHead className="hidden md:table-cell">Catégorie</TableHead>
                                        <TableHead className="hidden md:table-cell">Prix</TableHead>
                                        <TableHead className="hidden md:table-cell">Date de début</TableHead>
                                        <TableHead className="hidden md:table-cell">Date de fin</TableHead>
                                        <TableHead className="hidden md:table-cell">Date de création</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredEvents?.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="h-24 text-center">
                                                Aucune catégorie trouvée
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredEvents?.map((event: any, index: number) => (
                                            <TableRow key={event.id}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center space-x-2">
                                                        <div className={`w-3 h-3 rounded-full ${event.color}`} />
                                                        <span>{event.title}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell max-w-xs truncate">
                                                    {event.location}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell max-w-xs truncate">
                                                    {event?.category?.name}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    <Badge variant="outline">{event.price}</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    <Badge variant="outline">{event.start_date}</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    <Badge variant="outline">{event.end_date}</Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell text-gray-500">
                                                    {formatDate(event.created_at)}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Menu</span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="h-4 w-4"
                                                                >
                                                                    <circle cx="12" cy="12" r="1" />
                                                                    <circle cx="12" cy="5" r="1" />
                                                                    <circle cx="12" cy="19" r="1" />
                                                                </svg>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                <span>Modifier</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                className="text-red-600 focus:text-red-600"
                                                                onClick={() => handleDeleteevent(event.id)}
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                <span>Supprimer</span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

export default Events;
