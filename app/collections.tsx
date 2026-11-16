import Link from 'next/link';

type CollectionProps = { kind: 'personal' | 'professional' };

const content = {
  personal: {
    number: '01', label: 'PERSONAL ARCHIVE', title: <>Personal<br /><em>playground.</em></>,
    description: 'Posters, experiments, visual explorations and the things made purely for the love of making.',
  },
  professional: {
    number: '02', label: 'PROFESSIONAL ARCHIVE', title: <>Professional<br /><em>practice.</em></>,
    description: 'Brand identities, commissioned work, campaigns and creative work made for people and organisations.',
  },
};

export default function CollectionPage({ kind }: CollectionProps) {
  const item = content[kind];
  const other = kind === 'personal' ? 'professional' : 'personal';
  const otherLabel = kind === 'personal' ? 'Professional work' : 'Personal work';
  return (
    <main className="collection-page">
      <header className="collection-top">
        <Link href="/" aria-label="ZENIX home">ZENIX ↗</Link>
        <span>{item.number} / 02</span>
        <Link href="/">BACK TO HOME</Link>
      </header>
      <section className="collection-main">
        <span className="collection-kicker">{item.label} — ZENIX</span>
        <h1 className="collection-title">{item.title}</h1>
        <p style={{maxWidth: '560px', color: '#85898B', fontSize: 'clamp(15px, 1.5vw, 19px)', lineHeight: 1.6, margin: '0 0 56px'}}>{item.description}</p>
        <div className="collection-empty">
          <strong>THE ARCHIVE IS EMPTY. FOR NOW.</strong>
          <span>NEW WORK WILL APPEAR HERE.</span>
        </div>
      </section>
      <footer className="collection-bottom">
        <span>ZENIX — A CREATIVE ALIAS BY NAYEL</span>
        <nav className="collection-links" aria-label="Other collections">
          <Link href="/personal">PERSONAL</Link>
          <Link href="/professional">PROFESSIONAL</Link>
          <Link href={`/${other}`}>NEXT: {otherLabel.toUpperCase()} ↗</Link>
        </nav>
      </footer>
    </main>
  );
}
