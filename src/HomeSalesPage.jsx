import React from 'react';
import SiteLayout, { ExternalButton, track, whatsappLink } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import casaSerenaHero from './casa-serena-hero.webp';

const links = {
  serenita: 'https://payhip.com/buy?link=Ez8xs'
};

const firstContactLink = whatsappLink(
  'Ciao Carmelo, ho visitato il sito e vorrei capire da dove iniziare.\n\nIn poche righe, ciò che sto vivendo è:'
);


const ChoiceCard = ({ number, need, title, text, price, href, cta, featured = false }) => (
  <article className={`choice-card${featured ? ' choice-card-featured' : ''}`}>
    <span className="choice-number">{number}</span>
    <span className="eyebrow">{need}</span>
    <h3>{title}</h3>
    <p>{text}</p>
    <div className="choice-footer">
      <strong>{price}</strong>
      <a className="text-link" href={href}>{cta} →</a>
    </div>
  </article>
);

export default function HomeSalesPage() {
  React.useEffect(() => {
    document.title = 'Alchimie di Luce | Pulizia energetica della persona e della casa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="new-home-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Un primo passo umano e concreto · Carmelo Nicita</span>
            <h1>Quando qualcosa ti toglie serenità, <em>iniziamo dal capire che cosa sta succedendo.</em></h1>
            <p className="hero-lead">
              Ti senti senza energie appena entri in casa? Continui a rivivere lo stesso dolore in una relazione? Oppure un pensiero non ti lascia riposare? Un consulto mirato può aiutarti a mettere a fuoco la situazione prima di scegliere qualsiasi percorso.
            </p>
            <div className="hero-actions hero-actions-left">
              <a className="btn btn-primary" href="/letture" onClick={() => track('click_home_primary_consultation')}>
                Scopri il consulto mirato
              </a>
            </div>
            <p className="trust-line">Consulto individuale da 49 € · Nessuna promessa miracolistica</p>
          </div>
          <div className="zero-symbol-card home-hero-card" aria-label="Una casa luminosa, ordinata e serena">
            <img src={casaSerenaHero} alt="Soggiorno luminoso e ordinato con finestre aperte e luce naturale" />
            <div className="zero-symbol-caption">
              <span>La trasformazione che cerchiamo</span>
              <strong>Tu e la tua casa tornate a respirare</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section voice-section" aria-labelledby="voice-heading">
        <div className="container voice-grid">
          <div className="voice-copy">
            <span className="eyebrow">Ascolta Carmelo</span>
            <h2 id="voice-heading">Prima di proporti qualcosa, voglio ascoltare la situazione.</h2>
            <p className="large-copy">In meno di un minuto ti spiego perché non propongo la stessa soluzione a tutti e come individuiamo il punto da cui iniziare.</p>
            <p className="voice-note">Il primo messaggio serve soltanto a orientarti. Non sostituisce una lettura o una valutazione completa.</p>
          </div>
          <div className="voice-video-card">
            <video
              className="voice-video"
              controls
              playsInline
              preload="metadata"
              poster="/media/carmelo-video-poster.webp"
              aria-label="Carmelo spiega il suo approccio e come iniziare"
              onPlay={() => track('play_home_carmelo_video')}
              onEnded={() => track('complete_home_carmelo_video')}
            >
              <source src="/media/carmelo-alchimie-di-luce.mp4" type="video/mp4" />
              <track
                src="/media/carmelo-alchimie-di-luce.vtt"
                kind="captions"
                srcLang="it"
                label="Italiano"
                default
              />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
        </div>
      </section>

      <section className="section signature-section" id="metodo">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il metodo Alchimie di Luce</span>
            <h2>Prima ascolto. Poi distinguo. Solo dopo indico il percorso.</h2>
            <p className="large-copy">Una relazione, una paura o una tensione in casa possono sembrare problemi separati. Prima di proporti qualcosa, cerco di capire che cosa continua davvero a toglierti serenità.</p>
          </div>
          <div className="signature-grid">
            <article><span>01</span><h3>Ascolto la situazione</h3><p>Parto da ciò che senti oggi: il peso, le tensioni, i pensieri ricorrenti e ciò che accade nello spazio in cui vivi.</p></article>
            <article><span>02</span><h3>Distinguo il bisogno</h3><p>Capisco se hai bisogno di fare chiarezza, di lavorare sul piano energetico oppure di iniziare con una pratica autonoma.</p></article>
            <article><span>03</span><h3>Ti indico il passo</h3><p>Ricevi una direzione comprensibile, senza pressioni e senza acquistare percorsi che non sono adatti al tuo caso.</p></article>
          </div>
          <p className="method-boundary">Non considero automaticamente ogni difficoltà un problema energetico o karmico. Verifico prima se il mio lavoro è realmente pertinente alla situazione.</p>
        </div>
      </section>

      <section className="section origins-preview-section">
        <div className="container origins-preview-grid">
          <div>
            <span className="eyebrow">Quando chiedere un confronto</span>
            <h2>Hai già provato a reagire, ma il peso continua a tornare</h2>
            <p className="large-copy">Non serve conoscere termini tecnici. Partiamo da quello che accade davvero nella tua vita: una relazione che continua a ferire, una casa in cui non riesci a stare bene, un senso di vuoto o pensieri che non danno tregua.</p>
          </div>
          <div className="origin-signals">
            <div><strong>La situazione cambia</strong><span>ma ritorna la stessa sofferenza</span></div>
            <div><strong>La relazione finisce</strong><span>ma il legame continua a togliere energia</span></div>
            <div><strong>Conosci già il problema</strong><span>ma non riesci a compiere il passo successivo</span></div>
            <div><strong>Provi a reagire</strong><span>ma qualcosa ti riporta sempre al punto di partenza</span></div>
          </div>
        </div>
      </section>

      <section className="section choice-section" id="percorsi">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Il primo passo consigliato</span>
            <h2>Prima fai chiarezza. Solo se serve, valuti un intervento più ampio.</h2>
            <p>Per chi arriva per la prima volta, il consulto è il modo più semplice per inquadrare il problema senza acquistare al buio un percorso a distanza.</p>
          </div>
          <div className="choice-grid choice-grid-two">
            <ChoiceCard
              number="01"
              need="Vuoi comprendere ciò che stai vivendo"
              title="Tarocchi"
              text="Per mettere a fuoco una situazione, riconoscere ciò che ti sta bloccando e vedere con maggiore chiarezza il passo successivo."
              price="Da 49 €"
              href="/letture"
              cta="Scopri le letture"
              featured
            />
            <ChoiceCard
              number="02"
              need="Il peso coinvolge te e la tua casa"
              title="Punto Zero"
              text="Un intervento energetico svolto interamente a distanza sulla persona e sull’ambiente, dopo una valutazione preliminare della situazione."
              price="149 €"
              href="/punto-zero"
              cta="Scopri il percorso"
            />
          </div>
          <div className="home-guidance-cta">
            <p><strong>Preferisci parlarmi prima della situazione?</strong> Mandami su WhatsApp un breve messaggio scritto o vocale. Ti dirò se il consulto o Punto Zero può essere pertinente, senza trasformare il primo contatto in una consulenza completa.</p>
            <ExternalButton href={firstContactLink} eventName="click_home_paths_contact">
              Scrivimi su WhatsApp
            </ExternalButton>
          </div>
        </div>
      </section>

      <section className="section entry-section">
        <div className="container entry-grid">
          <img src={guidaSerenita} alt="Copertina della guida 5 minuti al giorno per ritrovare serenità" />
          <div>
            <span className="eyebrow">L’unico ingresso gratuito</span>
            <h2>Inizia con cinque minuti veri</h2>
            <p className="large-copy">Il primo passo per riconoscere il sovraccarico, ritrovare centratura e osservare come l’ambiente incide sul tuo equilibrio quotidiano.</p>
            <ExternalButton href={links.serenita} eventName="click_home_serenita">Scarica la guida gratuita</ExternalButton>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-preview">
          <img src={fotoCarmelo} alt="Carmelo Nicita, fondatore di Alchimie di Luce" />
          <div>
            <span className="eyebrow">La presenza dietro il metodo</span>
            <h2>Non delego la persona a un sistema automatico</h2>
            <p className="large-copy">Sono Carmelo. Il mio lavoro unisce percezione intuitiva, lettura dei cicli, discernimento e intervento energetico.</p>
            <p>Mi occupo soprattutto delle situazioni in cui la persona ha già riflettuto, provato a cambiare o chiuso apparentemente un capitolo, ma continua a sentirne il peso. Ogni consulto e ogni intervento Punto Zero viene seguito personalmente da me.</p>
            <a className="text-link" href="/chi-sono">Conosci il mio approccio →</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
