'use client';

import { GrainGradient } from '@paper-design/shaders-react';

export default function WorkChoiceBackground() {
  return (
    <div className="work-choice-background" aria-hidden="true">
      <GrainGradient
        width="100%"
        height="100%"
        colors={['#D5FF00', '#85898B', '#F2F0E9', '#191C1D']}
        colorBack="#0B0D0E"
        softness={0.62}
        intensity={0.38}
        noise={0.2}
        shape="corners"
        speed={0.22}
        scale={1}
        rotation={0}
        offsetX={0}
        offsetY={0}
        fit="cover"
        minPixelRatio={1}
        maxPixelCount={1200000}
      />
    </div>
  );
}
