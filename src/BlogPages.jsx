import React from 'react';
import SiteLayout, { telegramUrl } from './SiteChrome.jsx';

const serenityUrl = 'https://payhip.com/buy?link=Ez8xs';

export const articles = [
  {
    slug: 'purificare-ambiente-tensioni',
    category: 'Purificazione e ambiente',
    readingTime: '7 min',
    title: 'Come riconoscere e alleggerire un ambiente saturo di tensioni',
    excerpt: 'Una guida pratica per distinguere il peso accumulato negli spazi e riportare ordine, respiro e presenza senza ricorrere ad allarmismi.'
  },
  {
    slug: 'stasi-interiore-senso-di-blocco',
    category: 'Superamento dei blocchi',
    readingTime: '8 min',
    title: 'Stasi interiore e senso di blocco: ritrovare il proprio baricentro',
    excerpt: 'Quando continui a pensare senza riuscire a scegliere, il primo passo non è forzarti: è riconoscere dove la tua energia si disperde.'
  },
  {
    slug: 'suggestione-o-disarmonia',
    category: 'Discernimento operativo',
    readingTime: '8 min',
    title: 'Suggestione o disarmonia? Come distinguere ciò che stai vivendo',
    excerpt: 'Un metodo prudente per osservare sensazioni, contesto e segnali concreti prima di attribuire un significato spirituale a un momento difficile.'
  }
];

const articleBodies = {
  'purificare-ambiente-tensioni': (
    <>
      <p className="article-intro">Entri in una stanza e avverti subito un senso di chiusura. Ti svegli stanco anche dopo aver dormito, rimandi piccole attività, oppure noti che in casa basta poco perché la tensione salga. È facile interpretare ogni disagio come la prova di una presenza negativa. Più spesso, però, uno spazio diventa pesante perché trattiene disordine, conflitti non elaborati, abitudini interrotte e una continua mancanza di respiro.</p>

      <p>Prendere sul serio ciò che senti non significa trasformarlo subito in una spiegazione assoluta. Significa osservare con calma, distinguere i fatti dalle impressioni e restituire all’ambiente una funzione precisa: sostenerti, non assorbire tutto ciò che vivi.</p>

      <h2>Un ambiente registra il modo in cui lo abitiamo</h2>
      <p>Gli spazi influenzano il sistema nervoso attraverso luce, rumore, temperatura, odori, accumulo visivo e possibilità di movimento. Allo stesso tempo assumono per noi un valore simbolico. Un tavolo coperto di oggetti può ricordare decisioni rimandate; una camera sempre chiusa può diventare il luogo in cui continuiamo a pensare senza concludere; un oggetto legato a una relazione finita può riattivare ogni giorno la stessa emozione.</p>

      <p>Nel linguaggio energetico possiamo parlare di ristagno: non necessariamente qualcosa che viene dall’esterno, ma un insieme di tracce, ripetizioni e associazioni che mantiene il corpo in allerta. La domanda utile non è «c’è qualcosa di negativo qui?», ma «che cosa, in questo spazio, continua a riportarmi nello stesso stato?».</p>

      <h2>Tre segnali da osservare senza paura</h2>
      <h3>1. Il peso è legato a un punto preciso</h3>
      <p>Nota se la sensazione compare ovunque o soltanto in una stanza, vicino a determinati oggetti o durante una specifica attività. Una localizzazione chiara aiuta a capire se la causa può essere pratica: poca aria, luce insufficiente, rumori continui, disordine o un ricordo associato a quel luogo.</p>

      <h3>2. La tensione cresce dopo un evento</h3>
      <p>Una discussione, una separazione, un periodo di lavoro intenso o una malattia in famiglia possono cambiare il modo in cui percepiamo la casa. Prima di cercare una causa invisibile, riconosci l’evento e il suo impatto. Dare un nome a ciò che è accaduto riduce l’ambiguità e permette di intervenire con maggiore precisione.</p>

      <h3>3. Il corpo non riesce a rallentare</h3>
      <p>Se entri in casa e continui a controllare il telefono, pensare alle incombenze o rivivere conversazioni, lo spazio non riceve mai un segnale di chiusura. In questo caso la purificazione comincia da un confine: portare a termine la giornata, abbassare gli stimoli e compiere un gesto ripetibile che dica al corpo «ora puoi fermarti».</p>

      <div className="article-practice">
        <span className="eyebrow">Protocollo immediato · 15 minuti</span>
        <h2>Riporta ordine, aria e intenzione</h2>
        <ol>
          <li><strong>Apri e libera.</strong> Cambia l’aria per alcuni minuti e sgombra una sola superficie. Non tentare di riordinare tutta la casa: crea un primo punto visibile di calma.</li>
          <li><strong>Interrompi la traccia.</strong> Sposta o riponi un oggetto collegato al momento che vuoi chiudere. Il gesto non cancella il vissuto, ma interrompe la sua ripetizione automatica.</li>
          <li><strong>Stabilisci una frase-confine.</strong> Fermati in piedi, respira lentamente e pronuncia: «In questo spazio scelgo chiarezza, rispetto e quiete». Poi resta un minuto in silenzio, senza cercare sensazioni speciali.</li>
        </ol>
      </div>

      <h2>Gli errori che mantengono la sensazione di pesantezza</h2>
      <p>Il primo è ripetere rituali in modo compulsivo, controllando subito dopo se «ha funzionato». Questo mantiene l’attenzione sul pericolo e impedisce allo spazio di diventare davvero neutro. Scegli una pratica semplice, compila il gesto e poi torna alle attività normali. La calma si misura nella quotidianità, non nella ricerca continua di un segnale.</p>

      <p>Il secondo errore è accumulare oggetti spirituali senza modificare ciò che produce tensione. Incensi, simboli e cristalli possono accompagnare un’intenzione, ma non risolvono una comunicazione aggressiva, la mancanza di riposo o un ambiente ingestibile. Prima riduci una fonte concreta di sovraccarico; poi usa il simbolo per ricordare il nuovo confine.</p>

      <p>Il terzo è voler sentire immediatamente leggerezza. Dopo un periodo difficile il corpo può impiegare tempo per riconoscere che qualcosa è cambiato. Osserva segnali sobri: dormi un poco meglio, rimani più volentieri nella stanza, completi una piccola attività, la conversazione diventa meno tesa. Sono questi gli indizi di un riequilibrio reale.</p>

      <h2>Osserva lo spazio per sette giorni</h2>
      <p>Dopo il protocollo evita di cambiare altre dieci cose insieme. Per una settimana annota in poche righe come ti senti quando entri nella stanza, quanto tempo riesci a restarci e quale attività svolgi con maggiore facilità. La ripetizione permette di capire se la sensazione era episodica o collegata a un elemento preciso.</p>

      <p>Se il peso ritorna, non interpretarlo come un fallimento. Controlla che cosa è successo quel giorno: una visita, una telefonata, un conflitto, molte ore davanti allo schermo o un oggetto rimesso nello stesso posto. Il diario trasforma una percezione vaga in una sequenza leggibile e rende più chiaro il prossimo intervento.</p>

      <h2>Quando il gesto simbolico non basta</h2>
      <p>Se la tensione nasce da conflitti ancora attivi, problemi di sicurezza, condizioni abitative difficili o un malessere persistente, serve intervenire anche sul piano concreto. Parlare con le persone coinvolte, chiedere aiuto competente o modificare una routine non rende meno spirituale il percorso: lo rende più radicato e responsabile.</p>

      <p>La pratica energetica può accompagnare un cambiamento, ma non dovrebbe sostituire decisioni necessarie. Un ambiente torna davvero leggero quando ciò che fai ogni giorno è coerente con la calma che desideri sentire.</p>
    </>
  ),

  'stasi-interiore-senso-di-blocco': (
    <>
      <p className="article-intro">Sai che qualcosa deve cambiare, ma ogni possibilità ti sembra incompleta. Ripensi alle stesse conversazioni, inizi un percorso e poi lo interrompi, oppure aspetti un segnale definitivo prima di fare il primo passo. La stasi interiore non è sempre mancanza di volontà: spesso è un eccesso di allerta, responsabilità e scenari possibili che consumano energia prima ancora dell’azione.</p>

      <p>In questi momenti la pressione a «sbloccarsi» può produrre l’effetto opposto. Più ti giudichi, più il corpo associa la scelta a un pericolo. Ritrovare il baricentro significa ridurre il rumore, separare ciò che dipende da te da ciò che non controlli e recuperare una direzione abbastanza chiara per il passo di oggi.</p>

      <h2>Il blocco protegge qualcosa</h2>
      <p>Ogni immobilità ha una funzione. Può proteggerti dal rischio di sbagliare, dalla paura di deludere, dalla possibilità di perdere un legame o dalla vergogna di ricominciare. Questo non vuol dire che devi restare fermo. Vuol dire che, prima di forzare la decisione, è utile capire quale conseguenza il tuo sistema sta cercando di evitare.</p>

      <p>Nel linguaggio spirituale si parla spesso di nodo, ciclo o energia trattenuta. Sono immagini utili quando aiutano a vedere uno schema. Diventano meno utili quando fanno sembrare il problema una condanna esterna. Il nodo non dice che non puoi cambiare; indica il punto in cui una parte di te continua a ripetere una strategia che un tempo sembrava necessaria.</p>

      <h2>Tre domande per riconoscere dove perdi energia</h2>
      <h3>1. Quale decisione sto cercando di prendere tutta insieme?</h3>
      <p>Molte scelte diventano impossibili perché pretendiamo una certezza sul risultato finale. Prova a ridurre la scala. Non chiederti se una strada sarà giusta per sempre, ma quale informazione puoi ottenere nei prossimi sette giorni. Il movimento nasce spesso da un esperimento piccolo e reversibile.</p>

      <h3>2. A chi sto cercando di non dispiacere?</h3>
      <p>Se ogni opzione viene valutata attraverso le reazioni altrui, il centro della decisione resta fuori da te. Riconoscere una lealtà familiare, una paura relazionale o il bisogno di approvazione non obbliga a rompere un legame. Ti permette però di distinguere il rispetto dall’annullamento.</p>

      <h3>3. Quale fatto continuo a evitare?</h3>
      <p>A volte non manca la risposta: manca la disponibilità ad accettarne il costo. Una relazione può essere finita anche se l’affetto resta; un progetto può non essere sostenibile nella forma attuale; una promessa può non corrispondere più alla realtà. Il discernimento comincia quando smetti di negoziare con il dato che si ripete.</p>

      <div className="article-practice">
        <span className="eyebrow">Protocollo immediato · Una pagina</span>
        <h2>La mappa delle tre colonne</h2>
        <ol>
          <li><strong>Ciò che so.</strong> Scrivi soltanto fatti osservabili, senza interpretazioni: azioni, parole, date, risultati che si sono ripetuti.</li>
          <li><strong>Ciò che temo.</strong> Elenca le conseguenze che immagini. Accanto a ciascuna, indica se è certa, possibile o soltanto ipotizzata.</li>
          <li><strong>Ciò che posso fare entro 48 ore.</strong> Scegli un’unica azione concreta: chiedere un chiarimento, sospendere un’abitudine, fissare un confine o raccogliere un’informazione.</li>
        </ol>
      </div>

      <h2>Come riconoscere un passo autentico</h2>
      <p>Un’azione autentica non deve essere spettacolare. Di solito è specifica, proporzionata e verificabile. Può consistere nel dire un no senza giustificarti per mezz’ora, nel chiedere una risposta entro una data, nel dedicare un’ora a una possibilità concreta o nel interrompere per una settimana una conversazione che ti confonde. Non risolve tutto, ma produce un’informazione nuova.</p>

      <p>Diffida invece delle decisioni prese soltanto per smettere di provare disagio. Una scelta impulsiva può dare sollievo immediato e lasciarti nello stesso schema pochi giorni dopo. Prima di agire, chiediti: «Questa azione protegge un mio valore o serve solo a spegnere l’ansia del momento?». Se protegge chiarezza, dignità, sicurezza o coerenza, hai un riferimento più stabile.</p>

      <p>Infine osserva la tua energia dopo il passo. Non cercare euforia. Cerca una riduzione della contraddizione interna: meno frasi da ripetere per convincerti, meno bisogno di spiegare la tua scelta a tutti, maggiore disponibilità a sostenerne le conseguenze. Il baricentro si riconosce spesso da questa sobrietà.</p>

      <h2>Concedi alla decisione un tempo definito</h2>
      <p>Per le scelte non urgenti, stabilisci un periodo breve di osservazione: sette o quattordici giorni. Durante questo tempo non riaprire la decisione ogni ora. Esegui l’azione scelta, registra ciò che accade e valuta alla scadenza. Un confine temporale impedisce al pensiero di occupare tutta la giornata.</p>

      <p>Alla fine chiediti che cosa hai imparato, non soltanto se hai ottenuto il risultato desiderato. Hai ricevuto una risposta? Hai mantenuto il confine? La tua energia è aumentata o si è dispersa? Una decisione matura non garantisce il controllo sugli altri, ma produce maggiore conoscenza di te e della situazione.</p>

      <h2>Il baricentro non è assenza di paura</h2>
      <p>Essere centrati non significa sentirsi sempre sicuri. Significa riuscire a restare presenti mentre una scelta genera emozione. Il passo giusto può avere ancora un costo; ciò che cambia è che non ti allontana da te stesso.</p>

      <p>Se la stasi dura a lungo, interferisce con il sonno, il lavoro o le relazioni, può essere importante affiancare al percorso spirituale un supporto psicologico o professionale adeguato. Chiedere aiuto non indebolisce la tua autonomia: può restituirti le risorse necessarie per esercitarla.</p>
    </>
  ),

  'suggestione-o-disarmonia': (
    <>
      <p className="article-intro">Una serie di coincidenze, un sogno intenso, un’improvvisa stanchezza o la sensazione che un ambiente sia cambiato possono spingerti a cercare una spiegazione spirituale. L’esperienza soggettiva merita ascolto, ma non ogni sensazione è la prova di una causa energetica esterna. Il discernimento serve proprio a proteggerti da due estremi: negare ciò che senti oppure trasformare ogni disagio in una minaccia invisibile.</p>

      <p>Una guida seria non alimenta paura e non conferma automaticamente l’ipotesi più inquietante. Aiuta a osservare il contesto, verificare le cause ordinarie e capire se un simbolo o una pratica interiore possono essere utili senza sostituire la realtà.</p>

      <h2>La mente cerca collegamenti per proteggerci</h2>
      <p>Quando siamo sotto stress diventiamo più sensibili ai segnali di pericolo. Notiamo dettagli che prima ignoravamo, ricordiamo maggiormente gli eventi che confermano una preoccupazione e colleghiamo episodi separati. Questo meccanismo non significa che «stai inventando tutto»: significa che la percezione viene influenzata dallo stato in cui ti trovi.</p>

      <p>Anche il corpo comunica attraverso stanchezza, tensione, sonno irregolare, fame, irritabilità e difficoltà di concentrazione. Prima di attribuire questi segnali a un’energia esterna, è responsabile verificare riposo, alimentazione, farmaci, ambiente, carico di lavoro e salute. Se un sintomo è nuovo, intenso o persistente, il riferimento corretto resta un professionista sanitario.</p>

      <h2>Un metodo in tre verifiche</h2>
      <h3>1. Verifica il tempo</h3>
      <p>Quando è iniziata la sensazione? Che cosa stava accadendo nelle ore o nei giorni precedenti? Dormire poco, ricevere una notizia, discutere con qualcuno o esporsi a contenuti allarmistici può modificare rapidamente la percezione. Ricostruire la sequenza riduce il rischio di scegliere una spiegazione soltanto perché è emotivamente potente.</p>

      <h3>2. Verifica il contesto</h3>
      <p>La sensazione compare in un solo luogo, con una persona precisa o dopo una particolare attività? Cambia quando esci, riposi, parli con qualcuno o interrompi l’esposizione a certi contenuti? Le variazioni sono informazioni preziose. Una spiegazione affidabile dovrebbe tenere conto di ciò che aumenta o riduce il disagio.</p>

      <h3>3. Verifica l’effetto della spiegazione</h3>
      <p>Una lettura ti rende più lucido, responsabile e capace di agire oppure più impaurito e dipendente da continue conferme? Una prospettiva spirituale utile apre possibilità e restituisce scelta. Se produce isolamento, urgenza, spese impulsive o il bisogno di consultare qualcuno ogni giorno, è necessario fermarsi.</p>

      <div className="article-practice">
        <span className="eyebrow">Protocollo immediato · 24 ore</span>
        <h2>Osserva prima di interpretare</h2>
        <ol>
          <li><strong>Registra.</strong> Scrivi che cosa hai percepito, quando, dove e con quale intensità da 1 a 10. Usa parole descrittive, non conclusioni.</li>
          <li><strong>Riduci gli stimoli.</strong> Per un giorno evita video, consulti e ricerche che confermino una minaccia. Cura sonno, acqua, pasti regolari e movimento leggero.</li>
          <li><strong>Confronta.</strong> Rileggi le note il giorno successivo. Se l’intensità è cambiata, chiediti quale elemento concreto può aver contribuito. Se non cambia o peggiora, valuta il supporto più adatto.</li>
        </ol>
      </div>

      <h2>Quattro segnali di una spiegazione poco affidabile</h2>
      <p>Fai attenzione quando qualcuno presenta una conclusione certa senza averti fatto domande, attribuisce ogni difficoltà alla stessa causa o crea urgenza dicendo che devi intervenire immediatamente. Sono segnali critici anche la richiesta di pagamenti continui per evitare conseguenze e l’invito ad allontanarti dalle persone che esprimono dubbi.</p>

      <p>Una consulenza responsabile accetta l’incertezza. Può dire «non ho elementi sufficienti», proporre ipotesi alternative e incoraggiarti a verificare ciò che è verificabile. Non trasforma la tua vulnerabilità in una prova della propria autorità e non pretende di essere l’unico punto di riferimento.</p>

      <p>Valuta inoltre se la spiegazione rispetta il tuo libero arbitrio. Nessuna lettura dovrebbe ordinarti di chiudere una relazione, interrompere una terapia, spendere denaro o prendere decisioni importanti senza tempo di riflessione. Il compito di una guida è restituire prospettiva, non sostituirsi alla tua capacità di scegliere.</p>

      <h2>Crea una soglia prima di chiedere un altro parere</h2>
      <p>Quando una risposta non rassicura, la tentazione è consultare subito un’altra persona. Moltiplicare le letture, però, può aumentare la confusione e rendere ogni dettaglio interpretabile. Stabilisci una pausa di almeno quarantotto ore, annota ciò che hai ricevuto e verifica quali parti sono fatti, quali ipotesi e quali consigli pratici.</p>

      <p>Se decidi di chiedere un secondo parere, formula una domanda precisa e non raccontare soltanto l’interpretazione precedente. In questo modo riduci il rischio che la nuova risposta si limiti a confermare o contraddire la prima. Il tuo obiettivo non è ottenere certezza assoluta, ma raccogliere elementi che ti aiutino a scegliere con maggiore lucidità.</p>

      <h2>Il confine di una consulenza spirituale</h2>
      <p>Una consulenza può offrire una lettura simbolica, aiutarti a riconoscere uno schema e proporti una pratica di centratura. Non può diagnosticare malattie, certificare presenze, garantire risultati o sostituire cure e sostegno psicologico. La trasparenza su questi limiti non riduce il valore del lavoro: è ciò che lo rende dignitoso.</p>

      <p>Il discernimento non elimina il mistero dalla vita. Gli dà un posto che non cancella il pensiero critico. Puoi ascoltare la tua sensibilità e, nello stesso tempo, restare ancorato ai fatti, alle relazioni affidabili e alle scelte che proteggono la tua serenità.</p>
    </>
  )
};

function setMeta(title, description) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
}

function TelegramBox() {
  return (
    <aside className="telegram-box" aria-label="Canale Telegram di Alchimie di Luce">
      <span className="eyebrow">Spazio di chiarezza e consapevolezza</span>
      <h2>Continua in uno spazio protetto</h2>
      <p>Spunti pratici di equilibrio e riflessioni lontano dal rumore dei social, con una comunicazione calma, riservata e senza promesse miracolistiche.</p>
      <div className="telegram-actions">
        <a className="btn btn-primary" href={serenityUrl} target="_blank" rel="noreferrer">Scarica la guida gratuita</a>
      {telegramUrl ? (
        <a className="btn btn-secondary" href={telegramUrl} target="_blank" rel="noreferrer">Unisciti al canale Telegram</a>
      ) : (
        <span className="telegram-pending">Canale Telegram in preparazione</span>
      )}
      </div>
    </aside>
  );
}

export function InsightsPage() {
  React.useEffect(() => {
    setMeta('Approfondimenti | Alchimie di Luce', 'Guide pratiche su equilibrio interiore, ambienti, blocchi e discernimento spirituale, con un approccio serio e misurato.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <header className="insights-hero">
        <div className="container content-narrow">
          <span className="eyebrow">Guide di Alchimie di Luce</span>
          <h1>Capire ciò che vivi.<br /><em>Senza rumore né paura.</em></h1>
          <p className="hero-lead">Approfondimenti per osservare i momenti di stasi, le tensioni negli ambienti e i segnali interiori con sensibilità, concretezza e discernimento.</p>
        </div>
      </header>
      <section className="section">
        <div className="container insights-index-grid">
          {articles.map((article) => (
            <article className="insight-card insight-card-wide" key={article.slug}>
              <span className="insight-meta">{article.category} · {article.readingTime}</span>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <a className="btn btn-secondary" href={`/approfondimenti/${article.slug}`}>Leggi l’approfondimento</a>
            </article>
          ))}
        </div>
      </section>
      <section className="section telegram-section"><div className="container"><TelegramBox /></div></section>
    </SiteLayout>
  );
}

export function ArticlePage() {
  const slug = window.location.pathname.split('/').filter(Boolean).pop();
  const article = articles.find((item) => item.slug === slug);

  React.useEffect(() => {
    if (article) setMeta(`${article.title} | Alchimie di Luce`, article.excerpt);
    else setMeta('Approfondimento non trovato | Alchimie di Luce', 'La guida richiesta non è disponibile.');
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) {
    return (
      <SiteLayout><section className="article-hero"><div className="container content-narrow"><span className="eyebrow">Approfondimenti</span><h1>Questa guida non è disponibile</h1><a className="btn btn-secondary" href="/approfondimenti">Torna agli approfondimenti</a></div></section></SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article>
        <header className="article-hero">
          <div className="container article-heading">
            <a className="article-back" href="/approfondimenti">← Tutti gli approfondimenti</a>
            <span className="eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <span className="insight-meta">Tempo di lettura: {article.readingTime}</span>
          </div>
        </header>
        <div className="article-layout container">
          <div className="article-body">
            {articleBodies[slug]}
            <aside className="article-point-zero">
              <span className="eyebrow">Quando persona e ambiente si influenzano</span>
              <h2>Punto Zero lavora su entrambi</h2>
              <p>Il percorso integra la pulizia energetica personale su legami, schemi e pesantezze con l’armonizzazione dello spazio abitativo.</p>
              <a className="btn btn-secondary" href="/punto-zero">Scopri Punto Zero</a>
            </aside>
          </div>
          <TelegramBox />
        </div>
      </article>
    </SiteLayout>
  );
}
