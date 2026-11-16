'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from './projects';

type Props = { project: Project; previous: Project; next: Project; index: number; total: number };

export default function ProjectDetail({ project, previous, next, index, total }: Props) {
  const [transition, setTransition] = useState<'next' | 'previous' | null>(null);
  function navigate(target: Project, direction: 'next' | 'previous') {
    if (transition) return;
    setTransition(direction);
    window.setTimeout(() => window.location.assign(`/${target.collection}/${target.slug}`), 390);
  }
  return (
    <main className="project-detail-page">
      <header className="project-detail-top">
        <Link href="/" aria-label="ZENIX home">ZENIX ↗</Link>
        <span>{project.collection.toUpperCase()} / {String(index + 1).padStart(2, '0')} OF {String(total).padStart(2, '0')}</span>
        <Link href={`/${project.collection}`}>BACK TO ARCHIVE ↗</Link>
      </header>
      <section className="project-detail-heading">
        <span className="project-detail-kicker">ZENIX — {project.category} — {project.year}</span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </section>
      <section className="project-detail-art" aria-label="Artwork placeholder" style={{'--project-accent': project.accent} as React.CSSProperties}>
        <div className="project-art-top"><span>ZENIX / {project.label}</span><span>ARTWORK PLACEHOLDER</span></div>
        <div className="project-art-centre"><span className="project-art-orb" /><strong>{project.title}</strong><em>THE ARTWORK GOES HERE</em></div>
        <div className="project-art-bottom"><span>{project.category.toUpperCase()}</span><span>{project.year}</span></div>
      </section>
      <section className="project-detail-info">
        <div><span className="project-detail-kicker">ABOUT THIS PROJECT</span><h2>The story<br /><em>behind it.</em></h2></div>
        <div><p>This is a temporary project page. When you are ready, this space can hold the project brief, concept, creative process, final outcome and any details you want visitors to know.</p><p className="project-detail-muted">Images, credits, tools and project-specific information are intentionally left as placeholders for now.</p></div>
      </section>
      <section className="project-detail-gallery"><div className="project-gallery-placeholder">ADDITIONAL IMAGE / DETAIL 01</div><div className="project-gallery-placeholder alt">ADDITIONAL IMAGE / DETAIL 02</div></section>
      <nav className="project-detail-nav" aria-label="Project navigation">
        <button type="button" onClick={() => navigate(previous, 'previous')} disabled={!!transition}>← PREVIOUS PROJECT<span>{previous.title}</span></button>
        <Link href={`/${project.collection}`}>ALL {project.collection.toUpperCase()} WORK ↗</Link>
        <button type="button" onClick={() => navigate(next, 'next')} disabled={!!transition}>NEXT PROJECT →<span>{next.title}</span></button>
      </nav>
      <footer className="project-detail-footer"><span>ZENIX — A CREATIVE ALIAS BY NAYEL</span><Link href="/work">CHOOSE AN ARCHIVE ↗</Link></footer>
      {transition && <div className={`project-transition ${transition}`} aria-hidden="true" />}
    </main>
  );
}
