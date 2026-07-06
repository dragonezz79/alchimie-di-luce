import React from 'react';

export default function App() {
  const whatsappNumber = '393492304412';
  const email = 'info@alchimiediluce.it';

  const fotoCarmelo =
    'https://i.postimg.cc/DfCWHht9/carmelo-presentazione.png';

  const certificatoGuarigione =
    'https://i.postimg.cc/c4cGJ1cY/2026-05-17-130738.jpg';

  const immagineArcangeli =
    'https://i.postimg.cc/LsMPMv56/Chat-GPT-Image-18-mag-2026-12-48-22.png';

  const immagineRisposteAngeli =
    'https://i.postimg.cc/XJ95CMPB/Chat-GPT-Image-6-lug-2026-10-55-25.png';

  const immagineAngelTherapy =
    'https://i.postimg.cc/0QKfXHBq/Chat-GPT-Image-6-lug-2026-10-53-37.png';

  const immagineGuidaCompleta =
    'https://i.postimg.cc/3NwJv755/Chat-GPT-Image-4-lug-2026-09-48-28-(1).png';

  const immagineDiario =
    'https://i.postimg.cc/15f3R9rD/Chat-GPT-Image-4-lug-2026-09-48-28-(2).png';

  const immagineMappa =
    'https://i.postimg.cc/HL4pvjdS/Chat-GPT-Image-4-lug-2026-09-48-29-(3).png';

  const immagineBigliettini =
    'https://i.postimg.cc/vB0GMj1p/Chat-GPT-Image-4-lug-2026-09-48-49.png';

  const paypalSessione = 'https://paypal.me/AlchimieDiLuce/49';
  const paypalPercorso = 'https://paypal.me/AlchimieDiLuce/129';
  const paypalRisposteAngeli = 'https://paypal.me/AlchimieDiLuce/19';
  const paypalAngelTherapy = 'https://paypal.me/AlchimieDiLuce/29';

  const whatsappText = encodeURIComponent(
    'Ciao Carmelo, ho visitato Alchimie di Luce. Scrivo LUCE perché vorrei ricevere un messaggio angelico iniziale gratuito. Il tema che sento più urgente è: amore, lavoro, casa, protezione, blocchi interiori o cambiamento.'
  );

  const whatsappMappaLuce = encodeURIComponent(
    'Ciao Carmelo, vorrei informazioni sulla Mappa di Luce Interattiva e sul Kit Completo di Attivazione Interiore.'
  );

  const introCards = [
    {
      icon: '♡',
      title: 'Per il cuore',
      text: 'Un momento delicato per lasciare andare tensioni, pesi emotivi e pensieri ripetitivi.'
    },
    {
      icon: '✦',
      title: 'Protezione e radicamento',
      text: 'La sessione viene preparata con protezione energetica, ascolto e connessione angelica.'
    },
    {
      icon: '☾',
      title: 'Anche da casa tua',
      text: 'Ti siedi o ti sdrai in un luogo tranquillo. Io lavoro sul piano spirituale, a distanza.'
    }
  ];

  const sessionSteps = [
    'Raccolta della tua richiesta e definizione dell’intenzione personale.',
    'Preparazione di uno spazio simbolico di luce, protezione e ascolto.',
    'Sessione a distanza con preghiera, visualizzazione e connessione angelica.',
    'Chiusura, radicamento e breve restituzione finale.'
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

  const angelReadings = [
    {
      title: 'Le Risposte degli Angeli',
      price: '19 €',
      href: paypalRisposteAngeli,
      cta: 'Paga 19 € con PayPal',
      image: immagineRisposteAngeli,
      imageAlt: 'Le Risposte degli Angeli con tre carte',
      description:
        'Una lettura con 3 carte pensata per offrire un messaggio chiaro, diretto e incoraggiante su una situazione che senti importante.',
      details:
        'Puoi porre fino a 3 domande semplici. Dopo il pagamento, inviamele su WhatsApp insieme al tuo nome. Riceverai entro 48 ore un PDF personale con le 3 carte estratte, il messaggio per ogni domanda e una sintesi finale di orientamento.'
    },
    {
      title: 'Lettura Angel Therapy',
      price: '29 €',
      href: paypalAngelTherapy,
      cta: 'Paga 29 € con PayPal',
      image: immagineAngelTherapy,
      imageAlt: 'Lettura Angel Therapy con cinque carte',
      description:
        'Una lettura con 5 carte ispirata ai messaggi angelici, pensata per accompagnare riflessione, ascolto interiore e orientamento spirituale.',
      details:
        'Dopo il pagamento, inviami su WhatsApp il tuo nome e il tema che desideri esplorare. Riceverai entro 48 ore un PDF personale con le 5 carte estratte, il messaggio simbolico di ciascuna e una sintesi finale di orientamento.'
    }
  ];

  const bookingOptions = [
    {
      title: 'Sessione singola',
      price: '49 €',
      href: paypalSessione,
      cta: 'Paga 49 € con PayPal',
      description:
        'Un incontro individuale di ascolto e armonizzazione spirituale a distanza. Durata indicativa: 45/60 minuti.'
    },
    {
      title: 'Percorso Luce',
      price: '129 €',
      href: paypalPercorso,
      cta: 'Paga 129 € con PayPal',
      description:
        'Tre sessioni a distanza dedicate a protezione, centratura e riconnessione alla propria Luce interiore.'
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
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 16px 28px;
          background: rgba(8,8,20,0.76);
          border-bottom: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(16px);
        }

        .brand {
          color: white;
          text-decoration: none;
          font-size: 22px;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          flex-wrap: wrap;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .nav a {
          color: rgba(255,255,255,0.78);
          text-decoration: none;
        }

        .nav a:hover {
          color: #f6d98a;
        }

        section {
          padding: 90px 22px;
        }

        @keyframes heroBreath {
          0%, 100% {
            background-size: 100%;
            background-position: center;
          }

          50% {
            background-size: 108%;
            background-position: center 46%;
          }
        }

        @keyframes goldenGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }

          50% {
            opacity: 0.56;
            transform: scale(1.08);
          }
        }

        @keyframes floatingStars {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.18;
          }

          50% {
            transform: translateY(-18px);
            opacity: 0.75;
          }
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
          padding-top: 130px;
          animation: heroBreath 16s ease-in-out infinite;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(8,8,20,0.48), rgba(8,8,20,0.82)),
            radial-gradient(circle at center, rgba(246,217,138,0.30), transparent 50%);
          z-index: 0;
          animation: goldenGlow 7s ease-in-out infinite;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background:
            radial-gradient(circle at 18% 30%, rgba(246,217,138,0.92) 0 2px, transparent 3px),
            radial-gradient(circle at 34% 18%, rgba(255,239,182,0.8) 0 1.5px, transparent 3px),
            radial-gradient(circle at 72% 22%, rgba(246,217,138,0.85) 0 2px, transparent 3px),
            radial-gradient(circle at 84% 50%, rgba(255,239,182,0.7) 0 1.5px, transparent 3px),
            radial-gradient(circle at 77% 73%, rgba(246,217,138,0.75) 0 2px, transparent 3px),
            radial-gradient(circle at 38% 76%, rgba(255,239,182,0.7) 0 1.5px, transparent 3px),
            radial-gradient(circle at 12% 70%, rgba(246,217,138,0.72) 0 2px, transparent 3px);
          animation: floatingStars 6s ease-in-out infinite;
        }

        .container {
          max-width: 1150px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: clamp(42px, 6.2vw, 68px);
          line-height: 1.05;
          margin: 0;
          font-weight: 500;
          text-shadow: 0 8px 28px rgba(0,0,0,0.65);
        }

        h1 span {
          display: block;
          color: #f6d98a;
          font-size: clamp(24px, 3.8vw, 42px);
          margin-top: 12px;
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
          color: rgba(255,255,255,0.82);
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
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.78);
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.6;
        }

        .hero-note {
          max-width: 760px;
          margin: 32px auto 0;
          background: rgba(8,8,20,0.58);
          border: 1px solid rgba(246,217,138,0.32);
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
          gap: 12px;
          padding: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          color: rgba(255,255,255,0.78);
          font-family: Arial, sans-serif;
          line-height: 1.5;
          text-align: left;
        }

        .check {
          color: #f6d98a;
          font-weight: bold;
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
          padding: 38px;
          border-radius: 32px;
          border: 1px solid rgba(246,217,138,0.25);
          background: rgba(246,217,138,0.10);
          text-align: center;
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

        .small {
          margin-top: 22px;
          color: rgba(255,255,255,0.58);
          font-size: 14px;
          font-family: Arial, sans-serif;
        }

        .small strong {
          color: #ffe9ad;
        }

        .kit-showcase {
          max-width: 950px;
          margin: 38px auto 10px;
        }

        .kit-main-image {
          width: 100%;
          display: block;
          border-radius: 30px;
          border: 1px solid rgba(246,217,138,0.28);
          box-shadow: 0 28px 70px rgba(0,0,0,0.34);
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

        @media (max-width: 850px) {
          .topbar {
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }

          .grid-2,
          .grid-3,
          .grid-4,
          .kit-gallery {
            grid-template-columns: 1fr;
          }

          section {
            padding: 55px 18px;
          }

          .hero {
            padding-top: 180px;
            animation-duration: 20s;
          }

          h1 {
            font-size: 46px;
          }

          h1 span {
            font-size: 28px;
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

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#home">
          Alchimie di Luce
        </a>

        <nav className="nav">
          <a href="#chi-sono">Chi sono</a>
          <a href="#servizi">Servizi</a>
          <a href="#prezzi">Prezzi</a>
          <a href="#kit-digitale">Kit digitale</a>
          <a href="#faq">FAQ</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </header>

      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${immagineArcangeli})` }}
      >
        <div className="container">
          <h1>
            Alchimie di Luce
            <span>Ritrova calma, protezione e leggerezza interiore</span>
          </h1>

          <p className="lead">
            Messaggi angelici, letture personalizzate e sessioni spirituali a
            distanza per chi sente pesantezza emotiva, confusione o bisogno di
            ritrovare pace e centratura.
          </p>

          <div className="buttons">
            <a
              className="btn btn-primary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
            >
              Scrivimi LUCE su WhatsApp
            </a>

            <a className="btn btn-secondary" href="#come-funziona">
              Scopri come funziona
            </a>
          </div>

          <div className="important-note hero-note">
            <strong>Messaggio angelico iniziale gratuito</strong>
            <br />
            Scrivimi <strong>LUCE</strong> su WhatsApp e indicami il tema che
            senti più urgente.
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container grid-3">
          {introCards.map((card) => (
            <article className="card" key={card.title}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
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
            />
          </div>
        </div>
      </section>

      <section id="come-funziona">
        <div className="container grid-2">
          <div>
            <p className="section-label">Il percorso</p>
            <h2>Come si svolge la sessione</h2>

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
              La sessione è uno spazio individuale dedicato all’ascolto, alla
              centratura e all’armonizzazione spirituale.
            </p>

            <p>
              Partendo dalla tua richiesta, viene creato un momento di
              raccoglimento attraverso intenzione, preghiera, visualizzazione e
              invocazione degli Arcangeli.
            </p>

            <p>
              L’obiettivo è accompagnarti a ritrovare maggiore presenza,
              chiarezza e connessione con la tua Luce interiore.
            </p>

            <p>
              Al termine riceverai una breve restituzione su ciò che è emerso
              durante la sessione, con eventuali spunti personali da portare
              nel quotidiano.
            </p>

            <p>
              <strong>Nota importante:</strong> il servizio ha finalità
              spirituale e introspettiva. Non sostituisce medici, psicologi o
              psicoterapeuti e non riguarda diagnosi, malattie, farmaci o
              terapie.
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
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.description}</p>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="buttons">
            <a className="btn btn-secondary" href={`mailto:${email}`}>
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
                />

                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>

                <p>{item.description}</p>
                <p>{item.details}</p>

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
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kit-digitale" className="blue-section">
        <div className="container center">
          <p className="section-label">Nuovo prodotto digitale</p>
          <h2>Mappa di Luce Interattiva</h2>

          <p className="lead">
            Un percorso guidato di risveglio spirituale, pensato per aiutarti
            ad ascoltare la tua anima, riconoscere ciò che stai vivendo e
            trasformare intuizioni e messaggi simbolici in scelte più
            consapevoli.
          </p>

          <div className="kit-showcase">
            <img
              src={immagineGuidaCompleta}
              alt="Guida Completa della Mappa di Luce"
              className="kit-main-image"
            />

            <div className="kit-gallery">
              <article className="kit-gallery-card">
                <img
                  src={immagineDiario}
                  alt="Diario di Attivazione Interiore"
                />
                <h3>Diario di Attivazione Interiore</h3>
                <p>
                  Uno spazio guidato da compilare per annotare intuizioni,
                  emozioni, messaggi ricevuti, sogni, sincronicità e piccoli
                  passi da portare nella vita quotidiana.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img
                  src={immagineMappa}
                  alt="Mappa di Luce Interattiva"
                />
                <h3>Mappa di Luce Interattiva</h3>
                <p>
                  Una tavola simbolica da osservare e consultare, con
                  Arcangeli, Chakra, Raggi, Numeri Sacri e messaggi di
                  orientamento interiore.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img
                  src={immagineBigliettini}
                  alt="Bigliettini di consultazione"
                />
                <h3>Bigliettini di consultazione</h3>
                <p>
                  Quattro messaggi da ritagliare e pescare durante la
                  consultazione, per ricevere uno spunto simbolico su una
                  domanda o una situazione.
                </p>
              </article>
            </div>
          </div>

          <article className="price-box">
            <h3>Kit Completo di Attivazione Interiore</h3>
            <div className="price">37 €</div>

            <p>
              Il Kit è pensato per accompagnarti in un momento personale di
              ascolto, centratura e risveglio della presenza interiore.
            </p>

            <p>
              La Mappa apre la consultazione simbolica, la Guida aiuta a
              comprendere ciò che emerge, i Bigliettini offrono un ulteriore
              messaggio e il Diario ti permette di trasformare ciò che senti in
              consapevolezza e azione personale.
            </p>

            <div className="steps kit-list">
              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Guida Completa della Mappa di Luce</strong>
                  <br />
                  Un manuale pratico che spiega come consultare la Mappa,
                  comprendere Arcangeli, Chakra, Raggi, Numeri Sacri e simboli
                  presenti nella tavola, oltre a usare Diario e Bigliettini nel
                  tuo percorso personale.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Mappa di Luce Interattiva in formato A4</strong>
                  <br />
                  Una tavola simbolica da stampare o consultare in digitale.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Diario di Attivazione Interiore</strong>
                  <br />
                  Un percorso di 31 giorni da compilare con pensieri,
                  intuizioni e passaggi personali.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Bigliettini di consultazione stampabili</strong>
                  <br />
                  Quattro messaggi simbolici: Sì, Attendi, Rivedi il progetto e
                  Agisci ora.
                </div>
              </div>
            </div>

            <div className="important-note">
              <strong>Per cosa è pensato il Kit:</strong>
              <br />
              Per chi sente il bisogno di fermarsi, ascoltarsi, ritrovare
              chiarezza, coltivare una pratica spirituale personale e
              riconnettersi con la propria Luce interiore.
            </div>

            <div className="important-note">
              Il Kit ha finalità spirituale, simbolica e introspettiva. Non
              fornisce diagnosi, terapie, indicazioni mediche, psicologiche,
              legali o finanziarie. Ogni scelta resta personale.
            </div>

            <div className="buttons">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMappaLuce}`}
                target="_blank"
                rel="noreferrer"
              >
                Richiedi il Kit su WhatsApp
              </a>
            </div>

            <p className="small">
              Dopo l’acquisto riceverai i file digitali da scaricare, stampare
              o usare sul tuo dispositivo personale.
            </p>
          </article>
        </div>
      </section>

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

      <footer>
        <strong className="footer-title">Alchimie di Luce</strong>
        <p>Guarigione angelica a distanza · Luce · Ascolto · Protezione</p>

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
