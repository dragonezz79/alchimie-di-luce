import React from 'react';
import SiteLayout, { ExternalButton, telegramUrl, track } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import guidaSerenita from './guida-serenita.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import mappaCover from './mappa.webp';
import casaSerenaHero from './casa-serena-hero.webp';
import { articles } from './BlogPages.jsx';

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
    document.title = 'Alchimie di Luce | Pulizia energetica della persona e della casa';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="new-home-hero">
        <div className="container zero-hero-grid">
          <div className="zero-hero-copy">
            <span className="eyebrow">Pulizia energetica della persona e della casa · Carmelo Nicita</span>
            <h1>Riporta pace, chiarezza e protezione <em>dentro di te e nella tua casa.</em></h1>
            <p className="hero-lead">
              Punto Zero lavora sulla persona e sullo spazio che abita: aiuta a sciogliere legami, schemi e pesantezze interiori e a liberare la casa da tensioni, congestioni e stasi persistenti, nel pieno rispetto del libero arbitrio.
            </p>
            <div className="hero-actions hero-actions-left">
              <a className="btn btn-primary" href="/punto-zero">Scopri il percorso Punto Zero</a>
              <ExternalButton href={links.serenita} eventName="click_hero_serenita" className="btn-secondary">Scarica la guida gratuita</ExternalButton>
            </div>
            <p className="trust-line">Ordine · Respiro · Discernimento · Nessuna promessa miracolistica</p>
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
            <h2>Quando il peso resta dentro di te e nello spazio che abiti</h2>
            <p className="large-copy">
              Punto Zero è un intervento energetico svolto interamente a distanza sulla persona e sulla casa. Il lavoro affronta sia il nodo che continua a trattenerti sia le tensioni che restano nell’ambiente quotidiano.
            </p>
            <ul className="clean-checks">
              <li>Valutazione preliminare della persona e della situazione</li>
              <li>Pulizia energetica personale su legami, schemi e pesantezze</li>
              <li>Armonizzazione della casa e delle tensioni accumulate nello spazio</li>
              <li>Nessuna forzatura di sentimenti, relazioni o decisioni altrui</li>
            </ul>
          </div>
          <aside className="flagship-offer">
            <span className="badge">Intervento premium</span>
            <h3>Punto Zero · Persona e ambiente</h3>
            <p>Un percorso integrato seguito da Carmelo: pulizia energetica personale e armonizzazione della casa, entrambe svolte a distanza attraverso la Tavola.</p>
            <div className="price-stack"><strong>149 €</strong><span>percorso integrato</span></div>
            <a className="btn btn-primary" href="/punto-zero">Scopri come funziona</a>
            <ExternalButton href={puntoZeroPurchase} eventName="click_home_punto_zero_paypal" className="btn-secondary">Richiedi Punto Zero – 149 €</ExternalButton>
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
              need="Vuoi alleggerire te e la tua casa"
              title="Punto Zero"
              text="Per sciogliere ciò che ti trattiene e armonizzare un ambiente percepito come teso, pesante o incapace di offrire riposo."
              price="149 €"
              href="/punto-zero"
              cta="Scopri il percorso"
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

      <section className="section insights-preview-section" aria-labelledby="insights-heading">
        <div className="container">
          <div className="section-heading insights-heading">
            <span className="eyebrow">Approfondimenti</span>
            <h2 id="insights-heading">Uno spazio per capire prima di scegliere</h2>
            <p className="large-copy">Guide pratiche e misurate per orientarti nei momenti di stasi, alleggerire gli ambienti e distinguere ciò che senti senza alimentare paura o confusione.</p>
          </div>
          <div className="insights-grid">
            {articles.map((article) => (
              <article className="insight-card" key={article.slug}>
                <span className="insight-meta">{article.category} · {article.readingTime}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="text-link" href={`/approfondimenti/${article.slug}`}>Leggi la guida →</a>
              </article>
            ))}
          </div>
          <a className="btn btn-secondary insights-all" href="/approfondimenti">Tutti gli approfondimenti</a>
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

      <section className="section telegram-section" aria-labelledby="telegram-heading">
        <div className="container telegram-panel">
          <div className="telegram-mark" aria-hidden="true">✦</div>
          <div>
            <span className="eyebrow">Uno spazio gratuito, oltre il sito</span>
            <h2 id="telegram-heading">Entra nello Spazio di Chiarezza</h2>
            <p className="large-copy">Nel canale Telegram trovi pratiche brevi, riflessioni e aggiornamenti di Alchimie di Luce per alleggerire il rumore e tornare al punto essenziale.</p>
            <p className="telegram-note">Canale pubblico · Nessun gruppo e nessun messaggio privato obbligatorio</p>
          </div>
          <ExternalButton href={telegramUrl} eventName="click_home_telegram" className="btn-telegram">
            Entra nello Spazio di Chiarezza su Telegram
          </ExternalButton>
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
