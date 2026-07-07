import React from 'react';

export default function App() {
  const whatsappNumber = '393492304412';
  const email = 'info@alchimiediluce.it';

  const images = {
    carmelo: 'https://i.postimg.cc/DfCWHht9/carmelo-presentazione.png',
    attestato: 'https://i.postimg.cc/c4cGJ1cY/2026-05-17-130738.jpg',
    arcangeli: 'https://i.postimg.cc/LsMPMv56/Chat-GPT-Image-18-mag-2026-12-48-22.png',
    risposte: 'https://i.postimg.cc/XJ95CMPB/Chat-GPT-Image-6-lug-2026-10-55-25.png',
    angelTherapy: 'https://i.postimg.cc/0QKfXHBq/Chat-GPT-Image-6-lug-2026-10-53-37.png',
    guida: 'https://i.postimg.cc/3NwJv755/Chat-GPT-Image-4-lug-2026-09-48-28-(1).png',
    diario: 'https://i.postimg.cc/15f3R9rD/Chat-GPT-Image-4-lug-2026-09-48-28-(2).png',
    mappa: 'https://i.postimg.cc/HL4pvjdS/Chat-GPT-Image-4-lug-2026-09-48-29-(3).png',
    bigliettini: 'https://i.postimg.cc/vB0GMj1p/Chat-GPT-Image-4-lug-2026-09-48-49.png',
    tarocchi: 'https://i.postimg.cc/SR3yhBJf/Chat-GPT-Image-6-lug-2026-16-42-14.png',
    guarigione: 'https://i.postimg.cc/nLdL1v5W/Chat-GPT-Image-6-lug-2026-20-05-40.png',
    percorso: 'https://i.postimg.cc/yYq8n6QD/Chat-GPT-Image-6-lug-2026-20-16-50.png'
  };

  const links = {
    risposteAngeli: 'https://payhip.com/b/OiY9Q',
    angelTherapy: 'https://payhip.com/b/xjFgk',
    guarigioneAngelica: 'https://payhip.com/b/fEOX3',
    percorsoLuce: 'https://payhip.com/b/PmRnd',
    kit: 'https://payhip.com/b/3MyCg',
    tarocchiBase: 'https://paypal.me/AlchimieDiLuce/19',
    tarocchiChiarezza: 'https://paypal.me/AlchimieDiLuce/39',
    tarocchiApprofondito: 'https://paypal.me/AlchimieDiLuce/59'
  };

  const whatsappLUCE = encodeURIComponent(
    'Ciao Carmelo, scrivo LUCE perché vorrei ricevere un messaggio angelico iniziale gratuito. Il tema che sento più urgente è:'
  );

  const whatsappKit = encodeURIComponent(
    'Ciao Carmelo, vorrei informazioni sulla Mappa di Luce Interattiva.'
  );

  const angelReadings = [
    {
      title: 'Le Risposte degli Angeli',
      price: '19 €',
      image: images.risposte,
      href: links.risposteAngeli,
      description:
        'Una lettura con 3 carte per ricevere un messaggio chiaro e incoraggiante su una situazione importante.',
      details:
        'Puoi porre fino a 3 domande semplici. Riceverai entro 48 ore un PDF personale con le carte estratte e una sintesi finale.'
    },
    {
      title: 'Lettura Angel Therapy',
      price: '29 €',
      image: images.angelTherapy,
      href: links.angelTherapy,
      description:
        'Una lettura con 5 carte ispirata ai messaggi angelici, dedicata ad ascolto interiore e orientamento spirituale.',
      details:
        'Dopo il pagamento, inviami nome e tema su WhatsApp. Riceverai entro 48 ore un PDF personale.'
    }
  ];

  const sessions = [
    {
      title: 'Guarigione Angelica',
      price: '49 €',
      image: images.guarigione,
      href: links.guarigioneAngelica,
      description:
        'Uno spazio individuale di ascolto, centratura e armonizzazione spirituale a distanza. Durata indicativa: 45/60 minuti.'
    },
    {
      title: 'Percorso Luce',
      price: '129 €',
      image: images.percorso,
      href: links.percorsoLuce,
      description:
        'Tre sessioni a distanza dedicate a protezione, centratura e riconnessione con la propria Luce interiore.'
    }
  ];

  const tarotReadings = [
    {
      title: 'Domanda di Luce',
      price: '19 €',
      cards: '1 domanda · 3 carte',
      href: links.tarocchiBase,
      cta: 'Paga 19 € con PayPal',
      delivery: 'Consegna entro 48 ore.',
      description:
        'Per ricevere orientamento su una domanda chiara e specifica.',
      details:
        'Interpretazione scritta personalizzata delle 3 carte estratte e messaggio conclusivo di centratura.'
    },
    {
      title: 'Lettura di Chiarezza',
      price: '39 €',
      cards: 'Fino a 2 domande · 7 carte',
      href: links.tarocchiChiarezza,
      cta: 'Paga 39 € con PayPal',
      delivery: 'Consegna entro 72 ore.',
      description:
        'Per comprendere una situazione, un blocco, una relazione o una scelta importante.',
      details:
        'Lettura scritta personalizzata, messaggio intuitivo conclusivo e indicazione pratica.'
    },
    {
      title: 'Percorso di Luce Approfondito',
      price: '59 €',
      cards: 'Fino a 3 domande · 12 carte',
      href: links.tarocchiApprofondito,
      cta: 'Paga 59 € con PayPal',
      delivery: 'Consegna entro 4 giorni.',
      description:
        'Per osservare con maggiore profondità un passaggio della tua vita e le dinamiche presenti.',
      details:
        'Restituzione personalizzata in PDF, messaggio intuitivo, decreto di centratura e indicazione concreta.'
    }
  ];

  const faq = [
    {
      q: 'Devo essere collegato in video?',
      a: 'No. La sessione può svolgersi a distanza: all’orario concordato ti prepari in un luogo tranquillo.'
    },
    {
      q: 'Quanto dura una sessione?',
      a: 'Indicativamente 45/60 minuti, compresa la breve restituzione finale.'
    },
    {
      q: 'È una cura medica?',
      a: 'No. È una pratica spirituale e introspettiva. Non sostituisce medico, psicologo, psicoterapeuta, farmaci o terapie specialistiche.'
    },
    {
      q: 'Come ricevo il Kit digitale?',
      a: 'Dopo l’acquisto riceverai i file digitali da scaricare, stampare o usare sul tuo dispositivo.'
    }
  ];

  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #080814;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top, rgba(214,182,107,.20), transparent 34%),
            radial-gradient(circle at bottom, rgba(123,97,255,.15), transparent 35%),
            #080814;
        }

        .topbar {
          position: fixed;
          z-index: 30;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 15px 28px;
          background: rgba(8,8,20,.88);
          border-bottom: 1px solid rgba(255,255,255,.09);
          backdrop-filter: blur(15px);
        }

        .brand {
          color: #fff;
          text-decoration: none;
          font-size: 22px;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          font-family: Arial, sans-serif;
          font-size: 13px;
        }

        .nav a {
          color: rgba(255,255,255,.82);
          text-decoration: none;
        }

        .nav a:hover { color: #f6d98a; }

        section {
          padding: 88px 22px;
          scroll-margin-top: 90px;
        }

        .container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          background-size: cover;
          background-position: center;
          padding-top: 130px;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(8,8,20,.25), rgba(8,8,20,.72)),
            radial-gradient(circle at center, rgba(246,217,138,.22), transparent 54%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 930px;
        }

        h1 {
          margin: 0;
          font-weight: 500;
          line-height: 1.02;
          font-size: clamp(52px, 7vw, 84px);
          text-shadow: 0 8px 28px rgba(0,0,0,.65);
        }

        h1 span {
          display: inline-block;
          margin-top: 17px;
          padding: 8px 22px 10px;
          border-radius: 22px;
          background: rgba(8,8,20,.45);
          color: #f6d98a;
          font-size: clamp(27px, 4vw, 46px);
        }

        h2 {
          margin: 0 0 24px;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 500;
          line-height: 1.1;
        }

        h3 {
          margin: 0 0 14px;
          font-size: 27px;
          font-weight: 500;
        }

        p { line-height: 1.7; }

        .center { text-align: center; }

        .lead {
          max-width: 820px;
          margin: 25px auto 0;
          color: rgba(255,255,255,.84);
          font-size: 19px;
        }

        .section-label {
          margin-bottom: 16px;
          color: #f6d98a;
          font-family: Arial, sans-serif;
          font-size: 13px;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        .dark-section { background: #0d0d1d; }
        .blue-section { background: #101020; }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 42px;
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
        .price-box,
        .service,
        details {
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(255,255,255,.06);
        }

        .card {
          padding: 30px;
          border-radius: 28px;
        }

        .card p,
        .text-block p {
          color: rgba(255,255,255,.78);
        }

        .icon {
          margin-bottom: 18px;
          color: #f6d98a;
          font-size: 34px;
        }

        .service {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 110px;
          padding: 20px;
          border-radius: 24px;
          color: rgba(255,255,255,.82);
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .btn {
          display: inline-block;
          padding: 15px 28px;
          border-radius: 999px;
          font-family: Arial, sans-serif;
          font-weight: 600;
          text-decoration: none;
        }

        .btn-primary {
          background: #f6d98a;
          color: #111322;
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          color: #fff;
        }

        .btn-paypal {
          border: 1px solid rgba(246,217,138,.35);
          background: #fff;
          color: #111322;
        }

        .important-note {
          margin-top: 20px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 18px;
          background: rgba(255,255,255,.07);
          color: rgba(255,255,255,.8);
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.6;
        }

        .welcome-note {
          max-width: 790px;
          margin: 32px auto 0;
          border-color: rgba(246,217,138,.30);
          background: rgba(246,217,138,.10);
        }

        .portrait-wrap {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .portrait-glow {
          position: absolute;
          width: 85%;
          height: 85%;
          border-radius: 48px;
          background: rgba(246,217,138,.13);
          filter: blur(45px);
        }

        .portrait,
        .certificate {
          position: relative;
          width: 100%;
          border: 1px solid rgba(246,217,138,.28);
          box-shadow: 0 30px 85px rgba(0,0,0,.42);
        }

        .portrait {
          max-width: 350px;
          border-radius: 42px;
        }

        .certificate {
          max-width: 560px;
          border-radius: 28px;
        }

        .steps {
          display: grid;
          gap: 14px;
        }

        .step {
          display: flex;
          gap: 12px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 18px;
          background: rgba(255,255,255,.05);
          color: rgba(255,255,255,.8);
          font-family: Arial, sans-serif;
          line-height: 1.55;
        }

        .check {
          flex: 0 0 auto;
          color: #f6d98a;
          font-weight: bold;
        }

        .price-grid { margin-top: 48px; }

        .price-box {
          height: 100%;
          padding: 34px;
          border-color: rgba(246,217,138,.25);
          border-radius: 30px;
          background: rgba(246,217,138,.10);
          text-align: center;
        }

        .price {
          margin: 12px 0;
          color: #f6d98a;
          font-size: 54px;
        }

        .reading-image,
        .kit-main-image {
          display: block;
          width: 100%;
          border: 1px solid rgba(246,217,138,.30);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,.30);
        }

        .reading-image { margin-bottom: 24px; }
        .kit-main-image { border-radius: 28px; }

        .small {
          margin-top: 20px;
          color: rgba(255,255,255,.62);
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .small strong { color: #ffe9ad; }

        .launch-offer {
          max-width: 440px;
          margin: 0 auto 24px;
          padding: 13px 16px;
          border: 1px solid rgba(246,217,138,.38);
          border-radius: 16px;
          background: rgba(246,217,138,.11);
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .launch-offer strong {
          color: #ffe9ad;
          letter-spacing: .04em;
        }

        .kit-showcase {
          max-width: 950px;
          margin: 38px auto 15px;
        }

        .kit-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 20px;
        }

        .kit-gallery-card {
          padding: 13px;
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 22px;
          background: rgba(255,255,255,.06);
        }

        .kit-gallery-card img {
          width: 100%;
          border: 1px solid rgba(246,217,138,.20);
          border-radius: 15px;
        }

        .kit-gallery-card h3 {
          margin: 15px 4px 8px;
          font-size: 21px;
        }

        .kit-gallery-card p {
          margin: 0 4px 8px;
          color: rgba(255,255,255,.77);
          font-size: 16px;
        }

        details {
          margin-bottom: 14px;
          padding: 20px;
          border-radius: 20px;
        }

        summary {
          color: #ffe9ad;
          cursor: pointer;
          font-size: 19px;
        }

        footer {
          padding: 42px 20px;
          color: rgba(255,255,255,.5);
          font-family: Arial, sans-serif;
          font-size: 14px;
          text-align: center;
        }

        .footer-title {
          display: block;
          margin-bottom: 10px;
          color: #fff;
          font-family: Georgia, serif;
          font-size: 28px;
        }

        @media (max-width: 950px) {
          .topbar {
            flex-direction: column;
            padding: 12px 16px;
          }

          .nav {
            justify-content: center;
          }

          .hero { padding-top: 180px; }

          .grid-2,
          .grid-3,
          .grid-4,
          .kit-gallery {
            grid-template-columns: 1fr;
          }

          section { padding: 58px 18px; }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 340px;
            text-align: center;
          }
        }
      `}</style>

      <header className="topbar">
        <a className="brand" href="#home">Alchimie di Luce</a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#chi-sono">Chi sono</a>
          <a href="#come-funziona">Come funziona</a>
          <a href="#servizi">Servizi</a>
          <a href="#sessioni">Sessioni</a>
          <a href="#letture-angeliche">Letture Angeliche</a>
          <a href="#tarocchi">Tarocchi</a>
          <a href="#kit-digitale">Kit digitale</a>
          <a href="#faq">FAQ</a>
          <a href="#contatti-finali">Contatti</a>
        </nav>
      </header>

      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${images.arcangeli})` }}
      >
        <div className="hero-content">
          <h1>
            Alchimie di Luce
            <span>Ritrova calma, protezione e leggerezza interiore</span>
          </h1>

          <p className="lead">
            Messaggi angelici, letture e percorsi spirituali a distanza.
          </p>

          <div className="buttons">
            <a className="btn btn-primary" href="#servizi">
              Inizia il tuo percorso
            </a>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container center">
          <p className="section-label">Alchimie di Luce</p>
          <h2>Uno spazio per ascoltarti e ritrovare centratura</h2>

          <div className="grid-3">
            <article className="card">
              <div className="icon">✦</div>
              <h3>Messaggi angelici</h3>
              <p>
                Letture simboliche e personalizzate per ricevere un messaggio
                di orientamento su una domanda o un momento importante.
              </p>
            </article>

            <article className="card">
              <div className="icon">♡</div>
              <h3>Sessioni spirituali a distanza</h3>
              <p>
                Uno spazio individuale di ascolto, centratura, intenzione e
                connessione con il mondo angelico.
              </p>
            </article>

            <article className="card">
              <div className="icon">☾</div>
              <h3>Mappa di Luce Interattiva</h3>
              <p>
                Un percorso digitale di risveglio spirituale, creato per
                ascoltare la tua anima e coltivare una pratica personale.
              </p>
            </article>
          </div>

          <div className="important-note welcome-note">
            <strong>Promo di benvenuto</strong>
            <br />
            Usa il codice <strong>LUCE10</strong> al checkout Payhip e ricevi il
            <strong> 10% di sconto</strong> su Guarigione Angelica, Percorso
            Luce, Le Risposte degli Angeli e Lettura Angel Therapy fino al 31
            luglio 2026.
            <br /><br />
            <strong>Messaggio angelico iniziale gratuito</strong>
            <br />
            Scrivimi <strong>LUCE</strong> su WhatsApp e indicami il tema che
            senti più urgente.
          </div>

          <div className="buttons">
            <a
              className="btn btn-primary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappLUCE}`}
              target="_blank"
              rel="noreferrer"
            >
              Scrivimi LUCE su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="chi-sono" className="blue-section">
        <div className="container grid-2">
          <div className="text-block">
            <p className="section-label">Chi sono</p>
            <h2>Una vita al servizio della Luce</h2>

            <p>
              Mi chiamo <strong>Carmelo Nicita</strong>. Il mio percorso
              spirituale nasce da bambino, da una forte connessione con il
              mistero, il mondo invisibile e il regno celeste e angelico.
            </p>

            <p>
              Mi sono specializzato nella <strong>Guarigione Angelica</strong>,
              una pratica orientata a luce, ascolto, protezione e intenzione del
              cuore.
            </p>

            <p>
              La mia missione è accompagnare le persone a ritrovare ascolto,
              centratura, fiducia e leggerezza interiore.
            </p>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <img
              src={images.carmelo}
              alt="Ritratto di Carmelo Nicita"
              className="portrait"
            />
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container grid-2">
          <div className="text-block">
            <p className="section-label">Formazione</p>
            <h2>Attestato di Guarigione Angelica</h2>

            <p>
              Ho completato il percorso formativo come
              <strong> Operatore di Guarigione Angelica</strong>.
            </p>

            <p>
              Il diploma è stato rilasciato da <strong>The Academy.Global</strong>,
              realtà accreditata dalla International Association of Therapists.
            </p>

            <p><strong>Data di completamento:</strong> 18 febbraio 2026.</p>

            <p className="small">
              La Guarigione Angelica è una pratica spirituale e introspettiva.
              Non sostituisce cure mediche, psicologiche o farmacologiche.
            </p>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <img
              src={images.attestato}
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
              {[
                'Raccolta della tua richiesta e definizione dell’intenzione personale.',
                'Preparazione di uno spazio simbolico di luce, protezione e ascolto.',
                'Sessione a distanza con preghiera, visualizzazione e connessione angelica.',
                'Chiusura, radicamento e breve restituzione finale.'
              ].map((item) => (
                <div className="step" key={item}>
                  <span className="check">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <article className="card">
            <div className="icon">✧</div>
            <h3>Cosa puoi aspettarti</h3>
            <p>
              Uno spazio individuale dedicato all’ascolto, alla centratura e
              all’armonizzazione spirituale.
            </p>
            <p>
              L’obiettivo è accompagnarti a ritrovare presenza, chiarezza e
              connessione con la tua Luce interiore.
            </p>
            <p>
              <strong>Nota importante:</strong> il servizio ha finalità
              spirituale e introspettiva. Non sostituisce medici, psicologi o
              psicoterapeuti.
            </p>
          </article>
        </div>
      </section>

      <section id="servizi" className="dark-section">
        <div className="container center">
          <p className="section-label">Servizi</p>
          <h2>Per cosa puoi richiedere una sessione</h2>

          <div className="grid-4">
            {[
              'Momenti di sovraccarico e pesantezza emotiva',
              'Momenti di cambiamento',
              'Relazioni difficili',
              'Casa o luogo da armonizzare',
              'Protezione energetica',
              'Chiarezza interiore',
              'Stanchezza spirituale',
              'Ritrovare pace e centratura'
            ].map((item) => (
              <div className="service" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="sessioni" className="blue-section">
        <div className="container center">
          <p className="section-label">Prenotazione</p>
          <h2>Sessione a distanza</h2>

          <div className="grid-2 price-grid">
            {sessions.map((item) => (
              <article className="price-box" key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="reading-image"
                />

                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.description}</p>

                <p className="small">
                  <strong>Promo:</strong> usa il codice <strong>LUCE10</strong>{' '}
                  al checkout Payhip per ottenere il 10% di sconto fino al 31
                  luglio 2026.
                </p>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acquista con codice LUCE10
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="letture-angeliche" className="dark-section">
        <div className="container center">
          <p className="section-label">Letture angeliche</p>
          <h2>Messaggi e orientamento dagli Angeli</h2>

          <div className="grid-2 price-grid">
            {angelReadings.map((item) => (
              <article className="price-box" key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="reading-image"
                />

                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.description}</p>
                <p>{item.details}</p>

                <p className="small">
                  <strong>Promo:</strong> usa il codice <strong>LUCE10</strong>{' '}
                  al checkout Payhip per ottenere il 10% di sconto fino al 31
                  luglio 2026.
                </p>

                <div className="important-note">
                  La lettura ha finalità spirituale, simbolica e introspettiva.
                  Non tratta salute, diagnosi, terapie, farmaci o indicazioni
                  mediche.
                </div>

                <div className="buttons">
                  <a
                    className="btn btn-paypal"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acquista con codice LUCE10
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
          <h2>Risposte di Luce</h2>

          <div className="grid-2">
            <div className="text-block">
              <p>
                Una lettura simbolica e intuitiva per osservare con maggiore
                chiarezza una situazione, un blocco, una scelta o un passaggio
                che stai vivendo.
              </p>

              <p>
                Attraverso i Tarocchi riceverai uno spazio personale di ascolto,
                orientamento e riflessione sulle energie del presente.
              </p>

              <p>
                Puoi scegliere tra tre livelli di approfondimento, in base al
                numero di domande e di carte estratte.
              </p>

              <div className="important-note">
                La lettura dei Tarocchi è proposta come strumento spirituale e
                simbolico di riflessione e ascolto interiore. Non sostituisce
                decisioni personali, consulenze mediche, psicologiche, legali o
                finanziarie.
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-glow"></div>
              <img
                src={images.tarocchi}
                alt="Lettura dei Tarocchi"
                className="certificate"
              />
            </div>
          </div>

          <div className="grid-3 price-grid">
            {tarotReadings.map((item) => (
              <article className="price-box" key={item.title}>
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p><strong>{item.cards}</strong></p>
                <p>{item.description}</p>
                <p>{item.details}</p>
                <p className="small">{item.delivery}</p>

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

                <p className="small">
                  Dopo il pagamento, scrivimi su WhatsApp per inviarmi le
                  domande o il tema della lettura.
                </p>
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
              src={images.guida}
              alt="Guida Completa della Mappa di Luce"
              className="kit-main-image"
            />

            <div className="kit-gallery">
              <article className="kit-gallery-card">
                <img src={images.diario} alt="Diario di Attivazione Interiore" />
                <h3>Diario di Attivazione Interiore</h3>
                <p>
                  Uno spazio da compilare per annotare intuizioni, emozioni,
                  messaggi ricevuti, sogni e sincronicità.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img src={images.mappa} alt="Mappa di Luce Interattiva" />
                <h3>Mappa di Luce Interattiva</h3>
                <p>
                  Una tavola simbolica con Arcangeli, Chakra, Raggi, Numeri
                  Sacri e messaggi di orientamento interiore.
                </p>
              </article>

              <article className="kit-gallery-card">
                <img src={images.bigliettini} alt="Bigliettini di consultazione" />
                <h3>Bigliettini di consultazione</h3>
                <p>
                  Messaggi da ritagliare e pescare durante la consultazione.
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
              Fino al 31 luglio 2026.
              <br />
              Dal 1° agosto 2026: 37 €.
            </div>

            <p>
              Il Kit è pensato per accompagnarti in un momento personale di
              ascolto, centratura e risveglio della presenza interiore.
            </p>

            <div className="steps">
              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Guida Completa della Mappa di Luce</strong>
                  <br />
                  Manuale pratico con Arcangeli, Chakra, Raggi, Numeri Sacri,
                  simboli, decreti e pratiche.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Mappa di Luce Interattiva in formato A4</strong>
                  <br />
                  Tavola simbolica da stampare o consultare in digitale.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Diario di Attivazione Interiore</strong>
                  <br />
                  Percorso di 31 giorni da compilare.
                </div>
              </div>

              <div className="step">
                <span className="check">✓</span>
                <div>
                  <strong>Bigliettini di consultazione stampabili</strong>
                  <br />
                  Sì, Attendi, Rivedi il progetto e Agisci ora.
                </div>
              </div>
            </div>

            <div className="important-note">
              <strong>Un dono ricevuto in visione</strong>
              <br />
              La Mappa di Luce Interattiva nasce da un’esperienza interiore
              unica, accolta e trasformata in un percorso di ascolto,
              consapevolezza e Luce.
              <br /><br />
              Al suo centro custodisce alcuni Numeri Sacri ricevuti in dono
              durante un’esperienza interiore e organizzati come chiavi
              simboliche di ascolto, trasformazione e radicamento.
              <br /><br />
              Ogni numero è pensato per essere incontrato nel momento giusto,
              all’interno della Mappa e della Guida.
            </div>

            <div className="important-note">
              Il Kit ha finalità spirituale, simbolica e introspettiva. Non
              fornisce diagnosi, terapie o indicazioni mediche, psicologiche,
              legali o finanziarie.
            </div>

            <div className="buttons">
              <a
                className="btn btn-primary"
                href={links.kit}
                target="_blank"
                rel="noreferrer"
              >
                Acquista il Kit a 27 €
              </a>

              <a
                className="btn btn-secondary"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappKit}`}
                target="_blank"
                rel="noreferrer"
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

      <section id="faq" className="dark-section">
        <div className="container">
          <h2 className="center">Domande frequenti</h2>

          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
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
            <a className="btn btn-primary" href={`mailto:${email}`}>
              Scrivi una email
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
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
        <p>Guarigione angelica a distanza · Luce · Ascolto · Protezione</p>
        <p>Email: <strong>{email}</strong></p>
        <p>© 2026 Alchimie di Luce – Carmelo Nicita. Tutti i diritti riservati.</p>
        <p>
          Informazioni di servizio: questa attività ha finalità spirituali e di
          benessere interiore. Non effettua diagnosi, prescrizioni o trattamenti
          sanitari.
        </p>
      </footer>
    </main>
  );
}
