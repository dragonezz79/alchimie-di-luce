import React from 'react';
import SiteLayout, { ExternalButton } from './SiteChrome.jsx';

import fotoCarmelo from './foto-carmelo.webp';
import ritualiCover from './kit-7-rituali-cover.webp';
import ritualeMantello from './01-mantello-blu.webp';
import ritualeFiamma from './02-fiamma-viola.webp';
import ritualeSfera from './03-sfera-di-luce.webp';
import ritualeCasa from './04-armonia-casa.webp';
import ritualeRilascio from './05-rilascio-serale.webp';
import ritualeRelazioni from './06-protezione-relazioni.webp';
import ritualeCentratura from './07-centratura-sovranita.webp';

const ritualiLink = 'https://payhip.com/b/DbHjv';

const rituals = [
  [ritualeMantello, 'Mantello Blu', 'Per iniziare il percorso stabilendo un confine interiore chiaro.'],
  [ritualeFiamma, 'Fiamma Viola', 'Per accompagnare il rilascio di ciò che senti ormai concluso.'],
  [ritualeSfera, 'Sfera di Luce', 'Per creare uno spazio interiore protetto prima di affrontare la giornata.'],
  [ritualeCasa, 'Armonia della casa', 'Per dedicare attenzione e intenzione agli ambienti in cui vivi.'],
  [ritualeRilascio, 'Rilascio serale', 'Per chiudere la giornata senza portare tutto con te nel riposo.'],
  [ritualeRelazioni, 'Confini nelle relazioni', 'Per prepararti a un incontro o a una conversazione difficile.'],
  [ritualeCentratura, 'Centratura e sovranità', 'Per tornare al respiro, al corpo e alla tua capacità di scegliere.']
];

function RitualsPage() {
  React.useEffect(() => {
    document.title = '7 Rituali di Protezione e Luce | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="detail-hero">
        <div className="container split-grid">
          <div className="product-visual glow-card"><img src={ritualiCover} alt="7 Rituali di Protezione e Luce" /></div>
          <div className="copy-block">
            <span className="eyebrow">Percorso digitale di 7 giorni</span>
            <h1>7 Rituali di Protezione e Luce</h1>
            <p className="large-copy">Sette pratiche di guarigione spirituale ed energetica per proteggerti, lasciare andare e tornare al tuo centro.</p>
            <p>Non una raccolta casuale di formule: un percorso ordinato, con istruzioni, decreto e chiusura per ogni giornata.</p>
            <div className="price-stack"><strong>19 €</strong><span>PDF di 24 pagine · accesso immediato</span></div>
            <ExternalButton href={ritualiLink} eventName="click_rituali_1900">Inizia il percorso</ExternalButton>
            <p className="microcopy">Pagamento sicuro su Payhip · Nessun abbonamento</p>
          </div>
        </div>
      </section>

      <section className="section rituals-fit-section">
        <div className="container split-grid align-start">
          <div>
            <span className="eyebrow">Perché esiste</span>
            <h2>La protezione non è paura</h2>
            <p className="large-copy">Proteggerti significa riconoscere ciò che ti appesantisce, creare un confine e riportare la tua energia verso di te.</p>
          </div>
          <ul className="recognition-list">
            <li>vuoi una pratica breve ma strutturata</li>
            <li>assorbi facilmente il clima emotivo intorno a te</li>
            <li>fai fatica a lasciare andare la giornata</li>
            <li>cerchi un rituale concreto, senza teoria eccessiva</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Il percorso completo</span>
            <h2>Sette giorni, sette funzioni precise</h2>
          </div>
          <div className="rituals-grid">
            {rituals.map(([image, title, text], index) => (
              <article className="ritual-card" key={title}>
                <img src={image} alt={title} />
                <div className="ritual-card-copy">
                  <span className="ritual-number">Giorno {index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container boundaries-grid ritual-vs-zero">
          <div className="boundary-card boundary-card-positive">
            <span className="eyebrow">7 Rituali · Pratica autonoma</span>
            <h3>Per la cura energetica quotidiana</h3>
            <p>Il Giorno 4, “Armonia della casa”, ti guida in una pratica che puoi svolgere personalmente per dedicare attenzione e intenzione agli ambienti in cui vivi.</p>
          </div>
          <div className="boundary-card">
            <span className="eyebrow">Punto Zero · Intervento personalizzato</span>
            <h3>Quando il peso continua a tornare</h3>
            <p>Carmelo svolge a distanza un lavoro più profondo e mirato sulla persona e sulla casa, dopo una valutazione preliminare della situazione.</p>
            <a className="text-link" href="/punto-zero">Scopri Punto Zero →</a>
          </div>
        </div>
      </section>

      <section className="section soft-section rituals-how-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Ogni giorno</span>
            <h2>Sai sempre cosa fare</h2>
          </div>
          <div className="steps-grid">
            <div><span>1</span><h3>Prepara</h3><p>Quando utilizzare la pratica e come creare lo spazio necessario.</p></div>
            <div><span>2</span><h3>Esegui</h3><p>Passaggi chiari, senza dover inventare formule o sequenze.</p></div>
            <div><span>3</span><h3>Chiudi</h3><p>Decreto completo e formula finale per concludere il rituale.</p></div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Inizia quando vuoi</span>
          <h2>Sette pratiche da usare anche dopo i sette giorni</h2>
          <p>Ricevi il PDF completo e scegli ogni volta la pratica più adatta per sostenere la tua guarigione spirituale.</p>
          <ExternalButton href={ritualiLink} eventName="click_rituali_bottom_1900">Acquista a 19 €</ExternalButton>
        </div>
      </section>
    </SiteLayout>
  );
}

function KarmicNodesPage() {
  React.useEffect(() => {
    document.title = 'Nodi karmici e schemi che si ripetono | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="page-hero karmic-hero">
        <div className="container center content-narrow">
          <span className="eyebrow">Nodi karmici · Schemi ricorrenti · Lavoro energetico</span>
          <h1>Quando cambia la storia, ma ritorna lo stesso dolore</h1>
          <p className="hero-lead">A volte non stai semplicemente ripetendo un errore. In una lettura spirituale, potresti stare portando avanti un nodo che non ha ancora trovato una conclusione.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/trova-il-tuo-percorso">Fai il test orientativo</a>
            <a className="btn btn-secondary" href="/punto-zero">Scopri Punto Zero</a>
          </div>
        </div>
      </section>

      <section className="section karmic-definition-section">
        <div className="container definition-grid">
          <div>
            <span className="eyebrow">Che cos’è un nodo karmico</span>
            <h2>Non una punizione, ma un punto ancora irrisolto</h2>
          </div>
          <div>
            <p className="large-copy">Un nodo karmico è una dinamica profonda che, secondo una prospettiva spirituale, può continuare a ripresentarsi attraverso persone, relazioni e situazioni differenti.</p>
            <p>Non significa avere una colpa da espiare. Indica un’esperienza, un legame o una memoria che continua a chiedere consapevolezza, rilascio e trasformazione.</p>
          </div>
        </div>
      </section>

      <section className="section karmic-origins-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Le possibili radici</span>
            <h2>Da dove può nascere uno schema che si ripete</h2>
            <p>Non ogni difficoltà ha la stessa origine. Il mio lavoro parte dall’ascolto e dalla valutazione del tema, senza attribuire automaticamente tutto al karma.</p>
          </div>
          <div className="karmic-origin-grid">
            <article><span>01</span><h3>Memorie emotive</h3><p>Ferite di abbandono, tradimento, rifiuto o umiliazione che continuano a riattivarsi anche in situazioni nuove.</p></article>
            <article><span>02</span><h3>Nodi familiari</h3><p>Schemi, paure e fedeltà invisibili che sembrano attraversare più generazioni e rendono difficile scegliere diversamente.</p></article>
            <article><span>03</span><h3>Legami energetici</h3><p>Relazioni concluse nella realtà che continuano a occupare pensieri, emozioni e vitalità.</p></article>
            <article><span>04</span><h3>Memorie karmiche</h3><p>In una lettura spirituale, esperienze profonde che possono riemergere come paure, promesse, sensi di colpa o attrazioni difficili da spiegare.</p></article>
            <article><span>05</span><h3>Ruoli di sacrificio</h3><p>Il bisogno di salvare gli altri, caricarsi dei loro problemi o sentirsi in colpa quando si sceglie per sé.</p></article>
            <article><span>06</span><h3>Cicli mentali</h3><p>Pensieri ricorrenti e indecisione che riportano continuamente la persona allo stesso punto, anche quando conosce già il problema.</p></article>
          </div>
        </div>
      </section>

      <section className="section recognition-section">
        <div className="container recognition-grid">
          <div>
            <span className="eyebrow">Come può manifestarsi</span>
            <h2>Il volto cambia. La sensazione resta la stessa.</h2>
          </div>
          <ul className="recognition-list recognition-list-large">
            <li>incontri persone diverse, ma rivivi dinamiche relazionali molto simili</li>
            <li>una storia è finita, ma continui a sentirti legato o svuotato</li>
            <li>sai razionalmente cosa dovresti fare, ma non riesci a muoverti</li>
            <li>provi una paura, un senso di colpa o un peso sproporzionato rispetto alla situazione presente</li>
            <li>riconosci nella tua vita uno schema già vissuto nella storia familiare</li>
          </ul>
        </div>
      </section>

      <section className="section method-public-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Il mio modo di lavorare</span>
            <h2>Riconoscere. Lavorare. Radicare.</h2>
            <p>Il protocollo tecnico resta riservato. Al cliente spiego con chiarezza la direzione del percorso e ciò che gli viene richiesto.</p>
          </div>
          <div className="signature-grid">
            <article><span>01</span><h3>Riconoscere</h3><p>Leggo il tema e cerco il filo che collega ciò che la persona sta vivendo, senza trasformare ogni difficoltà in una spiegazione karmica.</p></article>
            <article><span>02</span><h3>Lavorare</h3><p>Se il caso è adatto, imposto un intervento energetico personale sul nodo individuato, rispettando consenso e libero arbitrio.</p></article>
            <article><span>03</span><h3>Radicare</h3><p>Il percorso viene ricondotto alla realtà attraverso una direzione o un’azione concreta, affinché la persona non resti soltanto nell’interpretazione.</p></article>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Da dove iniziare</span>
          <h2>Non devi decidere da solo se il tuo tema è karmico</h2>
          <p className="large-copy">Il test offre un primo orientamento. Se emerge la necessità di un lavoro personale, potrai approfondire Punto Zero e verificare con Carmelo se è adatto alla situazione.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/trova-il-tuo-percorso">Inizia il test</a>
            <a className="btn btn-secondary" href="/chi-sono">Conosci Carmelo</a>
          </div>
        </div>
      </section>

      <section className="section boundaries-section">
        <div className="container boundaries-grid">
          <div className="boundary-card boundary-card-positive"><span className="eyebrow">Una chiave spirituale</span><h3>Un modo per leggere l’esperienza</h3><p>Il lavoro karmico ed energetico propone una prospettiva di ascolto, consapevolezza e trasformazione personale.</p></div>
          <div className="boundary-card"><span className="eyebrow">Confini chiari</span><h3>Non è una spiegazione clinica</h3><p>Non determina l’origine medica o psicologica di sintomi e non sostituisce diagnosi, terapia, cure o assistenza professionale.</p></div>
        </div>
      </section>
    </SiteLayout>
  );
}

function AboutPage() {
  React.useEffect(() => {
    document.title = 'Carmelo Nicita | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="page-hero"><div className="container center"><span className="eyebrow">Carmelo Nicita · Alchimie di Luce</span><h1>Dove gli altri vedono episodi separati, io cerco il filo che li tiene uniti.</h1><p className="hero-lead">Il mio lavoro nasce dall’incontro tra percezione intuitiva, discernimento, lettura dei cicli e intervento energetico.</p></div></section>
      <section className="section">
        <div className="container split-grid">
          <div className="portrait-card"><img src={fotoCarmelo} alt="Carmelo Nicita" /></div>
          <div className="copy-block">
            <span className="eyebrow">Il mio approccio</span>
            <h2>Non alimento la confusione. Cerco il punto essenziale.</h2>
            <p className="large-copy">Mi occupo soprattutto delle situazioni in cui una persona ha già riflettuto, provato a cambiare o chiuso apparentemente un capitolo, ma continua a sentirne il peso.</p>
            <p>Il mio compito è riconoscere lo schema, portare chiarezza e, quando il percorso è adatto, lavorare sul nodo energetico affinché ciò che emerge possa tradursi in una direzione concreta.</p>
            <p>Seguo personalmente ogni consulto e ogni intervento Punto Zero. Prima di iniziare sai cosa riceverai, quanto costa e quali sono i confini del lavoro.</p>
            <p>Per guarigione spirituale intendo ascolto, rilascio e riequilibrio energetico. Non costituisce diagnosi, terapia o garanzia di risultati specifici.</p>
            <a className="btn btn-primary" href="/punto-zero">Scopri il mio intervento principale</a>
          </div>
        </div>
      </section>
      <section className="section soft-section gifts-section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">I miei doni, nella pratica</span><h2>Non parole astratte, ma funzioni precise</h2></div>
          <div className="karmic-origin-grid">
            <article><span>01</span><h3>Lettura dei cicli</h3><p>Riconosco quando una fase è realmente conclusa e quando, invece, continua a essere alimentata da un nodo ancora attivo.</p></article>
            <article><span>02</span><h3>Discernimento</h3><p>Distinguo ciò che può appartenere alla paura, alla confusione o a uno schema ripetitivo, senza assecondare fantasie e false speranze.</p></article>
            <article><span>03</span><h3>Presenza neutra</h3><p>Entro nel tema senza caricarmi del destino della persona e senza imporre la mia volontà sul risultato.</p></article>
            <article><span>04</span><h3>Lavoro energetico</h3><p>Quando è appropriato, utilizzo Punto Zero per impostare un intervento personale sul nodo emerso.</p></article>
            <article><span>05</span><h3>Chiarezza diretta</h3><p>Restituisco ciò che emerge con parole comprensibili, evitando interpretazioni vaghe o inutilmente complicate.</p></article>
            <article><span>06</span><h3>Ritorno all’azione</h3><p>Porto la persona fuori dalla sola interpretazione, verso una scelta o un passo concreto compatibile con il suo momento.</p></article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function NotFoundPage() {
  return <SiteLayout><section className="page-hero"><div className="container center"><span className="eyebrow">Pagina non trovata</span><h1>Questa pagina non esiste</h1><p className="hero-lead">Torna alla Home per scegliere tra Punto Zero, Tarocchi e strumenti digitali.</p><a className="btn btn-primary" href="/">Torna alla Home</a></div></section></SiteLayout>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/prodotti/7-rituali-protezione-luce') return <RitualsPage />;
  if (path === '/nodi-karmici') return <KarmicNodesPage />;
  if (path === '/chi-sono') return <AboutPage />;
  return <NotFoundPage />;
}
