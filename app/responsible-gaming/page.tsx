import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gioco Responsabile – Crazy Time Italia",
  description: "Informazioni sul gioco responsabile: come giocare in sicurezza, riconoscere i segnali di rischio e dove trovare aiuto in Italia.",
  robots: "index, follow",
  alternates: { canonical: `${SITE_URL}/responsible-gaming` },
};

export default function ResponsibleGamingPage() {
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
        Gioco Responsabile
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "48px" }}>
        Ultimo aggiornamento: marzo 2026
      </p>

      <div style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1rem" }}>

        <div
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: "12px",
            padding: "20px 24px",
            marginBottom: "40px",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, color: "#FCA5A5" }}>
            Il gioco d&apos;azzardo può causare dipendenza. Gioca solo se sei maggiorenne (18+) e con denaro che puoi permetterti di perdere. Se hai problemi con il gioco, chiedi aiuto.
          </p>
        </div>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            1. Il nostro impegno
          </h2>
          <p>
            Crazy Time Italia è un sito <strong>esclusivamente informativo</strong> sul gioco Crazy Time di Evolution Gaming. Non offriamo servizi di gioco d&apos;azzardo online. Tuttavia, riconosciamo la responsabilità di promuovere una cultura del gioco consapevole e di fornire informazioni utili a chi potrebbe avere difficoltà legate al gioco.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            2. Regole fondamentali del gioco responsabile
          </h2>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>Gioca solo se sei maggiorenne.</strong> In Italia il limite legale è 18 anni. I casino online con licenza ADM verificano obbligatoriamente l&apos;età degli utenti.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Stabilisci un budget.</strong> Decidi in anticipo quanto puoi permetterti di perdere e rispetta quel limite. Non giocare mai con denaro destinato a spese necessarie (affitto, bollette, cibo).
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Stabilisci un limite di tempo.</strong> Il gioco non dovrebbe mai sottrarre tempo a lavoro, famiglia o altre attività importanti.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Non inseguire le perdite.</strong> Cercare di recuperare le perdite aumentando le puntate è uno dei comportamenti più rischiosi nel gioco d&apos;azzardo.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Non giocare sotto l&apos;effetto di alcol o droghe.</strong> Queste sostanze alterano il giudizio e possono portare a decisioni finanziarie irresponsabili.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>Considera il gioco come intrattenimento.</strong> Le probabilità sono sempre a favore del casino. Non è un modo per guadagnare denaro.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            3. Segnali di allerta
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Riconosci questi segnali in te stesso o in qualcuno che conosci:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>Giocare con somme sempre più elevate per ottenere la stessa emozione.</li>
            <li style={{ marginBottom: "8px" }}>Tentativi ripetuti e falliti di smettere o ridurre il gioco.</li>
            <li style={{ marginBottom: "8px" }}>Agitazione, irritabilità o ansia quando non si gioca.</li>
            <li style={{ marginBottom: "8px" }}>Usare il gioco per sfuggire a problemi o stati d&apos;animo negativi.</li>
            <li style={{ marginBottom: "8px" }}>Mentire a familiari o amici riguardo al gioco.</li>
            <li style={{ marginBottom: "8px" }}>Mettere a rischio relazioni, lavoro o situazione finanziaria a causa del gioco.</li>
            <li style={{ marginBottom: "8px" }}>Ricorrere a prestiti o vendere oggetti per finanziare il gioco.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            4. Strumenti di autocontrollo
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Tutti i casino online con licenza ADM sono obbligati per legge a offrire strumenti di gioco responsabile:
          </p>
          <ul style={{ paddingLeft: "24px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Limiti di deposito/perdita/sessione:</strong> imposta limiti giornalieri, settimanali o mensili su quante giochi o perdi.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Autoesclusione temporanea:</strong> sospendi il tuo account per un periodo definito (giorni, settimane, mesi).
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Autoesclusione permanente:</strong> chiudi definitivamente il tuo account di gioco.
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Reality check:</strong> notifiche che ti ricordano quanto tempo stai giocando.
            </li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            Puoi anche registrarti nel <strong>Registro Nazionale di Autoesclusione</strong> (AAMS/ADM), che ti impedisce di creare nuovi account su qualsiasi sito di gioco con licenza italiana.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            5. Dove chiedere aiuto in Italia
          </h2>
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Organizzazione</th>
                  <th>Contatto</th>
                  <th>Servizio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Numero Verde Gioco d&apos;azzardo</td>
                  <td><strong>800 558 822</strong></td>
                  <td>Gratuito, anonimo, 24/7</td>
                </tr>
                <tr>
                  <td>Istituto Superiore di Sanità (ISS)</td>
                  <td>www.iss.it</td>
                  <td>Informazioni e risorse sul GAP</td>
                </tr>
                <tr>
                  <td>Giocatori Anonimi Italia</td>
                  <td>www.giocatorianonimi.it</td>
                  <td>Gruppi di supporto, riunioni</td>
                </tr>
                <tr>
                  <td>CNCA – Rete Italiana</td>
                  <td>www.cnca.it</td>
                  <td>Centri di ascolto e recupero</td>
                </tr>
                <tr>
                  <td>SerD / SerT (ASL locale)</td>
                  <td>Contatta la tua ASL</td>
                  <td>Trattamento gratuito del GAP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>
            6. Protezione dei minori
          </h2>
          <p>
            Il gioco d&apos;azzardo è vietato ai minori di 18 anni in Italia. Se convivi con minori, utilizza software di controllo parentale per impedire l&apos;accesso ai siti di gioco. Strumenti come <strong>Net Nanny</strong>, <strong>Qustodio</strong> o i controlli parentali integrati nei browser e nei sistemi operativi possono aiutarti a proteggere i più giovani.
          </p>
        </section>

      </div>
    </div>
  );
}
