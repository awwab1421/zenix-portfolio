import React from 'react';
import { createRoot } from 'react-dom/client';
import { GrainGradient } from 'https://esm.sh/@paper-design/shaders-react@0.0.77?external=react';

const host = document.createElement('div');
host.id = 'zenix-grain-background';
Object.assign(host.style, {
  position: 'fixed',
  inset: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '-1',
  overflow: 'hidden',
  pointerEvents: 'none',
});
document.documentElement.prepend(host);

const root = createRoot(host);
root.render(
  React.createElement(GrainGradient, {
    width: '100%',
    height: '100%',
    colors: ['#d4ff0091', '#d4ff0047', '#d4ff007a', '#d4ff00'],
    colorBack: '#000000',
    softness: 0.5,
    intensity: 0.5,
    noise: 0.25,
    shape: 'corners',
    speed: 1,
    fit: 'cover',
    minPixelRatio: 1,
    maxPixelCount: 900000,
  })
);
