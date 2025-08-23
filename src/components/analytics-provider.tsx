
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    
    analytics.then(an => {
      if (an) {
        logEvent(an, 'page_view', {
          page_location: url,
          page_path: pathname,
        });
      }
    });

  }, [pathname, searchParams]);

  return <>{children}</>;
}
