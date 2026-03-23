import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termini e Condizioni – Crazy Time Italia",
  description: "Termini e condizioni d'uso del sito Crazy Time Italia. Leggi le regole di utilizzo del sito prima di navigare.",
  robots: "index, follow",
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
};

export default function TermsAndConditionsPage() {
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
        Termini e Condizioni
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "48px" }}>
        Ultimo aggiornamento: marzo 2026
      </p>

      <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1rem" }}>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            1. Accettazione dei termini
          </h2>
          <p>
            Accedendo e utilizzando il sito <strong>crazytime-italian.com</strong> (di seguito &quot;il Sito&quot;), l&apos;utente accetta integralmente i presenti Termini e Condizioni d&apos;uso. Se non accetti questi termini, ti preghiamo di non utilizzare il Sito.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            2. Natura del Sito
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Il Sito ha finalità <strong>esclusivamente informative e divulgative</strong> riguardo al gioco Crazy Time prodotto da Evolution Gaming. In particolare:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Forniamo guide, statistiche, analisi e informazioni sul gioco.</li>
            <li style={{ marginBottom: "8px" }}>Non offriamo servizi di gioco d&apos;azzardo online.</li>
            <li style={{ marginBottom: "8px" }}>Non raccogliamo depositi né gestiamo transazioni finanziarie legate al gioco.</li>
            <li style={{ marginBottom: "8px" }}>Non siamo un operatore di gioco e non possediamo licenza ADM per il gioco online.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            3. Requisiti di accesso
          </h2>
          <p>
            L&apos;accesso al Sito è consentito esclusivamente a persone <strong>maggiorenni (18 anni o più)</strong> e che risiedono in un territorio in cui la consultazione di contenuti informativi sul gioco d&apos;azzardo è legalmente consentita. L&apos;utente è responsabile di verificare la legalità dell&apos;accesso al Sito dalla propria giurisdizione.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            4. Proprietà intellettuale
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Tutti i contenuti del Sito (testi, immagini, grafica, codice) sono protetti dalle leggi sul diritto d&apos;autore. È vietato:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Riprodurre, distribuire o pubblicare i contenuti del Sito senza autorizzazione scritta.</li>
            <li style={{ marginBottom: "8px" }}>Utilizzare i contenuti del Sito a fini commerciali senza previo accordo.</li>
            <li style={{ marginBottom: "8px" }}>Rimuovere o alterare le indicazioni di copyright presenti sui contenuti.</li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            Il nome e il logo di Crazy Time sono marchi registrati di Evolution Gaming AB. Il Sito non è affiliato, sponsorizzato né approvato da Evolution Gaming.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            5. Disclaimer e limitazione di responsabilità
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Le informazioni presenti sul Sito sono fornite &quot;così come sono&quot; a scopo puramente informativo. Il Sito non fornisce consulenza finanziaria, fiscale o legale. In particolare:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Accuratezza:</strong> ci impegniamo a mantenere le informazioni aggiornate e accurate, ma non garantiamo l&apos;assenza di errori o omissioni.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Statistiche:</strong> i dati statistici sul gioco (RTP, probabilità, frequenze) si basano su informazioni pubbliche e potrebbero non riflettere esattamente le condizioni di gioco attuali.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Perdite finanziarie:</strong> il Sito declina ogni responsabilità per eventuali perdite finanziarie subite dall&apos;utente in seguito a decisioni di gioco prese sulla base delle informazioni fornite.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Link esterni:</strong> il Sito contiene link a siti di terze parti (casino online). Non siamo responsabili del contenuto, delle pratiche di privacy o dell&apos;operatività di tali siti.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            6. Link affiliati
          </h2>
          <p>
            Alcuni link presenti sul Sito verso casino online sono link di affiliazione. Ciò significa che potremmo ricevere una commissione se un utente si registra o effettua un deposito su un sito partner attraverso un nostro link. Questo non comporta costi aggiuntivi per l&apos;utente e non influenza l&apos;obiettività delle nostre informazioni. I casino raccomandati sono selezionati esclusivamente tra quelli con licenza ADM.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            7. Condotta dell&apos;utente
          </h2>
          <p style={{ marginBottom: "12px" }}>Utilizzando il Sito, l&apos;utente si impegna a:</p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Non utilizzare il Sito per scopi illegali.</li>
            <li style={{ marginBottom: "8px" }}>Non tentare di accedere in modo non autorizzato ai sistemi del Sito.</li>
            <li style={{ marginBottom: "8px" }}>Non pubblicare o trasmettere contenuti diffamatori, offensivi o che violino diritti di terzi.</li>
            <li style={{ marginBottom: "8px" }}>Non utilizzare strumenti automatizzati (bot, scraper) per raccogliere dati dal Sito senza autorizzazione.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            8. Modifiche ai Termini
          </h2>
          <p>
            Il Sito si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche avranno effetto immediato dalla loro pubblicazione sul Sito. L&apos;utilizzo continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            9. Legge applicabile e foro competente
          </h2>
          <p>
            I presenti Termini e Condizioni sono disciplinati dalla legge italiana. Per qualsiasi controversia relativa all&apos;utilizzo del Sito, le parti si sottopongono alla giurisdizione esclusiva dei tribunali italiani competenti.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            10. Documenti correlati
          </h2>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <a href="/privacy-policy" style={{ color: "#F59E0B", textDecoration: "none" }}>Privacy Policy</a> — come trattiamo i tuoi dati personali.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/cookie-policy" style={{ color: "#F59E0B", textDecoration: "none" }}>Cookie Policy</a> — informazioni sui cookie utilizzati.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/responsible-gaming" style={{ color: "#F59E0B", textDecoration: "none" }}>Gioco Responsabile</a> — risorse per un gioco consapevole.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
