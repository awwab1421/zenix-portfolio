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
      label.textContent = interactive?.getAttribute('data-cursor') || (interactive ? 'OPEN' : '');
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
      <svg className="site-cursor-art" viewBox="0 0 64 64" width="64" height="64">
        <g className="pixel-flame">
          <path fill="#315900" d="M8 20h4V12h4V4h8v8h4v8h8v8h8v4h8v8h8v8h-8v8h-8v4H24v-4h-8v-8h-4v-8H8v-8H4V24h4z"/>
          <path fill="#75B900" d="M12 24h4V12h4V8h4v12h4v8h8v4h8v4h8v4h4v4h-8v8H28v-4h-8v-8h-4v-8h-4v-8h-4v-4h4z"/>
          <path fill="#D5FF00" d="M20 28h4V16h4v12h4v8h8v4h8v4h4v4h-8v4H32v-4h-8v-8h-4v-8h-4v-4h4z"/>
          <path fill="#B8F000" d="M48 8h8v4h-4v8h-8v-8h4z"/>
          <path fill="#D5FF00" d="M48 12h4v4h-4z"/>
        </g>
        <path className="pointer-shadow" fill="#101820" d="M16 13 51 42 37 43 43 56 35 60 28 46 19 56Z"/>
        <path className="pixel-pointer" fill="#F2F0E9" stroke="#101820" strokeWidth="2.5" strokeLinejoin="miter" d="M13 9 48 38 34 39 40 52 33 56 26 42 17 52Z"/>
        <path fill="#D5FF00" d="M51 3h8v4h-4v8h-8V7h4z"/>
      </svg>
      <span ref={labelRef} className="site-cursor-label" />
    </div>
  );
}
