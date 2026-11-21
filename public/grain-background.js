import React from 'react';
import { createRoot } from 'react-dom/client';
import { GrainGradient } from 'https://esm.sh/@paper-design/shaders-react@0.0.77?external=react';

// Keep the shader in the page's normal stacking order. A negative z-index
// puts it behind the root canvas in some browsers, making it invisible.
const host = document.createElement('div');
host.id = 'zenix-grain-background';
Object.assign(host.style, {
  position: 'fixed',
  inset: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '0',
  overflow: 'hidden',
  pointerEvents: 'none',
});

// The homepage content sits above the shader; existing fixed UI keeps
// its own higher z-index (navigation, preview, overlay, shutter, cursor).
const main = document.querySelector('main');
if (main) {
  main.style.position = 'relative';
  main.style.zIndex = '1';
}
document.body.append(host);

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
