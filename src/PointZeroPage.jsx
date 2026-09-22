import React from 'react';
import SiteLayout, { ExternalButton, track, whatsappLink } from './SiteChrome.jsx';
import puntoZero from './punto-zero-simbolo.webp';
import fotoCarmelo from './foto-carmelo.webp';

const purchaseLink = 'https://paypal.me/AlchimieDiLuce/149';

const afterPaymentLink = whatsappLink(
  'Ciao Carmelo, ho effettuato il pagamento per Punto Zero.\n\nNome e cognome:\nData di nascita:\nTema personale:\nAmbiente da armonizzare:\nSituazione della casa, in breve:'
);

const infoLink = whatsappLink(
  'Ciao Carmelo, prima di richiedere Punto Zero vorrei capire se è adatto alla situazione personale e all’ambiente che desidero armonizzare.\n\nTema personale:\nSituazione della casa, in breve:'
);

const pointZeroTestimonials = [
  {
    name: 'Laura M.',
    theme: 'Lasciare andare un legame',
    quote: 'Da quando abbiamo chiuso il ciclo, ci penso ancora a volte, ma è un ricordo neutro: non mi toglie più energia. Ho ripreso in mano le mie cose e mi sento finalmente padrona della mia testa.'
  },
  {
    name: 'Elena R.',
    theme: 'Protezione sul lavoro',
    quote: 'Le dinamiche sul lavoro sono le stesse, ma non mi faccio più travolgere. Finisco il turno lucida e la sera ho ancora voglia di uscire e vivere.'
  },
  {
    name: 'Marco T.',
    theme: 'Chiarezza e ripartenza',
    quote: 'Negli ultimi giorni del ciclo ho iniziato a sentire una chiarezza mentale che non ricordavo da anni. Ho sbloccato due decisioni che rimandavo da una vita.'
  }
];

const Step = ({ number, title, children }) => (
  <article className="zero-step">
    <span>{number}</span>
    <div><h3>{title}</h3><p>{children}</p></div>
  </article>
);

export default function PointZeroPage() {
  React.useEffect(() => {
    document.title = 'Punto Zero | Pulizia energetica della persona e della casa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="point-zero-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Pulizia energetica della persona e della casa</span>
            <h1>Punto Zero</h1>
            <p className="zero-promise">Liberare la persona. Armonizzare lo spazio. Ripartire.</p>
            <p className="hero-lead">
              Se continui a portare dentro di te lo stesso peso e anche la casa sembra trattenere tensioni, il lavoro deve considerare entrambi. Punto Zero è il mio intervento energetico a distanza sulla persona e sullo spazio che abita.
            </p>
            <div className="price-stack price-stack-hero"><strong>149 €</strong><span>percorso integrato persona e ambiente</span></div>
            <div className="hero-actions hero-actions-left">
              <ExternalButton href={infoLink} eventName="click_punto_zero_info">Verifica se Punto Zero è adatto a te</ExternalButton>
              <ExternalButton href={purchaseLink} eventName="click_punto_zero_paypal" className="btn-secondary">Acquista Punto Zero – 149 €</ExternalButton>
            </div>
            <p className="microcopy">Scrivimi prima di acquistare per descrivere sia ciò che vivi personalmente sia l’ambiente che desideri armonizzare. Dopo la verifica puoi procedere con PayPal.</p>
          </div>
          <div className="zero-product-visual">
            <div className="zero-product-frame">
              <img src={puntoZero} alt="Centro luminoso dorato che rappresenta l’intervento Punto Zero" />
            </div>
            <p>La Tavola è lo strumento con cui Carmelo svolge a distanza il lavoro sulla persona e sulla casa. Non è un oggetto che il cliente riceve.</p>
          </div>
        </div>
      </section>

      <section className="section recognition-section">
        <div className="container recognition-grid">
          <div>
            <span className="eyebrow">Può essere il momento giusto se</span>
            <h2>Il peso continua dentro di te oppure nella casa</h2>
          </div>
          <ul className="recognition-list recognition-list-large">
            <li>continui a tornare con la mente alla stessa persona o situazione</li>
            <li>riconosci uno schema che si ripete, nonostante i tuoi tentativi di cambiarlo</li>
            <li>senti stanchezza interiore, dispersione o difficoltà a ritrovare direzione</li>
            <li>desideri chiudere una fase e ripartire con un’intenzione più chiara</li>
            <li>entri in casa e percepisci tensione, stanchezza o un clima che non favorisce il riposo</li>
            <li>nell’ambiente si ripetono nervosismo e discussioni anche per motivi minimi</li>
          </ul>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Le due aree del lavoro</span>
            <h2>La persona e l’ambiente vengono letti insieme</h2>
            <p>Uno schema può avere radici relazionali, emotive, familiari, energetiche o karmiche e può lasciare tracce anche nello spazio quotidiano. La valutazione preliminare serve a comprendere dove concentrare il lavoro, senza attribuire automaticamente ogni difficoltà al karma.</p>
            <a className="text-link" href="/nodi-karmici">Scopri cosa sono i nodi karmici →</a>
          </div>
          <div className="scope-grid">
            <article className="scope-card"><span>01</span><h3>Legami non conclusi</h3><p>Ex partner, relazioni logoranti o vecchie storie che sono terminate nella realtà, ma continuano a occupare pensieri ed energia.</p></article>
            <article className="scope-card"><span>02</span><h3>Schemi che si ripetono</h3><p>Situazioni simili nel lavoro, nelle relazioni o nella vita personale che ritornano nonostante i tentativi di cambiarle.</p></article>
            <article className="scope-card"><span>03</span><h3>Attaccamenti energetici</h3><p>Legami sottili e possibili agganci karmici che mantengono la persona vincolata al passato o a dinamiche che la logorano.</p></article>
            <article className="scope-card"><span>04</span><h3>Tensioni domestiche</h3><p>Un clima di irritabilità, discussioni e nervosismo che sembra riattivarsi appena si rientra in casa.</p></article>
            <article className="scope-card"><span>05</span><h3>Stasi negli ambienti</h3><p>Stanze percepite come pesanti, poco vitali o incapaci di offrire raccoglimento, anche dopo riordino e pratiche occasionali.</p></article>
            <article className="scope-card"><span>06</span><h3>Memoria dello spazio</h3><p>Tracce emotive collegate a periodi difficili, separazioni, conflitti o eventi che hanno modificato il modo di vivere la casa.</p></article>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il percorso per il cliente</span>
            <h2>Cosa accade, concretamente</h2>
            <p>Prima di operare svolgo una valutazione energetica preliminare per distinguere ciò che riguarda la persona da ciò che si è accumulato nell’ambiente. Solo dopo imposto le due parti del lavoro.</p>
          </div>
          <div className="zero-steps">
            <Step number="01" title="Mi descrivi persona e ambiente">Su WhatsApp mi invii nome, data di nascita, il tema personale e una breve descrizione della casa o della stanza su cui desideri lavorare.</Step>
            <Step number="02" title="Valuto le due componenti">Distinguo il possibile nodo personale dalla tensione ambientale e verifico se Punto Zero è coerente con la situazione. Non è una diagnosi medica o psicologica.</Step>
            <Step number="03" title="Svolgo la pulizia personale">Il lavoro energetico sulla persona viene svolto a distanza, costruito su ciò che è emerso e seguito personalmente da me.</Step>
            <Step number="04" title="Armonizzo lo spazio a distanza">Con la Tavola lavoro anche sulla casa o sulla stanza indicata, per intervenire sulle tensioni ambientali emerse nella valutazione.</Step>
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container flagship-grid">
          <div className="included-copy">
            <span className="eyebrow">Cosa comprende il prezzo</span>
            <h2>Cosa può cambiare dentro di te e nella casa</h2>
            <p className="large-copy">Il percorso lavora sul peso personale e sullo spazio quotidiano, perché è difficile recuperare energia quando uno dei due continua a riattivare l’altro.</p>
          </div>
          <div className="value-ledger">
            <div><span>01</span><p><strong>Taglia i legami invisibili e tossici:</strong> aiuta a staccarsi da ex partner, relazioni logoranti o vecchie storie del passato.</p></div>
            <div><span>02</span><p><strong>Sblocca le situazioni che si ripetono sempre uguali:</strong> sul lavoro, nelle relazioni o nella vita personale.</p></div>
            <div><span>03</span><p><strong>Ripulisce la pesantezza emotiva:</strong> dissolve forme-pensiero pesanti, pensieri negativi continui e dispersioni di vitalità.</p></div>
            <div><span>04</span><p><strong>Ripristina la vitalità e la forza interiore:</strong> permette alla persona di ricaricarsi e ripartire con il proprio equilibrio naturale.</p></div>
            <div><span>05</span><p><strong>Armonizza lo spazio:</strong> sostiene il rilascio delle tensioni ambientali e una percezione più ordinata e respirabile della casa.</p></div>
            <div><span>06</span><p><strong>Comprende il lavoro sulla casa:</strong> la componente ambientale viene trattata a distanza insieme alla pulizia personale.</p></div>
          </div>
        </div>
        <div className="container outcome-note"><p>Per guarigione spirituale si intende un percorso personale e ambientale di rilascio, ascolto e riequilibrio energetico. Gli effetti percepiti sono soggettivi e il servizio non sostituisce cure, sicurezza domestica, dialogo, azioni o percorsi professionali necessari.</p></div>
      </section>

      <section className="section testimonials-section" id="riscontri-punto-zero">
        <div className="container">
          <div className="section-heading testimonials-intro">
            <span className="eyebrow">Esperienze con Punto Zero</span>
            <h2>Cosa hanno percepito dopo il percorso</h2>
            <p>Estratti da testimonianze autentiche condivise dai clienti. I nomi sono indicati con la sola iniziale del cognome per tutelarne la riservatezza.</p>
          </div>
          <div className="testimonials-grid">
            {pointZeroTestimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>{testimonial.name} <span>·</span> {testimonial.theme}</figcaption>
              </figure>
            ))}
          </div>
          <p className="testimonial-disclaimer">Ogni esperienza è personale. Le percezioni e i risultati possono variare da persona a persona.</p>
        </div>
      </section>

      <section className="section boundaries-section">
        <div className="container boundaries-grid">
          <div className="boundary-card boundary-card-positive">
            <span className="eyebrow">La direzione del lavoro</span>
            <h3>Lasciare andare e tornare a respirare</h3>
            <p>Un percorso positivo per sciogliere ciò che senti ancora aperto, recuperare energia personale e riportare maggiore ordine nello spazio che abiti.</p>
          </div>
          <div className="boundary-card">
            <span className="eyebrow">I confini del servizio</span>
            <h3>Responsabilità e libero arbitrio</h3>
            <p>Non cura patologie, non sostituisce terapia o supporto professionale, non controlla altre persone e non garantisce ritorni sentimentali, denaro o risultati specifici.</p>
          </div>
        </div>
      </section>

      <section className="section zero-faq-section">
        <div className="container faq-grid">
          <div><span className="eyebrow">Prima di scegliere</span><h2>Domande frequenti</h2></div>
          <div className="faq-list">
            <details><summary>Cosa devo fare durante la pulizia personale?</summary><p>Puoi continuare normalmente le tue giornate. Il lavoro sulla persona viene svolto a distanza; ti chiedo i dati essenziali e una descrizione sintetica del tema.</p></details>
            <details><summary>Punto Zero lavora anche sulla casa?</summary><p>Sì. Il percorso comprende l’armonizzazione energetica dello spazio, oltre al lavoro personale su legami, schemi, pesantezze e nodi emersi nella valutazione.</p></details>
            <details><summary>Riceverò la Tavola o uno strumento fisico?</summary><p>No. La Tavola è lo strumento utilizzato da Carmelo per svolgere il lavoro energetico a distanza sulla persona e sulla casa. Non viene spedito alcun oggetto.</p></details>
            <details><summary>Quanto dura il lavoro personale?</summary><p>Non esiste una durata uguale per tutti. Dipende dalla persona e dalla natura del blocco; Carmelo segue il ciclo fino alla verifica conclusiva.</p></details>
            <details><summary>Il prezzo cambia se il lavoro dura più a lungo?</summary><p>No. I 149 € comprendono valutazione preliminare, pulizia energetica personale, armonizzazione della casa e il tempo necessario per concludere il ciclo.</p></details>
            <details><summary>Cosa faccio dopo il pagamento?</summary><p>Scrivimi su WhatsApp indicando nome, data di nascita, tema personale e una breve descrizione dell’ambiente. Ti confermerò la presa in carico prima di iniziare.</p></details>
            <details><summary>Posso richiederlo per un’altra persona?</summary><p>Il lavoro deve rispettare consenso, responsabilità personale e libero arbitrio. Scrivimi prima di acquistare se la richiesta riguarda qualcun altro.</p></details>
          </div>
        </div>
      </section>

      <section className="section cta-section zero-cta">
        <div className="container zero-cta-grid">
          <img src={fotoCarmelo} alt="Carmelo Nicita" />
          <div>
            <span className="eyebrow">Seguito personalmente da Carmelo</span>
            <h2>Libera ciò che ti trattiene e riporta equilibrio nella casa.</h2>
            <div className="price-stack"><strong>149 €</strong><span>percorso completo persona e ambiente</span></div>
            <div className="hero-actions hero-actions-left">
              <ExternalButton href={infoLink} eventName="click_punto_zero_bottom_info">Verifica se fa per te</ExternalButton>
              <ExternalButton href={purchaseLink} eventName="click_punto_zero_bottom_paypal" className="btn-secondary">Acquista con PayPal</ExternalButton>
            </div>
            <p className="microcopy"><a className="text-link" href={afterPaymentLink} target="_blank" rel="noreferrer" onClick={() => track('click_punto_zero_after_payment')}>Hai già acquistato? Invia i dati su WhatsApp</a></p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
