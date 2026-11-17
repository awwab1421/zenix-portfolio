'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Phase = 'idle' | 'cover' | 'reveal';

export default function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>(() =>
    pathname === '/zenix-prototype.html' ? 'idle' : 'reveal'
  );
  const previousPath = useRef(pathname);
  const navigationTimer = useRef<number | null>(null);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
        navigationTimer.current = null;
      }
      setPhase('reveal');
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

      event.preventDefault();
      if (navigationTimer.current !== null) window.clearTimeout(navigationTimer.current);
      setPhase('cover');
      navigationTimer.current = window.setTimeout(() => {
        router.push(destination.pathname + destination.search + destination.hash);
      }, 420);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      if (navigationTimer.current !== null) window.clearTimeout(navigationTimer.current);
    };
  }, [router]);

  return (
    <div
      className={`route-transition-curtain ${phase}`}
      aria-hidden="true"
      onAnimationEnd={() => {
        if (phase === 'reveal') setPhase('idle');
      }}
    />
  );
}
