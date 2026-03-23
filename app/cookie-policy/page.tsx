import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy – Crazy Time Italia",
  description: "Cookie Policy di Crazy Time Italia. Informazioni sui cookie utilizzati dal sito e come gestirli.",
  robots: "index, follow",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "60px 16px" }}>
      <h1
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 900,
          color: "#F8FAFC",
          marginBottom: "8px",
        }}
      >
        Cookie Policy
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "48px" }}>
        Ultimo aggiornamento: marzo 2026
      </p>

      <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1rem" }}>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            1. Cosa sono i cookie
          </h2>
          <p>
            I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo (computer, smartphone, tablet) quando li visiti. Servono a memorizzare informazioni sulla tua navigazione e a migliorare l&apos;esperienza d&apos;uso del sito.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            2. Tipologie di cookie utilizzati
          </h2>

          <h3 style={{ color: "#F59E0B", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
            2.1 Cookie tecnici (necessari)
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Sono indispensabili per il corretto funzionamento del Sito. Senza di essi alcune funzionalità potrebbero non essere disponibili. Non richiedono il consenso dell&apos;utente ai sensi della normativa vigente.
          </p>

          <h3 style={{ color: "#F59E0B", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
            2.2 Cookie analitici
          </h3>
          <p style={{ marginBottom: "20px" }}>
            Raccolgono informazioni anonime sull&apos;utilizzo del Sito (pagine visitate, durata della sessione, provenienza del traffico). Utilizziamo <strong>Google Analytics</strong> con IP anonimizzato per analizzare il traffico e migliorare i contenuti. Questi cookie sono attivati solo previo tuo consenso.
          </p>

          <h3 style={{ color: "#F59E0B", fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>
            2.3 Cookie di terze parti
          </h3>
          <p>
            Il Sito potrebbe includere contenuti incorporati o link a siti di terze parti (es. video, widget) che impostano i propri cookie. Non abbiamo controllo su tali cookie; ti invitiamo a consultare le informative privacy dei rispettivi siti.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            3. Elenco cookie utilizzati
          </h2>
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Durata</th>
                  <th>Finalità</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Analitico</td>
                  <td>2 anni</td>
                  <td>Google Analytics – identifica utenti univoci</td>
                </tr>
                <tr>
                  <td>_ga_*</td>
                  <td>Analitico</td>
                  <td>2 anni</td>
                  <td>Google Analytics – mantiene lo stato della sessione</td>
                </tr>
                <tr>
                  <td>cookie_consent</td>
                  <td>Tecnico</td>
                  <td>1 anno</td>
                  <td>Memorizza le preferenze del consenso ai cookie</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            4. Come gestire i cookie
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Puoi gestire le preferenze sui cookie in qualsiasi momento tramite:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Il banner del consenso</strong> presente al tuo primo accesso al Sito.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Le impostazioni del browser:</strong> tutti i principali browser consentono di bloccare o eliminare i cookie. Consulta la guida del tuo browser:
              <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none" }}>Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none" }}>Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none" }}>Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none" }}>Microsoft Edge</a></li>
              </ul>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Google Analytics Opt-out:</strong> puoi disattivare Google Analytics installando il <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#F59E0B", textDecoration: "none" }}>componente aggiuntivo per la disattivazione</a>.
            </li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            Disabilitare i cookie potrebbe influire sul corretto funzionamento di alcune parti del Sito.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            5. Riferimenti normativi
          </h2>
          <p>
            La presente Cookie Policy è redatta in conformità al Regolamento UE 2016/679 (GDPR), al D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018, e alle Linee Guida del Garante per la protezione dei dati personali in materia di cookie del 10 giugno 2021.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            6. Aggiornamenti
          </h2>
          <p>
            Questa Cookie Policy può essere aggiornata periodicamente per riflettere cambiamenti nei cookie utilizzati o nella normativa applicabile. Ti invitiamo a consultarla regolarmente. Per ulteriori informazioni consulta la nostra <a href="/privacy-policy" style={{ color: "#F59E0B", textDecoration: "none" }}>Privacy Policy</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
