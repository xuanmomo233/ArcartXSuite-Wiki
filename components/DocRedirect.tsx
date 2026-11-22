'use client';

import { useEffect } from 'react';

interface DocRedirectProps {
  destination?: string;
  sections?: Record<string, string>;
  preserveSection?: boolean;
}

export function DocRedirect({ destination, sections, preserveSection }: DocRedirectProps) {
  useEffect(() => {
    const redirect = () => {
      const hash = window.location.hash;
      let section = '';
      try {
        section = decodeURIComponent(hash.slice(1));
      } catch {
        // A malformed fragment can still use the page destination.
      }

      const target = sections && Object.hasOwn(sections, section) ? sections[section] : undefined;
      const next = target ?? (destination && destination + (preserveSection ? hash : ''));
      if (next) window.location.replace((process.env.NEXT_PUBLIC_BASE_PATH ?? '') + next);
    };

    redirect();
    window.addEventListener('hashchange', redirect);
    return () => window.removeEventListener('hashchange', redirect);
  }, [destination, sections, preserveSection]);

  return null;
}
