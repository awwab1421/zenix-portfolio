'use client';

import { useEffect, useRef } from 'react';

export default function SiteCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return;

    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    const root = document.documentElement;
    root.classList.add('site-cursor-enabled');
    let visible = false;

    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (!visible) {
        cursor.classList.add('is-visible');
        visible = true;
      }

      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest('[data-cursor], a, button, [role="button"]');
      const customLabel = interactive?.getAttribute('data-cursor');
      label.textContent = customLabel || (interactive ? 'OPEN' : '');
      cursor.classList.toggle('has-label', Boolean(label.textContent));
    };

    const hide = () => {
      cursor.classList.remove('is-visible');
      visible = false;
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);

    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      root.classList.remove('site-cursor-enabled');
    };
  }, []);

  return (
    <div ref={cursorRef} className="site-cursor" aria-hidden="true">
      <svg className="site-cursor-flame" viewBox="0 0 40 48" width="40" height="48">
        <defs>
          <linearGradient id="zenix-flame-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F1FF8A" />
            <stop offset=".42" stopColor="#D5FF00" />
            <stop offset="1" stopColor="#83B900" />
          </linearGradient>
        </defs>
        <path className="flame-outer" d="M21 1C23 11 36 14 35 28c-.8 11-7.5 18.5-17 18.5C7 46.5 1.5 39 2 29 2.4 21 7.4 15 12 10c-.5 7 1.8 10.3 5 11.4C20 16 23 10 21 1Z" fill="url(#zenix-flame-green)" />
        <path className="flame-inner" d="M21 23c1.2 5.2 7.2 7.2 6.1 13.2-.7 4-3.4 6.5-7.4 6.5-4.4 0-7.1-3.3-6.4-7.4.5-3.2 2.6-5.2 4.4-7.1-.1 3.4 1.3 4.7 2.6 5.1 1.2-3.1 1.6-6.4.7-10.3Z" fill="#F2F0E9" opacity=".9" />
      </svg>
      <span ref={labelRef} className="site-cursor-label" />
    </div>
  );
}
