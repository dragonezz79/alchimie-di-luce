import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';
import puntoZero from './punto-zero-tavola.webp';
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
              Un lavoro simbolico e spirituale seguito personalmente da Carmelo per accompagnarti quando un legame, uno schema o una fase del passato continua a occupare spazio dentro di te.
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
              <img src={puntoZero} alt="Geometria originale della Tavola radionica Punto Zero" />
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
            <li>desideri chiudere simbolicamente una fase e ripartire con un’intenzione più chiara</li>
          </ul>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il metodo</span>
            <h2>Cosa accade, concretamente</h2>
            <p>Il valore non è nella quantità di rituali. È nella precisione con cui il lavoro viene costruito sul tuo caso e poi lasciato agire senza continue sollecitazioni.</p>
          </div>
          <div className="zero-steps">
            <Step number="01" title="Raccolgo il tema">Mi invii nome, data di nascita e una descrizione breve della situazione o del legame su cui desideri lavorare.</Step>
            <Step number="02" title="Definisco l’intenzione">Utilizzo strumenti oracolari e radiestesici come supporto simbolico per mettere a fuoco una formulazione essenziale, senza diagnosi né interpretazioni sanitarie.</Step>
            <Step number="03" title="Attivo Punto Zero">Preparo il testimone, allineo la Tavola e avvio il circuito secondo il protocollo di rescissione, bonifica simbolica e riallineamento.</Step>
            <Step number="04" title="Seguo il ciclo">Il lavoro resta attivo per il tempo stabilito, fino a un massimo indicativo di sette giorni, con verifica e chiusura finale.</Step>
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container flagship-grid">
          <div className="included-copy">
            <span className="eyebrow">Cosa comprende il prezzo</span>
            <h2>Non paghi un disegno.<br />Paghi un lavoro personale.</h2>
            <p className="large-copy">La Tavola è il mezzo operativo. Il servizio comprende il tempo, la preparazione, la formulazione dell’intenzione e la gestione dell’intero ciclo.</p>
          </div>
          <div className="value-ledger">
            <div><span>01</span><p><strong>Analisi preliminare</strong> del tema espresso</p></div>
            <div><span>02</span><p><strong>Impostazione personalizzata</strong> del testimone e dell’intento</p></div>
            <div><span>03</span><p><strong>Attivazione a distanza</strong> con protocollo Punto Zero</p></div>
            <div><span>04</span><p><strong>Monitoraggio e chiusura</strong> del ciclo</p></div>
            <div><span>05</span><p><strong>Restituzione finale</strong> con il punto essenziale emerso</p></div>
          </div>
        </div>
      </section>

      <section className="section boundaries-section">
        <div className="container boundaries-grid">
          <div className="boundary-card boundary-card-positive">
            <span className="eyebrow">Cosa può offrirti</span>
            <h3>Uno spazio di passaggio</h3>
            <p>Una pratica spirituale per dare forma a un’intenzione di distacco, osservare ciò che stai trattenendo e segnare un nuovo punto di partenza.</p>
          </div>
          <div className="boundary-card">
            <span className="eyebrow">Cosa non promette</span>
            <h3>Nessuna scorciatoia miracolosa</h3>
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
