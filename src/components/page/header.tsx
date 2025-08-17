
'use client';

import Link from 'next/link';
import { Code2, Menu, LogIn, LogOut, User, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useAuth } from '../auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from '../ui/dropdown-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useCurrentLocale } from '@/hooks/use-current-locale';


const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#real-estate", label: "Inmobiliaria" },
    { href: "#industrial", label: "Industria" },
    { href: "#ecommerce", label: "E-commerce" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contacto" },
]

export function Header() {
    const { user, logIn, logOut } = useAuth();
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useCurrentLocale();

    const changeLocale = (locale: string) => {
        const newPath = `/${locale}${pathname.replace(`/${currentLocale}`, '')}`;
        router.replace(newPath);
    };


    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
            <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Code2 className="h-7 w-7 text-primary" />
                    <span className="font-bold text-xl font-headline">OneJoan</span>
                </Link>
                
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Globe className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => changeLocale('es')}>Español</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeLocale('en')}>English</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'Usuario'} />
                                        <AvatarFallback>
                                            <User />
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{user.displayName}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                 <DropdownMenuItem asChild>
                                    <Link href="/dashboard">
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logOut}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Cerrar sesión</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button onClick={logIn}>
                            <LogIn className="mr-2 h-4 w-4" />
                            Login
                        </Button>
                    )}
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                                <span className="sr-only">Abrir menú</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 p-6">
                                <Link href="/" className="flex items-center gap-2 mb-4">
                                    <Code2 className="h-7 w-7 text-primary" />
                                    <span className="font-bold text-lg font-headline">OneJoan</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map(link => (
                                        <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">{link.label}</Link>
                                    ))}
                                </nav>
                                <div className="mt-4">
                                     {user ? (
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <Avatar>
                                                    <AvatarImage src={user.photoURL ?? ''} />
                                                    <AvatarFallback><User /></AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-medium">{user.displayName}</p>
                                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                                </div>
                                            </div>
                                             <Button asChild variant="outline"><Link href="/dashboard">Dashboard</Link></Button>
                                            <Button onClick={logOut} variant="outline">Cerrar Sesión</Button>
                                        </div>
                                     ) : (
                                         <Button onClick={logIn} className="w-full">
                                            <LogIn className="mr-2 h-4 w-4" />
                                            Login
                                         </Button>
                                     )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
