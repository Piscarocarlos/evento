import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { Textarea } from '@/components/ui/textarea';

function AddCategory({openCreateDialog, setOpenCreateDialog}: any) {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        description: '',
        color: ''
    });

    const handleCreateCategory = (e: any) => {
        e.preventDefault()
        post(route('categories.store'), {
            onSuccess: () => {
                ///
            }
        })
        // setOpenCreateDialog(false)
    }


    return (
        <Dialog open={openCreateDialog} onOpenChange={setOpenCreateDialog}>
            <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Nouvelle Catégorie
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleCreateCategory}>
                <DialogHeader>
                    <DialogTitle>Créer une nouvelle catégorie</DialogTitle>
                    <DialogDescription>
                        Ajoutez une nouvelle catégorie pour classer vos événements.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nom de la catégorie</Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="ex: Conférences"
                        />
                        {errors?.name && <span className='text-red-500 text-sm'>{errors?.name}</span>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Une brève description de la catégorie"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label>Couleur</Label>
                        <div className="flex space-x-2">
                        <Input type="color" value={data.color} onChange={(e) => setData('color', e.target.value)} />
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpenCreateDialog(false)}>Annuler</Button>
                    <Button
                        className="bg-green-600 hover:bg-green-700"
                        disabled={processing}
                    >
                        Créer
                    </Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddCategory
