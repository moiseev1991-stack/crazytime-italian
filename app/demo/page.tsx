import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { casinos } from "@/data/casinos";
import CasinoCTA from "@/components/shared/CasinoCTA";
import StepGuide from "@/components/shared/StepGuide";
import ComparisonTable from "@/components/shared/ComparisonTable";
import { BarChart3, Zap, Clock3, HandCoins, FerrisWheel, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time Demo Gratis 2026 – Prova Senza Registrazione",
  description:
    "Gioca a Crazy Time in versione demo gratis senza registrazione e senza deposito. La modalità prova identica all'originale, disponibile 24h per tutti i giocatori.",
  alternates: { canonical: `${SITE_URL}/demo` },
  openGraph: {
    title: "Crazy Time Demo Gratis 2026 – Prova Senza Registrazione",
    description: "Gioca a Crazy Time in versione demo gratis senza registrazione e senza deposito. La modalità prova identica all'originale, disponibile 24h per tutti i giocatori.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/demo`,
  },
};

const observerSteps = [
  {
    number: 1,
    title: "Scegli un casinò autorizzato dalla nostra lista",
    description: "Seleziona uno qualsiasi dei casinò qui sotto — tutti offrono tavoli live Evolution Gaming incluso Crazy Time.",
  },
  {
    number: 2,
    title: "Crea un account gratuito (nessun deposito richiesto)",
    description: "La registrazione è gratuita e richiede meno di 2 minuti. Non è necessario alcun deposito per osservare il gioco.",
  },
  {
    number: 3,
    title: "Vai su Casinò Live → Game Show",
    description: "La maggior parte dei casinò organizza i giochi live per categoria. Cerca 'Game Show' o 'Live Show'.",
  },
  {
    number: 4,
    title: "Entra nella stanza di Crazy Time come osservatore",
    description: "Clicca su 'Entra' o 'Guarda' per accedere allo streaming live senza effettuare scommesse.",
  },
  {
    number: 5,
    title: "Guarda senza scommettere",
    description: "Osserva il gioco, il Top Slot e tutti e quattro i round bonus senza rischiare un solo centesimo.",
  },
];

const demoTips = [
  {
    icon: <BarChart3 size={28} color="#F59E0B" strokeWidth={1.5} />,
    title: "Monitora la frequenza dei bonus",
    description: "Nota con quale frequenza appare ogni gioco bonus. In un'ora tipica potresti vedere 10–15 Coin Flip, 4–6 Cash Hunt e 1–2 bonus Crazy Time.",
  },
  {
    icon: <Zap size={28} color="#F59E0B" strokeWidth={1.5} />,
    title: "Osserva il Top Slot",
    description: "Presta attenzione a quanto spesso il Top Slot corrisponde alla ruota principale. Aggiunge moltiplicatori significativi quando coincide.",
  },
  {
    icon: <Clock3 size={28} color="#F59E0B" strokeWidth={1.5} />,
    title: "Studia il ritmo del gioco",
    description: "Ogni round dura circa 60 secondi. Comprendi la finestra di scommessa, la durata della rotazione e i tempi di pagamento.",
  },
  {
    icon: <HandCoins size={28} color="#F59E0B" strokeWidth={1.5} />,
    title: "Sviluppa una strategia di puntata",
    description: "Usa il tempo di osservazione per decidere su quali segmenti scommettere e quale percentuale del tuo bankroll rischiare per ogni giro.",
  },
  {
    icon: <FerrisWheel size={28} color="#F59E0B" strokeWidth={1.5} />,
    title: "Impara le meccaniche bonus",
    description: "La modalità osservatore mostra l'intera esperienza del round bonus. Guardane diversi ogni sessione per capire i potenziali pagamenti.",
  },
];

const comparisonHeaders = ["Demo/Osservatore", "Soldi Veri"];
const comparisonRows = [
  { feature: "Guarda la ruota live", "Demo/Osservatore": true, "Soldi Veri": true },
  { feature: "Vedi i round bonus", "Demo/Osservatore": true, "Soldi Veri": true },
  { feature: "Piazza scommesse", "Demo/Osservatore": false, "Soldi Veri": true },
  { feature: "Vinci soldi veri", "Demo/Osservatore": false, "Soldi Veri": true },
  { feature: "Chatta con il presentatore", "Demo/Osservatore": false, "Soldi Veri": true },
  { feature: "Registrazione richiesta", "Demo/Osservatore": "Varia", "Soldi Veri": true },
  { feature: "Deposito richiesto", "Demo/Osservatore": false, "Soldi Veri": true },
];

export default function DemoPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 16px" }}>

      {/* Hero */}
      <header style={{ marginBottom: "60px" }}>
        <div
          style={{
            position: "relative",
            minHeight: "320px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "16px",
            marginBottom: "32px",
          }}
        >
          <Image
            src="/images/hero/demo.webp"
            alt="Crazy Time demo gameplay Cash Hunt grande vincita"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} aria-hidden="true" />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, #0F0A1A, transparent)" }} aria-hidden="true" />
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
              Crazy Time Demo Gratis –{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gioca Senza Registrazione
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>
              Crazy Time è un gioco live, quindi una demo tradizionale non esiste. Ecco le alternative per provarlo gratis.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#94A3B8", lineHeight: "1.7", margin: 0, fontSize: "0.95rem" }}>
            <strong style={{ color: "#3B82F6" }}><Info size={16} color="#3B82F6" strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />Importante:</strong> Crazy Time Live è un <strong style={{ color: "#F8FAFC" }}>game show con croupier in tempo reale</strong> fornito da Evolution. Sui siti ADM lo streaming del tavolo è accessibile solo dopo il login a un conto verificato; <strong style={{ color: "#F8FAFC" }}>non esiste una demo ufficiale con saldo virtuale</strong> per i game show live. È possibile osservare il flusso anche senza puntare, ma sempre con account attivo — questo garantisce i controlli di età, geolocalizzazione e responsabilità previsti dalla normativa italiana.
          </p>
        </div>
        <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>
          Di seguito trovi come accedere alla modalità di osservazione, come valutare ritmo e volatilità del gioco, e come sfruttare l&apos;osservazione in modo informato prima di effettuare le prime scommesse reali.
        </p>
      </header>

      {/* Video / Embed area */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="video-heading">
        <h2 id="video-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          Guarda Crazy Time in Azione
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
            title="Crazy Time Demo — Come Giocare"
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
        <p style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "10px", textAlign: "center" }}>
          Registrazione di esempio di una sessione live di Crazy Time — inclusi i round bonus Coin Flip, Pachinko e Crazy Time.
        </p>
      </section>

      {/* How to access observer mode */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="observer-heading">
        <h2 id="observer-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Come Accedere alla Modalità Osservatore
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 32px", fontSize: "0.95rem" }}>
          La modalità di osservazione ti permette di vedere lo stream del gioco dopo il login, senza piazzare scommesse. Puoi visualizzare la ruota a 54 segmenti, i round bonus, gli esiti del Top Slot e la cronologia recente dei risultati senza rischiare denaro. Segui questi passaggi per accedervi:
        </p>
        <StepGuide steps={observerSteps} variant="vertical" />
      </section>

      {/* Comparison table */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="comparison-heading">
        <h2 id="comparison-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Demo vs Soldi Veri — Qual è la Differenza?
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 24px", fontSize: "0.95rem" }}>
          La tabella seguente chiarisce la differenza tra osservare lo stream live, eventuali versioni RNG for fun e il gioco originale con denaro reale. Non tutte le opzioni sono equivalenti: solo il prodotto originale replica meccaniche, RTP e volatilità reali di Crazy Time Live.
        </p>
        <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
      </section>

      {/* Tips */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="tips-heading">
        <h2 id="tips-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 24px" }}>
          Consigli per la Pratica in Demo
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {demoTips.map((tip) => (
            <div
              key={tip.title}
              className="card"
              style={{ padding: "20px" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", margin: "0 0 10px" }}>{tip.icon}</div>
              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>{tip.title}</h3>
              <p style={{ color: "#94A3B8", fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DOVE GIOCARE DEMO ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="dove-giocare-demo-heading">
        <h2 id="dove-giocare-demo-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Dove giocare a Crazy Time in Italia nel 2026?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time Live è un game show con croupier in tempo reale fornito da Evolution e, in Italia, è disponibile presso i principali concessionari con licenza ADM. Sui siti ADM lo streaming del tavolo è normalmente accessibile solo dopo il login a un conto di gioco verificato; non esiste una &quot;demo&quot; ufficiale con saldo virtuale per i game show live. È possibile osservare il flusso e l&apos;interfaccia del gioco dall&apos;interno del tavolo anche senza puntare, ma l&apos;accesso richiede comunque un account: questo garantisce i controlli di età, geolocalizzazione e responsabilità previsti dalla normativa italiana.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Eurobet, Snai o Lottomatica: dove trovi la demo o lo stream più accessibile?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Tra i grandi operatori ADM, l&apos;accesso a Crazy Time avviene dalla sezione Live Casino/Game Show e richiede la registrazione e il login. Nessuno dei tre offre una modalità demo con credito fittizio per il game show live; il flusso video è fornito dal provider e reso disponibile nel rispetto dei requisiti 18+ e KYC.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Operatore</th>
                <th>Sezione del sito</th>
                <th>Accesso al video</th>
                <th>Demo live con saldo virtuale</th>
                <th>Note operative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eurobet</td>
                <td>Live Casino → Game Show</td>
                <td>Login obbligatorio</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Ricerca &quot;Crazy Time&quot; dalla lobby; osservazione possibile senza puntate dopo l&apos;accesso.</td>
              </tr>
              <tr>
                <td>SNAI</td>
                <td>Live Casino → Game Show</td>
                <td>Login obbligatorio</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Accesso da web e app ufficiale; limiti e regole mostrati nella lobby del tavolo.</td>
              </tr>
              <tr>
                <td>Lottomatica</td>
                <td>Live Casino → Game Show</td>
                <td>Login obbligatorio</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Controlli 18+ e geolocalizzazione; interfaccia e stream del provider.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.875rem" }}>
          <li>&quot;Demo&quot; nei game show live: non prevista. Eventuali tutorial/replay non sostituiscono una demo con saldo fittizio.</li>
          <li>Osservazione senza puntare: disponibile dopo login, a discrezione del tavolo e del provider.</li>
          <li>Regole/RTP: consultabili dalla schermata informativa del gioco all&apos;interno del tavolo.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Goldbet vs AdmiralBet: quali differenze su limiti, tavoli e qualità video?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Goldbet e AdmiralBet offrono Crazy Time tramite lo stesso provider. Poiché lo stream è globale e gestito da Evolution, regole, RTP e meccaniche sono identiche. Le differenze percepite dall&apos;utente riguardano il percorso di accesso, l&apos;interfaccia del sito/app, la gestione dell&apos;account e delle promozioni.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Caratteristica</th>
                <th>Goldbet</th>
                <th>AdmiralBet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accesso allo stream</td>
                <td>Richiede login a conto di gioco ADM</td>
                <td>Richiede login a conto di gioco ADM</td>
              </tr>
              <tr>
                <td>Demo live con saldo virtuale</td>
                <td style={{ color: "#EF4444" }}>Non disponibile</td>
                <td style={{ color: "#EF4444" }}>Non disponibile</td>
              </tr>
              <tr>
                <td>Regole/RTP</td>
                <td>Identiche (fornite dal provider)</td>
                <td>Identiche (fornite dal provider)</td>
              </tr>
              <tr>
                <td>Qualità video</td>
                <td>Streaming adattivo (dipende da banda e device)</td>
                <td>Streaming adattivo (dipende da banda e device)</td>
              </tr>
              <tr>
                <td>Visualizzazione limiti</td>
                <td>Mostrati nella lobby del tavolo prima di puntare</td>
                <td>Mostrati nella lobby del tavolo prima di puntare</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Accesso istantaneo o login? Come si entra al tavolo Crazy Time
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Per accedere a Crazy Time sui siti ADM è necessario l&apos;account verificato. L&apos;ingresso diretto senza login non è previsto per i game show live. La denominazione &quot;A/B&quot; quando presente indica istanze parallele del flusso del provider e non comporta differenze di regole o RTP; scegli quella disponibile/meno affollata.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Registrati presso un concessionario ADM e verifica l&apos;identità (es. SPID/CIE o caricamento documento) e i limiti di deposito.</li>
          <li>Esegui il login e accedi alla sezione Live Casino → Game Show.</li>
          <li>Cerca &quot;Crazy Time&quot; nella lobby e seleziona il tavolo; potrai osservare lo stream anche senza piazzare puntate.</li>
          <li>Per partecipare alle manche, assicurati di avere saldo disponibile e verifica i limiti di puntata mostrati prima del betting time.</li>
          <li>Se sono visibili più istanze (es. A/B), seleziona liberamente: sono flussi equivalenti gestiti dal provider.</li>
          <li>Utilizza gli strumenti di gioco responsabile dell&apos;operatore (autolimitazioni, autoesclusione, cronologia gioco) e gioca solo se maggiorenne.</li>
        </ul>
      </section>

      {/* ===== RTP E BONUS IN DEMO ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="rtp-demo-heading">
        <h2 id="rtp-demo-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Come funziona la demo di Crazy Time (regole, RTP, bonus)?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è un game show live di Evolution con ruota principale, Top Slot e 4 round bonus. Nei casinò con licenza ADM, non esiste una demo ufficiale con saldo virtuale per i game show live: la &quot;prova&quot; consiste di norma nell&apos;osservare lo stream dopo il login, senza piazzare puntate. L&apos;RTP è definito a livello di singola puntata e non cambia in base alla presenza o meno di una modalità demo.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Qual è l&apos;RTP di Crazy Time e come incide in modalità demo?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          L&apos;RTP di Crazy Time varia a seconda del tipo di scommessa. Ricorda: l&apos;RTP è una media teorica di lungo periodo; in singole sessioni gli esiti possono discostarsi ampiamente.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Puntata</th>
                <th>RTP (%)</th>
                <th>Osservazioni</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Numero 1</td><td style={{ color: "#10B981" }}>96,08</td><td>Payout più frequente, volatilità bassa.</td></tr>
              <tr><td>Numero 2</td><td style={{ color: "#10B981" }}>95,95</td><td>Frequenza media, volatilità contenuta.</td></tr>
              <tr><td>Numero 5</td><td style={{ color: "#10B981" }}>95,78</td><td>Frequenza inferiore, volatilità media.</td></tr>
              <tr><td>Numero 10</td><td style={{ color: "#F59E0B" }}>95,73</td><td>Frequenza bassa, volatilità più elevata.</td></tr>
              <tr><td>Coin Flip</td><td style={{ color: "#F59E0B" }}>95,70</td><td>Bonus rapido, esito binario rosso/blu.</td></tr>
              <tr><td>Cash Hunt</td><td style={{ color: "#F59E0B" }}>95,27</td><td>Scelta su parete di target, ampia dispersione esiti.</td></tr>
              <tr><td>Pachinko</td><td style={{ color: "#EF4444" }}>94,33</td><td>Potenziale da &quot;DOUBLE&quot; ripetuti, alta volatilità.</td></tr>
              <tr><td>Crazy Time</td><td style={{ color: "#EF4444" }}>94,41</td><td>Ruota bonus principale, massima volatilità potenziale.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Round bonus spiegati: Coin Flip, Cash Hunt, Pachinko, Crazy Time
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I round bonus si attivano quando la ruota principale si ferma sul relativo segmento. Il Top Slot, che scorre sopra la ruota all&apos;inizio di ogni giro, può applicare un moltiplicatore a uno specifico numero o bonus: se lo stesso risultato viene poi centrato sulla ruota, i relativi payout sono potenziati.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Coin Flip:</strong> il presentatore prepara due moltiplicatori (rosso e blu). Una moneta viene lanciata; il colore vincente determina il payout applicato alla puntata.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cash Hunt:</strong> appare una parete con simboli coperti che nascondono moltiplicatori. I simboli vengono rimescolati; il giocatore seleziona un target e rivela il moltiplicatore assegnato.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Pachinko:</strong> un disco viene lasciato cadere su un tabellone con pioli e tasche finali. Se il disco atterra su &quot;DOUBLE&quot;, tutti i valori raddoppiano e il disco viene rilanciato, con possibilità di raddoppi consecutivi.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Crazy Time:</strong> si accede a una stanza virtuale con una grande ruota a più segmenti. La ruota contiene moltiplicatori e caselle &quot;DOUBLE&quot;/&quot;TRIPLE&quot; che aumentano tutti i valori e fanno rigirare, moltiplicando progressivamente il potenziale.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Cosa testare nella demo: puntate, moltiplicatori e strategie?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Copertura delle puntate:</strong> prova combinazioni &quot;numeri + 1 bonus&quot; vs &quot;solo bonus&quot;. Valuta l&apos;impatto su frequenza di vincita e varianza del saldo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Dimensionamento dello stake:</strong> testa tagli fissi (flat betting) rispetto a percentuali del bankroll. Evita incrementi martingala: aumentano il rischio senza migliorare l&apos;RTP.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Durata della sessione:</strong> imposta stop-loss e obiettivi realistici; misura come la varianza incide in 50/100/200 round osservati.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Effetto del Top Slot:</strong> annota ogni round con match Top Slot+risultato e il relativo payout; capirai che il boost è opportunistico e non prevedibile.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Preferenze personali:</strong> se tolleri oscillazioni ampie, focalizza i bonus ad alta volatilità; se preferisci stabilità, aumenta l&apos;esposizione ai numeri bassi.</li>
        </ul>
      </section>

      {/* ===== DEMO SENZA REGISTRAZIONE ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="senza-registrazione-heading">
        <h2 id="senza-registrazione-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Crazy Time demo senza registrazione: è davvero possibile?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          In Italia, Crazy Time Live è distribuito da Evolution attraverso concessionari con licenza ADM. Per i game show live non esiste una &quot;demo&quot; ufficiale con saldo virtuale accessibile senza registrazione: per motivi normativi (18+, KYC e tracciamento responsabile), lo stream è visibile solo dopo login a un conto di gioco. Alcuni operatori consentono di entrare al tavolo e osservare senza puntare, ma sempre dopo autenticazione.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          È disponibile una demo ufficiale di Crazy Time Live in Italia?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Opzione</th>
                <th>Richiede registrazione</th>
                <th>Disponibilità legale (ADM)</th>
                <th>Saldo virtuale</th>
                <th>Cosa consente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crazy Time Live (prodotto originale)</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
                <td style={{ color: "#10B981" }}>Sì, tramite concessionari ADM</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Giocare o osservare il tavolo dopo login, con regole/RTP del provider</td>
              </tr>
              <tr>
                <td>Osservazione senza puntare (dopo login)</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>N/D</td>
                <td>Vedere flusso, interfaccia e tempi del gioco senza effettuare puntate</td>
              </tr>
              <tr>
                <td>Versioni RNG &quot;for fun&quot; (ispirati ai game show)</td>
                <td>Spesso No</td>
                <td style={{ color: "#F59E0B" }}>Sì, se su dominio ADM</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>Provare meccaniche RNG; non equivalgono a Crazy Time Live</td>
              </tr>
              <tr>
                <td>Video tutorial/replay ufficiali del provider</td>
                <td style={{ color: "#10B981" }}>No</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>N/D</td>
                <td>Comprendere regole e round bonus tramite contenuti informativi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali alternative legali esistono: replay, tutorial, versioni RNG?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Video ufficiali del provider:</strong> la pagina di prodotto di Evolution contiene clip e spiegazioni utili su regole e round bonus.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Guide degli operatori ADM:</strong> molte lobby includono schede &quot;Info/Regole&quot; accessibili dopo login con RTP, payout e limiti, senza la necessità di puntare.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Giochi RNG in modalità for fun:</strong> diversi casinò ADM offrono slot e giochi da tavolo in prova senza registrazione; sono utili per esercitarsi su gestione del bankroll e tempi di gioco, ma non riproducono stream, host e moltiplicatori live di Crazy Time.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Materiali di gioco responsabile:</strong> consulta le sezioni dedicate dei concessionari e le risorse ADM per limiti, autoesclusione e test di autovalutazione.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Privacy e geolocalizzazione: come sono gestite in demo e live?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Autenticazione e KYC:</strong> registrazione con dati anagrafici e verifica documentale; in molti casi supporto SPID/CIE per velocizzare l&apos;onboarding, nel rispetto del GDPR.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Geolocalizzazione:</strong> controllo dell&apos;IP pubblico e, su mobile, richiesta opzionale di servizi di localizzazione; l&apos;accesso dall&apos;estero può essere limitato dai concessionari ADM.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cookie e tracciamento:</strong> banner di consenso per cookie tecnici/analitici/di profilazione; lo stream richiede cookie tecnici per la sessione.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Autoesclusione e limiti:</strong> applicazione automatica dell&apos;autoesclusione registrata (RUA) e disponibilità di limiti di deposito, perdita e tempo sessione sul conto ADM.</li>
        </ul>
      </section>

      {/* ===== EVOLUZIONE FORMAT ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="evoluzione-demo-heading">
        <h2 id="evoluzione-demo-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Come si è evoluto il formato fino a Crazy Time Live?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          I game show live hanno compiuto un salto di qualità dal modello &quot;ruota dei soldi&quot; lineare a format ibridi che combinano presentazione televisiva, RNG certificati per moltiplicatori, round bonus multi‑stadio e streaming a bassa latenza. Dal primo Dream Catcher (2017) all&apos;arrivo di Crazy Time (2020), l&apos;attenzione si è spostata su interattività, moltiplicatori casuali e livelli di volatilità differenziati.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Dai primi game show (Dream Catcher) a Crazy Time: cosa è cambiato?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Gioco</th>
                <th>Anno</th>
                <th>Meccanica principale</th>
                <th>Moltiplicatori</th>
                <th>Round bonus</th>
                <th>Nota distintiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dream Catcher (Evolution)</td>
                <td>2017</td>
                <td>Ruota dei soldi con segmenti numerici</td>
                <td>2× e 7× su segmenti dedicati</td>
                <td>Nessuno</td>
                <td>Baseline del formato money wheel live</td>
              </tr>
              <tr>
                <td>Lightning Roulette (Evolution)</td>
                <td>2018</td>
                <td>Roulette live con numeri &quot;fulminati&quot;</td>
                <td>50×–500× su pieno</td>
                <td>Nessuno</td>
                <td>Introduzione dei moltiplicatori RNG su esiti selezionati</td>
              </tr>
              <tr>
                <td>Monopoly Live (Evolution)</td>
                <td>2019</td>
                <td>Ruota tipo Dream Catcher con evento bonus</td>
                <td>Carte &quot;Chance&quot; con moltiplicatori/cash</td>
                <td>2 Rolls / 4 Rolls</td>
                <td>IP ufficiale MONOPOLY e percorso 3D nel bonus</td>
              </tr>
              <tr>
                <td>Crazy Time (Evolution)</td>
                <td>2020</td>
                <td>Ruota + Top Slot + 4 bonus distinti</td>
                <td>Top Slot applica moltiplicatori casuali</td>
                <td>Coin Flip, Cash Hunt, Pachinko, Crazy Time</td>
                <td>Massima interattività e volatilità modulabile</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali tecnologie abilitano moltiplicatori e streaming a bassa latenza?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>RNG certificati:</strong> i moltiplicatori (es. Top Slot in Crazy Time) sono generati da sistemi RNG conformi alle normative delle giurisdizioni servite.</li>
          <li><strong style={{ color: "#F8FAFC" }}>HTML5 client:</strong> interfaccia responsive che gestisce puntate, HUD dei moltiplicatori, scelte nei bonus e notifiche di &quot;betting time&quot;.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Streaming a bassa latenza:</strong> protocolli come WebRTC e profili low‑latency con bitrate adattivo per ridurre il ritardo end‑to‑end.</li>
          <li><strong style={{ color: "#F8FAFC" }}>ABR e CDN:</strong> adaptive bitrate e distribuzione via CDN per reggere picchi di utenza e offrire qualità video stabile su reti eterogenee.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Sincronizzazione stato‑gioco:</strong> canali sicuri di messaggistica (es. WebSocket) per inviare in tempo reale esiti, moltiplicatori e timer ai client.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Perché alcune strade alternative non hanno sfondato?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Plugin proprietari/Flash: dipendenze legacy ostacolavano sicurezza, mobile e aggiornamenti; l&apos;ecosistema è migrato a HTML5.</li>
          <li>Streaming ad alta latenza: flussi HLS classici introducevano ritardi incompatibili con finestre di puntata e interazioni live.</li>
          <li>Cloni puramente RNG: senza presentatore e scena live, engagement e percezione &quot;show&quot; risultavano inferiori, nonostante la facilità di prova for‑fun.</li>
          <li>VR/3D pesante: barriere d&apos;ingresso hardware e usabilità hanno limitato la base utenti rispetto a interfacce web/mobile leggere.</li>
          <li>Over‑gamification: meccaniche troppo complesse confondevano i giocatori e complicavano la conformità informativa su RTP e regole.</li>
        </ul>
      </section>

      {/* ===== CRITICA ALLA DEMO ===== */}
      <section style={{ marginBottom: "64px" }} aria-labelledby="critica-demo-heading">
        <h2 id="critica-demo-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Qual è la critica più forte alla demo di Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          La principale critica alla &quot;demo&quot; di Crazy Time è che può alterare la percezione del rischio e della volatilità. Senza la pressione delle perdite reali, i giocatori tendono a sovrastimare la frequenza dei round bonus o l&apos;impatto dei moltiplicatori, cadendo in bias cognitivi che, una volta nel live con denaro vero, possono tradursi in overbetting, gestione inefficiente del bankroll e scelte impulsive.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          La demo può creare un&apos;illusione di vincite? Rischi e bias cognitivi
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Bias cognitivo</th>
                <th>Credenza fuorviante</th>
                <th>Effetto tipico in modalità demo</th>
                <th>Contromisure pratiche</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gambler&apos;s fallacy</td>
                <td>&quot;Dopo molti 1, ora deve uscire un bonus.&quot;</td>
                <td>Sovrastima della probabilità di esiti rari dopo serie sfavorevoli.</td>
                <td>Tratta ogni giro come evento indipendente; non inseguire sequenze.</td>
              </tr>
              <tr>
                <td>Illusione di controllo</td>
                <td>&quot;La mia scelta nel bonus cambia l&apos;esito atteso.&quot;</td>
                <td>Attribuzione eccessiva alla propria abilità in meccaniche aleatorie.</td>
                <td>Ricorda che i payout attesi non cambiano con la scelta grafica.</td>
              </tr>
              <tr>
                <td>Hot‑hand/Recency</td>
                <td>&quot;Ha pagato poco, ora pagherà molto.&quot;</td>
                <td>Proiezione del recente sul futuro; aumento immotivato della puntata.</td>
                <td>Usa stake prefissati; non adattare in base a pochi esiti recenti.</td>
              </tr>
              <tr>
                <td>Outcome bias</td>
                <td>&quot;La strategia è buona perché l&apos;ultimo giro ha vinto.&quot;</td>
                <td>Valutazione della qualità della scelta solo dall&apos;esito finale.</td>
                <td>Valuta le decisioni sul rispetto del piano, non sui singoli risultati.</td>
              </tr>
              <tr>
                <td>Survivorship bias</td>
                <td>&quot;Vedo solo clip di big win, quindi sono frequenti.&quot;</td>
                <td>Sovraesposizione a highlight e sottostima degli esiti comuni.</td>
                <td>Considera la distribuzione completa degli esiti e l&apos;RTP per puntata.</td>
              </tr>
              <tr>
                <td>Loss aversion attenuata</td>
                <td>&quot;Se funziona in prova, funzionerà anche col reale.&quot;</td>
                <td>Sottostima dello stress da perdita che cambia il comportamento.</td>
                <td>Simula regole di stake e stop‑loss identiche al live.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Il bankroll in modalità prova altera le decisioni nel live reale?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Spesso sì. Con saldo virtuale o in pura osservazione si riducono attrito psicologico e avversione alla perdita, portando a dimensionamenti della puntata che non sarebbero tollerabili con denaro reale. Inoltre, l&apos;assenza di stress da drawdown in demo maschera la varianza dei bonus ad alta volatilità e induce a sottostimare l&apos;impatto di serie negative prolungate nel live.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Oversizing dello stake:</strong> in prova si tende a usare tagli più alti per &quot;accelerare&quot; i risultati; nel live questo amplifica la varianza e può erodere rapidamente il saldo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Chasing delle perdite:</strong> la falsa sicurezza maturata in demo alimenta l&apos;idea di &quot;recupero&quot; aumentando la puntata, elevando il rischio di break‑even fallace.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Negligenza dello stop‑loss:</strong> in assenza di costo reale, le regole di uscita vengono ignorate, rendendo difficile applicarle poi in condizioni di stress.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Come passare dalla prova al gioco responsabile con strumenti ADM?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Autovalutazione preventiva:</strong> definisci budget non riutilizzabile e obiettivi di tempo; se i risultati del test dipendono da &quot;colpi di fortuna&quot;, ridimensiona le aspettative.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Imposta limiti obbligatori:</strong> configura limiti di deposito, perdita e tempo sul conto ADM prima del primo accesso al live.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Reality check e timer sessione:</strong> attiva notifiche periodiche e durate massime; quando scatta l&apos;avviso, chiudi la sessione indipendentemente dall&apos;esito.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Stake fisso e stop‑loss:</strong> replica nel live lo stesso taglio unitario testato e inserisci uno stop‑loss giornaliero non revocabile in sessione.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cooling‑off:</strong> usa pause temporanee in caso di emozioni intense o perdita di controllo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Autoesclusione (RUA):</strong> se necessario, attiva l&apos;autoesclusione dal gioco attraverso gli strumenti previsti dal Registro Unico delle Autoesclusioni di ADM.</li>
        </ul>
      </section>

      {/* CTA casinos */}
      <section aria-labelledby="ready-heading">
        <h2 id="ready-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Pronto a Giocare per Davvero?
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 28px", fontSize: "0.95rem" }}>
          Quando sei pronto a passare all&apos;esperienza reale, scegli un concessionario ADM autorizzato. Prima di iniziare, imposta i limiti di deposito, spesa e tempo previsti dal tuo conto di gioco e usa gli strumenti di gioco responsabile dell&apos;operatore.
        </p>
        <p style={{ margin: "0 0 20px" }}>
          <span className="badge badge-red">Solo 18+</span>{" "}
          <span style={{ color: "#64748B", fontSize: "0.8rem" }}>Il gioco d&apos;azzardo comporta rischi finanziari. Gioca solo con denaro che puoi permetterti di perdere.</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {casinos.map((casino) => (
            <CasinoCTA key={casino.id} casino={casino} variant="full" />
          ))}
        </div>
      </section>
    </div>
  );
}
