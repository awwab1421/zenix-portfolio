'use client';

import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false }
);

export default function SiteGrainBackground() {
  return (
    <div className="site-grain-background" aria-hidden="true">
      <GrainGradient
        width="100%"
        height="100%"
        colors={["#d4ff0091", "#d4ff0047", "#d4ff007a", "#d4ff00"]}
        colorBack="#000000"
        softness={0.5}
        intensity={0.42}
        noise={0.16}
        shape="corners"
        speed={0.42}
        fit="cover"
        minPixelRatio={1}
        maxPixelCount={420000}
      />
    </div>
  );
}
