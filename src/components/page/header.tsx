
'use client';

import Link from 'next/link';
import { Code2, Menu, LogIn, LogOut, User, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useAuth } from '../auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';


const navLinks = [
    { href: "#services", labelKey: "services" },
    { href: "#real-estate", labelKey: "real_estate" },
    { href: "#industrial", labelKey: "industry" },
    { href: "#ecommerce", labelKey: "ecommerce" },
    { href: "/blog", labelKey: "blog" },
    { href: "#contact", labelKey: "contact" },
]

export function Header({ dictionary }: { dictionary: any }) {
    const { user, logIn, logOut } = useAuth();
    const pathname = usePathname();
    
    const getRedirectedPath = (locale: Locale) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    }

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
                            href={link.href.startsWith('/') ? getRedirectedPath(pathname.split('/')[1] as Locale) + link.href.substring(1) : link.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {dictionary[link.labelKey]}
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
                            {i18n.locales.map(locale => (
                                <DropdownMenuItem key={locale} asChild>
                                    <Link href={getRedirectedPath(locale)}>
                                        {locale.toUpperCase()}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
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
                                    <Link href={getRedirectedPath(pathname.split('/')[1] as Locale) + 'dashboard'}>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>{dictionary.dashboard}</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logOut}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>{dictionary.logout}</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button onClick={logIn}>
                            <LogIn className="mr-2 h-4 w-4" />
                            {dictionary.login}
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
                                        <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">{dictionary[link.labelKey]}</Link>
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
                                             <Button asChild variant="outline"><Link href={getRedirectedPath(pathname.split('/')[1] as Locale) + 'dashboard'}>{dictionary.dashboard}</Link></Button>
                                            <Button onClick={logOut} variant="outline">{dictionary.logout}</Button>
                                        </div>
                                     ) : (
                                         <Button onClick={logIn} className="w-full">
                                            <LogIn className="mr-2 h-4 w-4" />
                                            {dictionary.login}
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
