import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import mappaCover from './mappa.webp';
import puntoZero from './punto-zero-tavola.webp';

const links = {
  serenita: 'https://payhip.com/buy?link=Ez8xs'
};

const puntoZeroMessage = whatsappLink(
  'Ciao Carmelo, vorrei capire se l’intervento Punto Zero è adatto alla situazione che sto vivendo.\n\nIl tema su cui vorrei lavorare è:'
);

const ChoiceCard = ({ number, need, title, text, price, href, cta }) => (
  <article className="choice-card">
    <span className="choice-number">{number}</span>
    <span className="eyebrow">{need}</span>
    <h3>{title}</h3>
    <p>{text}</p>
    <div className="choice-footer">
      <strong>{price}</strong>
      <a className="text-link" href={href}>{cta} →</a>
    </div>
  </article>
);

export default function HomeSalesPage() {
  React.useEffect(() => {
    document.title = 'Alchimie di Luce | Punto Zero, Tarocchi e strumenti spirituali';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="new-home-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Alchimie di Luce · Carmelo Nicita</span>
            <h1>Fai chiarezza.<br /><em>Riparti dal tuo centro.</em></h1>
            <p className="hero-lead">
              Interventi spirituali a distanza, consulti di Tarocchi e strumenti digitali per chi sente il bisogno di sciogliere un peso, comprendere una situazione e scegliere il passo successivo.
            </p>
            <div className="hero-actions hero-actions-left">
              <a className="btn btn-primary" href="/punto-zero">Scopri Punto Zero</a>
              <a className="btn btn-secondary" href="#scegli">Trova il percorso giusto</a>
            </div>
            <p className="trust-line">Niente promesse miracolose · Prezzi chiari · Percorsi spiegati prima di iniziare</p>
          </div>
          <div className="zero-symbol-card" aria-label="Tavola radionica Punto Zero">
            <div className="zero-orbit" />
            <img src={puntoZero} alt="Geometria della Tavola radionica Punto Zero" />
            <div className="zero-symbol-caption">
              <span>Intervento a distanza</span>
              <strong>Punto Zero</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section flagship-section">
        <div className="container flagship-grid">
          <div className="flagship-copy">
            <span className="eyebrow">Il percorso centrale</span>
            <h2>Quando continuare a pensarci non basta</h2>
            <p className="large-copy">
              Punto Zero è un intervento spirituale personalizzato a distanza, pensato per accompagnare una fase di distacco, alleggerimento e riallineamento interiore.
            </p>
            <ul className="clean-checks">
              <li>Lettura preliminare del tema che stai vivendo</li>
              <li>Intenzione di lavoro formulata sul tuo caso</li>
              <li>Attivazione e ciclo seguito personalmente da Carmelo</li>
              <li>Chiusura del lavoro e restituzione finale</li>
            </ul>
          </div>
          <aside className="flagship-offer">
            <span className="badge">Intervento premium</span>
            <h3>Punto Zero a distanza</h3>
            <p>Non acquisti una tavola da usare da solo: affidi a Carmelo un lavoro spirituale costruito sulla tua intenzione.</p>
            <div className="price-stack"><strong>149 €</strong><span>percorso personale</span></div>
            <a className="btn btn-primary" href="/punto-zero">Come funziona</a>
            <ExternalButton href={puntoZeroMessage} eventName="click_home_punto_zero_whatsapp" className="btn-secondary">Chiedi se è adatto a te</ExternalButton>
          </aside>
        </div>
      </section>

      <section className="section choice-section" id="scegli">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Scegli dal bisogno, non dal nome</span>
            <h2>Cosa stai cercando adesso?</h2>
            <p>Tre strade diverse. Non devi acquistare tutto e non devi indovinare da solo quale servizio scegliere.</p>
          </div>
          <div className="choice-grid">
            <ChoiceCard
              number="01"
              need="Vuoi sciogliere un peso"
              title="Punto Zero"
              text="Un intervento spirituale a distanza per lavorare simbolicamente su legami, schemi ricorrenti e fasi che senti ancora aperte."
              price="149 €"
              href="/punto-zero"
              cta="Scopri l’intervento"
            />
            <ChoiceCard
              number="02"
              need="Hai una domanda precisa"
              title="Tarocchi"
              text="Una lettura completa, scritta oppure telefonica, per vedere con più lucidità una situazione concreta."
              price="Da 39 €"
              href="/letture"
              cta="Confronta le formule"
            />
            <ChoiceCard
              number="03"
              need="Vuoi procedere in autonomia"
              title="Strumenti digitali"
              text="Pratiche e mappe da scaricare, consultare e utilizzare con i tuoi tempi, a partire da una guida gratuita."
              price="Da 0 €"
              href="/prodotti"
              cta="Esplora gli strumenti"
            />
          </div>
        </div>
      </section>

      <section className="section entry-section">
        <div className="container entry-grid">
          <img src={guidaSerenita} alt="Copertina della guida 5 minuti al giorno per ritrovare serenità" />
          <div>
            <span className="eyebrow">L’unico ingresso gratuito</span>
            <h2>Inizia con cinque minuti veri</h2>
            <p className="large-copy">Una guida breve per conoscere l’approccio di Alchimie di Luce attraverso una pratica quotidiana semplice, senza acquistare nulla.</p>
            <ExternalButton href={links.serenita} eventName="click_home_serenita">Scarica la guida gratuita</ExternalButton>
          </div>
          <div className="entry-next">
            <img src={ritualiCover} alt="7 Rituali di Protezione e Luce" />
            <div><span>Passo successivo</span><strong>7 Rituali · 14,90 €</strong></div>
          </div>
          <div className="entry-next">
            <img src={mappaCover} alt="Mappa di Luce Interattiva" />
            <div><span>Strumento completo</span><strong>Mappa di Luce · 59 €</strong></div>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-preview">
          <img src={fotoCarmelo} alt="Carmelo Nicita, fondatore di Alchimie di Luce" />
          <div>
            <span className="eyebrow">Chi c’è dietro il lavoro</span>
            <h2>Una guida reale, non un servizio anonimo</h2>
            <p className="large-copy">Sono Carmelo. Ogni lettura e ogni intervento personale vengono seguiti da me, con regole chiare, riservatezza e rispetto del libero arbitrio.</p>
            <p>Il lavoro spirituale può offrire ascolto e una prospettiva simbolica. Non sostituisce decisioni, cure o professionisti qualificati.</p>
            <a className="text-link" href="/chi-sono">Conosci il mio approccio →</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
