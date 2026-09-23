import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import HomeSalesPage from './HomeSalesPage.jsx';
import ReadingsSalesPage from './ReadingsSalesPage.jsx';
import { MapSalesPage, ProductsSalesPage } from './SpecialPages.jsx';
import PointZeroPage from './PointZeroPage.jsx';
import ProductFinderPage from './ProductFinderPage.jsx';
import { ArticlePage, InsightsPage, articles } from './BlogPages.jsx';
import { CookiePolicyPage, PrivacyPage } from './PrivacyPages.jsx';

const path = window.location.pathname.replace(/\/$/, '') || '/';
const siteUrl = 'https://alchimiediluce.it';
const defaultImage = `${siteUrl}/social-preview.webp`;

const upsertMeta = (selector, attribute, value) => {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    const [name, property] = attribute === 'property' ? [null, selector.match(/property="([^"]+)"/)?.[1]] : [selector.match(/name="([^"]+)"/)?.[1], null];
    if (name) node.setAttribute('name', name);
    if (property) node.setAttribute('property', property);
    document.head.appendChild(node);
  }
  node.setAttribute('content', value);
};

const applySeo = ({ title, description, canonicalPath = path, type = 'website', index = true }) => {
  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath}`;
  document.title = title;

  upsertMeta('meta[name="description"]', 'name', description);
  upsertMeta('meta[name="robots"]', 'name', index ? 'index,follow' : 'noindex,follow');
  upsertMeta('meta[property="og:title"]', 'property', title);
  upsertMeta('meta[property="og:description"]', 'property', description);
  upsertMeta('meta[property="og:url"]', 'property', canonicalUrl);
  upsertMeta('meta[property="og:type"]', 'property', type);
  upsertMeta('meta[property="og:image"]', 'property', defaultImage);
  upsertMeta('meta[name="twitter:title"]', 'name', title);
  upsertMeta('meta[name="twitter:description"]', 'name', description);
  upsertMeta('meta[name="twitter:image"]', 'name', defaultImage);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
};

const routeMeta = {
  '/': {
    title: 'Alchimie di Luce | Pulizia energetica della persona e della casa',
    description: 'Punto Zero integra la pulizia energetica personale con l’armonizzazione della casa, per sciogliere ciò che trattiene e riportare ordine nello spazio quotidiano.'
  },
  '/punto-zero': {
    title: 'Punto Zero | Pulizia energetica della persona e della casa',
    description: 'Punto Zero è un intervento energetico personalizzato svolto a distanza sulla persona e sulla casa, con valutazione preliminare e rispetto del libero arbitrio.'
  },
  '/trova-il-tuo-percorso': {
    title: 'Trova il tuo percorso | Alchimie di Luce',
    description: 'Quattro domande per orientarti tra serenità, protezione, chiarezza, strumenti digitali e Punto Zero, senza diagnosi né promesse assolute.'
  },
  '/prodotti': {
    title: 'Strumenti digitali | Alchimie di Luce',
    description: 'Guide e strumenti digitali per centratura, protezione, ascolto personale e pratica quotidiana.'
  },
  '/prodotti/7-rituali-protezione-luce': {
    title: '7 Rituali di Protezione e Luce | Alchimie di Luce',
    description: 'Un percorso digitale di sette pratiche guidate per centratura, rilascio, confini energetici e armonizzazione quotidiana della casa.'
  },
  '/prodotti/mappa-di-luce': {
    title: 'Mappa di Luce Interattiva | Alchimie di Luce',
    description: 'Uno strumento digitale di ascolto personale da consultare per trasformare intuizioni e simboli in una scelta concreta.'
  },
  '/letture': {
    title: 'Consulto Tarocchi | Alchimie di Luce',
    description: 'Letture dei Tarocchi in forma scritta o telefonica per osservare una situazione con maggiore chiarezza e orientamento.'
  },
  '/approfondimenti': {
    title: 'Approfondimenti | Alchimie di Luce',
    description: 'Guide pratiche su equilibrio interiore, ambienti, blocchi e discernimento spirituale, con un approccio serio e misurato.'
  },
  '/nodi-karmici': {
    title: 'Nodi karmici e schemi che si ripetono | Alchimie di Luce',
    description: 'Una lettura spirituale prudente degli schemi ricorrenti, dei legami e delle dinamiche che continuano a chiedere attenzione.'
  },
  '/chi-sono': {
    title: 'Carmelo Nicita | Alchimie di Luce',
    description: 'Approccio, metodo e principi di Carmelo Nicita: discernimento, lettura dei cicli e lavoro energetico con confini chiari e rispetto del libero arbitrio.'
  },
  '/privacy': {
    title: 'Privacy Policy | Alchimie di Luce',
    description: 'Informativa sul trattamento dei dati personali del sito Alchimie di Luce.',
    index: false
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Alchimie di Luce',
    description: 'Informazioni sui cookie tecnici, sulle preferenze e su Google Analytics 4.',
    index: false
  }
};

let seo = routeMeta[path];

if (path === '/sessioni') {
  seo = { ...routeMeta['/punto-zero'], canonicalPath: '/punto-zero' };
}

if (path.startsWith('/approfondimenti/')) {
  const slug = path.split('/').filter(Boolean).pop();
  const article = articles.find((item) => item.slug === slug);
  if (article) {
    seo = {
      title: `${article.title} | Alchimie di Luce`,
      description: article.excerpt,
      canonicalPath: `/approfondimenti/${article.slug}`,
      type: 'article'
    };
  }
}

applySeo(seo || {
  title: 'Pagina non trovata | Alchimie di Luce',
  description: 'La pagina richiesta non è disponibile.',
  index: false
});

const RootPage = path.startsWith('/approfondimenti/')
  ? ArticlePage
  : path === '/approfondimenti'
    ? InsightsPage
  : path === '/'
  ? HomeSalesPage
  : path === '/trova-il-tuo-percorso'
    ? ProductFinderPage
  : path === '/punto-zero' || path === '/sessioni'
    ? PointZeroPage
    : path === '/prodotti/mappa-di-luce'
    ? MapSalesPage
    : path === '/prodotti'
      ? ProductsSalesPage
      : path === '/letture'
        ? ReadingsSalesPage
        : path === '/privacy'
          ? PrivacyPage
          : path === '/cookie-policy'
            ? CookiePolicyPage
            : App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
);
