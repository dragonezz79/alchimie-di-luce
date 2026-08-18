import React from 'react';
import './global.css';

import heroArcangeli from './hero-arcangeli.webp';
import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import mappaCover from './mappa.webp';

const links = {
  serenita: 'https://payhip.com/buy?link=Ez8xs',
  rituali: 'https://payhip.com/b/DbHjv',
  mappa: 'https://payhip.com/b/3MyCg'
};

const whatsappNumber = '393492304412';
const whatsappMessage = encodeURIComponent(
  'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei informazioni su:'
);

const track = (name) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name);
  }
};

const ExternalButton = ({ href, children, eventName, className = 'btn-primary' }) => (
  <a
    className={`btn ${className}`}
    href={href}
    target="_blank"
    rel="noreferrer"
    onClick={() => eventName && track(eventName)}
  >
    {children}
  </a>
);

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Alchimie di Luce, Home"><span>✦</span> Alchimie di Luce</a>
      <button
        className="menu-button"
        type="button"
        aria-label="Apri o chiudi il menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navigazione principale">
        <a href="/">Home</a>
        <a href="/prodotti">Prodotti digitali</a>
        <a href="/letture">Letture</a>
        <a href="/letture#recensioni">Recensioni</a>
        <a href="/sessioni">Sessioni</a>
        <a href="/chi-sono">Chi sono</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Alchimie di Luce</div>
          <p>Percorsi spirituali, prodotti digitali e letture personalizzate.</p>
        </div>
        <div>
          <strong>Esplora</strong>
          <a href="/prodotti">Prodotti digitali</a>
          <a href="/letture">Letture</a>
          <a href="/sessioni">Sessioni</a>
        </div>
        <div>
          <strong>Contatti</strong>
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:info@alchimiediluce.it">info@alchimiediluce.it</a>
          <a href="https://www.instagram.com/alchimie_di_luce/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@alchimiediluce" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
      <p className="disclaimer">Le attività proposte hanno finalità spirituali e introspettive. Non sostituiscono cure mediche, supporto psicologico, farmaci o indicazioni professionali.</p>
      <p className="copyright">© 2026 Alchimie di Luce · Carmelo Nicita</p>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <Header />
      <main id="contenuto">{children}</main>
      <Footer />
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Scrivi su WhatsApp"
      >WhatsApp</a>
    </div>
  );
}

const PathCard = ({ icon, label, title, text, href, cta }) => (
  <article className="path-card">
    <div className="path-icon" aria-hidden="true">{icon}</div>
    <span className="eyebrow">{label}</span>
    <h3>{title}</h3>
    <p>{text}</p>
    <a className="text-link" href={href}>{cta} →</a>
  </article>
);

const JourneyCard = ({ step, image, label, title, text, price, href, external, eventName, cta }) => (
  <article className="product-card">
    <img src={image} alt={title} />
    <div className="product-card-body">
      <span className="eyebrow">Passo {step} · {label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="card-price">{price}</div>
      <div className="card-actions">
        {external ? (
          <ExternalButton href={href} eventName={eventName}>{cta}</ExternalButton>
        ) : (
          <a className="btn btn-primary" href={href} onClick={() => eventName && track(eventName)}>{cta}</a>
        )}
      </div>
    </div>
  </article>
);

export default function HomeSalesPage() {
  React.useEffect(() => {
    document.title = 'Alchimie di Luce | Prodotti, letture e percorsi spirituali';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="home-hero" style={{ '--hero-image': `url(${heroArcangeli})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Alchimie di Luce</span>
          <h1>Inizia dal punto giusto per te.</h1>
          <p className="hero-lead">
            Puoi partire gratuitamente, scegliere una pratica guidata oppure approfondire con la Mappa di Luce. Se invece cerchi una risposta personale, trovi Letture e Sessioni dedicate.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#inizia-da-qui">Inizia da qui</a>
            <a className="btn btn-secondary" href="/letture">Scegli una lettura</a>
          </div>
        </div>
      </section>

      <section className="section compact-section" id="inizia-da-qui">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Un percorso semplice</span>
            <h2>Tre passi, dal primo gesto alla pratica più completa</h2>
            <p>Non devi acquistare tutto. Parti dal livello che senti più adatto a te e prosegui solo se desideri approfondire.</p>
          </div>
          <div className="product-list">
            <JourneyCard
              step="1"
              image={guidaSerenita}
              label="Gratis"
              title="5 minuti al giorno per ritrovare serenità"
              text="Una guida breve per iniziare con gratitudine, presenza e piccoli gesti quotidiani. È il modo più semplice per conoscere l'approccio di Alchimie di Luce senza alcun costo."
              price="Gratis"
              href={links.serenita}
              external
              eventName="click_home_journey_serenita"
              cta="Scarica la guida gratuita"
            />
            <JourneyCard
              step="2"
              image={ritualiCover}
              label="Percorso di 7 giorni"
              title="7 Rituali di Protezione e Luce"
              text="Sette pratiche guidate da usare in sette giorni oppure ogni volta che senti bisogno di protezione, centratura, rilascio o confini più chiari."
              price="4,90 €"
              href="/prodotti/7-rituali-protezione-luce"
              eventName="click_home_journey_rituali"
              cta="Scopri il percorso"
            />
            <JourneyCard
              step="3"
              image={mappaCover}
              label="Kit digitale completo"
              title="Mappa di Luce Interattiva"
              text="Uno strumento spirituale da consultare quando cerchi orientamento: formula una domanda, lascia emergere un simbolo o un messaggio e usa la guida per trasformarlo in una scelta concreta."
              price="37 €"
              href="/prodotti/mappa-di-luce"
              eventName="click_home_journey_mappa"
              cta="Scopri come funziona"
            />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container content-narrow center">
          <span className="eyebrow">Se vuoi orientarti velocemente</span>
          <h2>Da dove conviene iniziare?</h2>
          <p className="large-copy">
            Se vuoi solo provare, parti dalla Guida Serenità. Se senti soprattutto il bisogno di protezione e centratura, scegli i 7 Rituali. Se cerchi uno strumento a cui tornare nel tempo per ascolto, simboli e direzione, entra nella Mappa di Luce.
          </p>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Cerchi qualcosa di personale?</span>
            <h2>Letture e Sessioni restano due strade separate</h2>
          </div>
          <div className="path-grid">
            <PathCard
              icon="✦"
              label="Hai una domanda precisa"
              title="Letture"
              text="Angeli e Tarocchi per approfondire una domanda o una situazione concreta con una risposta personalizzata."
              href="/letture"
              cta="Confronta le letture"
            />
            <PathCard
              icon="♡"
              label="Vuoi essere accompagnato"
              title="Sessioni"
              text="Uno spazio individuale a distanza per centratura, ascolto e pratica spirituale."
              href="/sessioni"
              cta="Scopri le sessioni"
            />
            <PathCard
              icon="☾"
              label="Vuoi vedere tutto"
              title="Prodotti digitali"
              text="Consulta insieme Guida Serenità, 7 Rituali e Mappa di Luce con prezzi e modalità chiare."
              href="/prodotti"
              cta="Guarda tutti i prodotti"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <img src={fotoCarmelo} alt="Carmelo Nicita, Alchimie di Luce" />
          <div>
            <span className="eyebrow">Chi c’è dietro Alchimie di Luce</span>
            <h2>Uno spazio spirituale con una guida reale</h2>
            <p>Sono Carmelo. Ho creato Alchimie di Luce per offrire strumenti comprensibili, esperienze personali e pratiche che possano essere integrate nella vita quotidiana.</p>
            <a className="text-link" href="/chi-sono">Conosci il mio percorso →</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
