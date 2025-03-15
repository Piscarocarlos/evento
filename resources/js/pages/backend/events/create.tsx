import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import AppLayout from '@/layouts/app-layout'
import { cn } from '@/lib/utils'
import { useForm } from '@inertiajs/react'
import { format } from 'date-fns'
import { CalendarIcon, MapPin, Tag, Clock, Info, Image as ImageIcon } from 'lucide-react'
import React, { useState } from 'react'
import { fr } from 'date-fns/locale'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Switch } from '@/components/ui/switch'

function CreateEvent({ categories }: any) {
    const { data, setData, post, processing, errors, reset } = useForm<any>({
        title: "",
        category_id: "",
        description: "",
        location: "",
        price: "",
        start_date: null,
        end_date: null,
        imageUrl: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route('events.store'), {
            onSuccess: () => {
                reset();
                setImagePreview(null);
            }
        });
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setData('imageUrl', file);
            const reader = new FileReader();
            reader.onload = (e: any) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AppLayout>
            <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 py-6">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-white">Création d'un événement</CardTitle>
                        <p className="text-green-100 mt-2">Remplissez le formulaire ci-dessous pour créer votre événement</p>
                    </CardHeader>

                    <CardContent className="p-6 md:p-8">
                        {Object.keys(errors).length > 0 && (
                            <Alert variant="destructive" className="mb-6 bg-red-50 border border-red-200">
                                <AlertDescription>
                                    Veuillez corriger les erreurs ci-dessous avant de soumettre le formulaire.
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Section titre */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="title" className="text-base font-medium flex items-center">
                                        <Info className="h-4 w-4 mr-2 text-green-600" />
                                        Titre de l'événement <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="h-12 rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
                                        placeholder="Ex: Concert de Jazz au Parc"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                                </div>

                                {/* Section catégorie */}
                                <div className="space-y-2">
                                    <Label htmlFor="category" className="text-base font-medium flex items-center">
                                        <Tag className="h-4 w-4 mr-2 text-green-600" />
                                        Catégorie <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Select value={data.category_id} onValueChange={(value) => setData('category_id', value)}>
                                        <SelectTrigger id="category" className="h-12 rounded-xl border-gray-300 focus:border-green-500">
                                            <SelectValue placeholder="Sélectionner une catégorie"  />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories?.map((category: any, index: any) => (
                                                <SelectItem key={index} value={category.id} >{category.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.category_id && <p className="text-red-500 text-sm mt-1">{errors.category_id}</p>}
                                </div>

                                {/* Section lieu */}
                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-base font-medium flex items-center">
                                        <MapPin className="h-4 w-4 mr-2 text-green-600" />
                                        Lieu <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Input
                                        id="location"
                                        value={data.location}
                                        onChange={e => setData('location', e.target.value)}
                                        className="h-12 rounded-xl border-gray-300 focus:border-green-500"
                                        placeholder="Ex: Salle Olympia, Paris"
                                    />
                                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                                </div>

                                {/* Section prix */}
                                <div className="space-y-2">
                                    <Label htmlFor="price" className="text-base font-medium flex items-center">
                                        <Tag className="h-4 w-4 mr-2 text-green-600" />
                                        Prix (MAD) <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        className="h-12 rounded-xl border-gray-300 focus:border-green-500"
                                        placeholder="Ex: 25.00"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                                </div>

                                {/* Section date de début */}
                                <div className="space-y-2">
                                    <Label htmlFor="start_date" className="text-base font-medium flex items-center">
                                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                                        Date de début <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="start_date"
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full h-12 rounded-xl justify-start text-left font-normal border-gray-300 hover:bg-gray-50",
                                                    !data.start_date && "text-gray-500"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
                                                {data.start_date ? format(data.start_date, "d MMMM yyyy", { locale: fr }) :
                                                    <span>Sélectionner une date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={data.start_date}
                                                onSelect={(value) => setData('start_date', value)}
                                                initialFocus
                                                locale={fr}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    {errors.start_date && <p className="text-red-500 text-sm mt-1">{errors.start_date}</p>}
                                </div>

                                {/* Section date de fin */}
                                <div className="space-y-2">
                                    <Label htmlFor="end_date" className="text-base font-medium flex items-center">
                                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                                        Date de fin <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="end_date"
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full h-12 rounded-xl justify-start text-left font-normal border-gray-300 hover:bg-gray-50",
                                                    !data.end_date && "text-gray-500"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
                                                {data.end_date ? format(data.end_date, "d MMMM yyyy", { locale: fr }) :
                                                    <span>Sélectionner une date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={data.end_date}
                                                onSelect={(value) => setData('end_date', value)}
                                                initialFocus
                                                locale={fr}
                                                disabled={(date) => data.start_date && date < data.start_date}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    {errors.end_date && <p className="text-red-500 text-sm mt-1">{errors.end_date}</p>}
                                </div>

                                {/* Section image */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="imageUrl" className="text-base font-medium flex items-center">
                                        <ImageIcon className="h-4 w-4 mr-2 text-green-600" />
                                        Image de l'événement
                                    </Label>
                                    <div className="flex items-center space-x-4">
                                        <Input
                                            id="imageUrl"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="h-12 rounded-xl border-gray-300 focus:border-green-500"
                                        />
                                        {imagePreview && (
                                            <div className="h-16 w-16 rounded-md overflow-hidden border border-gray-200">
                                                <img src={imagePreview} alt="Aperçu" className="h-full w-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                    {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
                                </div>

                                {/* Section description */}
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="description" className="text-base font-medium flex items-center">
                                        <Info className="h-4 w-4 mr-2 text-green-600" />
                                        Description <span className="text-red-500 ml-1">*</span>
                                    </Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="min-h-32 rounded-xl border-gray-300 focus:border-green-500"
                                        placeholder="Décrivez votre événement en détail..."
                                    />
                                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                                </div>


                            </div>

                            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="h-12 px-6 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50"
                                    onClick={() => reset()}
                                    disabled={processing}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    type="submit"
                                    className="h-12 px-8 rounded-xl bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white"
                                    disabled={processing}
                                >
                                    {processing ? 'Enregistrement...' : 'Sauvegarder l\'événement'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}

export default CreateEvent
