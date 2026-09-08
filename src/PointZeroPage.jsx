import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';
import puntoZero from './punto-zero-simbolo.webp';
import fotoCarmelo from './foto-carmelo.webp';

const purchaseLink = 'https://paypal.me/AlchimieDiLuce/149';

const afterPaymentLink = whatsappLink(
  'Ciao Carmelo, ho effettuato il pagamento per Punto Zero.\n\nNome e cognome:\nData di nascita:\nIl tema su cui vorrei lavorare è:'
);

const infoLink = whatsappLink(
  'Ciao Carmelo, prima di richiedere Punto Zero vorrei capire se è adatto alla situazione che sto vivendo.\n\nLa situazione, in breve:'
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
    document.title = 'Punto Zero | Guarigione spirituale a distanza';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="point-zero-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Guarigione spirituale ed energetica a distanza</span>
            <h1>Punto Zero</h1>
            <p className="zero-promise">Recidere. Alleggerire. Riallineare.</p>
            <p className="hero-lead">
              Se continui a pensare alla stessa persona o situazione, una parte della tua energia è ancora lì. Punto Zero ti accompagna a recidere ciò che ti trattiene, ritrovare leggerezza e ripartire con più forza e chiarezza.
            </p>
            <div className="price-stack price-stack-hero"><strong>149 €</strong><span>un intervento personale completo</span></div>
            <div className="hero-actions hero-actions-left">
              <ExternalButton href={purchaseLink} eventName="click_punto_zero_paypal">Acquista Punto Zero – 149 €</ExternalButton>
              <ExternalButton href={infoLink} eventName="click_punto_zero_info" className="btn-secondary">Prima voglio capire</ExternalButton>
            </div>
            <p className="microcopy">Pagamento tramite PayPal. Dopo l’acquisto inviami su WhatsApp i dati necessari per la diagnosi energetica preliminare.</p>
          </div>
          <div className="zero-product-visual">
            <div className="zero-product-frame">
              <img src={puntoZero} alt="Centro luminoso dorato che rappresenta l’intervento Punto Zero" />
            </div>
            <p>La Tavola è lo strumento con cui viene svolto il lavoro. Non è il prodotto che ricevi.</p>
          </div>
        </div>
      </section>

      <section className="section recognition-section">
        <div className="container recognition-grid">
          <div>
            <span className="eyebrow">Può essere il momento giusto se</span>
            <h2>Senti che qualcosa è finito, ma non si è ancora sciolto</h2>
          </div>
          <ul className="recognition-list recognition-list-large">
            <li>continui a tornare con la mente alla stessa persona o situazione</li>
            <li>riconosci uno schema che si ripete, nonostante i tuoi tentativi di cambiarlo</li>
            <li>senti stanchezza interiore, dispersione o difficoltà a ritrovare direzione</li>
            <li>desideri chiudere una fase e ripartire con un’intenzione più chiara</li>
          </ul>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il raggio d’azione</span>
            <h2>Su quali situazioni si può lavorare</h2>
            <p>La Tavola sostiene un lavoro di guarigione spirituale a distanza: recide i legami che tolgono energia, libera dai pesi accumulati e favorisce un nuovo equilibrio interiore.</p>
          </div>
          <div className="scope-grid">
            <article className="scope-card"><span>01</span><h3>Legami invisibili e tossici</h3><p>Ex partner, relazioni logoranti o vecchie storie del passato che continuano a togliere serenità e lucidità.</p></article>
            <article className="scope-card"><span>02</span><h3>Situazioni che si ripetono</h3><p>Schemi bloccati sul lavoro, nelle relazioni o nella vita personale da cui non si riesce a uscire, nonostante gli sforzi.</p></article>
            <article className="scope-card"><span>03</span><h3>Attaccamenti energetici</h3><p>Dipendenze sottili e agganci karmici che tengono una persona vincolata al passato o a dinamiche distruttive.</p></article>
            <article className="scope-card"><span>04</span><h3>Nodi genealogici</h3><p>Nodi genealogici o schemi ripetitivi di autosabotaggio che il soggetto non riesce a superare con la sola forza di volontà.</p></article>
            <article className="scope-card"><span>05</span><h3>Pesantezza emotiva</h3><p>Nubi emotive tossiche, forme-pensiero pesanti, pensieri negativi continui e dispersioni di vitalità.</p></article>
            <article className="scope-card"><span>06</span><h3>Ripartenza</h3><p>Un azzeramento profondo per permettere alla persona di ricaricarsi e ripartire con il proprio equilibrio naturale.</p></article>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il percorso per il cliente</span>
            <h2>Cosa accade, concretamente</h2>
            <p>Prima di operare con la Tavola svolgo una diagnosi energetica preliminare per individuare il blocco reale. Solo dopo imposto il lavoro più adatto alla persona.</p>
          </div>
          <div className="zero-steps">
            <Step number="01" title="Mi descrivi il tema">Su WhatsApp mi invii nome, data di nascita e una descrizione breve della situazione su cui desideri lavorare.</Step>
            <Step number="02" title="Individuo il blocco reale">Eseguo una diagnosi energetica preliminare per comprendere cosa sta agendo in profondità e quale lavoro impostare. Non è una diagnosi medica o psicologica.</Step>
            <Step number="03" title="Svolgo l’intervento">Il lavoro viene svolto a distanza, costruito su ciò che è emerso e seguito personalmente da me. Tu puoi continuare normalmente le tue giornate.</Step>
            <Step number="04" title="Verifico e concludo">La durata dipende dal soggetto e dalla natura del blocco. Concludo il lavoro quando la verifica finale indica che la pulizia energetica è completata.</Step>
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container flagship-grid">
          <div className="included-copy">
            <span className="eyebrow">Cosa comprende il prezzo</span>
            <h2>Cosa può cambiare dentro di te</h2>
            <p className="large-copy">Guarire spiritualmente significa smettere di dare energia a ciò che ti trattiene e tornare a sentirti libero di andare avanti.</p>
          </div>
          <div className="value-ledger">
            <div><span>01</span><p><strong>Taglia i legami invisibili e tossici:</strong> aiuta a staccarsi da ex partner, relazioni logoranti o vecchie storie del passato.</p></div>
            <div><span>02</span><p><strong>Sblocca le situazioni che si ripetono sempre uguali:</strong> sul lavoro, nelle relazioni o nella vita personale.</p></div>
            <div><span>03</span><p><strong>Ripulisce la pesantezza emotiva:</strong> dissolve forme-pensiero pesanti, pensieri negativi continui e dispersioni di vitalità.</p></div>
            <div><span>04</span><p><strong>Ripristina la vitalità e la forza interiore:</strong> permette alla persona di ricaricarsi e ripartire con il proprio equilibrio naturale.</p></div>
            <div><span>05</span><p><strong>Agisce a distanza:</strong> la persona non deve fare sforzi fisici o collegarsi durante l’attivazione.</p></div>
          </div>
        </div>
        <div className="container outcome-note"><p>Per guarigione spirituale si intende un percorso personale di rilascio, ascolto e riequilibrio energetico. Gli effetti percepiti sono soggettivi e il servizio non sostituisce azioni, decisioni o percorsi professionali necessari.</p></div>
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
            <h3>Lasciare andare per tornare a te</h3>
            <p>Un percorso positivo di guarigione spirituale per sciogliere ciò che senti ancora aperto e creare lo spazio energetico necessario a un nuovo inizio.</p>
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
            <details><summary>Cosa devo fare durante l’intervento?</summary><p>Puoi continuare normalmente le tue giornate. Il lavoro viene svolto a distanza; ti chiedo soltanto i dati essenziali e una descrizione sintetica del tema.</p></details>
            <details><summary>Riceverò la Tavola?</summary><p>No. Punto Zero è un intervento svolto da Carmelo attraverso la Tavola, non un prodotto digitale o fisico da spedire.</p></details>
            <details><summary>Quanto dura?</summary><p>Non esiste una durata uguale per tutti. Dipende dal soggetto, dalla natura del blocco e dalla risposta energetica durante il ciclo. Il lavoro termina quando la verifica finale indica che la pulizia energetica è completata.</p></details>
            <details><summary>Il prezzo cambia se il lavoro dura più a lungo?</summary><p>No. I 149 € comprendono la diagnosi energetica preliminare, l’intervento a distanza e il tempo necessario per arrivare alla chiusura del ciclo.</p></details>
            <details><summary>Cosa faccio dopo il pagamento?</summary><p>Scrivimi su WhatsApp indicando nome, data di nascita e una breve descrizione del tema. Ti confermerò la presa in carico prima di iniziare.</p></details>
            <details><summary>Posso richiederlo per un’altra persona?</summary><p>Il lavoro deve rispettare consenso, responsabilità personale e libero arbitrio. Scrivimi prima di acquistare se la richiesta riguarda qualcun altro.</p></details>
          </div>
        </div>
      </section>

      <section className="section cta-section zero-cta">
        <div className="container zero-cta-grid">
          <img src={fotoCarmelo} alt="Carmelo Nicita" />
          <div>
            <span className="eyebrow">Seguito personalmente da Carmelo</span>
            <h2>Se vuoi ripartire, partiamo da ciò che oggi ti trattiene.</h2>
            <div className="price-stack"><strong>149 €</strong><span>intervento completo a distanza</span></div>
            <div className="hero-actions hero-actions-left">
              <ExternalButton href={purchaseLink} eventName="click_punto_zero_bottom_paypal">Acquista con PayPal</ExternalButton>
              <ExternalButton href={afterPaymentLink} eventName="click_punto_zero_after_payment" className="btn-secondary">Ho già acquistato: invio i dati</ExternalButton>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
