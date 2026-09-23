import React from 'react';
import SiteLayout from './SiteChrome.jsx';

const updatedAt = '23 settembre 2026';

export function PrivacyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="legal-page">
        <div className="container legal-shell">
          <span className="eyebrow">Trasparenza e protezione dei dati</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Ultimo aggiornamento: {updatedAt}</p>

          <div className="legal-content">
            <section>
              <h2>1. Titolare del trattamento</h2>
              <p>Il titolare del trattamento è <strong>Carmelo Nicita – Alchimie di Luce</strong>. Per richieste relative alla privacy puoi scrivere a <a href="mailto:info@alchimiediluce.it">info@alchimiediluce.it</a>.</p>
            </section>

            <section>
              <h2>2. Quali dati possono essere trattati</h2>
              <p>Durante la semplice navigazione possono essere trattati dati tecnici necessari al funzionamento e alla sicurezza del sito, come indirizzo IP, informazioni sul browser, data e ora della richiesta e dati di log del servizio di hosting.</p>
              <p>Se scegli di contattare Alchimie di Luce tramite email o WhatsApp, vengono trattati i dati che decidi di comunicare, ad esempio nome, recapito, data di nascita, tema della richiesta e contenuto del messaggio. Evita di inviare dati sanitari o altre categorie particolari di dati personali se non strettamente necessari.</p>
            </section>

            <section>
              <h2>3. Per quali finalità</h2>
              <ul>
                <li>consentire il corretto funzionamento, la sicurezza e la manutenzione del sito;</li>
                <li>rispondere a richieste informative e gestire contatti avviati volontariamente dall’utente;</li>
                <li>gestire richieste relative ai servizi e alle attività di Alchimie di Luce;</li>
                <li>misurare, solo previo consenso, l’utilizzo del sito mediante Google Analytics 4.</li>
              </ul>
            </section>

            <section>
              <h2>4. Base del trattamento</h2>
              <p>I dati tecnici indispensabili sono trattati per rendere disponibile e sicuro il sito. I dati inviati volontariamente sono trattati per rispondere alla richiesta dell’utente e, quando pertinente, per svolgere attività precontrattuali o contrattuali richieste dall’utente. I dati di Google Analytics vengono trattati soltanto dopo una scelta positiva nel banner dedicato.</p>
            </section>

            <section>
              <h2>5. Servizi e destinatari esterni</h2>
              <p>Il sito è pubblicato tramite <strong>Netlify</strong>. Alcune funzioni rimandano a servizi esterni: <strong>Google Analytics</strong> per statistiche facoltative, <strong>PayPal</strong> e <strong>Payhip</strong> per pagamenti o prodotti digitali, <strong>WhatsApp</strong> ed email per i contatti e <strong>Telegram</strong> per il canale informativo.</p>
              <p>Quando segui un collegamento verso un servizio esterno, il trattamento effettuato su quel servizio è disciplinato anche dalla relativa informativa privacy. Alcuni fornitori possono trattare dati fuori dallo Spazio Economico Europeo adottando le garanzie previste dalla normativa applicabile.</p>
            </section>

            <section>
              <h2>6. Conservazione</h2>
              <p>I dati vengono conservati per il tempo necessario a gestire la finalità per cui sono stati raccolti e, quando applicabile, per adempiere a obblighi amministrativi o di legge. Le comunicazioni non più necessarie vengono eliminate o rese non identificabili compatibilmente con gli obblighi applicabili.</p>
            </section>

            <section>
              <h2>7. Google Analytics e consenso</h2>
              <p>Google Analytics 4 non viene caricato finché non scegli “Accetta analytics” nel banner. Se rifiuti, il sito resta utilizzabile e le normali funzioni non vengono limitate. Puoi cambiare scelta in qualsiasi momento tramite “Preferenze cookie” nel footer.</p>
            </section>

            <section>
              <h2>8. I tuoi diritti</h2>
              <p>Nei casi previsti dalla normativa puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati, oltre a revocare il consenso senza pregiudicare i trattamenti già effettuati prima della revoca.</p>
              <p>Puoi inoltre proporre reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a>.</p>
            </section>

            <section>
              <h2>9. Aggiornamenti</h2>
              <p>Questa informativa può essere aggiornata quando cambiano il sito, i servizi utilizzati o gli obblighi applicabili. La data riportata in alto indica l’ultima revisione.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function CookiePolicyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <section className="legal-page">
        <div className="container legal-shell">
          <span className="eyebrow">Scelte chiare, nessun tracciamento obbligatorio</span>
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Ultimo aggiornamento: {updatedAt}</p>

          <div className="legal-content">
            <section>
              <h2>1. Cosa utilizza questo sito</h2>
              <p>Alchimie di Luce utilizza strumenti tecnici necessari al funzionamento del sito e, soltanto dopo il tuo consenso, Google Analytics 4 per ottenere statistiche aggregate sull’utilizzo delle pagine.</p>
            </section>

            <section>
              <h2>2. Preferenza sul consenso</h2>
              <p>La scelta effettuata nel banner viene memorizzata nel browser mediante una tecnologia locale necessaria a ricordare la tua preferenza. Questa informazione non viene utilizzata per profilarti e viene rinnovata dopo circa sei mesi o prima se cambiano in modo significativo le condizioni del trattamento.</p>
            </section>

            <section>
              <h2>3. Cookie Analytics</h2>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr><th>Servizio</th><th>Finalità</th><th>Quando si attiva</th><th>Esempi</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google Analytics 4</td>
                      <td>Statistiche sull’uso del sito</td>
                      <td>Solo dopo consenso</td>
                      <td><code>_ga</code>, <code>_ga_*</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Il sito non carica intenzionalmente tag pubblicitari o di remarketing. Nella configurazione di Analytics vengono inoltre disattivati i segnali pubblicitari e la personalizzazione degli annunci.</p>
            </section>

            <section>
              <h2>4. Se rifiuti</h2>
              <p>Puoi rifiutare i cookie Analytics senza perdere l’accesso ai contenuti e ai servizi del sito. In questo caso Google Analytics non viene caricato.</p>
            </section>

            <section>
              <h2>5. Collegamenti esterni</h2>
              <p>I pulsanti verso PayPal, Payhip, WhatsApp e Telegram aprono servizi esterni. Eventuali cookie di tali servizi vengono gestiti secondo le loro regole quando visiti le rispettive piattaforme; non sono necessari per consultare questo sito.</p>
            </section>

            <section>
              <h2>6. Come cambiare scelta</h2>
              <p>Puoi riaprire in qualsiasi momento il pannello tramite il link <strong>“Preferenze cookie”</strong> presente nel footer. Puoi inoltre eliminare cookie e dati del sito dalle impostazioni del tuo browser.</p>
            </section>

            <section>
              <h2>7. Ulteriori informazioni</h2>
              <p>Per informazioni sul trattamento dei dati personali consulta la <a href="/privacy">Privacy Policy</a>. Per richieste puoi scrivere a <a href="mailto:info@alchimiediluce.it">info@alchimiediluce.it</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
