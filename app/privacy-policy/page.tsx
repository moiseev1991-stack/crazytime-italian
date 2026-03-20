import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy – Crazy Time Italia",
  description: "Informativa sulla privacy di Crazy Time Italia. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
  robots: "noindex, follow",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
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
        Privacy Policy
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "48px" }}>
        Ultimo aggiornamento: marzo 2026
      </p>

      <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1rem" }}>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            1. Titolare del trattamento
          </h2>
          <p>
            Il titolare del trattamento dei dati personali raccolti attraverso il sito <strong>crazytimegame.info</strong> (di seguito &quot;il Sito&quot;) è il gestore del sito stesso. Per qualsiasi richiesta relativa ai tuoi dati personali puoi contattarci all&apos;indirizzo email indicato nella sezione Contatti.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            2. Dati raccolti
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Il Sito raccoglie le seguenti categorie di dati:
          </p>
          <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso e durata della visita. Questi dati sono raccolti automaticamente dai sistemi informatici del Sito e sono necessari per il suo corretto funzionamento.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Dati analitici:</strong> informazioni aggregate sull&apos;utilizzo del Sito tramite strumenti di analisi (es. Google Analytics), in forma anonima o pseudonima.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Cookie:</strong> per maggiori informazioni consulta la nostra <a href="/cookie-policy" style={{ color: "#F59E0B", textDecoration: "none" }}>Cookie Policy</a>.
            </li>
          </ul>
          <p>
            Il Sito <strong>non raccoglie</strong> dati personali identificativi (nome, email, numero di telefono) se non in caso di contatto diretto da parte dell&apos;utente.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            3. Finalità e base giuridica del trattamento
          </h2>
          <p style={{ marginBottom: "12px" }}>I dati vengono trattati per le seguenti finalità:</p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Garantire il funzionamento tecnico del Sito (base giuridica: legittimo interesse).</li>
            <li style={{ marginBottom: "8px" }}>Analisi statistica dell&apos;utilizzo del Sito per migliorarne i contenuti (base giuridica: legittimo interesse / consenso).</li>
            <li style={{ marginBottom: "8px" }}>Rispondere a eventuali richieste degli utenti (base giuridica: esecuzione di un contratto o misure precontrattuali).</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            4. Conservazione dei dati
          </h2>
          <p>
            I dati di navigazione vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti, e comunque non oltre 26 mesi. I dati forniti volontariamente tramite contatto diretto vengono conservati fino alla risoluzione della richiesta.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            5. Condivisione dei dati
          </h2>
          <p style={{ marginBottom: "12px" }}>
            I dati personali non vengono venduti né ceduti a terzi a fini commerciali. Possono essere condivisi esclusivamente con:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Fornitori di servizi tecnici (hosting, CDN, analytics) che agiscono in qualità di responsabili del trattamento.</li>
            <li style={{ marginBottom: "8px" }}>Autorità competenti, laddove richiesto dalla legge.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            6. Diritti dell&apos;interessato
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Ai sensi del Regolamento UE 2016/679 (GDPR), hai diritto di:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Accedere ai tuoi dati personali (art. 15 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Rettificare dati inesatti o incompleti (art. 16 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Ottenere la cancellazione dei dati (&quot;diritto all&apos;oblio&quot;, art. 17 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Limitare il trattamento (art. 18 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Ricevere i tuoi dati in formato strutturato (portabilità, art. 20 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Opporti al trattamento (art. 21 GDPR).</li>
            <li style={{ marginBottom: "8px" }}>Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            7. Modifiche alla Privacy Policy
          </h2>
          <p>
            Il Sito si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in alto. Si consiglia di consultare periodicamente questa pagina.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            8. Nota sul gioco d&apos;azzardo
          </h2>
          <p>
            Il Sito ha finalità esclusivamente informative riguardo al gioco Crazy Time di Evolution Gaming. Non offriamo servizi di gioco d&apos;azzardo online, non raccogliamo denaro e non registriamo utenti per scopi di gioco. Per qualsiasi attività di gioco d&apos;azzardo online ti invitiamo a utilizzare esclusivamente piattaforme con licenza ADM (Agenzia delle Dogane e dei Monopoli).
          </p>
        </section>

      </div>
    </div>
  );
}
