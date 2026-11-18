import type { Metadata, Viewport } from 'next';
import './globals.css';
import RouteTransition from './route-transition';
import SiteGrainBackground from './site-grain-background';
import SiteCursor from './site-cursor';

export const metadata: Metadata = {
  title: 'ZENIX — A creative alias by Nayel',
  description: 'Experimental typography, poster design and strange pictures from Dhaka.',
  applicationName: 'ZENIX',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B0D0E',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteGrainBackground />{children}<RouteTransition /><SiteCursor /></body>
    </html>
  );
}
