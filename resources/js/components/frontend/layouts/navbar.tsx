import React, { useState } from 'react';
import { Menu, X, Calendar, User, Bell, LogOut } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface NavItemProps {
    text: string;
    href: string;
    active?: boolean;
    icon?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active, icon }) => (
    <a
        href={href}
        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-green-600 ${active ? 'text-green-600 font-semibold' : 'text-gray-600'
            }`}
    >
        {icon && <span className="text-green-500">{icon}</span>}
        <span className='text-lg'>{text}</span>
    </a>
);

const NavItems: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`flex ${className}`}>
        <NavItem text="Accueil" href="/" active />
        <NavItem text="Événements" href="/events" />
        <NavItem text="À propos" href="/about" />
        <NavItem text="Contact" href="/contact" />
    </div>
);

const MobileNav: React.FC = () => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="ghost" className="p-1 md:hidden">
                <Menu size={24} />
                <span className="sr-only">Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
            <div className="flex flex-col space-y-2 py-4">
                <div className="px-4 mb-4">
                    <h2 className="text-xl font-bold flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-green-600" />
                        EventApp
                    </h2>
                </div>
                <NavItem text="Accueil" href="/" active />
                <NavItem text="Événements" href="/events" />
                <NavItem text="À propos" href="/about" />
                <NavItem text="Contact" href="/contact" />
            </div>
        </SheetContent>
    </Sheet>
);

const UserDropdown: React.FC = () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.png" alt="Avatar" />
                    <AvatarFallback>UA</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">Utilisateur</p>
                    <p className="text-sm text-gray-500">utilisateur@exemple.com</p>
                </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-500" onClick={() => route('logout')}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <div className="flex items-center">
                    <MobileNav />
                    <a href="/" className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span className="font-bold text-gray-800">EventApp</span>
                    </a>
                </div>

                <nav className="hidden md:flex mx-auto">
                    <NavItems className="flex-row space-x-6" />
                </nav>

                <div className="flex items-center space-x-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden md:flex border-green-600 text-white hover:bg-green-50 bg-green-600"
                    >
                        Créer un événement
                    </Button>
                    <UserDropdown />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
