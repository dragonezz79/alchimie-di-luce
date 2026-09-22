import React from 'react';
import './global.css';

export const whatsappNumber = '393492304412';
export const telegramUrl = 'https://t.me/alchimiediluce';

export const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const track = (name, parameters = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, parameters);
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
        <a href="/approfondimenti">Approfondimenti</a>
        {telegramUrl && <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram</a>}
        <a href="/nodi-karmici">Nodi karmici</a>
        <a href="/punto-zero">Punto Zero</a>
        <a href="/trova-il-tuo-percorso">Fai il test</a>
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
          <p>Pulizia energetica della persona e della casa, lettura dei cicli e lavoro sui nodi che continuano a ripetersi, con un approccio sobrio e rispettoso del libero arbitrio.</p>
        </div>
        <div>
          <strong>Esplora</strong>
          <a href="/approfondimenti">Approfondimenti</a>
          <a href="/nodi-karmici">Nodi karmici</a>
          <a href="/punto-zero">Punto Zero</a>
          <a href="/trova-il-tuo-percorso">Fai il test</a>
          <a href="/letture">Tarocchi</a>
          <a href="/prodotti">Strumenti digitali</a>
        </div>
        <div>
          <strong>Contatti</strong>
          <a href={whatsappLink(genericMessage)} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:info@alchimiediluce.it">info@alchimiediluce.it</a>
          <a href={telegramUrl} target="_blank" rel="noreferrer" onClick={() => track('click_footer_telegram')}>Telegram · Spazio di Chiarezza</a>
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
