import React from 'react';
import './global.css';

import mappaCover from './mappa.webp';
import guidaCompleta from './guida-completa.webp';
import diario from './diario.webp';
import bigliettini from './bigliettini.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';

const links = {
  rituali: 'https://payhip.com/b/DbHjv',
  mappa: 'https://payhip.com/b/3MyCg',
  serenita: 'https://payhip.com/buy?link=Ez8xs'
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
      <a className="brand" href="/" aria-label="Alchimie di Luce, Home">
        <span>✦</span> Alchimie di Luce
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Apri o chiudi il menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
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
      <p className="disclaimer">
        Le attività proposte hanno finalità spirituali e introspettive. Non sostituiscono cure mediche,
        supporto psicologico, farmaci o indicazioni professionali.
      </p>
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
      >
        WhatsApp
      </a>
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container center">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-lead">{text}</p>
      </div>
    </section>
  );
}

const ProductCard = ({ image, label, title, text, price, detailHref, buyHref, buyText, eventName, showFullImage = false }) => (
  <article className={`product-card${showFullImage ? ' product-card--full-image' : ''}`}>
    <img src={image} alt={title} />
    <div className="product-card-body">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="card-price">{price}</div>
      <div className="card-actions">
        {detailHref && <a className="btn btn-secondary" href={detailHref}>Vedi i dettagli</a>}
        <ExternalButton href={buyHref} eventName={eventName}>{buyText}</ExternalButton>
      </div>
    </div>
  </article>
);

const Asset = ({ image, title, text }) => (
  <article className="asset-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{text}</p>
  </article>
);

export function ProductsSalesPage() {
  React.useEffect(() => {
    document.title = 'Prodotti digitali | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Prodotti digitali"
        title="Scegli, scarica e usa con i tuoi tempi"
        text="Tre risorse diverse: un percorso pratico di 7 giorni, uno strumento di consultazione spirituale e una guida gratuita."
      />
      <section className="section">
        <div className="container product-list">
          <ProductCard
            image={ritualiCover}
            label="Percorso di 7 giorni · PDF"
            title="7 Rituali di Protezione e Luce"
            text="Sette pratiche guidate da usare in sette giorni — o ogni volta che senti bisogno di protezione, centratura, rilascio o confini più chiari."
            price="4,90 €"
            detailHref="/prodotti/7-rituali-protezione-luce"
            buyHref={links.rituali}
            buyText="Acquista su Payhip"
            eventName="click_prodotti_rituali"
          />
          <ProductCard
            image={mappaCover}
            label="Kit digitale completo"
            title="Mappa di Luce Interattiva"
            text="Uno strumento spirituale da consultare quando cerchi orientamento: formula una domanda, lascia emergere un simbolo o un messaggio e usa la guida per trasformarlo in una scelta concreta."
            price="37 €"
            detailHref="/prodotti/mappa-di-luce"
            buyHref={links.mappa}
            buyText="Acquista su Payhip"
            eventName="click_prodotti_mappa"
          />
          <ProductCard
            image={guidaSerenita}
            label="Risorsa gratuita"
            title="5 minuti al giorno per ritrovare serenità"
            text="Una guida breve per iniziare da una pratica quotidiana accessibile e senza pressione."
            price="Gratis"
            buyHref={links.serenita}
            buyText="Scarica gratis"
            eventName="click_prodotti_serenita"
            showFullImage
          />
        </div>
      </section>
    </Layout>
  );
}

export function MapSalesPage() {
  const suitedFor = [
    'hai molte pratiche spirituali ma non sai quale usare nel momento giusto',
    'cerchi uno strumento di ascolto da utilizzare in autonomia, quando ne senti il bisogno',
    'ami lavorare con Arcangeli, simboli, chakra, decreti e Numeri Sacri',
    'vuoi trasformare un’intuizione spirituale in una scelta o in un piccolo passo concreto',
    'desideri uno strumento a cui tornare nel tempo, non un PDF da leggere una sola volta'
  ];

  React.useEffect(() => {
    document.title = 'Mappa di Luce Interattiva | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="detail-hero">
        <div className="container split-grid">
          <div className="product-visual glow-card">
            <img src={mappaCover} alt="Mappa di Luce Interattiva" />
          </div>
          <div className="copy-block">
            <span className="eyebrow">Kit digitale completo · Mappa A4 + guida + diario</span>
            <h1>Mappa di Luce Interattiva</h1>
            <p className="large-copy"><strong>Non è una Mappa da guardare. È una Mappa da consultare.</strong></p>
            <p>
              Formula una domanda, entra in uno spazio di ascolto e lascia che un simbolo, un Numero Sacro,
              un Arcangelo o un messaggio richiami la tua attenzione. Poi usa la guida per comprenderlo e
              trasformarlo in una scelta concreta.
            </p>
            <p className="large-copy"><strong>Ascolta · Ricevi · Scegli · Trasforma</strong></p>
            <div className="price-line"><strong>37 €</strong><span>download digitale immediato</span></div>
            <ExternalButton href={links.mappa} eventName="click_detail_mappa">Scopri la tua Mappa di Luce – 37 €</ExternalButton>
            <p className="microcopy">Pagamento sicuro su Payhip · Kit digitale · Nessun abbonamento</p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Come funziona davvero</span>
            <h2>Da una domanda a una scelta concreta</h2>
            <p>La Mappa non richiede di studiare tutto prima di iniziare. Parti dal momento che stai vivendo.</p>
          </div>
          <div className="steps-grid">
            <div>
              <span>1</span>
              <h3>Formula una domanda</h3>
              <p>Per esempio: “Quale energia mi accompagna oggi?” oppure “Qual è il prossimo passo più armonico?”</p>
            </div>
            <div>
              <span>2</span>
              <h3>Consulta la Mappa</h3>
              <p>Osserva senza forzare. Può richiamarti un Arcangelo, un Numero Sacro, un chakra, un raggio o un messaggio.</p>
            </div>
            <div>
              <span>3</span>
              <h3>Trasforma il messaggio</h3>
              <p>Approfondisci nella guida, annota ciò che emerge nel diario e scegli un piccolo passo concreto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-narrow">
          <div className="section-heading center">
            <span className="eyebrow">Perché è interattiva</span>
            <h2>Non si limita a essere letta: la consulti</h2>
            <p>Ogni elemento può diventare una porta di ascolto e approfondimento, senza toglierti la libertà di scegliere.</p>
          </div>
          <div className="feature-grid">
            <div><strong>SÌ</strong><span>La strada è aperta</span></div>
            <div><strong>ATTENDI</strong><span>Non forzare i tempi</span></div>
            <div><strong>RIVEDI</strong><span>Cambia un dettaglio, non il sogno</span></div>
            <div><strong>AGISCI ORA</strong><span>Trasforma il segnale in un passo reale</span></div>
          </div>
          <div className="decree-note">
            <strong>Dentro la Mappa trovi più livelli di consultazione.</strong>
            <p>
              I Numeri Sacri 13, 138 e 125; gli Arcangeli Michele, Raffaele, Gabriele e Uriel; i sette chakra;
              i 7 Raggi Sacri e i 5 Raggi Occulti; il Cubo di Metatron; la Fiamma Viola e i Bigliettini di Luce.
              Non devi usarli tutti insieme: approfondisci soltanto ciò che emerge nella consultazione.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split-grid align-start">
          <div className="copy-block">
            <span className="eyebrow">Una cosa importante</span>
            <h2>Non devi imparare tutto</h2>
            <p className="large-copy">
              La ricchezza della Mappa non deve diventare complicazione. I simboli sono molti perché lo strumento
              possa accompagnarti in momenti diversi.
            </p>
            <p>
              Parti da una domanda, osserva ciò che ti richiama e consulta soltanto quella parte della guida.
              Puoi tornare alla Mappa ogni volta che desideri fermarti, ascoltare e vedere una situazione da una prospettiva nuova.
            </p>
          </div>
          <div className="product-visual">
            <img src={mappaCover} alt="Dettaglio della Mappa di Luce Interattiva" />
          </div>
        </div>
      </section>

      <section className="section rituals-fit-section">
        <div className="container split-grid align-start">
          <div className="rituals-fit-copy">
            <span className="eyebrow">Può accompagnarti se…</span>
            <h2>Cerchi più orientamento, non altre informazioni</h2>
            <p className="large-copy">La Mappa è pensata per essere riutilizzata nel tempo e collegare ascolto spirituale e responsabilità personale.</p>
          </div>
          <ul className="recognition-list">
            {suitedFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Cosa ricevi</span>
            <h2>Quattro strumenti, un solo metodo</h2>
            <p>Il valore non è nella quantità dei file: è nel modo in cui lavorano insieme.</p>
          </div>
          <div className="asset-grid">
            <Asset image={guidaCompleta} title="Guida completa" text="Ti accompagna dalla preparazione alla consultazione e spiega come approfondire ogni simbolo che emerge." />
            <Asset image={mappaCover} title="Mappa A4 stampabile" text="Il cuore visivo del percorso: messaggi, Arcangeli, Numeri Sacri, chakra, Raggi e Cubo di Metatron in un’unica tavola." />
            <Asset image={diario} title="Diario di Attivazione Interiore" text="Uno spazio per annotare domande, simboli, intuizioni, sensazioni e soprattutto le scelte concrete che vuoi portare nella quotidianità." />
            <Asset image={bigliettini} title="Bigliettini di Luce" text="Messaggi da estrarre come spunto simbolico di riflessione, da collegare alla guida e al diario." />
          </div>
        </div>
      </section>

      <section className="section rituals-trust-section">
        <div className="container content-narrow center">
          <span className="eyebrow">Libero arbitrio al centro</span>
          <h2>La Mappa non decide al posto tuo</h2>
          <p className="large-copy">
            Non promette risposte automatiche e non sostituisce le tue decisioni. Ti offre uno spazio simbolico
            attraverso cui fermarti, ascoltare e osservare una situazione da un’altra prospettiva. La scelta finale rimane sempre tua.
          </p>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Accesso immediato</span>
          <h2>Ascolta · Ricevi · Scegli · Trasforma</h2>
          <p>Ricevi il Kit digitale completo con Mappa A4, guida, diario e Bigliettini di Luce.</p>
          <ExternalButton href={links.mappa} eventName="click_detail_mappa_bottom">Acquista la Mappa di Luce – 37 €</ExternalButton>
          <p className="microcopy">Dopo l’acquisto ricevi i file digitali tramite Payhip.</p>
        </div>
      </section>
    </Layout>
  );
}
