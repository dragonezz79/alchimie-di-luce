import React from 'react';
import './global.css';

export const whatsappNumber = '393492304412';

export const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const track = (name) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name);
  }
};

export const ExternalButton = ({ href, children, eventName, className = 'btn-primary' }) => (
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
        <span /><span /><span />
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navigazione principale">
        <a href="/punto-zero">Punto Zero</a>
        <a href="/trova-il-tuo-percorso">Fai il test</a>
        <a href="/prodotti">Strumenti digitali</a>
        <a href="/letture">Tarocchi</a>
        <a href="/chi-sono">Chi sono</a>
      </nav>
    </header>
  );
}

function Footer() {
  const genericMessage = 'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei capire quale percorso è più adatto a me.';

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Alchimie di Luce</div>
          <p>Percorsi di guarigione spirituale ed energetica per lasciare andare, fare chiarezza e ritrovare il proprio centro.</p>
        </div>
        <div>
          <strong>Esplora</strong>
          <a href="/punto-zero">Punto Zero</a>
          <a href="/trova-il-tuo-percorso">Fai il test</a>
          <a href="/letture">Tarocchi</a>
          <a href="/prodotti">Strumenti digitali</a>
        </div>
        <div>
          <strong>Contatti</strong>
          <a href={whatsappLink(genericMessage)} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:info@alchimiediluce.it">info@alchimiediluce.it</a>
          <a href="https://www.instagram.com/alchimie_di_luce/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@alchimiediluce" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>
      <p className="disclaimer">Per guarigione spirituale si intende un percorso personale di ascolto, rilascio e riequilibrio energetico. Non costituisce diagnosi o trattamento e non sostituisce cure mediche, supporto psicologico o indicazioni professionali. Gli esiti sono soggettivi.</p>
      <p className="copyright">© 2026 Alchimie di Luce · Carmelo Nicita</p>
    </footer>
  );
}

export default function SiteLayout({ children }) {
  const genericMessage = 'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei informazioni.';

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <Header />
      <main id="contenuto">{children}</main>
      <Footer />
      <a
        className="whatsapp-float"
        href={whatsappLink(genericMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Scrivi su WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
