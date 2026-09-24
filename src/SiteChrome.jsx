import React from 'react';
import './global.css';

export const whatsappNumber = '393492304412';
export const telegramUrl = 'https://t.me/alchimiediluce';

const analyticsId = 'G-WYY64ZKQ79';
const consentStorageKey = 'adl_cookie_consent_v1';
const consentMaxAgeMs = 180 * 24 * 60 * 60 * 1000;

export const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const deleteAnalyticsCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name || !name.startsWith('_ga')) return;
    const expirations = [
      `${name}=; Max-Age=0; path=/; SameSite=Lax`,
      `${name}=; Max-Age=0; path=/; domain=.alchimiediluce.it; SameSite=Lax`,
      `${name}=; Max-Age=0; path=/; domain=alchimiediluce.it; SameSite=Lax`
    ];
    expirations.forEach((value) => { document.cookie = value; });
  });
};

const enableAnalytics = () => {
  if (typeof window === 'undefined' || window.__adlAnalyticsLoaded) return;

  window.__adlAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };

  window.gtag('js', new Date());
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.gtag('config', analyticsId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  if (!document.querySelector(`script[data-adl-analytics="${analyticsId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    script.dataset.adlAnalytics = analyticsId;
    document.head.appendChild(script);
  }
};

const disableAnalytics = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }
  if (typeof document !== 'undefined') deleteAnalyticsCookies();
};

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

function ConsentBanner() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const evaluateSavedChoice = () => {
      try {
        const saved = window.localStorage.getItem(consentStorageKey);
        if (!saved) {
          setOpen(true);
          return;
        }

        const parsed = JSON.parse(saved);
        const expired = !parsed?.timestamp || Date.now() - parsed.timestamp > consentMaxAgeMs;
        const validChoice = parsed?.analytics === 'granted' || parsed?.analytics === 'denied';

        if (expired || !validChoice) {
          window.localStorage.removeItem(consentStorageKey);
          setOpen(true);
          return;
        }

        if (parsed.analytics === 'granted') enableAnalytics();
        else disableAnalytics();
      } catch {
        setOpen(true);
      }
    };

    const reopen = () => setOpen(true);
    evaluateSavedChoice();
    window.addEventListener('adl:open-consent', reopen);
    return () => window.removeEventListener('adl:open-consent', reopen);
  }, []);

  const saveChoice = (analytics) => {
    try {
      window.localStorage.setItem(consentStorageKey, JSON.stringify({
        analytics,
        timestamp: Date.now()
      }));
    } catch {
      // Il sito resta utilizzabile anche se il browser non consente il salvataggio locale.
    }

    if (analytics === 'granted') enableAnalytics();
    else disableAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <aside className="consent-banner" role="dialog" aria-labelledby="consent-title" aria-describedby="consent-copy">
      <div className="consent-copy">
        <span className="eyebrow">Privacy e statistiche</span>
        <h2 id="consent-title">Scegli tu se attivare Analytics</h2>
        <p id="consent-copy">
          Il sito funziona anche senza cookie Analytics. Se accetti, Google Analytics 4 ci aiuta a capire quali pagine vengono consultate. Se rifiuti, non viene caricato.
        </p>
        <div className="consent-links">
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="consent-actions">
        <button className="btn btn-secondary" type="button" onClick={() => saveChoice('denied')}>Rifiuta analytics</button>
        <button className="btn btn-primary" type="button" onClick={() => saveChoice('granted')}>Accetta analytics</button>
      </div>
    </aside>
  );
}

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
        <a href="/punto-zero">Punto Zero</a>
        <a href="/trova-il-tuo-percorso">Fai il test</a>
        <a href="/letture">Tarocchi</a>
        <a href="/prodotti">Strumenti digitali</a>
        <a href="/chi-sono">Chi sono</a>
        {telegramUrl && <a href={telegramUrl} target="_blank" rel="noreferrer">Telegram</a>}
      </nav>
    </header>
  );
}

function Footer() {
  const genericMessage = 'Ciao Carmelo, ho visitato Alchimie di Luce e vorrei capire quale percorso è più adatto a me.';
  const openConsent = () => window.dispatchEvent(new Event('adl:open-consent'));

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
      <div className="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/cookie-policy">Cookie Policy</a>
        <button type="button" onClick={openConsent}>Preferenze cookie</button>
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
      <ConsentBanner />
    </div>
  );
}
