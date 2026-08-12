import React from 'react';
import './global.css';

import heroArcangeli from './hero-arcangeli.webp';
import fotoCarmelo from './foto-carmelo.webp';
import certificatoGuarigione from './certificato-guarigione.webp';
import mappaCover from './mappa.webp';
import guidaCompleta from './guida-completa.webp';
import diario from './diario.webp';
import bigliettini from './bigliettini.webp';
import guidaSerenita from './guida-serenita.webp';
import risposteAngeli from './risposte-angeli.webp';
import angelTherapy from './angel-therapy.webp';
import tarocchi from './tarocchi.webp';
import guarigioneAngelica from './guarigione-angelica.webp';
import percorsoLuce from './percorso-luce.webp';
import ritualiCover from './kit-7-rituali-cover.webp';

const links = {
  rituali: 'https://payhip.com/b/DbHjv',
  mappa: 'https://payhip.com/b/3MyCg',
  serenita: 'https://payhip.com/buy?link=Ez8xs',
  risposteAngeli: 'https://paypal.me/AlchimieDiLuce/20',
  angelTherapy: 'https://paypal.me/AlchimieDiLuce/25',
  tarocchiPdf: 'https://paypal.me/AlchimieDiLuce/25',
  tarocchiTelefono: 'https://paypal.me/AlchimieDiLuce/30',
  calendlyTarocchi: 'https://calendly.com/gogeta7921/consulto-telefonico-con-i-tarocchi',
  guarigione: 'https://paypal.me/AlchimieDiLuce/49',
  calendlyGuarigione: 'https://calendly.com/gogeta7921/guarigione-angelica-a-distanza',
  percorso: 'https://paypal.me/AlchimieDiLuce/129',
  calendlyPercorso: 'https://calendly.com/gogeta7921/percorso-luce-prima-sessione'
};

const whatsappNumber = '393492304412';
const whatsappMessage = encodeURIComponent(
  'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei informazioni su:'
);
const whatsappAfterPayment = encodeURIComponent(
  'Ciao Carmelo, ho effettuato il pagamento.\n\nNome:\nData di nascita:\nServizio scelto:\nArgomento o domande:'
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

const PathCard = ({ label, title, text, bestFor, href, cta, icon }) => (
  <article className="path-card">
    <div className="path-icon" aria-hidden="true">{icon}</div>
    <span className="eyebrow">{label}</span>
    <h3>{title}</h3>
    <p>{text}</p>
    <div className="best-for"><strong>Scegli questa pagina se:</strong>{bestFor}</div>
    <a className="text-link" href={href}>{cta} →</a>
  </article>
);

function HomePage() {
  return (
    <Layout>
      <section className="home-hero" style={{ '--hero-image': `url(${heroArcangeli})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Alchimie di Luce</span>
          <h1>Di cosa hai bisogno oggi?</h1>
          <p className="hero-lead">
            Scegli un prodotto da usare in autonomia, una lettura personalizzata oppure un percorso
            spirituale individuale.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/prodotti">Scopri i prodotti digitali</a>
            <a className="btn btn-secondary" href="/letture">Scegli una lettura</a>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Tre strade, una scelta semplice</span>
            <h2>Vai direttamente a ciò che ti serve</h2>
          </div>
          <div className="path-grid">
            <PathCard icon="☾" label="Vuoi procedere in autonomia" title="Prodotti digitali" text="PDF e percorsi guidati da scaricare e usare con i tuoi tempi." bestFor="vuoi una pratica pronta, un prezzo contenuto e il download immediato, senza appuntamento." href="/prodotti" cta="Guarda i prodotti" />
            <PathCard icon="✦" label="Hai una domanda precisa" title="Letture" text="Angeli e Tarocchi per approfondire una domanda o una situazione concreta." bestFor="cerchi una risposta personalizzata su amore, lavoro, scelte, blocchi o cambiamenti." href="/letture" cta="Confronta le letture" />
            <PathCard icon="♡" label="Vuoi essere accompagnato" title="Sessioni" text="Uno spazio individuale a distanza per centratura, ascolto e pratica spirituale." bestFor="senti il bisogno di fermarti, parlare di ciò che vivi e ricevere un accompagnamento personale." href="/sessioni" cta="Scopri le sessioni" />
          </div>
          <div className="orientation-help">
            <div><strong>Non sai ancora cosa scegliere?</strong><span>Scrivimi in poche righe cosa stai vivendo: ti indicherò la pagina più adatta, senza impegno.</span></div>
            <ExternalButton href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="btn-whatsapp" eventName="click_home_orientation_whatsapp">Chiedi un orientamento</ExternalButton>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container split-grid">
          <div className="product-visual glow-card">
            <img src={ritualiCover} alt="Copertina del Kit 7 Rituali di Protezione e Luce" />
          </div>
          <div className="copy-block">
            <span className="eyebrow">Nuovo · PDF digitale</span>
            <h2>7 Rituali di Protezione e Luce</h2>
            <p className="large-copy">
              Sette pratiche guidate, sette decreti completi e un percorso di sette giorni per
              protezione simbolica, centratura e rilascio.
            </p>
            <div className="price-line"><strong>4,90 €</strong><span>prezzo permanente</span></div>
            <div className="button-row">
              <a className="btn btn-primary" href="/prodotti/7-rituali-protezione-luce">Scopri cosa contiene</a>
              <ExternalButton href={links.rituali} eventName="click_home_rituali_payhip" className="btn-secondary">Acquista su Payhip</ExternalButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container simple-steps">
          <div className="section-heading center">
            <span className="eyebrow">Come funziona</span>
            <h2>Nessun percorso complicato</h2>
          </div>
          <div className="steps-grid">
            <div><span>1</span><h3>Scegli</h3><p>Apri solo la pagina della categoria che ti interessa.</p></div>
            <div><span>2</span><h3>Leggi</h3><p>Trovi contenuto, prezzo, tempi e modalità prima di acquistare.</p></div>
            <div><span>3</span><h3>Ricevi</h3><p>I prodotti arrivano subito; per letture e sessioni mi contatti dopo il pagamento.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <img src={fotoCarmelo} alt="Carmelo Nicita, Alchimie di Luce" />
          <div>
            <span className="eyebrow">Chi c’è dietro Alchimie di Luce</span>
            <h2>Uno spazio spirituale con una guida reale</h2>
            <p>
              Sono Carmelo. Ho creato Alchimie di Luce per offrire strumenti comprensibili,
              esperienze personali e pratiche che possano essere integrate nella vita quotidiana.
            </p>
            <a className="text-link" href="/chi-sono">Conosci il mio percorso →</a>
          </div>
        </div>
      </section>
    </Layout>
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

function ProductsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Prodotti digitali" title="Scegli, scarica e usa con i tuoi tempi" text="Tre risorse diverse: un kit pratico, un percorso completo e una guida gratuita." />
      <section className="section">
        <div className="container product-list">
          <ProductCard image={ritualiCover} label="PDF · 24 pagine" title="7 Rituali di Protezione e Luce" text="Pratiche guidate, decreti completi e formule finali per creare una routine simbolica semplice." price="4,90 €" detailHref="/prodotti/7-rituali-protezione-luce" buyHref={links.rituali} buyText="Acquista su Payhip" eventName="click_prodotti_rituali" />
          <ProductCard image={mappaCover} label="Kit digitale completo" title="Mappa di Luce Interattiva" text="Guida, diario, mappa e strumenti da usare per costruire un percorso spirituale personale." price="37 €" detailHref="/prodotti/mappa-di-luce" buyHref={links.mappa} buyText="Acquista su Payhip" eventName="click_prodotti_mappa" />
          <ProductCard image={guidaSerenita} label="Risorsa gratuita" title="5 minuti al giorno per ritrovare serenità" text="Una guida breve per iniziare da una pratica quotidiana accessibile e senza pressione." price="Gratis" buyHref={links.serenita} buyText="Scarica gratis" eventName="click_prodotti_serenita" showFullImage />
        </div>
      </section>
    </Layout>
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

function RitualsPage() {
  const chapters = [
    'Mantello Blu dell’Arcangelo Michele',
    'Fiamma Viola di Trasmutazione',
    'Sfera di Luce Protettiva',
    'Pulizia simbolica della casa',
    'Rito serale di rilascio',
    'Protezione prima di un incontro difficile',
    'Centratura con respiro e luce'
  ];

  return (
    <Layout>
      <section className="detail-hero">
        <div className="container split-grid">
          <div className="product-visual glow-card"><img src={ritualiCover} alt="7 Rituali di Protezione e Luce" /></div>
          <div className="copy-block">
            <span className="eyebrow">PDF digitale · Download immediato</span>
            <h1>7 Rituali di Protezione e Luce</h1>
            <p className="large-copy">Un percorso spirituale e simbolico in 24 pagine per ritrovare centratura e proteggere i propri confini interiori.</p>
            <div className="price-line"><strong>4,90 €</strong><span>prezzo permanente</span></div>
            <ExternalButton href={links.rituali} eventName="click_detail_rituali">Acquista ora su Payhip</ExternalButton>
            <p className="microcopy">Pagamento sicuro · PDF disponibile subito dopo l’acquisto</p>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container content-narrow">
          <div className="section-heading center"><span className="eyebrow">Dentro il kit</span><h2>Una struttura chiara, senza ripetizioni</h2></div>
          <div className="feature-grid">
            <div><strong>7</strong><span>pratiche guidate</span></div>
            <div><strong>7</strong><span>decreti completi</span></div>
            <div><strong>7</strong><span>formule finali</span></div>
            <div><strong>7</strong><span>giorni di percorso</span></div>
          </div>
          <p className="center large-copy">Per ogni capitolo esegui la pratica, leggi il decreto completo una volta e concludi ripetendo la formula finale tre volte.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split-grid align-start">
          <div>
            <span className="eyebrow">I sette capitoli</span>
            <h2>Scegli il rituale adatto al momento</h2>
          </div>
          <ol className="chapter-list">{chapters.map((chapter) => <li key={chapter}>{chapter}</li>)}</ol>
        </div>
      </section>
      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Inizia quando vuoi</span>
          <h2>Il kit completo costa 4,90 €</h2>
          <p>Puoi leggerlo dal telefono, dal computer oppure stamparlo in formato A4.</p>
          <ExternalButton href={links.rituali} eventName="click_detail_rituali_bottom">Vai all’acquisto su Payhip</ExternalButton>
        </div>
      </section>
    </Layout>
  );
}

function MapPage() {
  return (
    <Layout>
      <section className="detail-hero">
        <div className="container split-grid">
          <div className="product-visual"><img src={mappaCover} alt="Mappa di Luce Interattiva" /></div>
          <div className="copy-block">
            <span className="eyebrow">Kit digitale completo</span>
            <h1>Mappa di Luce Interattiva</h1>
            <p className="large-copy">Un percorso autonomo per esplorare simboli spirituali, pratiche di centratura e riflessione personale.</p>
            <div className="price-line"><strong>37 €</strong><span>download digitale</span></div>
            <ExternalButton href={links.mappa} eventName="click_detail_mappa">Acquista su Payhip</ExternalButton>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">Cosa ricevi</span><h2>Quattro strumenti, un solo percorso</h2></div>
          <div className="asset-grid">
            <Asset image={guidaCompleta} title="Guida completa" text="Spiegazioni e pratiche per orientarti nel percorso." />
            <Asset image={mappaCover} title="Mappa A4" text="Una visione d’insieme dei principali elementi spirituali." />
            <Asset image={diario} title="Diario di 31 giorni" text="Uno spazio per annotare pratica, sensazioni e intenzioni." />
            <Asset image={bigliettini} title="Bigliettini di Luce" text="Messaggi e spunti da scegliere nella quotidianità." />
          </div>
        </div>
      </section>
      <section className="section cta-section"><div className="container center"><h2>Vuoi iniziare il tuo percorso?</h2><ExternalButton href={links.mappa} eventName="click_detail_mappa_bottom">Acquista il Kit a 37 €</ExternalButton></div></section>
    </Layout>
  );
}

const Asset = ({ image, title, text }) => <article className="asset-card"><img src={image} alt={title} /><h3>{title}</h3><p>{text}</p></article>;

const ServiceCard = ({
  image,
  title,
  price,
  valuePrice,
  description,
  details,
  href,
  cta,
  eventName,
  badge,
  bookingHref,
  bookingCta,
  bookingNote,
  bookingEventName
}) => (
  <article className="service-card">
    <img src={image} alt={title} />
    <div className="service-card-body">
      {badge && <span className="badge">{badge}</span>}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="service-details">{details}</p>
      <div className="service-price">{valuePrice && <del>{valuePrice}</del>}<strong>{price}</strong></div>
      <ExternalButton href={href} eventName={eventName}>{cta}</ExternalButton>
      {bookingHref && (
        <div className="booking-after-payment">
          <p><strong>Hai già pagato?</strong> {bookingNote}</p>
          <ExternalButton href={bookingHref} eventName={bookingEventName} className="btn-secondary">
            {bookingCta}
          </ExternalButton>
        </div>
      )}
    </div>
  </article>
);

function ReadingsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Letture personalizzate" title="Scegli il tipo di risposta che cerchi" text="Angeli per un orientamento spirituale; Tarocchi per approfondire una situazione concreta." />
      <section className="section">
        <div className="container">
          <div className="category-heading"><span className="eyebrow">Messaggi angelici</span><h2>Letture scritte in PDF</h2></div>
          <div className="service-grid">
            <ServiceCard image={risposteAngeli} title="Le Risposte degli Angeli" valuePrice="40 €" price="20 €" badge="5 domande" description="Cinque risposte brevi, chiare e personalizzate, anche su argomenti diversi." details="Dopo il pagamento mi invii nome, data di nascita e domande. Ricevi il PDF entro 48 ore." href={links.risposteAngeli} cta="Paga 20 € con PayPal" eventName="click_letture_risposte" />
            <ServiceCard image={angelTherapy} title="Lettura Angel Therapy" valuePrice="50 €" price="25 €" badge="Percorso personalizzato" description="Consigli e linee guida spirituali sul momento che stai vivendo." details="Può includere messaggi angelici, pratiche quotidiane, protezione e armonizzazione. Ricevi il PDF entro 48 ore." href={links.angelTherapy} cta="Paga 25 € con PayPal" eventName="click_letture_angel_therapy" />
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="category-heading"><span className="eyebrow">Tarocchi</span><h2>PDF oppure consulto telefonico</h2></div>
          <div className="service-grid">
            <ServiceCard image={tarocchi} title="Tarocchi in PDF" valuePrice="50 €" price="25 €" badge="Consegna entro 48 ore" description="Una lettura scritta e personalizzata su una situazione che desideri chiarire." details="Ricevi un’analisi completa da salvare e rileggere quando vuoi." href={links.tarocchiPdf} cta="Paga 25 € con PayPal" eventName="click_letture_tarocchi_pdf" />
            <ServiceCard
              image={tarocchi}
              title="Tarocchi al telefono"
              valuePrice="60 €"
              price="30 €"
              badge="30 minuti"
              description="Durante la chiamata puoi fare le domande che desideri nel tempo disponibile."
              details="Prima effettui il pagamento, poi scegli direttamente su Calendly il giorno e l’orario disponibili. La chiamata è telefonica, non video."
              href={links.tarocchiTelefono}
              cta="Paga 30 € con PayPal"
              eventName="click_letture_tarocchi_telefono"
              bookingHref={links.calendlyTarocchi}
              bookingCta="Scegli giorno e orario"
              bookingNote="Scegli ora giorno e orario su Calendly. La prenotazione è riservata a chi ha già effettuato il pagamento di 30 €."
              bookingEventName="click_calendly_tarocchi_telefono"
            />
          </div>
        </div>
      </section>
      <AfterPayment />
    </Layout>
  );
}

function AfterPayment() {
  return (
    <section className="section cta-section">
      <div className="container center content-narrow">
        <span className="eyebrow">Dopo il pagamento</span>
        <h2>Scrivimi i dati necessari su WhatsApp</h2>
        <p>Indica nome, data di nascita, servizio scelto e argomento o domande. Non inviare dati sanitari sensibili.</p>
        <ExternalButton href={`https://wa.me/${whatsappNumber}?text=${whatsappAfterPayment}`} eventName="click_whatsapp_after_payment" className="btn-whatsapp">Scrivi su WhatsApp</ExternalButton>
      </div>
    </section>
  );
}

function SessionsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Sessioni individuali" title="Uno spazio personale di ascolto e centratura" text="Scegli una sessione singola oppure un percorso di tre incontri a distanza." />
      <section className="section">
        <div className="container service-grid">
          <ServiceCard
            image={guarigioneAngelica}
            title="Guarigione Angelica"
            price="49 €"
            badge="60 minuti"
            description="Una sessione spirituale individuale a distanza per rallentare, ascoltarti e ritrovare centratura."
            details="Prima effettui il pagamento, poi scegli direttamente su Calendly il giorno e l’orario disponibili. La pratica si svolge a distanza e non richiede videochiamata."
            href={links.guarigione}
            cta="Paga 49 € con PayPal"
            eventName="click_sessioni_guarigione"
            bookingHref={links.calendlyGuarigione}
            bookingCta="Scegli giorno e orario"
            bookingNote="Scegli ora giorno e orario su Calendly. La prenotazione è riservata a chi ha già effettuato il pagamento di 49 €."
            bookingEventName="click_calendly_guarigione_angelica"
          />
          <ServiceCard
            image={percorsoLuce}
            title="Percorso Luce"
            price="129 €"
            badge="3 sessioni"
            description="Tre incontri per accompagnare con continuità un momento di cambiamento o una pratica personale."
            details="Prima effettui il pagamento, poi scegli su Calendly il giorno e l’orario della prima sessione. Le altre due date saranno concordate insieme durante il percorso."
            href={links.percorso}
            cta="Paga 129 € con PayPal"
            eventName="click_sessioni_percorso"
            bookingHref={links.calendlyPercorso}
            bookingCta="Prenota la prima sessione"
            bookingNote="Scegli su Calendly giorno e orario della prima sessione. La prenotazione è riservata a chi ha già effettuato il pagamento di 129 €."
            bookingEventName="click_calendly_percorso_luce"
          />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container content-narrow">
          <div className="section-heading center"><span className="eyebrow">Come funziona</span><h2>Quattro passaggi semplici</h2></div>
          <ol className="process-list">
            <li><strong>Mi racconti brevemente cosa stai vivendo.</strong><span>Definiamo insieme l’intenzione della sessione.</span></li>
            <li><strong>Concordiamo giorno e orario.</strong><span>Ricevi le indicazioni per preparare uno spazio tranquillo.</span></li>
            <li><strong>La pratica si svolge a distanza.</strong><span>Non devi essere collegato in video.</span></li>
            <li><strong>Ricevi una breve restituzione.</strong><span>Con uno spunto personale da portare nella quotidianità.</span></li>
          </ol>
        </div>
      </section>
      <AfterPayment />
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="Chi sono" title="Carmelo Nicita" text="Il volto e la voce dietro Alchimie di Luce." />
      <section className="section">
        <div className="container split-grid">
          <div className="portrait-card"><img src={fotoCarmelo} alt="Carmelo Nicita" /></div>
          <div className="copy-block">
            <span className="eyebrow">Il mio approccio</span>
            <h2>Spiritualità spiegata in modo comprensibile</h2>
            <p className="large-copy">Ho creato Alchimie di Luce come uno spazio di ascolto, simboli e pratiche personali. Ogni proposta è costruita per essere chiara: sai prima cosa riceverai, quanto costa e come funziona.</p>
            <p>Il mio lavoro non promette soluzioni miracolose e non sostituisce percorsi sanitari o psicologici. Offre uno spazio spirituale e introspettivo nel rispetto del libero arbitrio.</p>
            <ExternalButton href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="btn-whatsapp">Parliamone su WhatsApp</ExternalButton>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container certificate-grid">
          <div><span className="eyebrow">Formazione</span><h2>Un percorso coltivato nel tempo</h2><p>Studio, pratica personale e formazione accompagnano il progetto Alchimie di Luce.</p></div>
          <img src={certificatoGuarigione} alt="Certificato di formazione in Guarigione Angelica" />
        </div>
      </section>
    </Layout>
  );
}

function NotFoundPage() {
  return <Layout><section className="page-hero"><div className="container center"><span className="eyebrow">Pagina non trovata</span><h1>Questa pagina non esiste</h1><p className="hero-lead">Torna alla Home oppure scegli una delle sezioni principali.</p><a className="btn btn-primary" href="/">Torna alla Home</a></div></section></Layout>;
}

const routeMap = {
  '/': HomePage,
  '/prodotti': ProductsPage,
  '/prodotti/7-rituali-protezione-luce': RitualsPage,
  '/prodotti/mappa-di-luce': MapPage,
  '/letture': ReadingsPage,
  '/sessioni': SessionsPage,
  '/chi-sono': AboutPage
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = routeMap[path] || NotFoundPage;

  React.useEffect(() => {
    const titles = {
      '/': 'Alchimie di Luce | Prodotti, letture e percorsi spirituali',
      '/prodotti': 'Prodotti digitali | Alchimie di Luce',
      '/prodotti/7-rituali-protezione-luce': '7 Rituali di Protezione e Luce | Alchimie di Luce',
      '/prodotti/mappa-di-luce': 'Mappa di Luce Interattiva | Alchimie di Luce',
      '/letture': 'Letture angeliche e Tarocchi | Alchimie di Luce',
      '/sessioni': 'Sessioni spirituali a distanza | Alchimie di Luce',
      '/chi-sono': 'Carmelo Nicita | Alchimie di Luce'
    };
    document.title = titles[path] || 'Alchimie di Luce';
    window.scrollTo(0, 0);
  }, [path]);

  return <Page />;
}
