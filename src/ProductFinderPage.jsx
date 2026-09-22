import React from 'react';
import SiteLayout, { track, whatsappLink } from './SiteChrome.jsx';

const products = {
  puntoZero: {
    name: 'Punto Zero',
    label: 'Percorso integrato persona e ambiente',
    price: '149 €',
    description: 'Un percorso che unisce la pulizia energetica personale a distanza all’armonizzazione radionica della casa, con valutazione preliminare e indicazioni chiare.',
    reason: 'Le tue risposte indicano che un legame, uno schema o una pesantezza continua a trattenerti e può riflettersi anche nello spazio che abiti.',
    href: whatsappLink('Ciao Carmelo, ho completato il test sul sito e mi è stato suggerito Punto Zero. Vorrei capire se è adatto alla mia situazione e alla casa.\n\nTema personale:\nSituazione dell’ambiente:'),
    cta: 'Verifica con Carmelo se fa per te',
    external: true
  },
  tarotPhone: {
    name: 'Tarocchi in diretta',
    label: 'Consulto telefonico di 30 minuti',
    price: '59 €',
    description: 'Un dialogo personale per comprendere ciò che stai vivendo, sciogliere la confusione e ritrovare chiarezza interiore.',
    reason: 'Le tue risposte indicano che hai bisogno di mettere ordine in una situazione presente, essere ascoltato e ricevere un confronto diretto con Carmelo.',
    href: '/letture',
    cta: 'Scopri il consulto in diretta'
  },
  tarotPdf: {
    name: 'Tarocchi in PDF',
    label: 'Lettura personale scritta',
    price: '49 €',
    description: 'Una lettura personale da conservare, per capire cosa sta accadendo dentro di te e vedere la direzione successiva.',
    reason: 'Le tue risposte indicano che hai una domanda precisa e preferisci ricevere una lettura personale scritta da conservare e rileggere con calma.',
    href: '/letture',
    cta: 'Scopri la lettura scritta'
  },
  map: {
    name: 'Mappa di Luce Interattiva',
    label: 'Strumento digitale riutilizzabile',
    price: '59 €',
    description: 'Uno strumento di ascolto personale per ricevere orientamento e trasformarlo in una scelta concreta.',
    reason: 'Le tue risposte indicano che desideri ascoltarti e orientarti in autonomia con uno strumento completo a cui tornare nel tempo.',
    href: '/prodotti/mappa-di-luce',
    cta: 'Scopri la Mappa di Luce'
  },
  rituals: {
    name: '7 Rituali di Protezione e Luce',
    label: 'Percorso digitale di 7 giorni',
    price: '19 €',
    description: 'Sette pratiche di guarigione energetica per proteggerti, lasciare andare il peso della giornata e tornare al tuo centro.',
    reason: 'Le tue risposte indicano che hai soprattutto bisogno di protezione, centratura e piccoli gesti concreti da compiere un giorno alla volta.',
    href: '/prodotti/7-rituali-protezione-luce',
    cta: 'Scopri i 7 Rituali'
  },
  serenity: {
    name: '5 Minuti per Ritrovare Serenità',
    label: 'Guida digitale gratuita',
    price: 'Gratis',
    description: 'Il primo passo gratuito per creare più presenza, gratitudine e serenità nella quotidianità.',
    reason: 'Le tue risposte indicano che il primo bisogno è rallentare, recuperare presenza e iniziare con dolcezza, senza affrontare subito un percorso più profondo.',
    href: 'https://payhip.com/buy?link=Ez8xs',
    cta: 'Scarica la guida gratuita',
    external: true
  }
};

const questions = [
  {
    title: 'Quale situazione riconosci maggiormente?',
    options: [
      { label: 'Una persona o una situazione è finita, ma continuo a sentirne il peso', scores: { puntoZero: 7 } },
      { label: 'In casa avverto tensione, pesantezza o un clima che non mi fa riposare', scores: { puntoZero: 7 } },
      { label: 'Cambiano le persone o i contesti, ma rivivo sempre lo stesso schema', scores: { puntoZero: 6, tarotPhone: 2, tarotPdf: 2 } },
      { label: 'Ho una domanda o una scelta precisa e mi serve chiarezza', scores: { tarotPhone: 5, tarotPdf: 5 } },
      { label: 'Assorbo troppo ciò che mi circonda e ho bisogno di protezione', scores: { rituals: 7 } },
      { label: 'Voglio uno strumento che mi aiuti ad ascoltarmi nel tempo', scores: { map: 6 } },
      { label: 'Sono sovraccarico e devo prima ritrovare calma e presenza', scores: { serenity: 7 } }
    ]
  },
  {
    title: 'Dove senti maggiormente il blocco?',
    options: [
      { label: 'In un legame che non riesco a chiudere davvero', scores: { puntoZero: 6 } },
      { label: 'In uno schema personale o familiare che continua a ripetersi', scores: { puntoZero: 5 } },
      { label: 'Nell’ambiente domestico, che sembra trattenere nervosismo e stanchezza', scores: { puntoZero: 6 } },
      { label: 'In una decisione attuale che non riesco a vedere con chiarezza', scores: { tarotPhone: 4, tarotPdf: 4 } },
      { label: 'Nei confini: mi sento facilmente appesantito dagli altri', scores: { rituals: 6 } },
      { label: 'Nel rapporto con la mia intuizione e le mie scelte', scores: { map: 5 } },
      { label: 'Nella mente: ho bisogno di rallentare e respirare', scores: { serenity: 6 } }
    ]
  },
  {
    title: 'Come preferisci ricevere il supporto?',
    options: [
      { label: 'Carmelo segue il mio caso e armonizza anche l’ambiente', scores: { puntoZero: 5 } },
      { label: 'Parlare direttamente con Carmelo', scores: { tarotPhone: 6 } },
      { label: 'Ricevere una risposta personale per iscritto', scores: { tarotPdf: 6 } },
      { label: 'Seguire un rituale guidato al giorno per 7 giorni', scores: { rituals: 6 } },
      { label: 'Usare in autonomia uno strumento da consultare nel tempo', scores: { map: 5 } },
      { label: 'Iniziare gratuitamente con una guida di 5 minuti al giorno', scores: { serenity: 6 } }
    ]
  },
  {
    title: 'Che tipo di passo desideri compiere?',
    options: [
      { label: 'Una pulizia energetica profonda della persona e della casa', scores: { puntoZero: 5 } },
      { label: 'Un chiarimento mirato per decidere con più lucidità', scores: { tarotPhone: 3, tarotPdf: 3 } },
      { label: 'Una pratica strutturata da seguire per sette giorni', scores: { rituals: 5 } },
      { label: 'Uno strumento completo da riutilizzare nel tempo', scores: { map: 5 } },
      { label: 'Un primo percorso gratuito di 5 minuti al giorno', scores: { serenity: 6 } }
    ]
  }
];

const productOrder = ['puntoZero', 'tarotPhone', 'tarotPdf', 'map', 'rituals', 'serenity'];

function calculateResult(answers) {
  const totals = Object.fromEntries(productOrder.map((key) => [key, 0]));
  answers.forEach((answer, questionIndex) => {
    if (answer === undefined) return;
    const scores = questions[questionIndex].options[answer].scores;
    Object.entries(scores).forEach(([key, value]) => { totals[key] += value; });
  });
  return productOrder.reduce((best, key) => totals[key] > totals[best] ? key : best, productOrder[0]);
}

export default function ProductFinderPage() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const complete = step >= questions.length;
  const resultKey = complete ? calculateResult(answers) : null;
  const result = resultKey ? products[resultKey] : null;

  React.useEffect(() => {
    document.title = 'Trova il tuo percorso | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  const choose = (optionIndex) => {
    const next = [...answers];
    next[step] = optionIndex;
    const selectedOption = questions[step].options[optionIndex];

    if (step === 0) {
      track('quiz_start', { quiz_name: 'trova_il_tuo_percorso' });
    }

    track('quiz_answer', {
      quiz_name: 'trova_il_tuo_percorso',
      question_number: step + 1,
      answer_text: selectedOption.label
    });

    if (step === questions.length - 1) {
      track('quiz_complete', {
        quiz_name: 'trova_il_tuo_percorso',
        recommended_product: calculateResult(next)
      });
    }

    setAnswers(next);
    setStep(step + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <SiteLayout>
      <section className="finder-page">
        <div className="container finder-shell">
          <div className="finder-intro">
            <span className="eyebrow">Orientamento gratuito · circa un minuto</span>
            <h1>Che cosa continua a chiedere attenzione?</h1>
            <p>Rispondi a quattro domande. Il test non stabilisce diagnosi né certezze karmiche: ti aiuta a capire quale tipo di supporto può essere più coerente con ciò che stai vivendo.</p>
          </div>

          {!complete ? (
            <div className="finder-card" aria-live="polite">
              <div className="finder-progress-row">
                <span>Domanda {step + 1} di {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="finder-progress" aria-hidden="true"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
              <h2>{questions[step].title}</h2>
              <div className="finder-options">
                {questions[step].options.map((option, index) => (
                  <button className="finder-option" type="button" key={option.label} onClick={() => choose(index)}>
                    <span>{String.fromCharCode(65 + index)}</span>{option.label}
                  </button>
                ))}
              </div>
              {step > 0 && <button className="finder-back" type="button" onClick={() => setStep(step - 1)}>← Torna alla domanda precedente</button>}
            </div>
          ) : (
            <div className="finder-result" aria-live="polite">
              <span className="eyebrow">Il percorso più coerente con le tue risposte</span>
              <div className="finder-result-grid">
                <div>
                  <span className="finder-result-label">{result.label}</span>
                  <h2>{result.name}</h2>
                  <p className="large-copy">{result.reason}</p>
                  <p>{result.description}</p>
                </div>
                <aside>
                  <div className="price-stack"><strong>{result.price}</strong><span>prezzo chiaro prima di iniziare</span></div>
                  <a className="btn btn-primary" href={result.href} onClick={() => track('select_quiz_result', { quiz_name: 'trova_il_tuo_percorso', recommended_product: resultKey })} {...(result.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{result.cta}</a>
                  {resultKey === 'puntoZero' && <a className="finder-fallback" href="/punto-zero">Leggi prima come funziona Punto Zero</a>}
                  {resultKey !== 'serenity' && (
                    <a
                      className="finder-fallback"
                      href="https://payhip.com/buy?link=Ez8xs"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => track('select_quiz_fallback', { quiz_name: 'trova_il_tuo_percorso', recommended_product: resultKey, fallback_product: 'guida_serenita' })}
                    >
                      Non sei pronto? Inizia gratis con 5 minuti al giorno
                    </a>
                  )}
                  <button className="finder-restart" type="button" onClick={() => { track('quiz_restart', { quiz_name: 'trova_il_tuo_percorso', previous_result: resultKey }); restart(); }}>Rifai il test</button>
                </aside>
              </div>
            </div>
          )}

          <p className="finder-disclaimer">Il risultato offre un orientamento spirituale basato sulle tue risposte, non una diagnosi. Per guarigione spirituale si intende un percorso personale di ascolto, rilascio e riequilibrio energetico.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
