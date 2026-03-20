import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { bonusRounds } from "@/data/bonuses";
import { infoFAQ } from "@/data/faq";
import BonusCard from "@/components/shared/BonusCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { Shield, Scale, Flame, Coins, Crosshair, CircleDot, DoorOpen, AlertTriangle, Briefcase, Smartphone, Monitor, Tv } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time: Trucchi, Strategia, Regole e Come Si Gioca 2026",
  description:
    "Trucchi e strategie Crazy Time per massimizzare le vincite. Come si gioca, regole complete, probabilità dei bonus e RTP ufficiale spiegati in modo chiaro.",
  alternates: { canonical: `${SITE_URL}/info` },
  openGraph: {
    title: "Crazy Time: Trucchi, Strategia, Regole e Come Si Gioca 2026",
    description: "Trucchi e strategie Crazy Time per massimizzare le vincite. Come si gioca, regole complete, probabilità dei bonus e RTP ufficiale spiegati in modo chiaro.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/info`,
  },
};

const strategies = [
  {
    name: "Strategia Conservativa",
    icon: <Shield size={24} color="#3B82F6" strokeWidth={1.5} />,
    color: "#3B82F6",
    description: "Concentrati sulle puntate su Numero 1 e Numero 2. Queste offrono le vincite più frequenti (frequenze rispettivamente del 38,89% e 24,07%) e il RTP più elevato (96,08% e 95,95%). Adatta ai giocatori che preferiscono sessioni lunghe piuttosto che alta volatilità.",
    pros: ["Sessioni più lunghe per bankroll", "Puntate con RTP più alto", "Piccole vincite costanti"],
    cons: ["Pagamenti bassi", "Nessun bonus round emozionante", "Richiede un grande bankroll per vincite importanti"],
  },
  {
    name: "Strategia Bilanciata",
    icon: <Scale size={24} color="#10B981" strokeWidth={1.5} />,
    color: "#10B981",
    description: "Distribuisci le puntate tra i numeri (1, 2, 5) e uno o due segmenti bonus. Questo approccio copre più della ruota mantenendo un RTP ragionevole. Destina circa il 70% della tua puntata ai numeri e il 30% ai bonus.",
    pros: ["Copre più esiti", "Esposizione ai bonus round", "Sostenibilità del bankroll ragionevole"],
    cons: ["Complesso da gestire", "Pagamenti bonus diluiti", "RTP complessivo leggermente più basso"],
  },
  {
    name: "Strategia Aggressiva",
    icon: <Flame size={24} color="#EF4444" strokeWidth={1.5} />,
    color: "#EF4444",
    description: "Forte concentrazione sui segmenti bonus, in particolare Coin Flip e Cash Hunt. Alto rischio, alta ricompensa. Adatta solo ai giocatori con un bankroll grande rispetto alla propria puntata, in grado di sostenere lunghi periodi senza bonus.",
    pros: ["Potenziali pagamenti enormi", "Gameplay emozionante", "I moltiplicatori del Top Slot sono particolarmente incisivi"],
    cons: ["Alta varianza — possibili lunghe serie negative", "RTP più basso", "Richiede disciplina per non inseguire le perdite"],
  },
];

const tocItems = [
  { id: "about", label: "Informazioni su Crazy Time" },
  { id: "coin-flip", label: "Coin Flip" },
  { id: "cash-hunt", label: "Cash Hunt" },
  { id: "pachinko", label: "Pachinko" },
  { id: "crazy-time-bonus", label: "Crazy Time Bonus" },
  { id: "strategies", label: "Strategie" },
  { id: "mobile", label: "Mobile e Dispositivi" },
  { id: "faq", label: "FAQ" },
];

export default function InfoPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 16px" }}>

      {/* Hero */}
      <header style={{ marginBottom: "48px" }}>
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
            src="/images/hero/info.webp"
            alt="Informazioni sul gioco Crazy Time e panoramica dei bonus round"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.60)" }} aria-hidden="true" />
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
              Crazy Time Trucchi e Strategie –{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Guida Completa 2026
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>
              Guida dettagliata a tutti i bonus round, le strategie e le funzionalità del gioco.
            </p>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <nav
        aria-label="Indice"
        style={{
          background: "#1A1128",
          border: "1px solid #2D2245",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "60px",
        }}
      >
        <h2 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 16px" }}>Indice</h2>
        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "8px",
            margin: 0,
            padding: "0 0 0 20px",
          }}
        >
          {tocItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={{ color: "#7B2FBE", textDecoration: "none", fontSize: "0.875rem" }}
              >
                {i + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* About */}
      <section id="about" style={{ marginBottom: "72px" }} aria-labelledby="about-heading">
        <h2 id="about-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 24px" }}>
          Informazioni su Crazy Time
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }} className="info-two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
              Crazy Time Live di Evolution è un game show su ruota con <strong style={{ color: "#F8FAFC" }}>54 segmenti</strong>, presentatore dal vivo e un <strong style={{ color: "#F8FAFC" }}>Top Slot</strong> che a ogni giro può applicare un moltiplicatore a un numero o a un bonus. Le puntate possibili coprono numeri (1, 2, 5, 10) e i quattro round bonus: Cash Hunt, Pachinko, Coin Flip e Crazy Time. Le promozioni dei casinò possono talvolta applicarsi al Live Casino, ma non modificano le meccaniche o le probabilità del gioco.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
              I quattro bonus si attivano atterrando sul relativo segmento della ruota: <strong style={{ color: "#F8FAFC" }}>Cash Hunt</strong> (griglia di simboli coperti, scelta del bersaglio), <strong style={{ color: "#F8FAFC" }}>Pachinko</strong> (disco che cade su tabellone con pioli e caselle DOUBLE), <strong style={{ color: "#F8FAFC" }}>Coin Flip</strong> (lancio di moneta tra due moltiplicatori) e <strong style={{ color: "#F8FAFC" }}>Crazy Time</strong> (ruota gigante con moltiplicatori, DOUBLE e TRIPLE e scelta del flapper). Eventuali moltiplicatori del Top Slot, quando abbinati al bonus e attivati, si applicano ai risultati di quel round.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
              L&apos;RTP teorico del gioco è definito dal provider e non cambia in presenza o assenza di promozioni. Per Crazy Time i valori per puntata variano tipicamente tra il <strong style={{ color: "#F8FAFC" }}>94,33% e il 96,08%</strong> a seconda dell&apos;esito puntato. Prima di aderire a qualsiasi promo Live, verifica sempre la contribuzione del gioco ai requisiti di puntata e le restrizioni indicate nei Termini e Condizioni dell&apos;operatore ADM.
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(123,47,190,0.15), rgba(245,158,11,0.08))",
              border: "1px solid #2D2245",
              borderRadius: "16px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: 0 }}>Dati Principali</h3>
            {[
              { label: "Sviluppatore", value: "Evolution Gaming" },
              { label: "Data di Lancio", value: "Luglio 2020" },
              { label: "Gioco Base", value: "Ruota dei soldi Dream Catcher" },
              { label: "Disponibilità", value: "Live 24/7" },
              { label: "Tavoli", value: "Crazy Time + Crazy Time A" },
              { label: "Segmenti Ruota", value: "54" },
              { label: "Round Bonus", value: "4 (CF, CH, Pa, CT)" },
              { label: "Moltiplicatore Max", value: "20.000x" },
              { label: "RTP (Numero 1)", value: "96,08%" },
            ].map((fact) => (
              <div key={fact.label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #2D224550" }}>
                <span style={{ color: "#94A3B8", fontSize: "0.875rem" }}>{fact.label}</span>
                <span style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.875rem" }}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Rounds — Detailed */}
      {bonusRounds.map((bonus, index) => (
        <section
          key={bonus.id}
          id={bonus.id}
          style={{ marginBottom: "72px" }}
          aria-labelledby={`${bonus.id}-heading`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${bonus.color}, ${bonus.accentColor})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {[
                <Coins key="coins" size={26} color="#fff" strokeWidth={1.5} />,
                <Crosshair key="crosshair" size={26} color="#fff" strokeWidth={1.5} />,
                <CircleDot key="circledot" size={26} color="#fff" strokeWidth={1.5} />,
                <DoorOpen key="dooropen" size={26} color="#fff" strokeWidth={1.5} />,
              ][index]}
            </div>
            <h2 id={`${bonus.id}-heading`} style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>
              {bonus.name} — Guida Dettagliata
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "32px" }} className="bonus-detail-grid">
            <div>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
                {bonus.description}
              </p>

              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "24px 0 12px" }}>
                Come Funziona — Passo dopo Passo
              </h3>
              <ul style={{ margin: 0, padding: "0 0 0 0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {bonus.mechanics.map((mechanic, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "12px 16px",
                      background: "rgba(26,17,40,0.7)",
                      borderRadius: "8px",
                      borderLeft: `3px solid ${bonus.color}`,
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: `${bonus.color}30`,
                        color: bonus.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: "1.6" }}>{mechanic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <BonusCard bonus={bonus} variant="detailed" />

              <div
                style={{
                  background: "#1A1128",
                  border: "1px solid #2D2245",
                  borderRadius: "12px",
                  padding: "20px",
                  marginTop: "16px",
                }}
              >
                <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 14px" }}>Statistiche in Breve</h3>
                {[
                  { label: "Frequenza", value: bonus.hitRate, color: "#94A3B8" },
                  { label: "Vincita Max", value: bonus.maxWin, color: "#F59E0B" },
                  { label: "Pag. Medio", value: bonus.avgPayout, color: "#10B981" },
                  { label: "Vincita Record", value: bonus.recordWin, color: "#EF4444" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid #2D224550",
                    }}
                  >
                    <span style={{ color: "#64748B", fontSize: "0.8rem" }}>{stat.label}</span>
                    <span style={{ color: stat.color, fontWeight: 700, fontSize: "0.9rem" }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Strategies */}
      <section id="strategies" style={{ marginBottom: "72px" }} aria-labelledby="strategies-heading">
        <h2 id="strategies-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 12px" }}>
          Strategie
        </h2>
        <div
          style={{
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "10px",
            padding: "14px 18px",
            marginBottom: "28px",
            fontSize: "0.875rem",
            color: "#94A3B8",
          }}
        >
          <strong style={{ color: "#EF4444", display: "inline-flex", alignItems: "center", gap: "6px" }}><AlertTriangle size={16} color="#EF4444" strokeWidth={2} /> Avvertenza:</strong> I risultati sono completamente casuali. Nessuna strategia può garantire vincite. Gioca responsabilmente.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {strategies.map((strategy) => (
            <div
              key={strategy.name}
              style={{
                background: "#1A1128",
                border: `1px solid ${strategy.color}30`,
                borderRadius: "16px",
                padding: "28px",
                borderLeft: `4px solid ${strategy.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                {strategy.icon}
                <h3 style={{ color: "#F8FAFC", fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{strategy.name}</h3>
              </div>
              <p style={{ color: "#94A3B8", lineHeight: "1.7", margin: "0 0 20px", fontSize: "0.9rem" }}>
                {strategy.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <p style={{ color: "#10B981", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", margin: "0 0 8px" }}>Pro</p>
                  <ul style={{ margin: 0, padding: "0 0 0 16px", color: "#94A3B8", fontSize: "0.85rem" }}>
                    {strategy.pros.map((p) => <li key={p} style={{ marginBottom: "4px" }}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ color: "#EF4444", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", margin: "0 0 8px" }}>Contro</p>
                  <ul style={{ margin: 0, padding: "0 0 0 16px", color: "#94A3B8", fontSize: "0.85rem" }}>
                    {strategy.cons.map((c) => <li key={c} style={{ marginBottom: "4px" }}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bankroll tips */}
        <div
          style={{
            background: "rgba(16,185,129,0.05)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: "12px",
            padding: "24px",
            marginTop: "24px",
          }}
        >
          <h3 style={{ color: "#10B981", fontWeight: 700, fontSize: "1rem", margin: "0 0 16px", display: "flex", alignItems: "center", gap: "8px" }}><Briefcase size={18} color="#10B981" strokeWidth={2} /> Consigli per la Gestione del Bankroll</h3>
          <ul style={{ margin: 0, padding: "0 0 0 20px", color: "#94A3B8", fontSize: "0.875rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Verifica la contribuzione di Crazy Time al wagering: se è 0% o molto bassa, la promo non è adatta al Live Casino.</li>
            <li>Controlla la puntata massima consentita durante il wagering e l&apos;elenco dei giochi esclusi dalla promozione.</li>
            <li>Calcola il turnover effettivo richiesto e pianifica le sessioni in base alla scadenza del bonus.</li>
            <li>Attenzione ai cap sulle vincite derivanti da bonus: un tetto basso può azzerare il valore atteso dell&apos;offerta.</li>
            <li>Gioca solo su operatori con concessione ADM e usa gli strumenti di autolimitazione disponibili nel tuo profilo.</li>
          </ul>
        </div>
      </section>

      {/* Mobile */}
      <section id="mobile" style={{ marginBottom: "72px" }} aria-labelledby="mobile-heading">
        <h2 id="mobile-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Compatibilità Mobile e Dispositivi
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { icon: <Smartphone size={28} color="#06B6D4" strokeWidth={1.5} />, title: "iOS (iPhone/iPad)", desc: "iOS 14.0+ tramite Safari o app del casinò. Interfaccia completamente ottimizzata per il tocco." },
            { icon: <Smartphone size={28} color="#10B981" strokeWidth={1.5} />, title: "Android", desc: "Android 8.0+ tramite browser o APK. Prestazioni fluide su dispositivi con 2 GB di RAM o più." },
            { icon: <Monitor size={28} color="#7B2FBE" strokeWidth={1.5} />, title: "Desktop", desc: "Chrome, Firefox, Edge, Safari. Streaming Full HD, esperienza ottimale per la gestione di puntate multiple." },
            { icon: <Tv size={28} color="#F59E0B" strokeWidth={1.5} />, title: "Smart TV", desc: "Accessibile tramite browser su smart TV. Funzionalità di puntata limitate, ma ottimo per seguire il gioco." },
          ].map((device) => (
            <div key={device.title} className="card" style={{ padding: "20px" }}>
              <div style={{ marginBottom: "10px" }}>{device.icon}</div>
              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>{device.title}</h3>
              <p style={{ color: "#94A3B8", fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>{device.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ color: "#94A3B8", marginTop: "20px", fontSize: "0.9rem", lineHeight: "1.7" }}>
          Gioca solo presso casinò con concessione <strong style={{ color: "#F8FAFC" }}>ADM</strong>, che offrono streaming ufficiale di Evolution e strumenti di gioco responsabile. Su mobile, preferisci app ufficiali iOS/Android o il sito mobile HTML5 dell&apos;operatore. Verifica i limiti di puntata del tavolo nella lobby e abilita gli strumenti di autolimitazione — limiti di deposito, spesa e autoesclusione — direttamente nel profilo del tuo conto di gioco prima di iniziare a puntare.
        </p>
      </section>

      {/* ===== BONUS IN ITALIA ===== */}
      <section style={{ marginBottom: "72px" }} aria-labelledby="bonus-italia-heading">
        <h2 id="bonus-italia-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Dove ottenere i migliori Crazy Time bonus in Italia?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          In Italia i bonus per Crazy Time Live sono disponibili esclusivamente presso operatori con concessione ADM. Le promozioni legate ai game show live cambiano spesso, sono consultabili dopo il login e devono rispettare regole chiare su requisiti di puntata, contribuzione dei giochi e scadenze. Prima di aderire, verifica sempre i Termini e Condizioni sul sito dell&apos;operatore e la presenza del marchio e numero di concessione ADM.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time bonus senza deposito: esiste e come funziona?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I &quot;bonus senza deposito&quot; sono rari e, quando disponibili, di norma non si applicano ai game show live come Crazy Time. Nella maggior parte dei casi i Termini e Condizioni escludono i giochi Live Casino oppure assegnano ai game show un contributo al wagering pari allo 0%. Questo perché i giochi live hanno dinamiche RTP e volatilità diverse dalle slot, per cui gli operatori limitano l&apos;uso dei bonus promozionali su questi titoli.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Tipo di bonus senza deposito</th>
                <th>Valido su Crazy Time?</th>
                <th>Dettagli tipici in Italia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bonus registrazione in denaro</td>
                <td style={{ color: "#EF4444" }}>Quasi mai</td>
                <td>Game show live spesso esclusi o con contributo 0% al wagering nei T&amp;C</td>
              </tr>
              <tr>
                <td>Free spins/giocate gratis</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Valgono per slot; non applicabili a Crazy Time che non è una slot</td>
              </tr>
              <tr>
                <td>Token Live/Free Bet Live</td>
                <td style={{ color: "#F59E0B" }}>Raro</td>
                <td>Se presenti, validità breve e limiti stringenti; verificare sempre i T&amp;C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali operatori ADM offrono promo dedicate a Crazy Time?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Le promozioni &quot;dedicate&quot; esclusivamente a Crazy Time non sono continuative: gli operatori ADM propongono più spesso iniziative generiche per il Live Casino (es. cashback o missioni settimanali) e, a seconda del periodo, Crazy Time può rientrare tra i giochi eleggibili. L&apos;accesso ai dettagli è in genere riservato agli utenti registrati.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Operatore ADM</th>
                <th>Tipologia promo osservabile</th>
                <th>Validità su Crazy Time</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eurobet</td>
                <td>Promo Live Casino e iniziative periodiche</td>
                <td style={{ color: "#F59E0B" }}>Variabile</td>
                <td>Dettagli e giochi ammessi visibili dopo login</td>
              </tr>
              <tr>
                <td>Lottomatica</td>
                <td>Eventi e missioni su giochi live (quando attivi)</td>
                <td style={{ color: "#F59E0B" }}>Variabile</td>
                <td>Controllare i T&amp;C della promo in corso</td>
              </tr>
              <tr>
                <td>Sisal</td>
                <td>Cashback/tornei Live Casino a finestre temporali</td>
                <td style={{ color: "#F59E0B" }}>Variabile</td>
                <td>Requisiti e contribuzione indicati nell&apos;area personale</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Requisiti chiave da confrontare: importo, validità, wagering
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Per valutare la convenienza di un bonus su Crazy Time (quando ammesso), confronta importo, requisiti di puntata, contribuzione del gioco, puntata massima consentita, scadenza e limiti di vincita. La lettura integrale dei T&amp;C è essenziale: piccole differenze possono cambiare drasticamente la difficoltà del wagering.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "0" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Requisito</th>
                <th>Perché conta</th>
                <th>Cosa verificare nei T&amp;C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Importo bonus</td>
                <td>Determina il potenziale valore dell&apos;offerta</td>
                <td>Se è percentuale o fisso; eventuale cap alle vincite derivanti da bonus</td>
              </tr>
              <tr>
                <td>Wagering (x)</td>
                <td>Indica il volume di puntate richiesto prima del prelievo</td>
                <td>Se il requisito si applica a bonus, deposito o entrambi</td>
              </tr>
              <tr>
                <td>Contribuzione di Crazy Time</td>
                <td>Stabilisce quanto il gioco aiuta a completare il wagering</td>
                <td>Se il contributo è 0% (comune per i live) o diverso; eventuali esclusioni</td>
              </tr>
              <tr>
                <td>Puntata massima per round</td>
                <td>Evita strategie ad alto rischio vietate in bonus play</td>
                <td>Importo massimo ammesso per singola puntata durante il wagering</td>
              </tr>
              <tr>
                <td>Validità/scadenza</td>
                <td>Tempo disponibile per completare i requisiti</td>
                <td>Numero di giorni; orari o finestre promozionali specifiche</td>
              </tr>
              <tr>
                <td>Giochi esclusi</td>
                <td>Previene l&apos;annullamento del bonus per uso non conforme</td>
                <td>Elenco dei titoli/vertical esclusi; eventuali categorie &quot;Live&quot; escluse</td>
              </tr>
              <tr>
                <td>Deposito minimo/metodi</td>
                <td>Condiziona l&apos;accesso a talune promo</td>
                <td>Importo minimo e metodi di pagamento esclusi (es. e-wallet specifici)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== BONUS INCIDE SU RTP ===== */}
      <section style={{ marginBottom: "72px" }} aria-labelledby="bonus-rtp-heading">
        <h2 id="bonus-rtp-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Il bonus incide su RTP e volatilità?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          I bonus dei casinò online non cambiano l&apos;RTP teorico del gioco fissato dal provider: l&apos;edge resta invariato. Per Crazy Time, i valori teorici pubblicati variano per puntata (tipicamente ~94%–96%). Tuttavia, un bonus può alterare il rendimento &quot;effettivo&quot; sul bankroll per via di requisiti di puntata, contributi dei giochi live e limiti. Di frequente i game show Live hanno contribuzione ridotta o nulla ai fini del wagering.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>RTP del gioco:</strong> resta lo stesso con o senza promo; è definito dal provider.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Contribuzione:</strong> se Crazy Time contribuisce al 10% e il wagering è 30× su 20€ di bonus, il turnover richiesto è 600€ &quot;contributivi&quot;, cioè 6.000€ di puntate effettive sul gioco.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Volatilità percepita:</strong> con limiti di puntata massima, scadenze brevi o contribuzione bassa, il percorso di wagering può risultare più volatile pur senza cambiare l&apos;RTP del gioco.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cap e restrizioni:</strong> eventuali tetti alle vincite da bonus e l&apos;esclusione di alcuni round possono ridurre il valore atteso della promo.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Dove giocare in streaming e su mobile in Italia in modo sicuro?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Gioca solo presso casinò con concessione ADM, che offrono streaming ufficiale di Evolution e strumenti di gioco responsabile. In Italia, marchi come Eurobet, Lottomatica e Sisal propongono l&apos;accesso al Live Casino regolamentato, con versioni desktop e mobile.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Verifica il marchio e il numero di concessione ADM sul sito dell&apos;operatore.</li>
          <li>Accedi alla sezione Live Casino e cerca &quot;Crazy Time&quot; (provider Evolution).</li>
          <li>Su mobile, preferisci app ufficiali iOS/Android o il sito mobile HTML5 dell&apos;operatore.</li>
          <li>Controlla i limiti di puntata, le opzioni di qualità video e l&apos;accesso ai tavoli italiane quando previste.</li>
          <li>Abilita strumenti di tutela (limiti di deposito, autoesclusione) e gioca responsabilmente.</li>
        </ul>
      </section>

      {/* ===== CONFRONTO OPERATORI INFO ===== */}
      <section style={{ marginBottom: "72px" }} aria-labelledby="confronto-op-info-heading">
        <h2 id="confronto-op-info-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Confronto operatori: Eurobet, Lottomatica, Sisal
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Gli operatori ADM come Eurobet, Lottomatica e Sisal offrono l&apos;accesso legale a Crazy Time Live (gioco di Evolution). Le promozioni sul Live Casino variano nel tempo e sono consultabili dopo il login; la normativa italiana limita la pubblicità al pubblico. Per giocare in sicurezza verifica sempre la concessione ADM, imposta limiti di spesa e leggi i Termini e Condizioni.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time demo su Eurobet: come provarla legalmente?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I giochi live di Evolution, incluso Crazy Time, non prevedono una &quot;demo&quot; con saldo fittizio. Su Eurobet puoi accedere al Live Casino solo dopo il login; a seconda delle impostazioni, potresti visualizzare il flusso video anche senza piazzare puntate, ma per partecipare ai round è necessario saldo reale.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Registrati su Eurobet e completa la verifica inviando un documento valido e codice fiscale.</li>
          <li>Entra in &quot;Live Casino&quot; &gt; &quot;Game Shows&quot; e seleziona &quot;Crazy Time&quot; (provider Evolution).</li>
          <li>Osserva il tavolo: se la modalità &quot;osserva&quot; è abilitata, puoi vedere lo streaming senza puntare.</li>
          <li>Prima di giocare, verifica nella sezione Promozioni se esistono iniziative Live applicabili e leggi i T&amp;C (contribuzione, puntata massima, scadenza).</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Lottomatica Crazy Time: quali promo sono attive?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Le promozioni variano con frequenza e, per normativa, i dettagli completi sono consultabili dopo l&apos;accesso all&apos;area personale su Lottomatica. In genere, le iniziative riguardano il Live Casino (es. cashback o missioni) e possono includere i game show come Crazy Time quando specificato nei T&amp;C.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Accesso: effettua login su Lottomatica e apri Promozioni &gt; Live Casino.</li>
          <li>Verifica eleggibilità: controlla se &quot;Crazy Time&quot; è elencato tra i giochi validi.</li>
          <li>T&amp;C da leggere: wagering, contribuzione del Live, limiti alle vincite da bonus, scadenze.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Sisal e altri casinò ADM: quali alternative per i bonus?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Su Sisal e su altri concessionari ADM, i bonus specifici per Crazy Time non sono continuativi. In alternativa, potresti trovare promozioni generiche per il Live Casino o programmi che riguardano altre vertical (slot) con contribuzione al 100%, utili se i game show sono esclusi.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Cashback Live Casino: rimborso percentuale delle perdite nette su tavoli live in finestre temporali.</li>
          <li>Missioni/Obiettivi Live: premi al completamento di determinate giocate sui game show ammessi.</li>
          <li>Bonus benvenuto Casino: spesso valido su slot; i live possono avere contribuzione ridotta o nulla.</li>
          <li>Programmi VIP/Club Fedeltà: accumulo punti e cashback personalizzati secondo l&apos;attività sul conto.</li>
        </ul>
        <div className="table-wrapper" style={{ marginBottom: "0" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Operatore ADM</th>
                <th>Login richiesto per Live</th>
                <th>Demo Live disponibile</th>
                <th>App iOS/Android</th>
                <th>KYC richiesto per prelievo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eurobet</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
              </tr>
              <tr>
                <td>Lottomatica</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
              </tr>
              <tr>
                <td>Sisal</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td style={{ color: "#F59E0B" }}>Sì</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== EVOLUZIONE OFFERTA BONUS ===== */}
      <section style={{ marginBottom: "72px" }} aria-labelledby="evoluzione-bonus-heading">
        <h2 id="evoluzione-bonus-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Come si è evoluta l&apos;offerta bonus dai game show TV a Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          L&apos;evoluzione delle promozioni per i game show live in Italia è passata da bonus generici, pensati soprattutto per le slot, a meccaniche più mirate e sostenibili. La cornice regolatoria ADM e, dal 2019, le restrizioni alla pubblicità previste dal &quot;Decreto Dignità&quot; hanno spinto gli operatori a proporre promo consultabili soprattutto dopo il login, con termini più chiari su contribuzione, limiti e scadenze.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Cosa si usava prima: bonus generici o promo per game show?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Prima del boom dei game show moderni (Dream Catcher nel 2017, Monopoly Live nel 2019, Crazy Time nel 2020), le promo erano perlopiù generaliste e slot‑centriche. I giochi live ricevevano scarso supporto promozionale o erano esclusi.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Aspetto</th>
                <th>Fase pre‑Crazy Time (≈2017–2020)</th>
                <th>Fase attuale (2021–2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo promozione prevalente</td>
                <td>Welcome e ricariche su slot; cashback generico</td>
                <td>Cashback/missioni Live mirate; programmi fedeltà personalizzati</td>
              </tr>
              <tr>
                <td>Target</td>
                <td>Slot e RNG; Live marginale</td>
                <td>Segmentazione per verticale; inclusion di game show quando previsto</td>
              </tr>
              <tr>
                <td>Contribuzione Live Casino</td>
                <td>Spesso 0% o esclusi dai T&amp;C</td>
                <td>Esplicitata per gioco/categoria; talvolta &gt;0% con limiti</td>
              </tr>
              <tr>
                <td>Strumenti di controllo</td>
                <td>Regole generiche e poco granulari</td>
                <td>Cap vincite da bonus, puntata massima, timeboxing, tracciamento round</td>
              </tr>
              <tr>
                <td>Accesso alle info promozionali</td>
                <td>Comunicazione più ampia</td>
                <td>Dettagli fruibili dopo login, in linea con le restrizioni pubblicitarie</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali strade non hanno funzionato e perché certe promo sono sparite?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Bonus senza deposito applicabili ai Live: elevato rischio di abuso e multi‑accounting; spesso rimossi o resi inutilizzabili sui game show.</li>
          <li>Wagering uniforme su tutte le categorie: mismatch con la volatilità del Live; sostituito da contribuzioni differenziate per categoria/titolo.</li>
          <li>Cashback non plafonato: costi imprevedibili per l&apos;operatore; oggi prevalgono rimborsi con cap e finestre temporali ristrette.</li>
          <li>Assenza di puntata massima in modalità bonus: generava strategie ad alto rischio; ora quasi sempre previsto un limite per round.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          In che modo i bonus moderni risolvono i limiti del passato?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Contribuzione per categoria: percentuali differenziate per Live, tavoli e slot, riducendo il mismatch di volatilità.</li>
          <li>Cashback e missioni: meccaniche a impatto controllato (cap importi, finestre brevi) e obiettivi specifici per i game show ammessi.</li>
          <li>Puntata massima e cap vincite da bonus: prevenzione di strategie non desiderate e di varianze estreme durante il wagering.</li>
          <li>Progress tracking in lobby: barre di avanzamento e storici round rendono verificabili i requisiti e i tempi residui.</li>
        </ul>
      </section>

      {/* ===== ROVESCIO DELLA MEDAGLIA BONUS ===== */}
      <section style={{ marginBottom: "72px" }} aria-labelledby="rovescio-bonus-heading">
        <h2 id="rovescio-bonus-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 20px" }}>
          Il Crazy Time bonus conviene davvero?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          I bonus applicati ai game show live, incluso Crazy Time di Evolution, raramente offrono un vantaggio netto al giocatore. Il motivo principale è che i Termini e Condizioni degli operatori ADM spesso prevedono contribuzione ridotta o nulla del Live Casino ai fini del wagering, limiti di puntata durante il gioco con bonus, scadenze brevi e talvolta tetti alle vincite generate dal bonus.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Qual è l&apos;argomento più forte contro i bonus su Crazy Time?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Contribuzione bassa/0%:</strong> se Crazy Time contribuisce al 10% e il wagering è 30× su 20€ di bonus, servono 600€ &quot;contributivi&quot;; sul gioco, ciò può richiedere fino a 6.000€ di puntate effettive.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Scadenze strette:</strong> tempo insufficiente per completare il rollover senza aumentare il rischio.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Puntata massima in modalità bonus:</strong> impedisce di accorciare il rollover con puntate alte e aumenta i round necessari.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cap alle vincite da bonus:</strong> limita i profitti anche in caso di buon esito.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Nessun impatto su RTP:</strong> il bonus non cambia il margine del gioco; aggiunge solo vincoli operativi.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Come evitare errori comuni: rollover, contributi, limiti?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Errore comune</th>
                <th>Impatto sul valore</th>
                <th>Segnale d&apos;allarme nei T&amp;C</th>
                <th>Cosa fare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ignorare la contribuzione del Live</td>
                <td>Rollover che non avanza o avanza lentamente</td>
                <td>&quot;Live Casino contribuisce 0%/10%&quot;</td>
                <td>Scegli promo con contribuzione adeguata o gioca senza bonus</td>
              </tr>
              <tr>
                <td>Superare la puntata massima</td>
                <td>Confisca del bonus o delle vincite da bonus</td>
                <td>&quot;Puntata max durante il bonus: X€&quot;</td>
                <td>Imposta limiti e usa importi sotto la soglia</td>
              </tr>
              <tr>
                <td>Sottovalutare la scadenza</td>
                <td>Decadimento del bonus prima del completamento</td>
                <td>&quot;Validità: N giorni/ore&quot;</td>
                <td>Programma sessioni compatibili con la finestra temporale</td>
              </tr>
              <tr>
                <td>Confondere wagering su bonus vs bonus+deposito</td>
                <td>Volume di gioco necessario maggiore del previsto</td>
                <td>&quot;Requisito su bonus+deposito&quot;</td>
                <td>Ricalcola il totale e valuta la sostenibilità</td>
              </tr>
              <tr>
                <td>Ignorare cap alle vincite da bonus</td>
                <td>Profitti limitati nonostante l&apos;esito favorevole</td>
                <td>&quot;Vincita max da bonus: X€&quot;</td>
                <td>Preferisci promo senza cap o accettane l&apos;impatto</td>
              </tr>
              <tr>
                <td>Usare metodi di pagamento esclusi</td>
                <td>Bonus non accreditato o non eleggibile</td>
                <td>&quot;Esclusi alcuni e‑wallet/carte&quot;</td>
                <td>Deposita con metodi ammessi nei T&amp;C</td>
              </tr>
              <tr>
                <td>Giocare su siti non ADM</td>
                <td>Rischi legali e assenza di tutele</td>
                <td>Mancanza di concessione e riferimenti ADM</td>
                <td>Usa solo operatori autorizzati ADM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Chi dovrebbe evitarli e quali alternative scegliere?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I bonus su Crazy Time sono sconsigliati a chi ha poco tempo per completare il rollover, a chi preferisce bassa varianza o a chi non vuole monitorare regole e limiti.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Giocare senza bonus su siti ADM, evitando vincoli di wagering.</li>
          <li>Cashback Live con cap e finestre chiare, quando disponibili.</li>
          <li>Programmi fedeltà/VIP con accumulo punti e benefit non legati al wagering.</li>
          <li>Bonus slot (se interessa quella verticale) con contribuzione 100% e T&amp;C lineari.</li>
          <li>Osservare il gioco in modalità spettatore quando possibile, senza piazzare puntate.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ marginBottom: "40px" }} aria-labelledby="faq-heading">
        <h2 id="faq-heading" style={{ color: "#F8FAFC", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 24px" }}>
          Domande Frequenti
        </h2>
        <FAQAccordion items={infoFAQ} pageUrl="/info" />
      </section>

      <style>{`
        @media (max-width: 768px) {
          .info-two-col { grid-template-columns: 1fr !important; }
          .bonus-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
