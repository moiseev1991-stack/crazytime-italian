import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { casinos } from "@/data/casinos";
import CasinoCTA from "@/components/shared/CasinoCTA";
import { Clock, MonitorPlay, Eye, Smartphone, Lightbulb, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time Live Italia – Diretta Streaming 24h e Stats 2026",
  description:
    "Guarda Crazy Time in diretta streaming 24 ore su 24. Statistiche live, risultati in tempo reale e accesso alle versioni italiane su Sisal, Snai, Eurobet e Goldbet.",
  alternates: { canonical: `${SITE_URL}/live` },
  openGraph: {
    title: "Crazy Time Live Italia – Diretta Streaming 24h e Stats 2026",
    description: "Guarda Crazy Time in diretta streaming 24 ore su 24. Statistiche live, risultati in tempo reale e accesso alle versioni italiane su Sisal, Snai, Eurobet e Goldbet.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/live`,
  },
};

const liveFeatures = [
  {
    icon: <Clock size={26} color="#3B82F6" strokeWidth={1.5} />,
    color: "#3B82F6",
    title: "Disponibilità 24/7",
    description: "Crazy Time è in funzione tutto il giorno, ogni giorno dell'anno. Nessuna attesa per la sessione successiva — c'è sempre un round in corso.",
  },
  {
    icon: <MonitorPlay size={26} color="#7B2FBE" strokeWidth={1.5} />,
    color: "#7B2FBE",
    title: "Streaming in Qualità HD",
    description: "Video live in alta definizione dallo studio appositamente costruito di Evolution, con produzione multi-camera professionale e grafica in tempo reale sovrapposta.",
  },
  {
    icon: <Eye size={26} color="#10B981" strokeWidth={1.5} />,
    color: "#10B981",
    title: "Modalità Osservatore",
    description: "Guarda senza scommettere sulla maggior parte delle piattaforme. Crea un account gratuito presso un casinò supportato ed entra nella stanza come spettatore.",
  },
  {
    icon: <Smartphone size={26} color="#06B6D4" strokeWidth={1.5} />,
    color: "#06B6D4",
    title: "Supporto Multi-dispositivo",
    description: "Lo streaming funziona su browser desktop, iOS (Safari), Android (Chrome) e smart TV. Bitrate adattivo per velocità di connessione variabili.",
  },
];

const versions = [
  {
    name: "Crazy Time",
    desc: "Il tavolo originale. Studio principale con una rosa di presentatori professionisti a rotazione, design del set classico con l'iconica ruota al neon.",
    features: ["Set dello studio originale", "Presentatori live a rotazione", "Commento completo in italiano", "Tavolo principale — il più popolare"],
    color: "#7B2FBE",
  },
  {
    name: "Crazy Time A",
    desc: "Secondo tavolo parallelo con le stesse meccaniche, estetica dello studio diversa e team di presentatori separato. Utile quando il tavolo principale ha lunghe code di attesa.",
    features: ["Design dello studio alternativo", "Team di presentatori separato", "Meccaniche di gioco e RTP identici", "Ottima alternativa quando il tavolo principale è occupato"],
    color: "#F59E0B",
  },
];

export default function LivePage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 16px" }}>

      {/* Hero */}
      <header style={{ marginBottom: "48px" }}>
        <div
          style={{
            position: "relative",
            minHeight: "340px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "16px",
            marginBottom: "32px",
          }}
        >
          <Image
            src="/images/hero/live.webp"
            alt="Crazy Time live stream presenter in Evolution Gaming studio"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.50)" }} aria-hidden="true" />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, #0F0A1A, transparent)" }} aria-hidden="true" />
          {/* Live badge */}
          <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 10, display: "flex", alignItems: "center", gap: "6px", background: "rgba(239,68,68,0.9)", borderRadius: "999px", padding: "6px 14px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", display: "inline-block" }} />
            <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em" }}>LIVE 24/7</span>
          </div>
          <div style={{ position: "relative", zIndex: 10, padding: "40px 32px", maxWidth: "720px" }}>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "#F8FAFC",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              Crazy Time Live –{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #EF4444, #F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Diretta Streaming 24h con Statistiche Italia
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>
              Streaming live 24/7 direttamente dallo studio Evolution Gaming.
            </p>
          </div>
        </div>
      </header>

      {/* Live stream embed area */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="stream-heading">
        <h2 id="stream-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          Streaming Live
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid #2D2245",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ynz7X1mQRlE?rel=0&modestbranding=1"
            title="Crazy Time Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
        <p style={{ color: "#64748B", fontSize: "0.78rem", marginTop: "10px", textAlign: "center" }}>
          L&apos;accesso live richiede un account casinò. La maggior parte dei casinò consente la modalità osservatore gratuita senza deposito.
        </p>
      </section>

      {/* Crazy Time vs Crazy Time A */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="versions-heading">
        <h2 id="versions-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Crazy Time vs Crazy Time A
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 28px", fontSize: "0.95rem" }}>
          Due versioni del gioco vengono trasmesse contemporaneamente in studi separati con presentatori diversi. Le meccaniche di gioco e l&apos;RTP sono identici in entrambe.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="versions-grid">
          {versions.map((version) => (
            <div
              key={version.name}
              style={{
                background: "#1A1128",
                border: `1px solid ${version.color}30`,
                borderRadius: "16px",
                padding: "28px",
                borderTop: `4px solid ${version.color}`,
              }}
            >
              <h3 style={{ color: version.color, fontWeight: 800, fontSize: "1.2rem", margin: "0 0 12px" }}>
                {version.name}
              </h3>
              <p style={{ color: "#94A3B8", lineHeight: "1.7", margin: "0 0 20px", fontSize: "0.9rem" }}>
                {version.desc}
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {version.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      color: "#94A3B8",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Check size={14} color={version.color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "rgba(16,185,129,0.05)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: "10px",
            padding: "16px 20px",
            marginTop: "20px",
            fontSize: "0.875rem",
            color: "#94A3B8",
          }}
        >
          <strong style={{ color: "#10B981" }}><Lightbulb size={16} color="#10B981" strokeWidth={1.5} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />Consiglio:</strong> Passa a Crazy Time A se il tavolo principale ha una lunga coda di scommesse o preferisci uno stile di presentatore diverso. Puoi passare da un tavolo all&apos;altro in qualsiasi momento senza perdere il saldo del tuo account.
        </div>
      </section>

      {/* Live stream features */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="features-heading">
        <h2 id="features-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 24px" }}>
          Funzionalità dello Streaming Live
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {liveFeatures.map((feature) => (
            <div key={feature.title} className="card" style={{ padding: "24px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: `linear-gradient(135deg, ${feature.color}1F, ${feature.color}0A)`,
                border: `1px solid ${feature.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "12px",
              }}>
                {feature.icon}
              </div>
              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 10px" }}>{feature.title}</h3>
              <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0, lineHeight: "1.6" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live chat & interaction */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="chat-heading">
        <h2 id="chat-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          Chat Live e Interazione
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="chat-grid">
          <div>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
              Crazy Time Live è trasmesso da un <strong style={{ color: "#F8FAFC" }}>unico tavolo globale</strong> di Evolution: tutti i giocatori, indipendentemente dall&apos;operatore ADM usato, condividono lo stesso flusso live. L&apos;interfaccia mostra lo storico recente degli esiti, i limiti di puntata del tavolo e gli aggiornamenti in tempo reale del Top Slot: questi strumenti sono utili per monitorare ritmo e volatilità della sessione, non per prevedere i prossimi esiti.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
              I concetti di <strong style={{ color: "#F8FAFC" }}>hot/cold</strong> e streak descrivono concentrazioni casuali tipiche di sequenze aleatorie: ogni giro è indipendente e la probabilità non &quot;corregge&quot; né &quot;compensa&quot; quanto accaduto prima. Usa i dati della cronologia per stimare la volatilità vissuta e regolare lo stake, non per inseguire esiti &quot;in ritardo&quot;.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
              Prima di iniziare a puntare, imposta <strong style={{ color: "#F8FAFC" }}>limiti di deposito, perdita e durata sessione</strong> tramite gli strumenti di gioco responsabile dell&apos;operatore ADM. Alcuni operatori consentono di osservare il tavolo in streaming senza puntare, utile per familiarizzare con il ritmo del gioco. Se il gioco smette di essere intrattenimento, interrompi la sessione e valuta gli strumenti di autoesclusione disponibili nel tuo conto.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { feature: "Chat live globale", available: true },
              { feature: "Interazione con il presentatore", available: true },
              { feature: "Celebrazioni vincite", available: true },
              { feature: "Messaggi privati", available: false },
              { feature: "Chat in modalità osservatore", available: "Dipende" },
              { feature: "Reazioni emoji", available: true },
            ].map((item) => (
              <div
                key={item.feature}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  background: "#1A1128",
                  borderRadius: "8px",
                  border: "1px solid #2D2245",
                }}
              >
                <span style={{ color: "#94A3B8", fontSize: "0.875rem" }}>{item.feature}</span>
                {item.available === true && <Check size={18} color="#10B981" strokeWidth={2} />}
                {item.available === false && <X size={18} color="#EF4444" strokeWidth={2} />}
                {typeof item.available === "string" && <span style={{ color: "#F59E0B", fontSize: "0.8rem" }}>{item.available}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COS'È CRAZY TIME LIVE E COME SI GIOCA ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="cosè-live-heading">
        <h2 id="cosè-live-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Cos&apos;è Crazy Time Live e come si gioca?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time Live è un game show dal vivo di Evolution ambientato in studio e trasmesso in streaming. L&apos;obiettivo è prevedere dove si fermerà una ruota a 54 spicchi, puntando su numeri o su uno dei quattro giochi bonus. A ogni giro, sopra la ruota, un &quot;Top Slot&quot; può applicare moltiplicatori casuali a un singolo esito. Il gioco è disponibile in Italia presso operatori con licenza ADM; si puntano gettoni su uno o più esiti, si chiudono le scommesse, quindi la ruota gira e determina l&apos;eventuale vincita.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali sono regole, puntate e payout degli 8 segmenti?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Puoi distribuire le puntate su uno o più dei seguenti 8 esiti: 1, 2, 5, 10, Coin Flip, Cash Hunt, Pachinko, Crazy Time. I numeri pagano in rapporto fisso; i bonus attivano mini‑giochi con moltiplicatori variabili. La ruota ha 54 spicchi totali; la distribuzione degli spicchi determina la probabilità di ciascun esito.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Scegli gli esiti su cui puntare (uno, più numeri, uno o più bonus).</li>
          <li>Attendi la chiusura puntate; il Top Slot può assegnare un moltiplicatore a un esito specifico.</li>
          <li>La ruota gira; se si ferma su un numero, si applica il pagamento di quel numero (eventualmente moltiplicato dal Top Slot). Se si ferma su un bonus su cui hai puntato, entri nel relativo mini‑gioco.</li>
        </ul>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Segmento</th>
                <th>Spicchi sulla ruota</th>
                <th>Probabilità per giro</th>
                <th>Pagamento base</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong style={{ color: "#3B82F6" }}>1</strong></td><td>21</td><td>21/54 ≈ 38,89%</td><td>1:1</td><td>Esito numerico; nessun mini‑gioco.</td></tr>
              <tr><td><strong style={{ color: "#10B981" }}>2</strong></td><td>13</td><td>13/54 ≈ 24,07%</td><td>2:1</td><td>Esito numerico; nessun mini‑gioco.</td></tr>
              <tr><td><strong style={{ color: "#F59E0B" }}>5</strong></td><td>7</td><td>7/54 ≈ 12,96%</td><td>5:1</td><td>Esito numerico; nessun mini‑gioco.</td></tr>
              <tr><td><strong style={{ color: "#EF4444" }}>10</strong></td><td>4</td><td>4/54 ≈ 7,41%</td><td>10:1</td><td>Esito numerico; nessun mini‑gioco.</td></tr>
              <tr><td><strong style={{ color: "#A855F7" }}>Coin Flip</strong></td><td>4</td><td>4/54 ≈ 7,41%</td><td>Variabile (bonus)</td><td>Gioco bonus &quot;testa o croce&quot; con due moltiplicatori.</td></tr>
              <tr><td><strong style={{ color: "#06B6D4" }}>Cash Hunt</strong></td><td>2</td><td>2/54 ≈ 3,70%</td><td>Variabile (bonus)</td><td>Gioco bonus su griglia con 108 bersagli e moltiplicatori nascosti.</td></tr>
              <tr><td><strong style={{ color: "#F97316" }}>Pachinko</strong></td><td>2</td><td>2/54 ≈ 3,70%</td><td>Variabile (bonus)</td><td>Puck che scende su muro a pioli; possibili raddoppi (&quot;DOUBLE&quot;).</td></tr>
              <tr><td><strong style={{ color: "#7B2FBE" }}>Crazy Time</strong></td><td>1</td><td>1/54 ≈ 1,85%</td><td>Variabile (bonus)</td><td>Grande ruota bonus; scegli una di tre palette (blu, verde, gialla).</td></tr>
            </tbody>
          </table>
        </div>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.875rem" }}>
          <li>I pagamenti indicati come X:1 rappresentano la vincita netta proporzionale alla puntata sull&apos;esito.</li>
          <li>Eventuali moltiplicatori del Top Slot (se assegnati a quell&apos;esito e se la ruota si ferma lì) si applicano ai pagamenti dei numeri o potenziano i bonus.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Ruota Crazy Time: come funziona il Top Slot e i moltiplicatori?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il Top Slot è un dispositivo a due &quot;rulli&quot; posto sopra la ruota. A ogni giro, dopo la chiusura delle puntate, seleziona casualmente una combinazione formata da un esito (ad esempio &quot;5&quot; o &quot;Pachinko&quot;) e un moltiplicatore (per esempio &quot;x20&quot;). La combinazione è valida solo se i due rulli si allineano sulla stessa riga. Se successivamente la ruota si ferma proprio su quell&apos;esito, il moltiplicatore si applica alla vincita.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Se l&apos;esito è un numero (1, 2, 5, 10), il moltiplicatore Top Slot moltiplica il pagamento. Esempio: Top Slot &quot;5 x20&quot; e ruota su 5 = pagamento 5:1 × 20 = 100:1.</li>
          <li>Se l&apos;esito è un bonus, il moltiplicatore Top Slot potenzia il mini‑gioco (ad esempio aggiungendo un moltiplicatore iniziale, aumentando i valori in griglia o raddoppiando i premi di partenza, secondo le regole specifiche del bonus).</li>
          <li>Il Top Slot non garantisce vincite: deve sia allinearsi sia combinarsi con l&apos;atterraggio della ruota sull&apos;esito corrispondente.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.875rem" }}>
          <li>Chiusura puntate.</li>
          <li>Top Slot gira e, se allineato, assegna &quot;esito × moltiplicatore&quot;.</li>
          <li>La ruota gira: solo se si ferma sullo stesso esito, il moltiplicatore si applica.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time live gratis: esiste la modalità demo in Italia?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Nella pratica del mercato regolamentato italiano, gli operatori con licenza ADM non offrono modalità demo con saldo virtuale per i game show live (incluso Crazy Time). Per accedere al tavolo è normalmente necessario un conto verificato e un saldo reale. Alcuni operatori possono consentire di osservare il tavolo in streaming senza puntare, ma non si tratta di una &quot;demo giocabile&quot;.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Alternative legali:</strong> consulta le regole e la tabella pagamenti nell&apos;interfaccia del gioco e, se disponibile, osserva alcune rotazioni in modalità spettatore.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Approccio prudente:</strong> quando inizi, usa puntate minime e imposta limiti di deposito, perdita e tempo di sessione tramite gli strumenti di gioco responsabile previsti dagli operatori ADM.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Evita siti non autorizzati:</strong> eventuali &quot;demo&quot; offerte da siti senza licenza ADM non sono legali per i giocatori in Italia.</li>
        </ul>
      </section>

      {/* ===== STATISTICHE LIVE ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="stats-live-live-heading">
        <h2 id="stats-live-live-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Statistiche live: come leggerle sulla ruota Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Le statistiche di Crazy Time Live descrivono cosa è accaduto recentemente (frequenze dei segmenti, sequenze, bonus visti), ma non prevedono i risultati futuri. La ruota ha 54 spicchi con probabilità fisse per ciascun esito; ogni giro è indipendente. Le statistiche vanno quindi interpretate come misura descrittiva della sessione, utile per comprendere volatilità e ritmo del gioco, non come segnale predittivo.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Dove trovare statistiche affidabili per l&apos;Italia e per i tavoli Evolution?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time è trasmesso da un unico tavolo globale di Evolution: non esistono &quot;tavoli Italia&quot; con dati distinti. In Italia si accede dagli operatori con licenza ADM, ma le statistiche riflettono sempre il flusso globale del gioco. Le fonti più affidabili sono quelle direttamente collegate al provider o al tuo conto di gioco.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Interfaccia di gioco Evolution:</strong> mostra lo storico recente degli esiti (numeri e bonus) direttamente nel client live. È la fonte più aderente al flusso reale perché alimentata dal provider.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Lobby e pannelli &quot;Ultimi risultati&quot; degli operatori ADM:</strong> molte piattaforme espongono gli ultimi esiti del tavolo. Sono sincronizzate con il feed ufficiale, ma possono avere ritardi o finestra storica limitata.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cronologia del conto e report di sessione:</strong> nel profilo del casinò puoi consultare scommesse, esiti e timestamp delle tue giocate. È l&apos;unico tracciato &quot;auditabile&quot; della tua attività.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Tracker di terze parti e community:</strong> raccolgono dati dal live stream o da utenti. Non sono fonti ufficiali; possono avere campionamenti incompleti, downtime o bias di selezione. Usali solo come riferimento orientativo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>API/endpoint pubblici:</strong> Evolution non fornisce API pubbliche per storici di Crazy Time; se un sito afferma il contrario, verifica attentamente attendibilità e conformità normativa.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Hot/cold e streak: mito o utilità pratica?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Concetti come &quot;hot/cold&quot; (esiti caldi/freddi) e &quot;streak&quot; (strisce) descrivono concentrazioni casuali tipiche di sequenze aleatorie. Non hanno valore predittivo: ogni giro è indipendente e la probabilità non &quot;corregge&quot; e non &quot;compensa&quot; quanto accaduto poco prima. Tuttavia, un uso prudente di questi indicatori può aiutare a gestire la sessione.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Mito (predizione):</strong> vedere molti &quot;2&quot; consecutivi non riduce né aumenta la probabilità che al giro successivo esca &quot;2&quot;. Evita la fallacia del giocatore (&quot;dovrebbe uscire X&quot;).</li>
          <li><strong style={{ color: "#F8FAFC" }}>Utilità pratica (telemetria di sessione):</strong> osservare frequenze e bonus recenti aiuta a stimare la volatilità vissuta, regolare lo stake e decidere pause o chiusura sessione se l&apos;andamento è più &quot;pesante&quot; del previsto.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Disciplina:</strong> se usi hot/cold, trattali come indicatori descrittivi. Imposta limiti (perdita massima, durata, puntata) e non inseguire le perdite quando le strisce vanno contro le attese.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time Italia stats: esempi d&apos;uso e limiti di interpretazione
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Un approccio quantitativo consiste nel confrontare i dati osservati con le probabilità teoriche della ruota. Sotto trovi le probabilità per segmento e il margine di errore statistico approssimato al 95% su 1.000 giri (intervallo di confidenza binomiale con approssimazione normale), utile per capire quanto &quot;rumore&quot; è fisiologico in campioni realistici.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Segmento</th>
                <th>Probabilità teorica</th>
                <th>Attesi su 1.000 giri</th>
                <th>Intervallo 95% su 1.000 giri</th>
                <th>Margine 95% (punti %)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>38,89%</td><td>≈ 389</td><td>≈ 359 – 419</td><td>± 3,02</td></tr>
              <tr><td>2</td><td>24,07%</td><td>≈ 241</td><td>≈ 214 – 268</td><td>± 2,65</td></tr>
              <tr><td>5</td><td>12,96%</td><td>≈ 130</td><td>≈ 109 – 151</td><td>± 2,08</td></tr>
              <tr><td>10</td><td>7,41%</td><td>≈ 74</td><td>≈ 58 – 90</td><td>± 1,62</td></tr>
              <tr><td>Coin Flip</td><td>7,41%</td><td>≈ 74</td><td>≈ 58 – 90</td><td>± 1,62</td></tr>
              <tr><td>Cash Hunt</td><td>3,70%</td><td>≈ 37</td><td>≈ 25 – 49</td><td>± 1,17</td></tr>
              <tr><td>Pachinko</td><td>3,70%</td><td>≈ 37</td><td>≈ 25 – 49</td><td>± 1,17</td></tr>
              <tr><td>Crazy Time</td><td>1,85%</td><td>≈ 19</td><td>≈ 10 – 27</td><td>± 0,84</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Esempi pratici e limiti:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Confronto rapido:</strong> se in 1.000 giri vedi 60 &quot;10&quot;, sei ancora nel range atteso (58–90). Deviazioni moderate non implicano &quot;anomalia&quot; del tavolo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Dimensione campione:</strong> per stimare &quot;2&quot; con precisione ±5 punti percentuali al 95% servono circa 281 giri (p = 24,07%). Campioni più piccoli generano oscillazioni più ampie.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Indipendenza:</strong> anche se osservi scarti oltre l&apos;intervallo, non diventano segnali predittivi per il giro successivo. Usa gli scarti per calibrare budget e durata, non per &quot;forzare&quot; esiti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Contestualizzazione:</strong> i bonus hanno payout e moltiplicatori variabili; una stessa frequenza di attivazioni può produrre risultati economici molto diversi a seconda dei moltiplicatori incontrati.</li>
        </ul>
      </section>

      {/* ===== STRATEGIE E GESTIONE DEL RISCHIO ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="strategie-live-heading">
        <h2 id="strategie-live-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Strategie e gestione del rischio: cosa funziona davvero?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time Live è un gioco di pura aleatorietà con giri indipendenti: non esistono metodi che trasformino un&apos;aspettativa negativa in positiva. Le uniche leve che funzionano nel lungo periodo riguardano la gestione del rischio: dimensionamento della puntata, limiti di perdita e durata della sessione. Tattiche come inseguire i bonus o raddoppiare dopo le perdite non cambiano le probabilità; al contrario, aumentano l&apos;esposizione a drawdown rapidi e al raggiungimento dei limiti di puntata del tavolo.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Esistono strategie vincenti o sono sistemi fallaci?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Non esistono &quot;strategie vincenti garantite&quot; per Crazy Time. I sistemi progressivi o le letture &quot;predittive&quot; dello storico (hot/cold, streak) non modificano la probabilità dei segmenti né l&apos;effetto della varianza. Sono sistemi fallaci perché si basano su assunzioni errate (fallacia del giocatore) o su escalation del rischio che finisce contro limiti pratici (bankroll e puntata massima).
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Martingala e varianti</strong> (raddoppio dopo ogni perdita): l&apos;escalation esponenziale fa raggiungere velocemente i limiti di puntata o esaurisce il bankroll in poche iterazioni negative.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Labouchere, Fibonacci, D&apos;Alembert:</strong> ridisegnano la sequenza delle puntate ma non cambiano l&apos;atteso. Prolungano il rischio di &quot;strisce negative&quot; che cancellano i piccoli profitti precedenti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Sistemi &quot;copertura numeri + focus bonus&quot;:</strong> riducono la varianza percepita ma diluiscono il rendimento dei rari colpi grossi; l&apos;EV rimane invariato.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Uso &quot;predittivo&quot; di hot/cold:</strong> scambia la descrizione del passato per previsione. I giri sono indipendenti; non esiste memoria della ruota.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Top Slot &quot;caccia al moltiplicatore&quot;:</strong> utile per il brivido, non per l&apos;edge. Il moltiplicatore si applica solo se allineato e se la ruota atterra sullo stesso esito.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Bankroll e stake sizing: quale percentuale per puntata?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          L&apos;obiettivo del dimensionamento è controllare la sopravvivenza del bankroll in presenza di varianza. In giochi ad alta volatilità come Crazy Time, è prudente mantenere una puntata per giro contenuta rispetto al saldo totale, preferendo uno stake fisso percentuale (flat o quasi‑flat) e evitando progressioni.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Definisci il bankroll di gioco dedicato (importo che sei disposto a perdere integralmente senza impatto sulla tua situazione finanziaria).</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Scegli una percentuale di stake per giro coerente con la tua tolleranza al rischio:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Conservativa: 0,25% – 0,75% del bankroll per giro.</li>
          <li>Moderata: 0,75% – 1,50% del bankroll per giro.</li>
          <li>A rischio elevato: &gt; 1,50% (sconsigliato per sessioni lunghe).</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Applica la formula: Puntata = Bankroll × percentuale scelta. Esempi:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Bankroll 200€; 1% per giro ⇒ 2€ di puntata.</li>
          <li>Bankroll 500€; 0,5% per giro ⇒ 2,50€ di puntata.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Preferisci lo stake &quot;flat&quot; (stessa puntata per giro) per controllare la varianza.</li>
          <li>Imposta stop‑loss e stop‑win: ad esempio, chiudi la sessione se perdi il 10%–20% del bankroll o se realizzi un profitto del 10%–30%.</li>
          <li>Ricorda che aumentare la puntata non recupera l&apos;atteso: alza solo l&apos;ampiezza delle oscillazioni.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali KPI monitorare: durata sessione, volatilità, perdita massima
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Monitorare indicatori chiave ti aiuta a rimanere dentro limiti sostenibili e a riconoscere quando la varianza sta superando la tua tolleranza al rischio. I KPI non prevedono l&apos;esito dei giri: servono per governare tempo, esposizione e ritmo della sessione.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>KPI</th>
                <th>Definizione</th>
                <th>Come misurarlo</th>
                <th>Esempio di soglia guida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Durata sessione</td>
                <td>Tempo continuo di gioco prima della pausa/chiusura</td>
                <td>Cronometra dall&apos;inizio; pausa ogni blocco prestabilito</td>
                <td>45–60 min per sessione; pausa 10–15 min</td>
              </tr>
              <tr>
                <td>Perdita massima (stop‑loss)</td>
                <td>Drawdown tollerato sul bankroll per singola sessione</td>
                <td>Saldo iniziale − saldo corrente</td>
                <td>10%–20% del bankroll di gioco</td>
              </tr>
              <tr>
                <td>Profitto target (stop‑win)</td>
                <td>Obiettivo di utile dopo il quale chiudere la sessione</td>
                <td>Saldo corrente − saldo iniziale</td>
                <td>10%–30% del bankroll di gioco</td>
              </tr>
              <tr>
                <td>Puntata media</td>
                <td>Importo medio scommesso per giro</td>
                <td>Somma puntate / numero di giri</td>
                <td>0,5%–1,5% del bankroll</td>
              </tr>
              <tr>
                <td>Hit rate bonus</td>
                <td>Frequenza di attivazione dei bonus su un campione</td>
                <td>Bonus attivati / giri osservati</td>
                <td>Valuta su ≥ 200 giri; usalo per percepire la varianza, non per predire</td>
              </tr>
              <tr>
                <td>Ritmo puntate</td>
                <td>Giri per unità di tempo</td>
                <td>Conteggia giri in 15 minuti e proietta a 1 ora</td>
                <td>Riduci ritmo se lo stress o le perdite aumentano</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.875rem", margin: 0 }}>
          Ulteriori note operative: imposta limiti nel conto di gioco (deposito, perdita, tempo), programma pause forzate e mantieni la puntata proporzionale al bankroll corrente. Se superi i tuoi limiti o il gioco smette di essere ricreativo, interrompi la sessione.
        </p>
      </section>

      {/* ===== EVOLUZIONE E CRITICA ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="evoluzione-live-heading">
        <h2 id="evoluzione-live-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Evoluzione e critica: come siamo arrivati qui e cosa contestano?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          I game show live moderni nascono dall&apos;ibrido tra la &quot;ruota della fortuna&quot; televisiva e i tavoli live da casinò. Evolution ha standardizzato il formato con studi dedicati, presentatori e meccaniche di moltiplicazione; titoli come Dream Catcher, Monopoly Live e Crazy Time hanno ampliato l&apos;intrattenimento introducendo bonus interattivi e scenografie AR/VR. Nel mercato regolamentato italiano (licenza ADM), questi giochi sono accessibili tramite operatori autorizzati e condividono lo stesso tavolo globale fornito dal provider.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Dalla ruota della fortuna a Dream Catcher, Monopoly Live e Crazy Time
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          L&apos;evoluzione recente è scandita da passi incrementali sulla stessa base: una grande ruota, payout predefiniti, bonus tematici e un layer di moltiplicatori che accresce volatilità e spettacolo. Ecco le tappe principali e cosa hanno aggiunto:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Format televisivi tradizionali:</strong> ruota, presentatore e premi predefiniti; esperienza lineare e senza interattività del giocatore.</li>
          <li><strong style={{ color: "#F8FAFC" }}>2017 — Dream Catcher (Evolution):</strong> prima &quot;money wheel&quot; live moderna con presentatore in studio; introduce segmenti moltiplicatori sulla ruota e re‑spin, aumentando il potenziale senza complicare la puntata.</li>
          <li><strong style={{ color: "#F8FAFC" }}>2019 — Monopoly Live (Evolution):</strong> integra la ruota stile Dream Catcher con un bonus &quot;2 Rolls/4 Rolls&quot; in realtà aumentata sul tabellone MONOPOLY; aggiunge carte &quot;Chance&quot; con moltiplicatori e premi istantanei.</li>
          <li><strong style={{ color: "#F8FAFC" }}>2020 — Crazy Time (Evolution):</strong> espande il concetto con Top Slot sopra la ruota e quattro bonus distinti (Coin Flip, Cash Hunt, Pachinko, Crazy Time), includendo scelte del giocatore (bersaglio in Cash Hunt; paletta in Crazy Time) e possibilità di raddoppi nei bonus.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali sono i pro e contro rispetto ad altri game show live?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Ciascun titolo bilancia accessibilità, spettacolo e rischio in modo diverso. Crazy Time massimizza varietà e interazione a costo di una volatilità più elevata e di una struttura più complessa da gestire sul piano del bankroll.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Gioco</th>
                <th>Anno lancio</th>
                <th>Meccanica base</th>
                <th>Bonus/Moltiplicatori</th>
                <th>Volatilità</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: "#3B82F6" }}>Dream Catcher</strong></td>
                <td>2017</td>
                <td>Ruota con numeri e pagamenti fissi</td>
                <td>Segmenti moltiplicatori sulla ruota (re‑spin)</td>
                <td>Bassa–Media</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#10B981" }}>Monopoly Live</strong></td>
                <td>2019</td>
                <td>Ruota stile Dream Catcher</td>
                <td>&quot;2 Rolls/4 Rolls&quot; con tabellone AR; carte &quot;Chance&quot;</td>
                <td>Media–Alta</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#F59E0B" }}>Crazy Time</strong></td>
                <td>2020</td>
                <td>Ruota a 54 segmenti + Top Slot</td>
                <td>Quattro bonus distinti; potenziamenti e raddoppi possibili</td>
                <td>Alta</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F59E0B" }}>Crazy Time — Pro:</strong> massima varietà e intrattenimento; interazione; potenziali moltiplicatori elevati tramite Top Slot e bonus. <strong style={{ color: "#EF4444" }}>Contro:</strong> volatilità alta, sessioni più irregolari; gestione del rischio più impegnativa.</li>
          <li><strong style={{ color: "#10B981" }}>Monopoly Live — Pro:</strong> brand riconoscibile e bonus &quot;narrativo&quot;; moltiplicatori &quot;Chance&quot;. <strong style={{ color: "#EF4444" }}>Contro:</strong> frequenza bonus meno prevedibile; meno scelte dirette del giocatore.</li>
          <li><strong style={{ color: "#3B82F6" }}>Dream Catcher — Pro:</strong> semplicità e ritmo lineare; minore complessità. <strong style={{ color: "#EF4444" }}>Contro:</strong> minore varietà di bonus e picchi di payout meno frequenti.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Qual è il più forte argomento contro l&apos;uso di statistiche e strategie?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          L&apos;argomento più solido è che i giri sono indipendenti e l&apos;aspettativa di ciascuna scommessa è predeterminata dal provider: statistiche di breve periodo e sistemi di puntata non la modificano. &quot;Hot/cold&quot;, progressioni (martingala, Fibonacci, ecc.) e letture dello storico confondono descrizione con previsione e aumentano il rischio di drawdown senza aggiungere vantaggio matematico.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Indipendenza e house edge:</strong> ogni giro è un evento nuovo con probabilità fisse; l&apos;RTP per tipologia di puntata è impostato a livello di gioco e non dipende dal tuo pattern di puntate.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Fallacia del giocatore:</strong> sequenze atipiche sono normali in campioni piccoli; non implicano &quot;compensazioni&quot; future.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Progressioni e limiti pratici:</strong> l&apos;aumento sistematico della puntata incontra limiti del tavolo e del bankroll; poche perdite consecutive possono annullare molti piccoli profitti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Illusione di controllo:</strong> scelte nei bonus (es. bersaglio/paletta) migliorano il coinvolgimento, non l&apos;aspettativa; i moltiplicatori restano casuali.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Gestione del rischio come unico vantaggio operativo:</strong> definire stake piccolo rispetto al bankroll, stop‑loss/stop‑win e tempi di pausa è l&apos;unico strumento sotto controllo del giocatore nel mercato regolamentato italiano.</li>
        </ul>
      </section>

      {/* ===== DOMANDE FREQUENTI ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="faq-live-heading">
        <h2 id="faq-live-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 24px" }}>
          Domande Frequenti
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Crazy Time Live è legale in Italia? Come verifico che un sito sia ADM?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sì, è legale se giochi su operatori con concessione ADM (Agenzia delle Dogane e dei Monopoli). Verifica nel footer del sito il numero di concessione ADM, il dominio .it e il logo &quot;Gioco legale e responsabile&quot;; l&apos;operatore deve comparire nell&apos;elenco dei concessionari autorizzati pubblicato da ADM.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Crazy Time è truccato o equo? Chi controlla il gioco?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Crazy Time usa una ruota fisica con 54 segmenti e probabilità deterministiche per esito; i giri sono indipendenti e il Top Slot applica moltiplicatori solo quando si allinea e la ruota atterra sullo stesso esito. I giochi distribuiti in Italia sono certificati per il mercato regolamentato e soggetti ai controlli previsti da ADM e da laboratori indipendenti accreditati, con tracciabilità completa delle sessioni tramite il conto di gioco.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quanto spesso escono i bonus di Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sommando i segmenti bonus (Coin Flip, Cash Hunt, Pachinko, Crazy Time) la probabilità complessiva è 9/54, cioè circa il 16,67% per giro, in media un bonus ogni 6 giri circa. Nel breve periodo sono normali scostamenti: su 100 giri puoi osservare da una manciata di bonus fino a frequenze più alte o più basse senza che ciò implichi variazioni future di probabilità.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quanti giri all&apos;ora fa Crazy Time e quanti dati consuma in mobile?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Il ritmo tipico è 40–60 secondi per giro, pari a circa 60–90 giri/ora a seconda del presentatore e del traffico. In HD un live stream consuma di norma 1–2 GB/ora con bitrate intorno a 2–5 Mbps; su reti instabili riduci la qualità video per contenere il traffico dati.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso usare bonus di benvenuto o cashback su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Spesso i live game sono esclusi dal wagering o contano in misura ridotta, tipicamente tra lo 0% e il 10% ai fini dei requisiti di puntata. Verifica sempre Termini e Condizioni, giochi esclusi, percentuali di contribuzione e massimali di puntata validi durante il wagering per evitare l&apos;annullamento dei bonus.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Cosa succede se mi disconnetto durante un giro o un bonus?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Se eri già puntato, il round prosegue lato server e l&apos;eventuale vincita viene accreditata automaticamente; puoi verificarla nella cronologia del conto. Se la disconnessione avviene in un bonus che richiede una scelta (per esempio bersaglio o paletta), il sistema seleziona un&apos;opzione automatica secondo le regole del gioco e registra l&apos;esito nei log di sessione.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Perché non trovo la demo gratuita di Crazy Time sugli operatori ADM?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Nel mercato italiano regolamentato le demo con saldo virtuale non sono offerte per i game show live; per entrare al tavolo serve un conto verificato e saldo reale. Alcune lobby consentono la sola visione del flusso senza puntare, ma non si tratta di una modalità demo giocabile.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quali limiti di puntata e payout massimi ci sono su Crazy Time in Italia?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>I limiti sono impostati a livello di tavolo e operatore e compaiono nella lobby del gioco; includono puntata minima e massima per esito e, in molti casi, un tetto di vincita per round o per giocatore. Consulta sempre la scheda informativa del tavolo e i Termini dell&apos;operatore perché i cap possono differire tra concessionari ADM pur usando lo stesso gioco.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come leggere le statistiche live senza cadere nella fallacia del giocatore?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Usale solo come descrizione del passato per calibrare ritmo e budget, non per prevedere il futuro; i giri sono indipendenti e la probabilità non si &quot;aggiusta&quot;. Per esempio, Crazy Time (1,85%) atteso su 100 giri è circa 2 attivazioni; vederne 0–5 su 100 giri rientra nella variabilità normale e non crea &quot;debiti&quot; statistici da recuperare al giro successivo.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso giocare a Crazy Time da smartphone? Quali sono i requisiti tecnici minimi?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sì, il client Evolution è ottimizzato per iOS e Android con interfaccia touch. Per uno streaming fluido in HD tieni una connessione stabile di almeno 5 Mbps, usa un dispositivo recente con browser aggiornato, abilita l&apos;audio e considera la latenza di rete che può aggiungere 1–3 secondi tra evento e visualizzazione.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Le vincite su Crazy Time sono tassate per il giocatore in Italia?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, nel canale online regolamentato italiano le imposte gravano sull&apos;operatore; il giocatore non deve dichiarare le vincite da giochi con concessione ADM. Assicurati di giocare unicamente su siti autorizzati per rientrare nel perimetro fiscale e di tutela previsto dalla normativa.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>È consentito usare bot, script o sistemi automatici su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, l&apos;uso di automazioni viola i Termini di utilizzo degli operatori e può portare a chiusura conto e confisca dei fondi. Il client live prevede finestre di puntata brevi e controlli server‑side; qualunque tentativo di automazione è rilevabile e contrario alle regole ADM sul gioco a distanza.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Perché vedo statistiche diverse tra siti diversi se il tavolo è unico?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Dipendono da ritardi di sincronizzazione, diversa ampiezza della finestra storica e downtime dei feed; l&apos;interfaccia del provider mostra in genere lo storico più aderente al flusso reale. Scarti di pochi secondi o differenze nel numero di esiti visualizzati non alterano i risultati del tavolo né le tue scommesse registrate a conto.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Qual è un bankroll prudente per giocare 1 ora a Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Per contenere la varianza, mantenere una puntata media pari allo 0,5–1,5% del bankroll e un capitale pari ad almeno 100–200 volte la puntata media aiuta a reggere oscillazioni tipiche di 60–90 giri. Esempio: con puntata media 2 € e 1 ora di gioco, un bankroll prudente è nell&apos;ordine di 200–400 €, con stop‑loss del 10–20% e stop‑win del 10–30% impostati a conto.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Le progressioni tipo martingala funzionano su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, aumentano l&apos;esposizione senza modificare l&apos;aspettativa negativa della scommessa. Esempio quantitativo: partendo da 1 € e raddoppiando dopo ogni perdita, una sequenza di 7 perdite consecutive richiede una puntata successiva da 128 € e una spesa cumulata di 127 €, un profilo che impatta velocemente sia i limiti tavolo sia il bankroll.</p>
          </div>

          <div style={{ paddingBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Esistono orari migliori o tavoli &quot;Italia&quot; separati per Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, Crazy Time è un tavolo globale unico; gli orari non cambiano probabilità o payout. Ciò che varia è il traffico in chat e, talvolta, la latenza percepita, ma il flusso di gioco e le statistiche restano comuni a tutti gli operatori ADM collegati.</p>
          </div>

        </div>
      </section>

      {/* Where to watch */}
      <section id="watch" aria-labelledby="watch-heading">
        <h2 id="watch-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Dove Guardare e Giocare Live
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Tutti i casinò autorizzati che utilizzano il software Evolution Gaming offrono lo streaming live di Crazy Time. Ecco i nostri suggerimenti:
        </p>
        <p style={{ margin: "0 0 20px" }}>
          <span className="badge badge-red">Solo 18+</span>{" "}
          <span style={{ color: "#64748B", fontSize: "0.8rem" }}>Gioco responsabile. T&C si applicano.</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {casinos.map((casino) => (
            <CasinoCTA key={casino.id} casino={casino} variant="full" />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .versions-grid { grid-template-columns: 1fr !important; }
          .chat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
