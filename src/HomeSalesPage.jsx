import React from 'react';
import SiteLayout, { ExternalButton, track } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import mappaCover from './mappa.webp';

const links = {
  serenita: 'https://payhip.com/buy?link=Ez8xs'
};

const puntoZeroPurchase = 'https://paypal.me/AlchimieDiLuce/149';

const ChoiceCard = ({ number, need, title, text, price, href, cta }) => (
  <article className="choice-card">
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
    document.title = 'Alchimie di Luce | Guarigione spirituale ed energetica';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="new-home-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Carmelo Nicita · Lettura intuitiva e lavoro energetico</span>
            <h1>Vedo il nodo che continua a ripetersi.<br /><em>Ti aiuto a cambiare direzione.</em></h1>
            <p className="hero-lead">
              Il mio dono è riconoscere il filo nascosto tra ciò che vivi oggi e la possibile radice emotiva, familiare, energetica o karmica che continua ad alimentarlo. Non mi fermo all’interpretazione: quando il percorso è adatto, lavoro sul nodo e ti restituisco una direzione concreta da cui ripartire.
            </p>
            <div className="hero-actions hero-actions-left">
              <a className="btn btn-primary" href="#metodo">Scopri come lavoro</a>
              <a className="btn btn-secondary" href="/trova-il-tuo-percorso">Fai il test</a>
            </div>
            <p className="trust-line">Presenza personale · Discernimento · Rispetto del libero arbitrio</p>
          </div>
          <div className="zero-symbol-card carmelo-hero-card" aria-label="Carmelo Nicita, fondatore di Alchimie di Luce">
            <img src={fotoCarmelo} alt="Carmelo Nicita" />
            <div className="zero-symbol-caption">
              <span>Ogni percorso è seguito personalmente</span>
              <strong>Carmelo Nicita</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section voice-section" aria-labelledby="voice-heading">
        <div className="container voice-grid">
          <div className="voice-copy">
            <span className="eyebrow">Ascolta Carmelo</span>
            <h2 id="voice-heading">Prima del percorso, voglio parlarti con chiarezza.</h2>
            <p className="large-copy">
              In meno di un minuto ti spiego cosa osservo quando una situazione continua a ripetersi, perché non propongo la stessa soluzione a tutti e da dove puoi iniziare.
            </p>
            <p className="voice-note">Ogni situazione viene ascoltata e valutata prima di indicare il percorso più adatto.</p>
            <a className="btn btn-primary" href="/trova-il-tuo-percorso">Fai il test gratuito</a>
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
            <h2>Comprendere l’origine. Sciogliere il nodo. Riprendere la propria direzione.</h2>
            <p className="large-copy">Dove gli altri vedono episodi separati, io cerco il filo che li tiene uniti. Una relazione, una paura o una situazione possono cambiare forma e continuare a produrre lo stesso risultato.</p>
          </div>
          <div className="signature-grid">
            <article><span>01</span><h3>Riconosco il filo</h3><p>Ascolto il tema e individuo lo schema che collega situazioni apparentemente diverse, senza alimentare paura o confusione.</p></article>
            <article><span>02</span><h3>Lavoro sul nodo</h3><p>Quando il percorso è adatto, intervengo sul piano energetico con un lavoro personale, focalizzato e rispettoso del libero arbitrio.</p></article>
            <article><span>03</span><h3>Riporto alla realtà</h3><p>Ciò che emerge non resta astratto: la persona riceve una direzione chiara da trasformare in una scelta concreta.</p></article>
          </div>
          <p className="method-boundary">Non considero automaticamente ogni problema un nodo karmico. Prima ascolto, valuto il tema e verifico se il mio lavoro è realmente adatto alla situazione.</p>
        </div>
      </section>

      <section className="section origins-preview-section">
        <div className="container origins-preview-grid">
          <div>
            <span className="eyebrow">Perché alcune storie si ripetono</span>
            <h2>Il problema può essere più profondo dell’ultimo episodio</h2>
            <p className="large-copy">In una lettura spirituale, uno schema può avere radici emotive, familiari, energetiche o karmiche. Il nodo non è una condanna: indica il punto in cui qualcosa è rimasto irrisolto e continua a chiedere attenzione.</p>
            <a className="btn btn-secondary" href="/nodi-karmici">Comprendi cosa sono i nodi karmici</a>
          </div>
          <div className="origin-signals">
            <div><strong>La situazione cambia</strong><span>ma ritorna la stessa sofferenza</span></div>
            <div><strong>La relazione finisce</strong><span>ma il legame continua a togliere energia</span></div>
            <div><strong>Conosci già il problema</strong><span>ma non riesci a compiere il passo successivo</span></div>
            <div><strong>Provi a reagire</strong><span>ma qualcosa ti riporta sempre al punto di partenza</span></div>
          </div>
        </div>
      </section>

      <section className="section flagship-section">
        <div className="container flagship-grid">
          <div className="flagship-copy">
            <span className="eyebrow">Il percorso centrale</span>
            <h2>Quando continuare a pensarci non basta</h2>
            <p className="large-copy">
              Punto Zero è un intervento energetico personale a distanza. Ti accompagna a recidere ciò che ti trattiene, alleggerire il peso interiore e recuperare energia per ripartire.
            </p>
            <ul className="clean-checks">
              <li>Valutazione energetica preliminare per individuare il blocco reale</li>
              <li>Lavoro formulato sulla persona e su ciò che emerge</li>
              <li>Attivazione e ciclo seguito personalmente da Carmelo</li>
              <li>Durata personalizzata fino al completamento della pulizia energetica</li>
            </ul>
          </div>
          <aside className="flagship-offer">
            <span className="badge">Intervento premium</span>
            <h3>Punto Zero a distanza</h3>
            <p>Prima individuo il blocco energetico reale, poi costruisco e seguo il lavoro a distanza fino al completamento della pulizia.</p>
            <div className="price-stack"><strong>149 €</strong><span>percorso personale</span></div>
            <a className="btn btn-primary" href="/punto-zero">Scopri se Punto Zero fa per te</a>
            <ExternalButton href={puntoZeroPurchase} eventName="click_home_punto_zero_paypal" className="btn-secondary">Acquista Punto Zero – 149 €</ExternalButton>
          </aside>
        </div>
      </section>

      <section className="section choice-section" id="scegli">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Scegli dal bisogno, non dal nome</span>
            <h2>Cosa stai cercando adesso?</h2>
            <p>Tre strade diverse. Non devi acquistare tutto e non devi indovinare da solo quale servizio scegliere.</p>
          </div>
          <div className="choice-grid">
            <ChoiceCard
              number="01"
              need="Vuoi sciogliere un peso"
              title="Punto Zero"
              text="Per lasciare andare legami, schemi e situazioni che continuano a toglierti energia."
              price="149 €"
              href="/punto-zero"
              cta="Scopri l’intervento"
            />
            <ChoiceCard
              number="02"
              need="Hai una domanda precisa"
              title="Tarocchi"
              text="Per capire cosa sta accadendo dentro di te e vedere con più chiarezza la scelta successiva."
              price="Da 49 €"
              href="/letture"
              cta="Confronta le formule"
            />
            <ChoiceCard
              number="03"
              need="Vuoi procedere in autonomia"
              title="Strumenti digitali"
              text="Per proteggere la tua energia, ritrovare il centro e creare una pratica quotidiana."
              price="Da 0 €"
              href="/prodotti"
              cta="Esplora gli strumenti"
            />
          </div>
        </div>
      </section>

      <section className="section finder-invite-section">
        <div className="container finder-invite">
          <div>
            <span className="eyebrow">Non sai da dove iniziare?</span>
            <h2>Riconosci di quale tipo di aiuto hai bisogno adesso</h2>
            <p>Rispondi a quattro domande: il test ti aiuterà a distinguere se hai bisogno di calma, comprensione, protezione, scioglimento di un nodo o orientamento nel tempo.</p>
          </div>
          <a className="btn btn-primary" href="/trova-il-tuo-percorso">Inizia il test</a>
        </div>
      </section>

      <section className="section entry-section">
        <div className="container entry-grid">
          <img src={guidaSerenita} alt="Copertina della guida 5 minuti al giorno per ritrovare serenità" />
          <div>
            <span className="eyebrow">L’unico ingresso gratuito</span>
            <h2>Inizia con cinque minuti veri</h2>
            <p className="large-copy">Il cambiamento può iniziare da cinque minuti: fermarti, respirare e tornare presente nella tua vita.</p>
            <ExternalButton href={links.serenita} eventName="click_home_serenita">Scarica la guida gratuita</ExternalButton>
          </div>
          <div className="entry-next">
            <img src={ritualiCover} alt="7 Rituali di Protezione e Luce" />
            <div><span>Passo successivo</span><strong>7 Rituali · 19 €</strong></div>
          </div>
          <div className="entry-next">
            <img src={mappaCover} alt="Mappa di Luce Interattiva" />
            <div><span>Strumento completo</span><strong>Mappa di Luce · 59 €</strong></div>
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
