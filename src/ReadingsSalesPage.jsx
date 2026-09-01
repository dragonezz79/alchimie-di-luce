import React from 'react';
import './global.css';
import './prima-luce.css';

import risposteAngeli from './risposte-angeli.webp';
import angelTherapy from './angel-therapy.webp';
import tarocchi from './tarocchi.webp';

const links = {
  risposteAngeli: 'https://paypal.me/AlchimieDiLuce/20',
  angelTherapy: 'https://paypal.me/AlchimieDiLuce/25',
  tarocchiPdf: 'https://paypal.me/AlchimieDiLuce/25',
  tarocchiTelefono: 'https://paypal.me/AlchimieDiLuce/30',
  calTarocchi: 'https://cal.com/alchimie-di-luce/consulto-tarocchi'
};

const whatsappNumber = '393492304412';
const whatsappMessage = encodeURIComponent(
  'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei informazioni su:'
);
const whatsappAfterPayment = encodeURIComponent(
  'Ciao Carmelo, ho effettuato il pagamento.\n\nNome:\nData di nascita:\nServizio scelto:\nArgomento o domande:'
);
const whatsappPrimaLuce = encodeURIComponent(
  'Ciao Carmelo, vorrei richiedere Prima Luce.\n\nNome:\nData di nascita:\nLa mia domanda è:'
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

const readingTestimonials = [
  'Ho ricevuto una lettura dei Tarocchi da Alchimie di Luce e mi sono trovata molto bene. La lettura è stata chiara e mi ha aiutata a capire meglio la mia situazione. Grazie di cuore.',
  'Una lettura che mi ha colpita profondamente. Ha visto aspetti della mia vita con grande precisione e ha detto la verità su molte situazioni. Grazie per la professionalità e la sensibilità.',
  'Splendida lettura, hai centrato il bersaglio. Fantastico, seguirò i tuoi consigli. Grazie mille.',
  'Ringrazio tanto Carmelo per la grande disponibilità. È davvero bravo e fa emergere tanti punti di riflessione. Tanti complimenti.',
  'Mi è venuta davvero la pelle d’oca. Alcuni passaggi hanno rispecchiato situazioni realmente accadute.'
];

function Testimonials() {
  return (
    <section className="section testimonials-section" id="recensioni">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">Esperienze reali</span>
          <h2>Cosa racconta chi ha ricevuto una lettura</h2>
          <p className="testimonials-intro">Feedback autentici ricevuti tramite WhatsApp e Instagram. Le identità sono protette per rispettare la riservatezza.</p>
        </div>
        <div className="testimonials-grid">
          {readingTestimonials.map((quote, index) => (
            <figure className="testimonial-card" key={index}>
              <blockquote>“{quote}”</blockquote>
              <figcaption>Feedback verificato <span>·</span> Identità protetta</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ image, title, price, valuePrice, description, details, href, cta, eventName, badge, bookingHref, bookingCta, bookingNote, bookingEventName }) => (
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
          <ExternalButton href={bookingHref} eventName={bookingEventName} className="btn-secondary">{bookingCta}</ExternalButton>
        </div>
      )}
    </div>
  </article>
);

export default function ReadingsSalesPage() {
  React.useEffect(() => {
    document.title = 'Letture angeliche e Tarocchi | Alchimie di Luce';
    const hash = window.location.hash;
    const target = hash ? document.querySelector(hash) : null;
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="page-hero">
        <div className="container center">
          <span className="eyebrow">Letture personalizzate</span>
          <h1>Scegli il tipo di risposta che cerchi</h1>
          <p className="hero-lead">Angeli per un orientamento spirituale; Tarocchi per approfondire una situazione concreta.</p>
        </div>
      </section>

      <section className="section prima-luce-section" id="prima-luce">
        <div className="container">
          <div className="prima-luce-card">
            <span className="prima-luce-badge">✨ Mini lettura gratuita</span>
            <h2 className="prima-luce-title">Prima Luce</h2>
            <p className="prima-luce-subtitle">Scopri il mio modo di leggere i Tarocchi</p>
            <div className="prima-luce-formula" aria-label="Cosa comprende Prima Luce">
              <span>1 domanda</span>
              <span>Almeno 3 carte</span>
              <span>1 breve messaggio angelico</span>
            </div>
            <p className="prima-luce-copy">
              Una prima esperienza gratuita, riservata a chi non ha mai ricevuto una mia lettura.
              Non utilizzo uno schema fisso: interpreto liberamente le carte che emergono in relazione
              alla tua domanda e alla situazione che mi presenti.
            </p>
            <ExternalButton
              href={`https://wa.me/${whatsappNumber}?text=${whatsappPrimaLuce}`}
              eventName="click_prima_luce_whatsapp"
              className="prima-luce-cta"
            >
              Richiedi la tua mini lettura gratuita
            </ExternalButton>
            <p className="prima-luce-note">La mini lettura è più sintetica rispetto a una lettura completa. Le richieste vengono accolte in base alla disponibilità.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section" id="letture-servizi">
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
              details="Prima effettui il pagamento, poi scegli direttamente nel calendario online il giorno e l’orario disponibili. La chiamata è telefonica, non video."
              href={links.tarocchiTelefono}
              cta="Paga 30 € con PayPal"
              eventName="click_letture_tarocchi_telefono"
              bookingHref={links.calTarocchi}
              bookingCta="Scegli giorno e orario"
              bookingNote="Scegli ora giorno e orario nel calendario online. La prenotazione è riservata a chi ha già effettuato il pagamento di 30 €."
              bookingEventName="click_cal_tarocchi_telefono"
            />
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Dopo il pagamento</span>
          <h2>Scrivimi i dati necessari su WhatsApp</h2>
          <p>Indica nome, data di nascita, servizio scelto e argomento o domande. Non inviare dati sanitari sensibili.</p>
          <ExternalButton href={`https://wa.me/${whatsappNumber}?text=${whatsappAfterPayment}`} eventName="click_whatsapp_after_payment" className="btn-whatsapp">Scrivi su WhatsApp</ExternalButton>
        </div>
      </section>
    </Layout>
  );
}
