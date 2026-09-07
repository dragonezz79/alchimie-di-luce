import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import mappaCover from './mappa.webp';
import puntoZero from './punto-zero-simbolo.webp';

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
    document.title = 'Alchimie di Luce | Guarigione spirituale ed energetica';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="new-home-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Alchimie di Luce · Carmelo Nicita</span>
            <h1>Lascia andare ciò che pesa.<br /><em>Torna a sentirti tu.</em></h1>
            <p className="hero-lead">
              Percorsi di guarigione spirituale ed energetica per ritrovare leggerezza, chiarezza e forza interiore.
            </p>
            <div className="hero-actions hero-actions-left">
              <a className="btn btn-primary" href="/punto-zero">Scopri Punto Zero</a>
              <a className="btn btn-secondary" href="/trova-il-tuo-percorso">Fai il test</a>
            </div>
            <p className="trust-line">Percorsi chiari · Prezzi trasparenti · Rispetto del libero arbitrio</p>
          </div>
          <div className="zero-symbol-card" aria-label="Immagine evocativa del percorso Punto Zero">
            <div className="zero-orbit" />
            <img src={puntoZero} alt="Un punto di luce dorata al centro per rappresentare Punto Zero" />
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
              Punto Zero è un intervento di guarigione spirituale ed energetica a distanza. Ti accompagna a recidere ciò che ti trattiene, alleggerire il peso interiore e recuperare energia per ripartire.
            </p>
            <ul className="clean-checks">
              <li>Diagnosi energetica preliminare per individuare il blocco reale</li>
              <li>Lavoro formulato sulla persona e su ciò che emerge</li>
              <li>Attivazione e ciclo seguito personalmente da Carmelo</li>
              <li>Durata personalizzata fino al completamento della pulizia energetica</li>
            </ul>
          </div>
          <aside className="flagship-offer">
            <span className="badge">Intervento premium</span>
            <h3>Punto Zero a distanza</h3>
            <p>Prima individuo il blocco energetico reale, poi costruisco e seguo il lavoro a distanza fino al completamento della pulizia.</p>
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
              text="Per lasciare andare legami, schemi e situazioni che continuano a toglierti energia."
              price="149 €"
              href="/punto-zero"
              cta="Scopri l’intervento"
            />
            <ChoiceCard
              number="02"
              need="Hai una domanda precisa"
              title="Tarocchi"
              text="Per capire cosa sta accadendo dentro di te e vedere con più chiarezza la scelta successiva."
              price="Da 49 €"
              href="/letture"
              cta="Confronta le formule"
            />
            <ChoiceCard
              number="03"
              need="Vuoi procedere in autonomia"
              title="Strumenti digitali"
              text="Per proteggere la tua energia, ritrovare il centro e sostenere ogni giorno la tua guarigione spirituale."
              price="Da 0 €"
              href="/prodotti"
              cta="Esplora gli strumenti"
            />
          </div>
        </div>
      </section>

      <section className="section finder-invite-section">
        <div className="container finder-invite">
          <div>
            <span className="eyebrow">Non sai da dove iniziare?</span>
            <h2>Trova la proposta più adatta al tuo momento</h2>
            <p>Rispondi a tre domande sul bisogno che senti, sul tipo di supporto che preferisci e sulla profondità del passo che vuoi compiere.</p>
          </div>
          <a className="btn btn-primary" href="/trova-il-tuo-percorso">Inizia il test</a>
        </div>
      </section>

      <section className="section entry-section">
        <div className="container entry-grid">
          <img src={guidaSerenita} alt="Copertina della guida 5 minuti al giorno per ritrovare serenità" />
          <div>
            <span className="eyebrow">L’unico ingresso gratuito</span>
            <h2>Inizia con cinque minuti veri</h2>
            <p className="large-copy">La guarigione spirituale può iniziare da cinque minuti: fermarti, respirare e tornare presente nella tua vita.</p>
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
            <p className="large-copy">Sono Carmelo. Ti accompagno personalmente in un percorso di guarigione spirituale ed energetica, con riservatezza e rispetto del libero arbitrio.</p>
            <p>Guarire spiritualmente significa lasciare andare ciò che pesa, ascoltare ciò che senti e ritrovare un rapporto più positivo con la tua energia.</p>
            <a className="text-link" href="/chi-sono">Conosci il mio approccio →</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
