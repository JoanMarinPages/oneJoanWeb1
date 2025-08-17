
'use client';
import { usePathname } from 'next/navigation';

export const useCurrentLocale = () => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    return locale || 'es';
};
