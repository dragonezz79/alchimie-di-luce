import React from 'react';
import SiteLayout from './SiteChrome.jsx';

const products = {
  puntoZero: {
    name: 'Punto Zero',
    label: 'Intervento personale a distanza',
    price: '149 €',
    description: 'Per lavorare con Carmelo su un legame, uno schema ricorrente o una fase che senti ancora aperta.',
    reason: 'Hai indicato il bisogno di un lavoro personale, seguito a distanza e costruito su una situazione precisa.',
    href: '/punto-zero',
    cta: 'Scopri come funziona Punto Zero'
  },
  tarotPhone: {
    name: 'Tarocchi in diretta',
    label: 'Consulto telefonico di 30 minuti',
    price: '59 €',
    description: 'Per portare una domanda concreta, dialogare con Carmelo e approfondire più aspetti nel tempo riservato.',
    reason: 'Preferisci confrontarti a voce e poter fare domande durante il consulto.',
    href: '/letture',
    cta: 'Scopri il consulto in diretta'
  },
  tarotPdf: {
    name: 'Tarocchi in PDF',
    label: 'Lettura personale scritta',
    price: '49 €',
    description: 'Per approfondire un tema preciso e ricevere una lettura personale da conservare e rileggere.',
    reason: 'Cerchi chiarezza su una domanda concreta e preferisci ricevere tutto per iscritto.',
    href: '/letture',
    cta: 'Scopri la lettura scritta'
  },
  map: {
    name: 'Mappa di Luce Interattiva',
    label: 'Strumento digitale riutilizzabile',
    price: '59 €',
    description: 'Per formulare domande, consultare messaggi e simboli e trasformare ciò che emerge in una scelta concreta.',
    reason: 'Vuoi uno strumento completo da consultare in autonomia ogni volta che ne senti il bisogno.',
    href: '/prodotti/mappa-di-luce',
    cta: 'Scopri la Mappa di Luce'
  },
  rituals: {
    name: '7 Rituali di Protezione e Luce',
    label: 'Percorso digitale di 7 giorni',
    price: '14,90 €',
    description: 'Per creare una pratica quotidiana di protezione, centratura, rilascio e confini interiori.',
    reason: 'Cerchi passaggi guidati e concreti da sperimentare subito, un giorno alla volta.',
    href: '/prodotti/7-rituali-protezione-luce',
    cta: 'Scopri i 7 Rituali'
  },
  serenity: {
    name: '5 Minuti per Ritrovare Serenità',
    label: 'Guida digitale gratuita',
    price: 'Gratis',
    description: 'Per iniziare con una pratica semplice di presenza, gratitudine e piccoli passi quotidiani.',
    reason: 'Vuoi conoscere l’approccio con un primo passo leggero e senza acquistare nulla.',
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
      { label: 'Carmelo lavora sul mio caso a distanza, senza videochiamata', scores: { puntoZero: 5 } },
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
            <h1>Trova il percorso adatto a te</h1>
            <p>Tre domande per distinguere tra intervento Punto Zero, Tarocchi e strumenti digitali.</p>
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
                  <a className="btn btn-primary" href={result.href} {...(result.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{result.cta}</a>
                  <button className="finder-restart" type="button" onClick={restart}>Rifai il test</button>
                </aside>
              </div>
            </div>
          )}

          <p className="finder-disclaimer">Il risultato è un orientamento informativo basato sulle tue risposte, non una diagnosi. Se hai dubbi puoi descrivere brevemente la situazione a Carmelo prima di acquistare.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
