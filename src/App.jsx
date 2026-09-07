import React from 'react';
import SiteLayout, { ExternalButton } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import ritualeMantello from './01-mantello-blu.webp';
import ritualeFiamma from './02-fiamma-viola.webp';
import ritualeSfera from './03-sfera-di-luce.webp';
import ritualeCasa from './04-armonia-casa.webp';
import ritualeRilascio from './05-rilascio-serale.webp';
import ritualeRelazioni from './06-protezione-relazioni.webp';
import ritualeCentratura from './07-centratura-sovranita.webp';

const ritualiLink = 'https://payhip.com/b/DbHjv';

const rituals = [
  [ritualeMantello, 'Mantello Blu', 'Per iniziare il percorso stabilendo un confine interiore chiaro.'],
  [ritualeFiamma, 'Fiamma Viola', 'Per accompagnare il rilascio di ciò che senti ormai concluso.'],
  [ritualeSfera, 'Sfera di Luce', 'Per creare uno spazio interiore protetto prima di affrontare la giornata.'],
  [ritualeCasa, 'Armonia della casa', 'Per dedicare attenzione e intenzione agli ambienti in cui vivi.'],
  [ritualeRilascio, 'Rilascio serale', 'Per chiudere la giornata senza portare tutto con te nel riposo.'],
  [ritualeRelazioni, 'Confini nelle relazioni', 'Per prepararti a un incontro o a una conversazione difficile.'],
  [ritualeCentratura, 'Centratura e sovranità', 'Per tornare al respiro, al corpo e alla tua capacità di scegliere.']
];

function RitualsPage() {
  React.useEffect(() => {
    document.title = '7 Rituali di Protezione e Luce | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="detail-hero">
        <div className="container split-grid">
          <div className="product-visual glow-card"><img src={ritualiCover} alt="7 Rituali di Protezione e Luce" /></div>
          <div className="copy-block">
            <span className="eyebrow">Percorso digitale di 7 giorni</span>
            <h1>7 Rituali di Protezione e Luce</h1>
            <p className="large-copy">Una pratica al giorno per protezione, centratura, rilascio e confini interiori.</p>
            <p>Non una raccolta casuale di formule: un percorso ordinato, con istruzioni, decreto e chiusura per ogni giornata.</p>
            <div className="price-stack"><strong>14,90 €</strong><span>PDF di 24 pagine · accesso immediato</span></div>
            <ExternalButton href={ritualiLink} eventName="click_rituali_1490">Inizia il percorso</ExternalButton>
            <p className="microcopy">Pagamento sicuro su Payhip · Nessun abbonamento</p>
          </div>
        </div>
      </section>

      <section className="section rituals-fit-section">
        <div className="container split-grid align-start">
          <div>
            <span className="eyebrow">Perché esiste</span>
            <h2>La protezione non è paura</h2>
            <p className="large-copy">È la capacità di riconoscere ciò che ti appesantisce, creare un confine e tornare presente.</p>
          </div>
          <ul className="recognition-list">
            <li>vuoi una pratica breve ma strutturata</li>
            <li>assorbi facilmente il clima emotivo intorno a te</li>
            <li>fai fatica a lasciare andare la giornata</li>
            <li>cerchi un rituale concreto, senza teoria eccessiva</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Il percorso completo</span>
            <h2>Sette giorni, sette funzioni precise</h2>
          </div>
          <div className="rituals-grid">
            {rituals.map(([image, title, text], index) => (
              <article className="ritual-card" key={title}>
                <img src={image} alt={title} />
                <div className="ritual-card-copy">
                  <span className="ritual-number">Giorno {index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Ogni giorno</span>
            <h2>Sai sempre cosa fare</h2>
          </div>
          <div className="steps-grid">
            <div><span>1</span><h3>Prepara</h3><p>Quando utilizzare la pratica e come creare lo spazio necessario.</p></div>
            <div><span>2</span><h3>Esegui</h3><p>Passaggi chiari, senza dover inventare formule o sequenze.</p></div>
            <div><span>3</span><h3>Chiudi</h3><p>Decreto completo e formula finale per concludere il rituale.</p></div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Inizia quando vuoi</span>
          <h2>Sette pratiche da usare anche dopo i sette giorni</h2>
          <p>Ricevi il PDF completo e torna al rituale più adatto ogni volta che ne senti il bisogno.</p>
          <ExternalButton href={ritualiLink} eventName="click_rituali_bottom_1490">Acquista a 14,90 €</ExternalButton>
        </div>
      </section>
    </SiteLayout>
  );
}

function AboutPage() {
  React.useEffect(() => {
    document.title = 'Carmelo Nicita | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="page-hero"><div className="container center"><span className="eyebrow">Chi sono</span><h1>Carmelo Nicita</h1><p className="hero-lead">Il volto, la voce e la responsabilità dietro Alchimie di Luce.</p></div></section>
      <section className="section">
        <div className="container split-grid">
          <div className="portrait-card"><img src={fotoCarmelo} alt="Carmelo Nicita" /></div>
          <div className="copy-block">
            <span className="eyebrow">Il mio approccio</span>
            <h2>Pochi strumenti, usati con intenzione</h2>
            <p className="large-copy">Ho creato Alchimie di Luce per offrire uno spazio spirituale comprensibile, riservato e lontano dalle promesse facili.</p>
            <p>Seguo personalmente ogni consulto e ogni intervento Punto Zero. Prima di iniziare sai cosa riceverai, quanto costa e quali sono i confini del lavoro.</p>
            <p>Le mie proposte accompagnano l’ascolto e la riflessione personale. Non costituiscono diagnosi, terapia o garanzia di risultati specifici.</p>
            <a className="btn btn-primary" href="/punto-zero">Scopri il mio intervento principale</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function NotFoundPage() {
  return <SiteLayout><section className="page-hero"><div className="container center"><span className="eyebrow">Pagina non trovata</span><h1>Questa pagina non esiste</h1><p className="hero-lead">Torna alla Home per scegliere tra Punto Zero, Tarocchi e strumenti digitali.</p><a className="btn btn-primary" href="/">Torna alla Home</a></div></section></SiteLayout>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/prodotti/7-rituali-protezione-luce') return <RitualsPage />;
  if (path === '/chi-sono') return <AboutPage />;
  return <NotFoundPage />;
}
