import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';
import puntoZero from './punto-zero-simbolo.webp';
import fotoCarmelo from './foto-carmelo.webp';

const requestLink = whatsappLink(
  'Ciao Carmelo, vorrei richiedere l’intervento Punto Zero.\n\nNome e cognome:\nData di nascita:\nIl tema su cui vorrei lavorare è:'
);

const infoLink = whatsappLink(
  'Ciao Carmelo, prima di richiedere Punto Zero vorrei capire se è adatto alla situazione che sto vivendo.\n\nLa situazione, in breve:'
);

const Step = ({ number, title, children }) => (
  <article className="zero-step">
    <span>{number}</span>
    <div><h3>{title}</h3><p>{children}</p></div>
  </article>
);

export default function PointZeroPage() {
  React.useEffect(() => {
    document.title = 'Punto Zero | Intervento spirituale a distanza';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="point-zero-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Intervento spirituale personalizzato a distanza</span>
            <h1>Punto Zero</h1>
            <p className="zero-promise">Recidere. Alleggerire. Riallineare.</p>
            <p className="hero-lead">
              Il cliente target di Punto Zero vive in un sovraccarico cognitivo, bombardato da interferenze, pensieri ricorsivi e stanchezza psichica. La tavola va posizionata come una lama di precisione geometrica che azzera il rumore di fondo e riporta alla lucidità.
            </p>
            <div className="price-stack price-stack-hero"><strong>149 €</strong><span>un intervento personale completo</span></div>
            <div className="hero-actions hero-actions-left">
              <ExternalButton href={requestLink} eventName="click_punto_zero_request">Richiedi Punto Zero</ExternalButton>
              <ExternalButton href={infoLink} eventName="click_punto_zero_info" className="btn-secondary">Prima voglio capire</ExternalButton>
            </div>
            <p className="microcopy">Prima di procedere puoi descrivermi brevemente il tema su WhatsApp. Non inviare dati sanitari sensibili.</p>
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
            <p>La tavola serve a operare interventi di rescissione, bonifica e riallineamento energetico a distanza, agendo come un circuito radionico autosufficiente.</p>
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
            <p>Non devi conoscere il protocollo né collegarti durante il lavoro. Mi invii soltanto le informazioni essenziali; io seguo personalmente l’intervento a distanza e ti comunico quando il ciclo è concluso.</p>
          </div>
          <div className="zero-steps">
            <Step number="01" title="Mi descrivi il tema">Su WhatsApp mi invii nome, data di nascita e una descrizione breve della situazione su cui desideri lavorare.</Step>
            <Step number="02" title="Verifico la richiesta">Prima di iniziare valuto che Punto Zero sia coerente con il tema espresso e che rispetti responsabilità personale e libero arbitrio.</Step>
            <Step number="03" title="Svolgo l’intervento">Il lavoro viene svolto a distanza e seguito personalmente da me. Non sono richieste videochiamate o azioni complicate da parte tua.</Step>
            <Step number="04" title="Ti comunico la chiusura">Al termine del ciclo ricevi la conferma della chiusura e il punto essenziale emerso durante il lavoro.</Step>
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container flagship-grid">
          <div className="included-copy">
            <span className="eyebrow">Cosa comprende il prezzo</span>
            <h2>Cosa fa questo percorso energetico</h2>
            <p className="large-copy">Uno strumento radionico e geometrico di disciplina, studio e riallineamento delle frequenze, creato con cura artigianale per chi desidera risultati pratici e pulizia energetica tangibile.</p>
          </div>
          <div className="value-ledger">
            <div><span>01</span><p><strong>Taglia i legami invisibili e tossici:</strong> aiuta a staccarsi da ex partner, relazioni logoranti o vecchie storie del passato.</p></div>
            <div><span>02</span><p><strong>Sblocca le situazioni che si ripetono sempre uguali:</strong> sul lavoro, nelle relazioni o nella vita personale.</p></div>
            <div><span>03</span><p><strong>Ripulisce la pesantezza emotiva:</strong> dissolve forme-pensiero pesanti, pensieri negativi continui e dispersioni di vitalità.</p></div>
            <div><span>04</span><p><strong>Ripristina la vitalità e la forza interiore:</strong> permette alla persona di ricaricarsi e ripartire con il proprio equilibrio naturale.</p></div>
            <div><span>05</span><p><strong>Agisce a distanza:</strong> la persona non deve fare sforzi fisici o collegarsi durante l’attivazione.</p></div>
          </div>
        </div>
        <div className="container outcome-note"><p>Questi sono possibili effetti percepiti, non risultati garantiti: ogni esperienza è personale e il servizio non sostituisce azioni, decisioni o percorsi professionali necessari.</p></div>
      </section>

      <section className="section boundaries-section">
        <div className="container boundaries-grid">
          <div className="boundary-card boundary-card-positive">
            <span className="eyebrow">Cosa può offrirti</span>
            <h3>Uno spazio di passaggio</h3>
            <p>Una pratica spirituale per dare forma a un’intenzione di distacco, osservare ciò che stai trattenendo e segnare un nuovo punto di partenza.</p>
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
            <details><summary>Devo collegarmi in video?</summary><p>No. Il lavoro si svolge a distanza. Ti chiedo soltanto i dati essenziali e una descrizione sintetica del tema.</p></details>
            <details><summary>Riceverò la Tavola?</summary><p>No. Punto Zero è un intervento svolto da Carmelo attraverso la Tavola, non un prodotto digitale o fisico da spedire.</p></details>
            <details><summary>Quanto dura?</summary><p>Il ciclo viene stabilito sul singolo lavoro e può durare fino a sette giorni. La durata non è una misura del valore o della difficoltà del caso.</p></details>
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
            <ExternalButton href={requestLink} eventName="click_punto_zero_bottom">Richiedi Punto Zero su WhatsApp</ExternalButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
