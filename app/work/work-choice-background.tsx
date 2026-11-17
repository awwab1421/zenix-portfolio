'use client';

import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false }
);

export default function WorkChoiceBackground() {
  return (
    <div className="work-choice-background" aria-hidden="true">
      <GrainGradient
        width={1280}
        height={720}
        colors={["#d4ff0091", "#d4ff0047", "#d4ff007a", "#d4ff00"]}
        colorBack="#000000"
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        speed={1}
      />
    </div>
  );
}
