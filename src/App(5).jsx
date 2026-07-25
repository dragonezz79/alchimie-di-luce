import React from 'react';
import immagineGuidaSerenita from './guida-serenita.png';
import immagineArcangeli from './hero-arcangeli.webp';
import fotoCarmelo from './foto-carmelo.webp';
import certificatoGuarigione from './certificato-guarigione.webp';
import immagineRisposteAngeli from './risposte-angeli.webp';
import immagineAngelTherapy from './angel-therapy.webp';
import immagineGuidaCompleta from './guida-completa.webp';
import immagineDiario from './diario.webp';
import immagineMappa from './mappa.webp';
import immagineBigliettini from './bigliettini.webp';
import immagineTarocchi from './tarocchi.webp';
import immagineGuarigioneAngelica from './guarigione-angelica.webp';
import immaginePercorsoLuce from './percorso-luce.webp';

export default function App() {
  const whatsappNumber = '393492304412';
  const email = 'info@alchimiediluce.it';

  React.useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));

      if (!id) return;

      const target = document.getElementById(id);

      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  const trackEvent = (eventName) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName);
    }
  };

  const payhipPercorsoLuce = 'https://payhip.com/b/PmRnd';
  const payhipGuarigioneAngelica = 'https://payhip.com/b/fEOX3';
  const payhipAngelTherapy = 'https://payhip.com/b/xjFgk';
  const payhipRisposteAngeli = 'https://payhip.com/b/OiY9Q';
  const payhipKit = 'https://payhip.com/b/3MyCg';
  const payhipGuidaSerenita = 'https://payhip.com/b/Ez8xs';

  const paypalTarocchiBase = 'https://paypal.me/AlchimieDiLuce/19';
  const paypalTarocchiChiarezza = 'https://paypal.me/AlchimieDiLuce/35';
  const paypalTarocchiApprofondito =
    'https://paypal.me/AlchimieDiLuce/49';

  const whatsappText = encodeURIComponent(
    'Ciao Carmelo, ho visitato Alchimie di Luce. Scrivo LUCE perché vorrei ricevere un messaggio angelico iniziale gratuito. Il tema che sento più urgente è: amore, lavoro, casa, protezione, blocchi interiori o cambiamento.'
  );

  const whatsappMappaLuce = encodeURIComponent(
    'Ciao Carmelo, vorrei informazioni sulla Mappa di Luce Interattiva e sul Kit Completo di Attivazione Interiore.'
  );

  const introCards = [
    {
      icon: '✦',
      label: 'Percorso autonomo',
      title: 'Mappa di Luce',
      text: 'Un percorso guidato per meditare, fare ordine nei pensieri e ritrovare contatto con te stesso e con il mondo spirituale.',
      href: '#kit-digitale',
      cta: 'Scopri la Mappa'
    },
    {
      icon: '♡',
      label: 'Risposta personalizzata',
      title: 'Letture',
      text: 'Carte degli Angeli e Tarocchi per ricevere una lettura scritta e fare chiarezza su domande e situazioni concrete.',
      href: '#prezzi',
      cta: 'Scegli una lettura'
    },
    {
      icon: '☾',
      label: 'Accompagnamento',
      title: 'Sessioni individuali',
      text: 'Un incontro spirituale a distanza per rallentare, sentirti più centrato e dedicare attenzione a ciò che stai vivendo.',
      href: '#contatti',
      cta: 'Scopri le sessioni'
    }
  ];

  const services = [
    'Momenti di sovraccarico e pesantezza emotiva',
    'Momenti di cambiamento',
    'Relazioni difficili',
    'Casa o luogo da armonizzare',
    'Protezione energetica',
    'Chiarezza interiore',
    'Stanchezza spirituale',
    'Ritrovare pace e centratura'
  ];

  const sessionSteps = [
    'Mi racconti brevemente cosa stai vivendo e quale aspetto desideri affrontare.',
    'Concordiamo il momento della sessione e ricevi indicazioni semplici per prepararti.',
    'Svolgo a distanza una pratica spirituale con preghiera, visualizzazione e invocazione degli Arcangeli.',
    'Al termine ricevi una breve restituzione con ciò che è emerso e uno spunto da usare nella vita quotidiana.'
  ];

  const bookingOptions = [
    {
      title: 'Guarigione Angelica',
      price: '49 €',
      href: payhipGuarigioneAngelica,
      eventName: 'click_guarigione_angelica',
      cta: 'Acquista con codice LUCE10',
      image: immagineGuarigioneAngelica,
      imageAlt: 'Guarigione Angelica',
      description:
        'Una sessione spirituale individuale a distanza, indicata quando ti senti appesantito, confuso o hai bisogno di fermarti e ritrovare calma e centratura. Durata indicativa: 45/60 minuti.'
    },
    {
      title: 'Percorso Luce',
      price: '129 €',
      href: payhipPercorsoLuce,
      eventName: 'click_percorso_luce',
      cta: 'Acquista con codice LUCE10',
      image: immaginePercorsoLuce,
      imageAlt: 'Percorso Luce',
      description:
        'Tre sessioni a distanza per lavorare con continuità su un momento di cambiamento, sulla centratura e sulla tua pratica spirituale personale.'
    }
  ];

  const angelReadings = [
    {
      title: 'Le Risposte degli Angeli',
      price: '19 €',
      href: payhipRisposteAngeli,
      eventName: 'click_risposte_angeli',
      cta: 'Acquista con codice LUCE10',
      image: immagineRisposteAngeli,
      imageAlt: 'Le Risposte degli Angeli con tre carte',
      description:
        'Una lettura scritta con 3 Carte degli Angeli per ricevere un messaggio semplice su una situazione o su domande che ti stanno a cuore.',
      details:
        'Puoi porre fino a 3 domande, collegate oppure diverse. Dopo il pagamento, inviamele su WhatsApp insieme al tuo nome. Entro 48 ore riceverai un PDF con le carte estratte, una spiegazione chiara e un messaggio finale.'
    },
    {
      title: 'Lettura Angel Therapy',
      price: '29 €',
      href: payhipAngelTherapy,
      eventName: 'click_angel_therapy',
      cta: 'Acquista con codice LUCE10',
      image: immagineAngelTherapy,
      imageAlt: 'Lettura Angel Therapy con cinque carte',
      description:
        'Una lettura scritta con 5 Carte degli Angeli per approfondire un tema, osservare ciò che lo influenza e ricevere un orientamento spirituale.',
      details:
        'Dopo il pagamento, inviami su WhatsApp il tuo nome e il tema da esplorare. Entro 48 ore riceverai un PDF con le 5 carte, la spiegazione di ogni carta e una sintesi conclusiva.'
    }
  ];

  const tarotReadings = [
    {
      title: 'Lettura Express',
      price: '19 €',
      href: paypalTarocchiBase,
      eventName: 'click_tarocchi_19',
      cta: 'Paga 19 € con PayPal',
      cards: '1 domanda · Risposta diretta',
      delivery: 'Consegna entro 48 ore.',
      description:
        'Una lettura dei Tarocchi per osservare una domanda precisa da un nuovo punto di vista.',
      details:
        'Riceverai una risposta scritta personalizzata, con la spiegazione delle carte e una sintesi finale.'
    },
    {
      title: 'Lettura di Chiarezza',
      price: '35 €',
      href: paypalTarocchiChiarezza,
      eventName: 'click_tarocchi_35',
      cta: 'Paga 35 € con PayPal',
      cards: 'Fino a 3 domande · Collegate oppure diverse',
      delivery: 'Consegna entro 72 ore.',
      description:
        'Una lettura dei Tarocchi per fare chiarezza su più aspetti di una situazione o su tre temi diversi.',
      details:
        'Riceverai una risposta scritta per ogni domanda, la spiegazione delle carte e una sintesi conclusiva.'
    },
    {
      title: 'Lettura Completa',
      price: '49 €',
      href: paypalTarocchiApprofondito,
      eventName: 'click_tarocchi_49',
      cta: 'Paga 49 € con PayPal',
      cards: 'Fino a 5 domande · Collegate oppure diverse',
      delivery: 'Consegna entro 4 giorni.',
      description:
        'Una lettura completa dei Tarocchi per affrontare fino a cinque domande e avere una visione più ampia del momento che stai vivendo.',
      details:
        'Riceverai un PDF personalizzato con la risposta a ogni domanda, la spiegazione delle carte, una sintesi generale e uno spunto pratico finale.'
    }
  ];

  const faqs = [
    {
      question: 'Devo essere collegato in video?',
      answer:
        'No. La sessione può svolgersi a distanza: all’orario concordato ti prepari in un luogo tranquillo.'
    },
    {
      question: 'Quanto dura una sessione?',
      answer:
        'Indicativamente 45/60 minuti, compresa la breve restituzione finale.'
    },
    {
      question: 'È una cura medica?',
      answer:
        'No. È una pratica spirituale e introspettiva. Non sostituisce medico, psicologo, psicoterapeuta, farmaci o terapie specialistiche.'
    },
    {
      question: 'Come ricevo gratuitamente la Guida alla Serenità?',
      answer:
        'Puoi scrivere SERENITÀ nei commenti dei contenuti dedicati sui social. Riceverai le indicazioni per scaricare gratuitamente la guida da Payhip.'
    },
    {
      question: 'Come ricevo il Kit digitale?',
      answer:
        'Dopo l’acquisto riceverai i file digitali da scaricare e usare sul tuo dispositivo oppure da stampare.'
    },
    {
      question: 'Il Kit prende decisioni al mio posto?',
      answer:
        'No. Il Kit propone simboli, spunti e strumenti di riflessione. Ogni scelta resta personale e legata al tuo libero arbitrio.'
    }
  ];

  // Inserisci qui le recensioni reali quando saranno disponibili.
  // La sezione resta automaticamente nascosta finché l’elenco è vuoto.
  const reviews = [];

  return (
    <main className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, 'Times New Roman', serif;
          background: #080814;
          color: white;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(214,182,107,0.22), transparent 35%),
            radial-gradient(circle at bottom, rgba(123,97,255,0.16), transparent 35%),
            #080814;
        }

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 15px 28px;
          background: rgba(8,8,20,0.84);
          border-bottom: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(16px);
        }

        .brand {
          color: white;
          text-decoration: none;
          font-size: 22px;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .nav a {
          color: rgba(255,255,255,0.80);
          text-decoration: none;
          white-space: nowrap;
        }

        .nav a:hover {
          color: #f6d98a;
        }

        section {
          padding: 90px 22px;
          scroll-margin-top: 92px;
        }

        .container {
          max-width: 1150px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding-top: 125px;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(8,8,20,0.24), rgba(8,8,20,0.60)),
            radial-gradient(circle at center, rgba(246,217,138,0.25), transparent 52%);
          z-index: 0;
        }

        .hero-content {
          max-width: 940px;
        }

        h1 {
          font-size: clamp(52px, 7vw, 84px);
          line-height: 1.02;
          margin: 0;
          font-weight: 500;
          text-shadow: 0 8px 28px rgba(0,0,0,0.65);
        }

        h1 span {
          display: inline-block;
          color: #f6d98a;
          font-size: clamp(27px, 4vw, 46px);
          margin-top: 16px;
          padding: 8px 22px 10px;
          border-radius: 22px;
          background: rgba(8,8,20,0.42);
        }

        h2 {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.1;
          margin: 0 0 24px;
          font-weight: 500;
        }

        h3 {
          font-size: 28px;
          margin: 0 0 15px;
          font-weight: 500;
        }

        p {
          line-height: 1.75;
        }

        .lead {
          max-width: 820px;
          margin: 28px auto 0;
          font-size: clamp(18px, 2vw, 23px);
          color: rgba(255,255,255,0.84);
        }

        .hero-mini-text {
          margin: 26px auto 0;
          color: rgba(255,255,255,0.90);
          font-size: 18px;
        }

        .hero .buttons {
          margin-top: 28px;
        }

        .hero .btn-primary {
          box-shadow: 0 16px 38px rgba(246,217,138,0.25);
        }

        .buttons {
          margin-top: 35px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 16px 30px;
          border-radius: 999px;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-weight: 600;
        }

        .btn-primary {
          background: #f6d98a;
          color: #111322;
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.25);
          color: white;
          background: rgba(255,255,255,0.08);
        }

        .btn-paypal {
          background: white;
          color: #111322;
          border: 1px solid rgba(246,217,138,0.35);
        }

        .important-note {
          margin-top: 18px;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.84);
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.7;
        }

        .welcome-note {
          max-width: 860px;
          margin: 34px auto 0;
          padding: 26px 24px;
          border: 1px solid rgba(246,217,138,0.45);
          background: linear-gradient(
            135deg,
            rgba(255, 214, 92, 0.18),
            rgba(255, 129, 86, 0.14),
            rgba(255,255,255,0.06)
          );
          box-shadow: 0 18px 40px rgba(0,0,0,0.22);
          font-size: 17px;
          line-height: 1.8;
          text-align: center;
        }

        .welcome-note strong {
          color: #fff1b8;
        }

        .promo-title {
          display: block;
          font-size: 28px;
          color: #ffe9ad;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .promo-code {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          background: #f6d98a;
          color: #111322;
          font-weight: 700;
          margin: 0 4px;
        }

        .promo-deadline {
          display: inline-block;
          margin-top: 8px;
          color: #ffd28d;
          font-weight: 700;
        }

        .promo-free {
          display: block;
          margin-top: 18px;
          font-size: 24px;
          color: #ffe9ad;
          font-weight: 700;
        }

        .dark-section {
          background: #0d0d1d;
        }

        .blue-section {
          background: #101020;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .card,
        .service,
        details {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
        }

        .card {
          border-radius: 28px;
          padding: 32px;
        }

        .path-card {
          display: flex;
          min-height: 335px;
          flex-direction: column;
          align-items: center;
        }

        .path-card .section-label {
          margin: 0 0 12px;
          letter-spacing: 0.16em;
        }

        .path-card p {
          flex: 1;
        }

        .path-card .btn {
          width: 100%;
          margin-top: 12px;
          padding: 14px 18px;
        }

        .card p,
        .text-block p {
          color: rgba(255,255,255,0.76);
        }

        .icon {
          color: #f6d98a;
          font-size: 34px;
          margin-bottom: 18px;
        }

        .section-label {
          color: #f6d98a;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 13px;
          margin-bottom: 18px;
          font-family: Arial, sans-serif;
        }

        .text-block p {
          font-size: 18px;
          margin: 0 0 18px;
        }

        .portrait-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .portrait-glow {
          position: absolute;
          width: 90%;
          height: 90%;
          background: rgba(246,217,138,0.12);
          filter: blur(45px);
          border-radius: 48px;
        }

        .portrait,
        .certificate {
          position: relative;
          width: 100%;
          border: 1px solid rgba(246,217,138,0.25);
          box-shadow: 0 35px 90px rgba(0,0,0,0.45);
        }

        .portrait {
          max-width: 350px;
          border-radius: 42px;
        }

        .certificate {
          max-width: 560px;
          border-radius: 28px;
          background: white;
        }

        .steps {
          display: grid;
          gap: 15px;
        }

        .step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          color: rgba(255,255,255,0.82);
          font-family: Arial, sans-serif;
          line-height: 1.6;
          text-align: left;
        }

        .step > div {
          width: 100%;
          text-align: left;
        }

        .step strong {
          display: block;
          margin-bottom: 4px;
          color: #ffffff;
          font-size: 17px;
        }

        .check {
          color: #f6d98a;
          font-weight: bold;
          font-size: 20px;
          line-height: 1;
          margin-top: 2px;
          flex: 0 0 auto;
        }

        .center {
          text-align: center;
        }

        .services-grid,
        .price-grid {
          margin-top: 50px;
        }

        .service {
          text-align: center;
          padding: 26px;
          border-radius: 26px;
          color: rgba(255,255,255,0.78);
          font-family: Arial, sans-serif;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .price-box {
          max-width: 760px;
          margin: 42px auto 0;
          padding: 40px 38px;
          border-radius: 32px;
          border: 1px solid rgba(246,217,138,0.25);
          background: rgba(246,217,138,0.10);
          text-align: center;
        }

        .price-box p {
          max-width: 660px;
          margin: 0 auto 18px;
          line-height: 1.8;
        }

        .price-box.wide {
          max-width: 100%;
          height: 100%;
        }

        .reading-image {
          width: 100%;
          display: block;
          border-radius: 20px;
          margin: 0 0 26px;
          border: 1px solid rgba(246,217,138,0.30);
          box-shadow: 0 20px 45px rgba(0,0,0,0.24);
        }

        .reading-note {
          margin-top: 20px;
          text-align: left;
        }

        .price {
          font-size: 58px;
          color: #f6d98a;
          margin: 12px 0;
        }

        .launch-offer {
          margin: 8px auto 28px;
          padding: 16px 18px;
          max-width: 470px;
          border-radius: 18px;
          border: 1px solid rgba(255, 214, 92, 0.60);
          background: linear-gradient(
            135deg,
            rgba(255, 214, 92, 0.24),
            rgba(255, 127, 80, 0.18)
          );
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          box-shadow: 0 14px 32px rgba(0,0,0,0.20);
        }

        .launch-offer strong {
          color: #fff3c8;
          letter-spacing: 0.04em;
          font-size: 15px;
        }

        .small {
          margin-top: 22px;
          color: rgba(255,255,255,0.58);
          font-size: 14px;
          font-family: Arial, sans-serif;
        }

        .small strong {
          color: #ffe9ad;
        }

        .product-spotlight {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .product-spotlight-image {
          width: 100%;
          display: block;
          border-radius: 30px;
          border: 1px solid rgba(246,217,138,0.30);
          box-shadow: 0 28px 70px rgba(0,0,0,0.34);
        }

        .product-spotlight-copy {
          text-align: left;
        }

        .product-spotlight-copy .lead {
          margin: 0 0 24px;
          font-size: 19px;
        }

        .product-spotlight-copy .steps {
          margin: 25px 0;
        }

        .product-spotlight-copy .buttons {
          justify-content: flex-start;
          margin-top: 26px;
        }

        .spotlight-price {
          margin: 20px 0 5px;
          color: #f6d98a;
          font-size: 46px;
          line-height: 1;
        }

        .spotlight-offer {
          color: rgba(255,255,255,0.72);
          font-family: Arial, sans-serif;
          font-size: 15px;
        }

        .kit-showcase {
          max-width: 950px;
          margin: 38px auto 10px;
        }

        .kit-main-image {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          display: block;
          border-radius: 30px;
          border: 1px solid rgba(246,217,138,0.28);
          box-shadow: 0 28px 70px rgba(0,0,0,0.34);
        }

        .serenity-image {
          width: 100%;
          display: block;
          border-radius: 28px;
          border: 1px solid rgba(246,217,138,0.30);
          box-shadow: 0 28px 70px rgba(0,0,0,0.34);
        }

        .serenity-copy {
          text-align: left;
        }

        .free-badge {
          display: inline-block;
          margin: 12px 0 4px;
          padding: 9px 18px;
          border: 1px solid rgba(246,217,138,0.65);
          border-radius: 999px;
          background: linear-gradient(135deg, #f6d98a, #d8a93f);
          color: #101225;
          font-family: Arial, sans-serif;
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .serenity-copy .buttons {
          justify-content: flex-start;
        }

        .kit-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 22px;
        }

        .kit-gallery-card {
          padding: 14px;
          border-radius: 24px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.11);
        }

        .kit-gallery-card img {
          width: 100%;
          display: block;
          border-radius: 16px;
          border: 1px solid rgba(246,217,138,0.20);
        }

        .kit-gallery-card h3 {
          margin: 16px 4px 8px;
          font-size: 21px;
        }

        .kit-gallery-card p {
          margin: 0 4px 8px;
          color: rgba(255,255,255,0.78);
          font-size: 16px;
          line-height: 1.55;
        }

        .kit-list {
          margin-top: 28px;
          text-align: left;
        }

        .faq-container {
          max-width: 850px;
        }

        details {
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 14px;
        }

        summary {
          cursor: pointer;
          color: #ffe9ad;
          font-size: 19px;
        }

        footer {
          text-align: center;
          padding: 45px 20px;
          color: rgba(255,255,255,0.45);
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        footer strong {
          color: white;
        }

        footer .footer-title {
          display: block;
          color: white;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        @media (max-width: 1220px) {
          .topbar {
            flex-direction: column;
            align-items: center;
            padding: 12px 18px;
            gap: 10px;
          }

          .nav {
            justify-content: center;
            gap: 10px 15px;
            font-size: 13px;
          }

          .hero {
            padding-top: 170px;
          }
        }

        @media (max-width: 850px) {
          .grid-2,
          .grid-3,
          .grid-4,
          .kit-gallery {
            grid-template-columns: 1fr;
          }

          .path-card {
            min-height: 0;
          }

          section {
            padding: 55px 18px;
          }

          .hero {
            padding-top: 185px;
          }

          h1 {
            font-size: 46px;
          }

          h1 span {
            font-size: 28px;
            padding: 7px 15px 9px;
            border-radius: 18px;
          }

          h2 {
            font-size: 36px;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 330px;
          }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#home">
          Alchimie di Luce
        </a>

        <nav className="nav" aria-label="Navigazione principale">
          <a href="#home">Home</a>
          <a href="#kit-digitale">Mappa di Luce</a>
          <a href="#prezzi">Letture</a>
          <a href="#contatti">Sessioni</a>
          <a href="#chi-sono">Chi sono</a>
          <a href="#contatti-finali">Contatti</a>
        </nav>
      </header>

      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${immagineArcangeli})` }}
      >
        <div className="container hero-content">
          <h1>
            Alchimie di Luce
            <span>Ritrova una direzione quando dentro senti confusione</span>
          </h1>

          <p className="hero-mini-text">
            Inizia dalla Mappa di Luce: un percorso digitale con Guida, Mappa,
            Diario e pratiche spirituali.
          </p>

          <div className="buttons">
            <a
              className="btn btn-primary"
              href={payhipKit}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('click_mappa_di_luce_hero')}
            >
              Scopri la Mappa di Luce · 27 €
            </a>

            <a className="btn btn-secondary" href="#percorsi">
              Vedi gli altri percorsi
            </a>
          </div>
        </div>
      </section>

      <section id="kit-digitale" className="blue-section product-spotlight">
        <div className="container grid-2">
          <img
            src={immagineGuidaCompleta}
            alt="Kit digitale Mappa di Luce con Guida completa"
            className="product-spotlight-image"
            loading="eager"
            decoding="async"
          />

          <div className="product-spotlight-copy">
            <p className="section-label">Il percorso principale</p>
            <h2>Mappa di Luce Interattiva</h2>

            <p className="lead">
              Un percorso da seguire con i tuoi tempi per calmare la mente,
              concentrarti, meditare e ascoltare meglio ciò che senti.
            </p>

            <div className="steps">
              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Tutto in un unico Kit</strong>
                  La Guida spiega ogni passaggio; Mappa, Diario e Bigliettini
                  ti aiutano a trasformarlo in una pratica quotidiana.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Download immediato</strong>
                  Ricevi subito i file digitali da usare sul tuo dispositivo o
                  da stampare.
                </div>
              </div>
            </div>

            <div className="spotlight-price">27 €</div>
            <div className="spotlight-offer">
              Prezzo di lancio fino al 31 luglio 2026 · Dal 1° agosto 37 €
            </div>

            <div className="buttons">
              <a
                className="btn btn-primary"
                href={payhipKit}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('click_mappa_di_luce_spotlight')}
              >
                Acquista il Kit
              </a>

              <a className="btn btn-secondary" href="#kit-dettagli">
                Guarda cosa contiene
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="percorsi" className="dark-section">
        <div className="container center">
          <p className="section-label">Tre modi per iniziare</p>
          <h2>Scegli ciò di cui hai bisogno adesso</h2>
          <p className="lead">
            Non devi orientarti tra tutte le proposte: parti dal percorso che
            senti più vicino al tuo momento.
          </p>

          <div className="grid-3">
            {introCards.map((card) => (
              <article className="card path-card" key={card.title}>
                <div className="icon">{card.icon}</div>
                <p className="section-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a className="btn btn-secondary" href={card.href}>
                  {card.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="important-note welcome-note">
            <span className="promo-title">Vuoi iniziare gratuitamente?</span>
            Scrivimi <strong>LUCE</strong> su WhatsApp e indicami il tema che
            senti più urgente. Riceverai un primo messaggio simbolico di
            orientamento.
          </div>

          <div className="buttons">
            <a
              className="btn btn-primary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('click_whatsapp_luce')}
            >
              Scrivimi LUCE su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="chi-sono" className="blue-section">
        <div className="container grid-2">
          <div>
            <p className="section-label">Chi sono</p>
            <h2>Una vita al servizio della Luce</h2>

            <div className="text-block">
              <p>
                Mi chiamo <strong>Carmelo Nicita</strong>. Piacere di fare la
                tua conoscenza.
              </p>

              <p>
                Il mio percorso spirituale nasce da bambino. Fin da piccolo ho
                sentito una forte connessione con il mistero, con il mondo
                invisibile e con il regno celeste e angelico.
              </p>

              <p>
                Mi sono specializzato nella{' '}
                <strong>Guarigione Angelica</strong>, una pratica spirituale
                orientata a luce, ascolto, protezione e intenzione del cuore.
              </p>

              <p>
                La mia missione è accompagnare le persone a ritrovare maggiore
                ascolto, centratura, fiducia e leggerezza interiore.
              </p>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <img
              src={fotoCarmelo}
              alt="Ritratto di Carmelo Nicita"
              className="portrait"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container grid-2">
          <div>
            <p className="section-label">Formazione</p>
            <h2>Attestato di Guarigione Angelica</h2>

            <div className="text-block">
              <p>
                Ho completato il percorso formativo come{' '}
                <strong>Operatore di Guarigione Angelica</strong>.
              </p>

              <p>
                Il diploma è stato rilasciato da{' '}
                <strong>The Academy.Global</strong>, realtà accreditata dalla{' '}
                <strong>International Association of Therapists</strong>.
              </p>

              <p>
                <strong>Data di completamento:</strong> 18 febbraio 2026.
              </p>

              <p className="small">
                La Guarigione Angelica è una pratica spirituale e
                introspettiva. Non sostituisce cure mediche, psicologiche o
                farmacologiche.
              </p>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <img
              src={certificatoGuarigione}
              alt="Attestato di Guarigione Angelica"
              className="certificate"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section id="come-funziona">
        <div className="container grid-2">
          <div>
            <p className="section-label">Il percorso</p>
            <h2>Guarigione Angelica a distanza: come funziona</h2>

            <div className="steps">
              {sessionSteps.map((step) => (
                <div className="step" key={step}>
                  <span className="check">✓</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <article className="card">
            <div className="icon">✧</div>
            <h3>Cosa puoi aspettarti</h3>

            <p>
              È una pratica spirituale individuale da scegliere quando senti
              pesantezza, confusione o il bisogno di fermarti e ritrovare un
              momento di calma.
            </p>

            <p>
              Tu mi spieghi brevemente cosa stai vivendo. Durante la sessione
              lavoro a distanza con preghiera, visualizzazione e invocazione
              degli Arcangeli, dedicando la pratica alla tua intenzione.
            </p>

            <p>
              Lo scopo è offrirti uno spazio di raccoglimento che possa aiutarti
              a sentirti più centrato, presente e in contatto con la tua parte
              spirituale.
            </p>

            <p>
              Al termine riceverai una breve restituzione su ciò che è emerso
              durante la sessione, con eventuali spunti personali da portare
              nel quotidiano.
            </p>

            <p>
              <strong>Nota importante:</strong> la parola “guarigione” è usata
              in senso spirituale, non medico. La sessione non cura malattie e
              non sostituisce medici, psicologi, farmaci o terapie.
            </p>
          </article>
        </div>
      </section>

      <section id="servizi" className="dark-section">
        <div className="container center">
          <p className="section-label">Servizi</p>
          <h2>Per cosa puoi richiedere una sessione</h2>

          <div className="grid-4 services-grid">
            {services.map((service) => (
              <div className="service" key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="blue-section">
        <div className="container center">
          <p className="section-label">Prenotazione</p>
          <h2>Sessione a distanza</h2>

          <div className="grid-2 price-grid">
            {bookingOptions.map((item) => (
              <article className="price-box wide" key={item.title}>
                <img
                  className="reading-image"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                />

                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.description}</p>

                <p className="small">
                  <strong>Promo:</strong> usa il codice <strong>LUCE10</strong>{' '}
                  al checkout Payhip per ricevere il 10% di sconto fino al 31
                  luglio 2026.
                </p>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent(item.eventName)}
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="buttons">
            <a
              className="btn btn-secondary"
              href={`mailto:${email}`}
              onClick={() => trackEvent('click_email_sessioni')}
            >
              Scrivi una email
            </a>
          </div>

          <p className="small">
            Oppure scrivi direttamente a: <strong>{email}</strong>
          </p>
        </div>
      </section>

      <section id="prezzi" className="dark-section">
        <div className="container center">
          <p className="section-label">Letture angeliche</p>
          <h2>Messaggi e orientamento dagli Angeli</h2>

          <div className="grid-2 price-grid">
            {angelReadings.map((item) => (
              <article className="price-box wide" key={item.title}>
                <img
                  className="reading-image"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                />

                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>

                <p>{item.description}</p>
                <p>{item.details}</p>

                <p className="small">
                  <strong>Promo:</strong> usa il codice <strong>LUCE10</strong>{' '}
                  al checkout Payhip per ricevere il 10% di sconto fino al 31
                  luglio 2026.
                </p>

                <div className="important-note reading-note">
                  <strong>Nota importante:</strong> la lettura ha finalità
                  spirituale, simbolica e introspettiva. Non tratta salute,
                  diagnosi, terapie, farmaci o indicazioni mediche.
                </div>

                <p className="small">
                  Dopo il pagamento, scrivimi su WhatsApp per inviarmi le
                  domande o il tema della lettura.
                </p>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent(item.eventName)}
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
            <section id="tarocchi" className="blue-section">
        <div className="container center">
          <p className="section-label">Letture dei Tarocchi</p>
          <h2>Scegli la lettura adatta alle tue domande</h2>

          <div className="grid-2">
            <div className="text-block">
              <p>
                Queste sono letture personalizzate dei Tarocchi. Puoi usarle
                per riflettere su relazioni, lavoro, scelte, cambiamenti o
                situazioni che vuoi comprendere meglio.
              </p>

              <p>
                Puoi fare domande collegate tra loro oppure domande su temi
                diversi. Riceverai una lettura scritta, con parole semplici e
                la spiegazione delle carte estratte.
              </p>

              <p>
                Scegli Express per 1 domanda, Chiarezza per 3 domande o
                Completa per 5 domande.
              </p>

              <div className="important-note">
                <strong>Importante:</strong> non tratto domande su salute,
                diagnosi, farmaci o terapie. Le letture non sostituiscono
                consulenze mediche, psicologiche, legali o finanziarie e non
                decidono al posto tuo.
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-glow"></div>
              <img
                src={immagineTarocchi}
                alt="Lettura dei Tarocchi simbolica e spirituale"
                className="certificate"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid-3 price-grid">
            {tarotReadings.map((item) => (
              <article className="price-box wide" key={item.title}>
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>

                <p>
                  <strong>{item.cards}</strong>
                </p>

                <p>{item.description}</p>
                <p>{item.details}</p>
                <p className="small">{item.delivery}</p>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent(item.eventName)}
                  >
                    {item.cta}
                  </a>
                </div>

                <p className="small">
                  Dopo il pagamento, scrivimi su WhatsApp per inviarmi la
                  domanda o il tema della lettura.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guida-serenita" className="dark-section">
        <div className="container">
          <div className="grid-2">
            <div>
              <img
                src={immagineGuidaSerenita}
                alt="5 minuti al giorno per ritrovare serenità"
                className="serenity-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="serenity-copy">
              <p className="section-label">Guida digitale gratuita</p>
              <h2>5 minuti al giorno per ritrovare serenità</h2>
              <div className="free-badge">GRATUITA</div>

              <p className="lead">
                Una piccola pratica quotidiana può cambiare il modo in cui vivi
                le tue giornate.
              </p>

              <p>
                Ti senti spesso di corsa, distratto o in attesa che qualcosa
                cambi prima di poterti sentire finalmente sereno?
              </p>

              <p>
                Ho creato questa mini guida gratuita per aiutarti a fermarti,
                ascoltarti e iniziare a prenderti cura del tuo benessere
                attraverso piccoli gesti quotidiani.
              </p>

              <div className="steps">
                <div className="step">
                  <span className="check">✨</span>
                  <div>La regola dei 5 minuti al giorno</div>
                </div>
                <div className="step">
                  <span className="check">✨</span>
                  <div>Esercizi semplici di consapevolezza</div>
                </div>
                <div className="step">
                  <span className="check">✨</span>
                  <div>Una routine dedicata a mattino, giorno e sera</div>
                </div>
                <div className="step">
                  <span className="check">✨</span>
                  <div>Una sfida pratica di 7 giorni</div>
                </div>
                <div className="step">
                  <span className="check">✨</span>
                  <div>Un diario dei piccoli gesti quotidiani</div>
                </div>
                <div className="step">
                  <span className="check">✨</span>
                  <div>Domande finali per osservare ciò che sta cambiando</div>
                </div>
              </div>

              <div className="important-note">
                Non devi cambiare tutto in una volta. Puoi iniziare da cinque
                minuti.
                <br />
                <br />
                <strong>Formato digitale PDF · Download immediato e gratuito</strong>
              </div>

              <div className="buttons">
                <a
                  className="btn btn-primary"
                  href={payhipGuidaSerenita}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent('click_guida_serenita')}
                >
                  Scarica gratuitamente su Payhip
                </a>
              </div>

              <p className="small">
                Hai scoperto la guida sui social? Scrivi <strong>SERENITÀ</strong>{' '}
                nei commenti per ricevere le indicazioni in privato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kit-dettagli" className="blue-section">
        <div className="container center">
          <p className="section-label">Contenuto del Kit</p>
          <h2>Tutto ciò che riceverai</h2>

          <p className="lead">
            Un percorso spirituale pratico per dedicarti un momento ogni
            giorno, calmare i pensieri, meditare e ritrovare un contatto più
            profondo con te stesso.
          </p>

          <div className="kit-showcase">
            <img
              src={immagineGuidaCompleta}
              alt="Guida Completa della Mappa di Luce"
              className="kit-main-image"
              loading="lazy"
              decoding="async"
            />

            <div className="kit-gallery">
              <article className="kit-gallery-card">
                <img
                  src={immagineDiario}
                  alt="Diario di Attivazione Interiore"
                  loading="lazy"
                  decoding="async"
                />

                <h3>Diario di Attivazione Interiore</h3>

                <p>
                  Ti aiuta a mettere per iscritto pensieri, emozioni e
                  intuizioni. Serve a osservare ciò che cambia giorno dopo
                  giorno e a dare continuità alla pratica.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img
                  src={immagineMappa}
                  alt="Mappa di Luce Interattiva"
                  loading="lazy"
                  decoding="async"
                />

                <h3>Mappa di Luce Interattiva</h3>

                <p>
                  Ti guida nella scelta del tema su cui meditare. Riunisce
                  Arcangeli, Chakra, Raggi Sacri e altri simboli spirituali in
                  una tavola semplice da consultare.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img
                  src={immagineBigliettini}
                  alt="Bigliettini di consultazione"
                  loading="lazy"
                  decoding="async"
                />

                <h3>Bigliettini di consultazione</h3>

                <p>
                  Li ritagli e ne scegli uno quando desideri uno spunto per la
                  giornata. Ogni bigliettino propone un messaggio o un simbolo
                  da approfondire con la Guida.
                </p>
              </article>
            </div>
          </div>

          <article className="price-box">
            <h3>Kit Completo di Attivazione Interiore</h3>
            <div className="price">27 €</div>

            <div className="launch-offer">
              <strong>✦ PREZZO SPECIALE DI LANCIO ✦</strong>
              <br />
              Disponibile fino al <strong>31 luglio 2026</strong>
              <br />
              <strong>Dal 1° agosto 2026: 37 €</strong>
            </div>

            <p>
              Il Kit serve a creare una pratica spirituale personale anche se
              non sai da dove iniziare. Puoi usarlo per meditare, fare ordine
              nei pensieri e dedicare attenzione alla tua vita interiore.
            </p>

            <p>
              La Mappa indica da dove partire, la Guida spiega il significato,
              i Bigliettini offrono uno spunto e il Diario ti aiuta a mettere in
              pratica ciò che hai compreso.
            </p>

            <div className="steps kit-list">
              <div className="step">
                <span className="check">✓</span>

                <div>
                  <strong>Guida Completa della Mappa di Luce</strong>
                  Spiega con ordine come usare tutto il Kit e come avvicinarti
                  ad Arcangeli, Maestri Ascesi, Esseri di Luce, Chakra, Raggi e
                  Numeri Sacri.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>

                <div>
                  <strong>Mappa di Luce Interattiva in formato A4</strong>
                  Una tavola da stampare o usare in digitale per scegliere il
                  punto di partenza della meditazione.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>

                <div>
                  <strong>Diario di Attivazione Interiore</strong>
                  Un percorso di 31 giorni per annotare pensieri, emozioni,
                  intuizioni e piccoli passi concreti.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>

                <div>
                  <strong>Bigliettini di consultazione stampabili</strong>
                  Messaggi e simboli da scegliere quando desideri un tema su
                  cui riflettere durante la giornata.
                </div>
              </div>
            </div>

            <div className="important-note">
              <strong>A cosa può servirti</strong>
              <br />
              <br />

              A coltivare il risveglio spirituale e il contatto con la tua
              anima, con gli Angeli, i Maestri Ascesi e gli Esseri di Luce.

              <br />
              <br />

              A dedicarti momenti di meditazione, favorire calma e
              concentrazione e aprire la mente a nuovi punti di vista.

              <br />
              <br />

              A lasciare andare, in modo simbolico e spirituale, la sensazione
              di pesantezza e le energie negative che percepisci.

              <br />
              <br />

              A conoscere meglio te stesso e trasformare ciò che emerge in un
              piccolo gesto concreto nella vita quotidiana.
            </div>

            <div className="important-note">
              <strong>Per cosa è pensato il Kit:</strong>
              <br />
              <br />

              Per chi desidera avvicinarsi alla spiritualità con una guida
              chiara, oppure rendere più regolare una pratica già iniziata.
            </div>

            <div className="important-note">
              Il Kit ha finalità spirituale, simbolica e introspettiva. Non
              fornisce diagnosi, terapie, indicazioni mediche, psicologiche,
              legali o finanziarie. Ogni scelta resta personale.
            </div>

            <div className="buttons">
              <a
                className="btn btn-primary"
                href={payhipKit}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('click_mappa_di_luce')}
              >
                Acquista il Kit a 27 €
              </a>

              <a
                className="btn btn-secondary"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMappaLuce}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('click_whatsapp_mappa')}
              >
                Chiedi informazioni
              </a>
            </div>

            <p className="small">
              Dopo l’acquisto riceverai immediatamente i file digitali da
              scaricare, stampare o usare sul tuo dispositivo personale.
            </p>
          </article>
        </div>
      </section>

      {reviews.length > 0 && (
        <section id="recensioni" className="dark-section">
          <div className="container center">
            <p className="section-label">Testimonianze</p>
            <h2>Le esperienze di chi mi ha scelto</h2>

            <div className="grid-3 services-grid">
              {reviews.map((review) => (
                <article className="card" key={`${review.name}-${review.service}`}>
                  <div className="icon">✦</div>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                  <p className="small">{review.service}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="faq" className="dark-section">
        <div className="container faq-container">
          <h2 className="center">Domande frequenti</h2>

          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contatti-finali" className="blue-section">
        <div className="container center">
          <p className="section-label">Contatti</p>
          <h2>Hai bisogno di informazioni?</h2>

          <p className="lead">
            Scrivimi per ricevere chiarimenti sui percorsi, sulle letture o sui
            prodotti digitali.
          </p>

          <div className="buttons">
            <a
              className="btn btn-primary"
              href={`mailto:${email}`}
              onClick={() => trackEvent('click_email_contatti')}
            >
              Scrivi una email
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('click_whatsapp_contatti')}
            >
              Scrivimi su WhatsApp
            </a>
          </div>

          <p className="small">
            Email: <strong>{email}</strong>
          </p>
        </div>
      </section>

      <footer>
        <strong className="footer-title">Alchimie di Luce</strong>

        <p>
          Guarigione angelica a distanza · Luce · Ascolto · Protezione
        </p>

        <p>
          Email: <strong>{email}</strong>
        </p>

        <p>
          © 2026 Alchimie di Luce – Carmelo Nicita. Tutti i diritti riservati.
        </p>

        <p>
          Informazioni di servizio: questa attività ha finalità spirituali e di
          benessere interiore. Non effettua diagnosi, prescrizioni o trattamenti
          sanitari.
        </p>
      </footer>
    </main>
  );
}
