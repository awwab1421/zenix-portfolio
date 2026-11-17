import Link from 'next/link';
import WorkChoiceBackground from './work-choice-background';

export const metadata = { title: 'Work — ZENIX', description: 'Choose between personal and professional work by ZENIX.' };

export default function WorkPage() {
  return (
    <main className="work-choice-page">
      <WorkChoiceBackground />
      <header className="work-choice-top">
        <Link href="/" aria-label="ZENIX home">ZENIX ↗</Link>
        <span>WORK / 02 ARCHIVES</span>
        <Link href="/">BACK TO HOME</Link>
      </header>
      <section className="work-choice-main">
        <span className="work-choice-kicker">THE WORK INDEX — ZENIX</span>
        <h1 className="work-choice-title">What are<br />you here <em>for?</em></h1>
        <div className="work-choice-grid">
          <Link className="work-choice-card" href="/personal">
            <small>01 / PERSONAL</small>
            <strong>Just making<br /><em>cool stuff.</em></strong>
            <span>POSTERS · EXPERIMENTS · HOBBY WORK ↗</span>
          </Link>
          <Link className="work-choice-card" href="/professional">
            <small>02 / PROFESSIONAL</small>
            <strong>Made for<br /><em>the real world.</em></strong>
            <span>BRANDS · IDENTITIES · COMMISSIONS ↗</span>
          </Link>
        </div>
      </section>
      <footer className="work-choice-bottom">PICK A SIDE. YOU CAN ALWAYS COME BACK.</footer>
    </main>
  );
}
