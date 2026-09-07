import React from 'react';
import SiteLayout, { ExternalButton, whatsappLink } from './SiteChrome.jsx';
import tarocchi from './tarocchi.webp';

const links = {
  tarocchiPdf: 'https://paypal.me/AlchimieDiLuce/49',
  tarocchiTelefono: 'https://paypal.me/AlchimieDiLuce/59',
  calTarocchi: 'https://cal.com/alchimie-di-luce/consulto-tarocchi'
};

const afterPaymentLink = whatsappLink(
  'Ciao Carmelo, ho effettuato il pagamento per una lettura di Tarocchi.\n\nNome:\nData di nascita:\nFormula scelta:\nSituazione o domanda:'
);

const readingTestimonials = [
  'La lettura è stata chiara e mi ha aiutata a capire meglio la mia situazione.',
  'Ha visto aspetti della mia vita con grande precisione e mi ha detto la verità su molte situazioni.',
  'Hai centrato il bersaglio. Seguirò i tuoi consigli.',
  'Carmelo fa emergere punti di riflessione che da sola non riuscivo a vedere.',
  'Alcuni passaggi hanno rispecchiato situazioni realmente accadute.'
];

const ReadingCard = ({ format, title, price, lead, includes, href, cta, eventName, booking }) => (
  <article className="premium-reading-card">
    <span className="eyebrow">{format}</span>
    <h2>{title}</h2>
    <p className="large-copy">{lead}</p>
    <ul className="clean-checks">
      {includes.map((item) => <li key={item}>{item}</li>)}
    </ul>
    <div className="price-stack"><strong>{price}</strong><span>prezzo completo, nessun costo aggiuntivo</span></div>
    <ExternalButton href={href} eventName={eventName}>{cta}</ExternalButton>
    {booking && (
      <div className="booking-after-payment">
        <p><strong>Dopo il pagamento</strong> scegli giorno e orario nel calendario riservato.</p>
        <ExternalButton href={links.calTarocchi} eventName="click_cal_tarocchi" className="btn-secondary">Apri il calendario</ExternalButton>
      </div>
    )}
  </article>
);

export default function ReadingsSalesPage() {
  React.useEffect(() => {
    document.title = 'Consulto Tarocchi | Alchimie di Luce';
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="tarot-hero">
        <div className="container tarot-hero-grid">
          <div>
            <span className="eyebrow">Tarocchi e guarigione spirituale</span>
            <h1>Comprendi ciò che vivi.<br /><em>Guarisci ciò che senti.</em></h1>
            <p className="hero-lead">Porta luce sulla situazione, riconosci ciò che ti sta bloccando e ritrova la chiarezza necessaria per scegliere il passo successivo.</p>
          </div>
          <img src={tarocchi} alt="Consulto personale di Tarocchi con Carmelo" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Due formule, la stessa intenzione</span>
            <h2>Scegli come vuoi ricevere la lettura</h2>
            <p>Il prezzo cambia per modalità e tempo dedicato, non per la serietà dell’interpretazione.</p>
          </div>
          <div className="premium-reading-grid">
            <ReadingCard
              format="Lettura scritta · entro 48 ore"
              title="Tarocchi in PDF"
              price="49 €"
              lead="Per approfondire un unico tema e conservare una lettura da rileggere con calma."
              includes={[
                'analisi personalizzata della situazione',
                'dinamiche visibili e nodo centrale',
                'possibile evoluzione e indicazione conclusiva',
                'documento PDF personale da conservare'
              ]}
              href={links.tarocchiPdf}
              cta="Acquista la lettura PDF"
              eventName="click_tarocchi_pdf_49"
            />
            <ReadingCard
              format="Consulto telefonico · 30 minuti"
              title="Tarocchi in diretta"
              price="59 €"
              lead="Per dialogare sulla situazione e fare più domande nel tempo riservato esclusivamente a te."
              includes={[
                '30 minuti di consulto telefonico privato',
                'domande libere nel tempo disponibile',
                'lettura costruita sul dialogo in diretta',
                'prenotazione autonoma dal calendario'
              ]}
              href={links.tarocchiTelefono}
              cta="Acquista il consulto"
              eventName="click_tarocchi_phone_59"
              booking
            />
          </div>
        </div>
      </section>

      <section className="section reading-boundaries">
        <div className="container boundaries-grid">
          <div>
            <span className="eyebrow">Il mio modo di leggere</span>
            <h2>Orientamento, non dipendenza</h2>
          </div>
          <div>
            <p className="large-copy">La guarigione spirituale comincia quando riesci a vedere con chiarezza ciò che senti, ciò che temi e ciò che desideri davvero.</p>
            <p>Le carte portano alla luce ciò che forse stai già percependo e ti aiutano a separare i fatti dalle aspettative. La scelta rimane sempre tua.</p>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="recensioni">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Esperienze reali</span>
            <h2>Cosa rimane dopo una lettura</h2>
            <p>Estratti da feedback ricevuti tramite WhatsApp e Instagram. Le identità sono protette.</p>
          </div>
          <div className="testimonials-grid">
            {readingTestimonials.map((quote, index) => (
              <figure className="testimonial-card" key={index}>
                <blockquote>“{quote}”</blockquote>
                <figcaption>Feedback ricevuto <span>·</span> Identità protetta</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container center content-narrow">
          <span className="eyebrow">Hai già effettuato il pagamento?</span>
          <h2>Inviami ciò che serve, senza raccontare tutto due volte</h2>
          <p>Scrivi nome, data di nascita, formula scelta e una descrizione sintetica della situazione o della domanda. Non inviare dati sanitari sensibili.</p>
          <ExternalButton href={afterPaymentLink} eventName="click_tarocchi_after_payment" className="btn-whatsapp">Invia i dati su WhatsApp</ExternalButton>
        </div>
      </section>
    </SiteLayout>
  );
}
