import React from 'react';
import SiteLayout from './SiteChrome.jsx';

const products = {
  puntoZero: {
    name: 'Punto Zero',
    label: 'Intervento personale a distanza',
    price: '149 €',
    description: 'Un intervento di guarigione spirituale a distanza per recidere ciò che ti trattiene, recuperare energia e ripartire.',
    reason: 'Senti il bisogno di lasciare andare un legame, uno schema o una fase che continua a toglierti energia.',
    href: '/punto-zero',
    cta: 'Scopri come funziona Punto Zero'
  },
  tarotPhone: {
    name: 'Tarocchi in diretta',
    label: 'Consulto telefonico di 30 minuti',
    price: '59 €',
    description: 'Un dialogo personale per comprendere ciò che stai vivendo, sciogliere la confusione e ritrovare chiarezza interiore.',
    reason: 'La tua guarigione spirituale, adesso, passa dal bisogno di essere ascoltato e fare chiarezza parlando direttamente con Carmelo.',
    href: '/letture',
    cta: 'Scopri il consulto in diretta'
  },
  tarotPdf: {
    name: 'Tarocchi in PDF',
    label: 'Lettura personale scritta',
    price: '49 €',
    description: 'Una lettura personale da conservare, per capire cosa sta accadendo dentro di te e vedere la direzione successiva.',
    reason: 'La tua guarigione interiore parte da una domanda precisa e dal bisogno di ricevere una risposta scritta da rileggere con calma.',
    href: '/letture',
    cta: 'Scopri la lettura scritta'
  },
  map: {
    name: 'Mappa di Luce Interattiva',
    label: 'Strumento digitale riutilizzabile',
    price: '59 €',
    description: 'Uno strumento di ascolto e guarigione spirituale per ricevere orientamento e trasformarlo in una scelta concreta.',
    reason: 'Vuoi sostenere la tua energia in autonomia con uno strumento completo a cui tornare ogni volta che ne senti il bisogno.',
    href: '/prodotti/mappa-di-luce',
    cta: 'Scopri la Mappa di Luce'
  },
  rituals: {
    name: '7 Rituali di Protezione e Luce',
    label: 'Percorso digitale di 7 giorni',
    price: '14,90 €',
    description: 'Sette pratiche di guarigione energetica per proteggerti, lasciare andare il peso della giornata e tornare al tuo centro.',
    reason: 'Hai bisogno di protezione, centratura e piccoli gesti concreti da compiere un giorno alla volta.',
    href: '/prodotti/7-rituali-protezione-luce',
    cta: 'Scopri i 7 Rituali'
  },
  serenity: {
    name: '5 Minuti per Ritrovare Serenità',
    label: 'Guida digitale gratuita',
    price: 'Gratis',
    description: 'Il primo passo gratuito verso una guarigione spirituale fatta di presenza, gratitudine e serenità quotidiana.',
    reason: 'Vuoi iniziare con dolcezza, dedicarti cinque minuti al giorno e ritrovare un po’ di serenità senza acquistare nulla.',
    href: 'https://payhip.com/buy?link=Ez8xs',
    cta: 'Scarica la guida gratuita',
    external: true
  }
};

const questions = [
  {
    title: 'Qual è il bisogno più presente in questo momento?',
    options: [
      { label: 'Lasciare andare una persona, una situazione o una fase', scores: { puntoZero: 6 } },
      { label: 'Capire meglio una domanda o una scelta precisa', scores: { tarotPhone: 4, tarotPdf: 4 } },
      { label: 'Proteggermi, centrarmi e creare confini più chiari', scores: { rituals: 6 } },
      { label: 'Avere uno strumento che mi orienti nel tempo', scores: { map: 6 } },
      { label: 'Iniziare con calma, senza spendere', scores: { serenity: 7 } }
    ]
  },
  {
    title: 'Come preferisci ricevere il supporto?',
    options: [
      { label: 'Carmelo segue personalmente il mio caso a distanza', scores: { puntoZero: 5 } },
      { label: 'Parlare direttamente con Carmelo', scores: { tarotPhone: 6 } },
      { label: 'Ricevere una risposta personale per iscritto', scores: { tarotPdf: 6 } },
      { label: 'Procedere in autonomia con uno strumento guidato', scores: { map: 4, rituals: 4, serenity: 2 } }
    ]
  },
  {
    title: 'Che tipo di passo desideri compiere?',
    options: [
      { label: 'Un intervento personale e profondo su un tema preciso', scores: { puntoZero: 5 } },
      { label: 'Un chiarimento mirato per decidere con più lucidità', scores: { tarotPhone: 3, tarotPdf: 3 } },
      { label: 'Una pratica strutturata da seguire per sette giorni', scores: { rituals: 5 } },
      { label: 'Uno strumento completo da riutilizzare nel tempo', scores: { map: 5 } },
      { label: 'Un primo esercizio semplice e accessibile', scores: { serenity: 5 } }
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
            <span className="eyebrow">Orientamento gratuito · meno di un minuto</span>
            <h1>Di cosa ha bisogno la tua energia?</h1>
            <p>Rispondi a tre domande e scopri quale percorso può accompagnare meglio la tua guarigione spirituale in questo momento.</p>
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
              <span className="eyebrow">Il percorso di guarigione spirituale più vicino al tuo bisogno</span>
              <div className="finder-result-grid">
                <div>
                  <span className="finder-result-label">{result.label}</span>
                  <h2>{result.name}</h2>
                  <p className="large-copy">{result.reason}</p>
                  <p>{result.description}</p>
                </div>
                <aside>
                  <div className="price-stack"><strong>{result.price}</strong><span>prezzo chiaro prima di iniziare</span></div>
                  <a className="btn btn-primary" href={result.href} {...(result.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{result.cta}</a>
                  <button className="finder-restart" type="button" onClick={restart}>Rifai il test</button>
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
