import React from 'react';

export default function App() {
const whatsappNumber = '393492304412';
const email = '[info@alchimiediluce.it](mailto:info@alchimiediluce.it)';

const fotoCarmelo = 'https://i.postimg.cc/DfCWHht9/carmelo-presentazione.png';
const certificatoGuarigione =
'https://i.postimg.cc/c4cGJ1cY/2026-05-17-130738.jpg';
const immagineArcangeli =
'https://i.postimg.cc/LsMPMv56/Chat-GPT-Image-18-mag-2026-12-48-22.png';

const paypalSessione = 'https://paypal.me/AlchimieDiLuce/49';
const paypalPercorso = 'https://paypal.me/AlchimieDiLuce/129';
const paypalRisposteAngeli = 'https://paypal.me/AlchimieDiLuce/19';
const paypalAngelTherapy = 'https://paypal.me/AlchimieDiLuce/29';

const whatsappText = encodeURIComponent(
'Ciao Carmelo, ho visitato Alchimie di Luce. Scrivo LUCE perché vorrei ricevere un messaggio angelico iniziale gratuito. Il tema che sento più urgente è: amore, lavoro, casa, protezione, ansia, blocchi interiori o cambiamento.'
);

const whatsappMappaLuce = encodeURIComponent(
'Ciao Carmelo, vorrei informazioni sulla Mappa di Luce Interattiva e sul Kit Completo di Attivazione Interiore.'
);

return ( <main className="site"> <style>{`
* {
box-sizing: border-box;
}

```
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

    section {
      padding: 90px 22px;
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
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(8,8,20,0.48), rgba(8,8,20,0.82)),
        radial-gradient(circle at center, rgba(246,217,138,0.22), transparent 48%);
      z-index: 0;
    }

    .container {
      max-width: 1150px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
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
      max-width: 780px;
      margin: 28px auto 0;
      font-size: clamp(18px, 2vw, 23px);
      color: rgba(255,255,255,0.82);
    }

    .hero .lead {
      text-shadow: 0 4px 18px rgba(0,0,0,0.7);
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
      transition: 0.25s;
    }

    .btn-primary {
      background: #f6d98a;
      color: #111322;
    }

    .btn-primary:hover {
      background: #ffe9ad;
      transform: translateY(-2px);
    }

    .btn-secondary {
      border: 1px solid rgba(255,255,255,0.25);
      color: white;
      background: rgba(255,255,255,0.08);
    }

    .btn-secondary:hover {
      background: rgba(255,255,255,0.15);
      transform: translateY(-2px);
    }

    .btn-paypal {
      background: #ffffff;
      color: #111322;
      border: 1px solid rgba(246,217,138,0.35);
    }

    .btn-paypal:hover {
      background: #f6d98a;
      transform: translateY(-2px);
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

    .dark-section {
      background: #0d0d1d;
    }

    .blue-section {
      background: #101020;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 55px;
      align-items: center;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .card {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 28px;
      padding: 32px;
      box-shadow: 0 25px 80px rgba(0,0,0,0.25);
    }

    .card p {
      color: rgba(255,255,255,0.70);
      margin-bottom: 0;
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
      color: rgba(255,255,255,0.76);
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

    .portrait {
      position: relative;
      width: 100%;
      max-width: 350px;
      border-radius: 42px;
      border: 1px solid rgba(246,217,138,0.25);
      box-shadow: 0 35px 90px rgba(0,0,0,0.45);
    }

    .certificate {
      position: relative;
      width: 100%;
      max-width: 560px;
      border-radius: 28px;
      border: 1px solid rgba(246,217,138,0.25);
      box-shadow: 0 35px 90px rgba(0,0,0,0.45);
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
    }

    .check {
      color: #f6d98a;
      font-weight: bold;
    }

    .center {
      text-align: center;
    }

    .service {
      text-align: center;
      padding: 26px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
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

    .price {
      font-size: 58px;
      color: #f6d98a;
      margin: 12px 0;
    }

    details {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 14px;
    }

    summary {
      cursor: pointer;
      color: #ffe9ad;
      font-size: 19px;
    }

    details p {
      color: rgba(255,255,255,0.68);
      margin-bottom: 0;
      font-family: Arial, sans-serif;
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

    footer p {
      max-width: 900px;
      margin: 12px auto;
      line-height: 1.7;
    }

    @media (max-width: 850px) {
      .grid-3,
      .grid-2,
      .grid-4 {
        grid-template-columns: 1fr;
      }

      section {
        padding: 55px 18px;
      }

      .hero {
        min-height: 100vh;
        background-position: center top;
      }

      h1 {
        font-size: 46px;
        line-height: 1.08;
      }

      h1 span {
        font-size: 28px;
        line-height: 1.18;
        margin-top: 14px;
      }

      h2 {
        font-size: 36px;
        line-height: 1.15;
      }

      h3 {
        font-size: 24px;
        line-height: 1.2;
      }

      .lead {
        font-size: 18px;
        line-height: 1.55;
        margin-top: 26px;
      }

      .text-block p {
        font-size: 17px;
        line-height: 1.6;
      }

      .card {
        padding: 26px;
      }

      .card p {
        font-size: 16px;
        line-height: 1.6;
      }

      .service {
        min-height: 90px;
        padding: 20px;
        font-size: 16px;
      }

      .price-box {
        padding: 30px 22px;
        margin-top: 34px;
      }

      .price {
        font-size: 44px;
        line-height: 1.1;
      }

      .step {
        font-size: 16px;
        line-height: 1.55;
        padding: 15px;
      }

      .important-note {
        font-size: 14px;
        line-height: 1.55;
        padding: 14px;
      }

      details {
        padding: 18px;
      }

      summary {
        font-size: 18px;
      }

      details p {
        font-size: 16px;
        line-height: 1.55;
      }

      .buttons {
        flex-direction: column;
        align-items: center;
        margin-top: 28px;
      }

      .btn {
        width: 100%;
        max-width: 330px;
        padding: 15px 24px;
        font-size: 15px;
      }

      .portrait {
        max-width: 300px;
      }

      .certificate {
        max-width: 100%;
      }

      footer {
        padding: 38px 18px;
        font-size: 13px;
      }

      footer .footer-title {
        font-size: 25px;
      }
    }
  `}</style>

  <section
    className="hero"
    style={{ backgroundImage: `url(${immagineArcangeli})` }}
  >
    <div className="container">
      <h1>
        Alchimie di Luce
        <span>Ritrova calma, protezione e leggerezza interiore</span>
      </h1>

      <p className="lead">
        Messaggi angelici, letture personalizzate e sessioni energetiche a distanza
        per chi sente stress, pesantezza emotiva, confusione o bisogno di ritrovare
        pace e centratura.
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

      <div
        className="important-note"
        style={{
          maxWidth: '760px',
          margin: '32px auto 0',
          background: 'rgba(8,8,20,0.58)',
          border: '1px solid rgba(246,217,138,0.32)'
        }}
      >
        <strong>Messaggio angelico iniziale gratuito</strong>
        <br />
        Scrivimi <strong>LUCE</strong> su WhatsApp e indicami il tema che senti più urgente:
        amore, lavoro, casa, protezione, ansia, blocchi interiori o cambiamento.
        Ti invierò un breve messaggio angelico iniziale gratuito.
      </div>

      <p className="small">
        Sessioni e letture a distanza. Le attività hanno finalità spirituale,
        energetica e di benessere interiore.
      </p>
    </div>
  </section>

  <section className="dark-section">
    <div className="container grid-3">
      <div className="card">
        <div className="icon">♡</div>
        <h3>Per il cuore</h3>
        <p>
          Un momento delicato per lasciare andare tensioni, pesi emotivi e
          pensieri ripetitivi.
        </p>
      </div>

      <div className="card">
        <div className="icon">✦</div>
        <h3>Protezione e radicamento</h3>
        <p>
          La sessione viene preparata con protezione energetica, ascolto e
          connessione angelica.
        </p>
      </div>

      <div className="card">
        <div className="icon">☾</div>
        <h3>Anche da casa tua</h3>
        <p>
          Ti siedi o ti sdrai in un luogo tranquillo. Io lavoro sul piano
          energetico, a distanza.
        </p>
      </div>
    </div>
  </section>

  <section className="blue-section">
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
            Nella mia famiglia paterna, soprattutto attraverso i miei nonni,
            ho sempre percepito una sensibilità particolare: un dono sottile
            fatto di intuizioni, sogni e percezioni profonde.
          </p>

          <p>
            Crescendo ho messo da parte tutto questo per dedicarmi alla vita
            quotidiana. Negli ultimi anni, però, quel richiamo si è fatto
            sentire di nuovo, con più forza.
          </p>

          <p>
            Mi sono specializzato nella <strong>Guarigione Angelica</strong>,
            una pratica spirituale ed energetica che lavora attraverso
            luce, ascolto, protezione e intenzione del cuore.
          </p>

          <p>
            La mia missione è fare da ponte tra il mondo angelico e la
            realtà quotidiana, accompagnando le persone a sciogliere quei
            pesi invisibili che spesso impediscono all’anima di respirare,
            esprimersi e realizzarsi.
          </p>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-glow"></div>
        <img
          src={fotoCarmelo}
          alt="Ritratto di Carmelo Nicita - Alchimie di Luce"
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
            Ho completato il percorso formativo come
            <strong> Operatore di Guarigione Angelica</strong>,
            approfondendo pratiche spirituali ed energetiche orientate
            all’ascolto, alla protezione, alla luce e al riequilibrio
            interiore.
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
            La Guarigione Angelica è una pratica spirituale ed energetica.
            Non sostituisce cure mediche, psicologiche o farmacologiche.
          </p>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-glow"></div>
        <img
          src={certificatoGuarigione}
          alt="Attestato di Guarigione Angelica - Carmelo Nicita"
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

        <p className="text-block">
          Prima della sessione mi comunichi il tuo nome, il motivo della
          richiesta e ciò che desideri portare alla luce angelica.
          All’orario concordato ti prepari in tranquillità, magari con una
          candela, musica dolce e qualche minuto di respiro.
        </p>

        <div className="steps">
          <div className="step">
            <span className="check">✓</span>
            Raccolta della tua richiesta e preparazione dello spazio sacro.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Apertura di un campo di luce e protezione dedicato a te.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Lavoro energetico a distanza in connessione con il mondo angelico.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Chiusura, radicamento e breve restituzione finale.
          </div>
        </div>
      </div>

      <div className="card">
        <div className="icon">✧</div>
        <h3>Cosa puoi aspettarti</h3>

        <p>
          Molte persone vivono la sessione come un momento di pace,
          leggerezza e profondo rilassamento. Dopo il trattamento potresti
          sentirti più stanco o più emotivo: è consigliabile bere acqua,
          riposare e ascoltare il corpo.
        </p>

        <p>
          <strong>Nota importante:</strong> la guarigione angelica è una
          pratica spirituale ed energetica. Non sostituisce cure mediche,
          psicologiche o farmacologiche. Non vengono fatte diagnosi e non
          vengono promesse guarigioni certe.
        </p>
      </div>
    </div>
  </section>

  <section className="dark-section">
    <div className="container center">
      <p className="section-label">Servizi</p>
      <h2>Per cosa puoi richiedere una sessione</h2>

      <p className="lead">
        La sessione può essere richiesta per una persona, una situazione,
        una relazione, una casa o un ambiente di lavoro.
      </p>

      <div className="grid-4" style={{ marginTop: '45px' }}>
        <div className="service">Stress e pesantezza emotiva</div>
        <div className="service">Momenti di cambiamento</div>
        <div className="service">Relazioni difficili</div>
        <div className="service">Casa o luogo da armonizzare</div>
        <div className="service">Protezione energetica</div>
        <div className="service">Chiarezza interiore</div>
        <div className="service">Stanchezza spirituale</div>
        <div className="service">Ritrovare pace e centratura</div>
      </div>
    </div>
  </section>

  <section className="blue-section">
    <div className="container center">
      <p className="section-label">Letture angeliche</p>
      <h2>Messaggi e orientamento dagli Angeli</h2>

      <p className="lead">
        Oltre alla Guarigione Angelica a distanza, puoi richiedere una
        lettura angelica personalizzata per ricevere messaggi, risposte e
        orientamento spirituale.
      </p>

      <div className="grid-2" style={{ marginTop: '50px' }}>
        <div className="price-box wide">
          <h3>Le Risposte degli Angeli</h3>
          <div className="price">19 €</div>

          <p>
            Lettura angelica rapida e diretta con <strong>3 carte</strong>.
          </p>

          <p>
            È pensata per chi desidera porre <strong>3 domande secche</strong>
            agli Angeli. Per ogni domanda verrà estratta una carta e riceverai
            una risposta dedicata.
          </p>

          <p>
            <strong>Riceverai un PDF personalizzato</strong> con le 3
            domande scelte, le 3 risposte angeliche, la spiegazione di ogni
            carta e una sintesi finale di orientamento.
          </p>

          <p>
            <strong>Tempi di consegna:</strong> entro 24 ore dal pagamento e
            dall’invio delle domande.
          </p>

          <div className="important-note">
            Dopo il pagamento, contattami su WhatsApp indicando nome,
            servizio scelto, conferma del pagamento e le 3 domande per la
            lettura.
          </div>

          <div className="buttons">
            <a
              className="btn btn-paypal"
              href={paypalRisposteAngeli}
              target="_blank"
              rel="noreferrer"
            >
              Paga 19 € con PayPal
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Ciao, ho scelto Le Risposte degli Angeli con 3 carte. Ho effettuato il pagamento e ti invio le mie 3 domande.'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Avvisa su WhatsApp
            </a>
          </div>
        </div>

        <div className="price-box wide">
          <h3>Lettura Angel Therapy</h3>
          <div className="price">29 €</div>

          <p>
            Lettura angelica più profonda con <strong>5 carte</strong>,
            orientata alla guarigione spirituale ed energetica.
          </p>

          <p>
            Ogni carta porta un <strong>messaggio di guarigione</strong> e
            indica cosa puoi fare nella pratica per migliorare, alleggerire
            o trasformare la situazione che stai vivendo.
          </p>

          <p>
            <strong>Riceverai un PDF personalizzato</strong> con il
            messaggio di ogni carta, la spiegazione spirituale, i consigli
            pratici e una sintesi finale.
          </p>

          <p>
            <strong>Tempi di consegna:</strong> entro 24/48 ore dal
            pagamento e dall’invio della richiesta.
          </p>

          <div className="important-note">
            Dopo il pagamento, contattami su WhatsApp indicando nome,
            servizio scelto, conferma del pagamento e la situazione o il
            tema su cui desideri ricevere la lettura.
          </div>

          <div className="buttons">
            <a
              className="btn btn-paypal"
              href={paypalAngelTherapy}
              target="_blank"
              rel="noreferrer"
            >
              Paga 29 € con PayPal
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Ciao, ho scelto la Lettura Angel Therapy con 5 carte. Ho effettuato il pagamento e ti invio la mia richiesta.'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Avvisa su WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="price-box">
        <h3>Lettura personalizzata</h3>
        <div className="price">Su richiesta</div>

        <p>
          Per situazioni più complesse è possibile richiedere una lettura
          angelica più approfondita, con un numero maggiore di carte.
        </p>

        <div className="buttons">
          <a
            className="btn btn-secondary"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              'Ciao, vorrei informazioni su una lettura angelica personalizzata con più carte.'
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Chiedi info su WhatsApp
          </a>
        </div>
      </div>

      <p className="small">
        Le letture angeliche hanno finalità spirituale e introspettiva. Non
        sostituiscono consulenze mediche, psicologiche, legali o finanziarie.
      </p>
    </div>
  </section>

  <section className="dark-section">
    <div className="container center">
      <p className="section-label">Nuovo prodotto digitale</p>
      <h2>Mappa di Luce Interattiva</h2>

      <p className="lead">
        Un percorso spirituale e simbolico per ascoltare, ricevere
        orientamento e trasformare l’intuizione in un passo concreto.
      </p>

      <div className="price-box">
        <h3>Kit Completo di Attivazione Interiore</h3>
        <div className="price">17,90 €</div>

        <p>
          Un kit digitale da utilizzare con calma, secondo il tuo sentire
          e nel rispetto del libero arbitrio.
        </p>

        <div className="steps" style={{ marginTop: '28px', textAlign: 'left' }}>
          <div className="step">
            <span className="check">✓</span>
            Guida completa della Mappa di Luce Interattiva.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Tavola A4 stampabile con Numeri Sacri, Arcangeli, Chakra,
            Raggi e messaggi di orientamento.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Diario di Attivazione Interiore compilabile.
          </div>

          <div className="step">
            <span className="check">✓</span>
            Bigliettini da ritagliare per accompagnare la consultazione.
          </div>
        </div>

        <div className="important-note">
          Uno strumento spirituale, simbolico e introspettivo pensato per
          accompagnare ascolto interiore, centratura e scelta consapevole.
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
          Dopo l’acquisto riceverai i file digitali da scaricare e
          utilizzare personalmente.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div className="container center">
      <p className="section-label">Prenotazione</p>
      <h2>Sessione a distanza</h2>

      <p className="lead">
        Dopo la prenotazione riceverai indicazioni semplici: orario,
        preparazione, pagamento anticipato e modalità di restituzione finale.
      </p>

      <div className="grid-2" style={{ marginTop: '50px' }}>
        <div className="price-box wide">
          <h3>Sessione singola</h3>
          <div className="price">49 €</div>

          <p>
            Tariffa di lancio per la sessione singola di Guarigione Angelica
            a distanza. Durata indicativa: 45/60 minuti.
          </p>

          <div className="important-note">
            Dopo il pagamento, contattami su WhatsApp indicando nome,
            servizio scelto e conferma del pagamento.
          </div>

          <div className="buttons">
            <a
              className="btn btn-paypal"
              href={paypalSessione}
              target="_blank"
              rel="noreferrer"
            >
              Paga 49 € con PayPal
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Ciao, ho scelto la Sessione singola di Guarigione Angelica. Ho effettuato il pagamento e desidero concordare giorno e orario.'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Avvisa su WhatsApp
            </a>
          </div>
        </div>

        <div className="price-box wide">
          <h3>Percorso Luce</h3>
          <div className="price">129 €</div>

          <p>
            3 sessioni a distanza dedicate a pulizia energetica, protezione
            e riconnessione alla propria luce interiore.
          </p>

          <div className="important-note">
            Dopo il pagamento, contattami su WhatsApp indicando nome,
            servizio scelto e conferma del pagamento.
          </div>

          <div className="buttons">
            <a
              className="btn btn-paypal"
              href={paypalPercorso}
              target="_blank"
              rel="noreferrer"
            >
              Paga 129 € con PayPal
            </a>

            <a
              className="btn btn-secondary"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Ciao, ho scelto il Percorso Luce di 3 sessioni. Ho effettuato il pagamento e desidero concordare il calendario.'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Avvisa su WhatsApp
            </a>
          </div>
        </div>
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

  <section className="dark-section">
    <div className="container" style={{ maxWidth: '850px' }}>
      <h2 className="center">Domande frequenti</h2>

      <details>
        <summary>Devo essere collegato in video?</summary>
        <p>
          No, la videochiamata non è obbligatoria. La sessione si svolge a
          distanza: all’orario concordato tu ti prepari in un luogo
          tranquillo, seduto o sdraiato, mentre io lavoro dal mio spazio sacro.
        </p>
      </details>

      <details>
        <summary>Quanto dura?</summary>
        <p>
          Indicativamente 45/60 minuti, compresa una breve conversazione
          iniziale e una restituzione finale.
        </p>
      </details>

      <details>
        <summary>Cosa devo preparare?</summary>
        <p>
          Un posto tranquillo, acqua, cellulare silenzioso, eventualmente
          una candela e musica rilassante.
        </p>
      </details>

      <details>
        <summary>È una cura medica?</summary>
        <p>
          No. È una pratica spirituale ed energetica. Non sostituisce
          medico, psicologo, farmaci o terapie specialistiche.
        </p>
      </details>
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
      Testi, immagini, grafiche, contenuti spirituali, descrizioni dei
      servizi, letture angeliche, materiali informativi e ogni contenuto
      presente in questo sito non possono essere copiati, riprodotti,
      modificati, distribuiti o utilizzati senza autorizzazione scritta.
    </p>

    <p>
      Informazioni di servizio: questa attività ha finalità spirituali e di
      benessere energetico. Non effettua diagnosi, prescrizioni o
      trattamenti sanitari.
    </p>
  </footer>
</main>
```

);
}
