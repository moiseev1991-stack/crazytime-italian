import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FerrisWheel, Dices, Percent, Trophy, Gamepad2, Tv, Lock, CheckCircle, Smartphone, Lightbulb, Zap, AlertTriangle } from "lucide-react";
import { SITE_URL } from "@/lib/constants";
import { casinos } from "@/data/casinos";
import { bonusRounds } from "@/data/bonuses";
import { homeFAQ } from "@/data/faq";
import CasinoCTA from "@/components/shared/CasinoCTA";
import BonusCard from "@/components/shared/BonusCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import StepGuide from "@/components/shared/StepGuide";

export const metadata: Metadata = {
  title: "Crazy Time Italia – Demo Gratis, Stats Live e Streaming 2026",
  description:
    "Crazy Time Italia: statistiche live in tempo reale, demo gratis senza registrazione e diretta streaming 24h. Risultati, tracker e ultime estrazioni aggiornate.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Crazy Time Italia – Demo Gratis, Stats Live e Streaming 2026",
    description: "Crazy Time Italia: statistiche live in tempo reale, demo gratis senza registrazione e diretta streaming 24h. Risultati, tracker e ultime estrazioni aggiornate.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: SITE_URL,
  },
};

const gameOverviewCards = [
  {
    Icon: FerrisWheel,
    stat: "54",
    label: "Segmenti",
    description: "La ruota principale presenta 54 segmenti colorati con numeri e giochi bonus.",
    color: "#F59E0B",
    bgFrom: "rgba(245,158,11,0.12)",
    bgTo: "rgba(245,158,11,0.04)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    Icon: Dices,
    stat: "4",
    label: "Giochi Bonus",
    description: "Coin Flip, Cash Hunt, Pachinko e Crazy Time — ognuno con moltiplicatori enormi.",
    color: "#7B2FBE",
    bgFrom: "rgba(123,47,190,0.15)",
    bgTo: "rgba(123,47,190,0.04)",
    border: "rgba(123,47,190,0.3)",
  },
  {
    Icon: Percent,
    stat: "96,08%",
    label: "RTP",
    description: "Ritorno al giocatore sulla scommessa Numero 1 — tra i più alti nei game show live.",
    color: "#10B981",
    bgFrom: "rgba(16,185,129,0.12)",
    bgTo: "rgba(16,185,129,0.04)",
    border: "rgba(16,185,129,0.25)",
  },
  {
    Icon: Trophy,
    stat: "20.000x",
    label: "Vincita Max",
    description: "Il moltiplicatore massimo registrato nel round bonus Crazy Time.",
    color: "#F59E0B",
    bgFrom: "rgba(245,158,11,0.12)",
    bgTo: "rgba(245,158,11,0.04)",
    border: "rgba(245,158,11,0.25)",
  },
];

const howToPlaySteps = [
  {
    number: 1,
    title: "Registrati in un casinò autorizzato",
    description: "Crea un account verificato in qualsiasi casinò autorizzato che offra i tavoli live Evolution Gaming.",
  },
  {
    number: 2,
    title: "Piazza le tue scommesse",
    description: "Scommetti sui segmenti numerici (1, 2, 5, 10) o su uno dei quattro segmenti bonus prima che la ruota giri.",
  },
  {
    number: 3,
    title: "Guarda il Top Slot e la ruota girare",
    description: "Il Top Slot sopra la ruota si attiva contemporaneamente — può aggiungere un moltiplicatore a qualsiasi segmento vincente.",
  },
  {
    number: 4,
    title: "Incassa le tue vincite",
    description: "Se la ruota si ferma sul tuo segmento (amplificato da eventuali moltiplicatori Top Slot), il pagamento viene accreditato istantaneamente.",
  },
];

const topSlotMultiplierColors: Record<number, string> = {
  2: "#3B82F6",
  3: "#10B981",
  4: "#10B981",
  5: "#F59E0B",
  7: "#F59E0B",
  10: "#F97316",
  15: "#F97316",
  20: "#EF4444",
  25: "#EF4444",
  50: "#7B2FBE",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Crazy Time — Guida Completa",
    description: "Guida completa al game show live casino Crazy Time.",
    url: SITE_URL,
    inLanguage: "it",
    publisher: {
      "@type": "Organization",
      name: "CrazyTimeGame",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
        }}
        aria-label="Hero"
      >
        <Image
          src="/images/logo.webp"
          alt="Crazy Time game show live con ruota e presentatrice"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={80}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.50)" }} aria-hidden="true" />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", background: "linear-gradient(to top, #0F0A1A, transparent)" }} aria-hidden="true" />

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 10, padding: "80px 16px 100px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(123,47,190,0.2)",
              border: "1px solid rgba(123,47,190,0.4)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "24px",
              fontSize: "0.8rem",
              color: "#94A3B8",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ color: "#7B2FBE" }}>●</span> GAME SHOW LIVE CASINO DI EVOLUTION GAMING
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#F8FAFC" }}>Crazy Time Italia –{" "}</span>
            <span
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #7B2FBE 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stats Live, Demo Gratis e Diretta Streaming
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Il game show live casino più popolare di Evolution Gaming: una ruota a 54 segmenti, quattro round bonus mozzafiato e moltiplicatori fino a{" "}
            <strong style={{ color: "#F59E0B" }}>20.000x</strong>. In diretta 24/7 dagli studi Evolution Gaming.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#casinos" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 32px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Gamepad2 size={18} strokeWidth={1.5} /> Gioca Ora
            </a>
            <Link href="/live" className="btn-secondary" style={{ fontSize: "1rem", padding: "14px 32px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Tv size={18} strokeWidth={1.5} /> Guarda Live
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <Lock size={13} strokeWidth={2} color="#64748B" />, text: "Casinò Autorizzati" },
              { icon: <CheckCircle size={13} strokeWidth={2} color="#64748B" />, text: "Dati RTP Verificati" },
              { icon: <Smartphone size={13} strokeWidth={2} color="#64748B" />, text: "Ottimizzato Mobile" },
            ].map((badge) => (
              <span key={badge.text} style={{ color: "#64748B", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                {badge.icon}{badge.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PANORAMICA DEL GIOCO ===== */}
      <section style={{ padding: "80px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="overview-heading">
        <h2
          id="overview-heading"
          style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
        >
          Perché i Giocatori Amano Crazy Time
        </h2>
        <p style={{ textAlign: "center", color: "#94A3B8", margin: "0 0 48px", fontSize: "1rem" }}>
          Dati chiave sul game show live più seguito al mondo
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {gameOverviewCards.map((card) => (
            <div key={card.label} className="card" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div
                style={{
                  width: "80px", height: "80px", borderRadius: "20px",
                  background: `linear-gradient(135deg, ${card.bgFrom}, ${card.bgTo})`,
                  border: `1px solid ${card.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <card.Icon size={38} color={card.color} strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: "2.2rem", fontWeight: 900, color: card.color, margin: "0 0 4px", lineHeight: 1 }}>{card.stat}</p>
              <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "1rem", margin: "0 0 10px" }}>{card.label}</p>
              <p style={{ color: "#94A3B8", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>{card.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#1A1128", border: "1px solid #2D2245", borderRadius: "16px", padding: "32px" }}>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
            Crazy Time è un game show live di <strong style={{ color: "#F8FAFC" }}>Evolution</strong> con una grande ruota da 54 settori e quattro giochi bonus. Il giocatore piazza le puntate sui numeri (1, 2, 5, 10) e/o sui bonus (Coin Flip, Cash Hunt, Pachinko, Crazy Time). A ogni round si attivano due elementi: la ruota principale e il <strong style={{ color: "#F8FAFC" }}>Top Slot</strong>, un rullo orizzontale che può assegnare un moltiplicatore casuale (di norma fino a 50x) a una specifica scommessa.
          </p>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
            La ruota principale contiene <strong style={{ color: "#F8FAFC" }}>54 segmenti</strong>: 21 settori &quot;1&quot;, 13 settori &quot;2&quot;, 7 settori &quot;5&quot;, 4 settori &quot;10&quot; e 9 settori bonus (4× Coin Flip, 2× Cash Hunt, 2× Pachinko, 1× Crazy Time). I payout dei numeri sono a quota fissa; i bonus attivano un mini-gioco con moltiplicatori variabili.
          </p>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            In Italia l&apos;accesso legale avviene <strong style={{ color: "#F8FAFC" }}>solo tramite operatori con concessione ADM</strong>. Crazy Time è trasmesso in live streaming <strong style={{ color: "#F8FAFC" }}>24 ore su 24, 7 giorni su 7</strong> dagli studi Evolution; la partecipazione richiede un conto verificato (KYC) con un concessionario autorizzato come Sisal, Eurobet o Goldbet.
          </p>
        </div>
      </section>

      {/* ===== ANTEPRIMA ROUND BONUS ===== */}
      <section
        style={{ padding: "80px 16px", background: "linear-gradient(180deg, transparent, rgba(123,47,190,0.05) 50%, transparent)" }}
        aria-labelledby="bonuses-heading"
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            id="bonuses-heading"
            style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
          >
            4 Round Bonus Esplosivi
          </h2>
          <p style={{ textAlign: "center", color: "#94A3B8", margin: "0 0 48px" }}>
            Ogni round bonus offre un&apos;esperienza unica con un enorme potenziale di moltiplicatori
          </p>

          <div
            className="bonus-carousel"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}
          >
            {bonusRounds.map((bonus) => (
              <BonusCard key={bonus.id} bonus={bonus} variant="preview" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== COME GIOCARE ===== */}
      <section style={{ padding: "80px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="how-to-play-heading">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="how-to-play-grid">
          <div>
            <h2
              id="how-to-play-heading"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
            >
              Come Giocare a Crazy Time
            </h2>
            <p style={{ color: "#94A3B8", margin: "0 0 36px", lineHeight: "1.7" }}>
              Iniziare è semplice. L&apos;intero round, dalle scommesse al pagamento, dura meno di 60 secondi.
            </p>
            <StepGuide steps={howToPlaySteps} variant="vertical" />
          </div>

          <div>
            <div style={{ background: "#1A1128", border: "1px solid #2D2245", borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
              <h3 style={{ color: "#F59E0B", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Lightbulb size={18} color="#F59E0B" strokeWidth={1.5} /> Opzioni di Scommessa
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Numero 1", desc: "38,89% frequenza, pagamento 1:1", color: "#3B82F6" },
                  { label: "Numero 2", desc: "24,07% frequenza, pagamento 2:1", color: "#10B981" },
                  { label: "Numero 5", desc: "12,96% frequenza, pagamento 5:1", color: "#F59E0B" },
                  { label: "Numero 10", desc: "7,41% frequenza, pagamento 10:1", color: "#EF4444" },
                  { label: "Giochi Bonus", desc: "1,85–7,41% frequenza, pagamento variabile", color: "#7B2FBE" },
                ].map((bet) => (
                  <div
                    key={bet.label}
                    style={{ display: "flex", gap: "12px", alignItems: "center", padding: "10px 12px", background: `${bet.color}10`, borderRadius: "8px", border: `1px solid ${bet.color}30` }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: bet.color, flexShrink: 0 }} />
                    <div>
                      <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.875rem", margin: 0 }}>{bet.label}</p>
                      <p style={{ color: "#94A3B8", fontSize: "0.78rem", margin: 0 }}>{bet.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "12px", padding: "20px", fontSize: "0.875rem", color: "#94A3B8", lineHeight: "1.6" }}>
              <strong style={{ color: "#F59E0B", display: "inline-flex", alignItems: "center", gap: "5px" }}><Zap size={14} color="#F59E0B" strokeWidth={1.5} /> Limite scommesse:</strong> Da €0,10 a €5.000 per segmento. Puoi piazzare scommesse su più segmenti contemporaneamente nello stesso round.
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .how-to-play-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== TOP SLOT ===== */}
      <section
        style={{ padding: "80px 16px", background: "rgba(123,47,190,0.03)", borderTop: "1px solid #2D2245", borderBottom: "1px solid #2D2245" }}
        aria-labelledby="top-slot-heading"
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            id="top-slot-heading"
            style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
          >
            Il Moltiplicatore Top Slot
          </h2>
          <p style={{ textAlign: "center", color: "#94A3B8", margin: "0 0 48px" }}>
            Ciò che distingue Crazy Time da qualsiasi altra ruota dei premi
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }} className="top-slot-grid">
            <div>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
                Sopra la ruota principale scorre un rullo orizzontale — il <strong style={{ color: "#F8FAFC" }}>Top Slot</strong> — che abbina in modo casuale una scommessa (numero o bonus) a un moltiplicatore, di norma fino a 50x. Se la ruota si ferma proprio sul settore selezionato dal Top Slot, il moltiplicatore si applica automaticamente alle vincite di tutti i giocatori che hanno scommesso su quell&apos;esito.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
                Il moltiplicatore agisce in modo diverso in base al tipo di scommessa: per i <strong style={{ color: "#F8FAFC" }}>numeri</strong> si moltiplica direttamente il payout base (es. 5:1 × 10x = 50:1); per i <strong style={{ color: "#F8FAFC" }}>bonus</strong> il moltiplicatore entra nel mini-gioco e aumenta i valori di partenza di Coin Flip, Cash Hunt, Pachinko o Crazy Time prima che vengano assegnati i premi.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il Top Slot gira in modo <strong style={{ color: "#F8FAFC" }}>indipendente</strong> dalla ruota principale: il settore e il moltiplicatore vengono assegnati via RNG certificato e non sono influenzabili dal giocatore. La combinazione di ruota fisica e Top Slot RNG rende ogni round imprevedibile e aumenta la varianza rispetto ai normali game show.
              </p>
            </div>

            <div>
              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 16px" }}>
                Moltiplicatori Disponibili
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[2, 3, 4, 5, 7, 10, 15, 20, 25, 50].map((mult) => (
                  <div
                    key={mult}
                    style={{
                      width: "64px", height: "64px", borderRadius: "12px",
                      background: `${topSlotMultiplierColors[mult]}20`,
                      border: `1px solid ${topSlotMultiplierColors[mult]}50`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontSize: "1.1rem", color: topSlotMultiplierColors[mult],
                    }}
                  >
                    {mult}x
                  </div>
                ))}
              </div>
              <p style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "16px" }}>
                I moltiplicatori più alti sono più rari ma non impossibili — il 50x è stato registrato in diretta.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .top-slot-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== CASINÒ CONSIGLIATI ===== */}
      <section id="casinos" style={{ padding: "80px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="casinos-heading">
        <h2
          id="casinos-heading"
          style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
        >
          Dove Giocare a Crazy Time
        </h2>
        <p style={{ textAlign: "center", color: "#94A3B8", margin: "0 0 12px" }}>
          Casinò autorizzati e verificati che offrono i tavoli live Evolution Gaming
        </p>
        <p style={{ textAlign: "center", margin: "0 0 40px" }}>
          <span className="badge badge-red">Solo 18+</span>
          {" "}
          <span style={{ color: "#64748B", fontSize: "0.8rem" }}>Il gioco d&apos;azzardo può creare dipendenza. Gioca responsabilmente.</span>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
          {casinos.map((casino) => (
            <CasinoCTA key={casino.id} casino={casino} variant="full" />
          ))}
        </div>

        <p style={{ color: "#64748B", fontSize: "0.78rem", textAlign: "center", lineHeight: "1.6" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", verticalAlign: "middle" }}><AlertTriangle size={13} color="#F59E0B" strokeWidth={2} /></span>{" "}Informativa affiliazione: potremmo ricevere una commissione quando ti registri tramite i nostri link. Questo non influisce sui nostri consigli. Controlla sempre i T&C di qualsiasi bonus prima di richiederlo.
        </p>
      </section>

      {/* ===== REGOLE BASE ===== */}
      <section style={{ padding: "60px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="rules-heading">
        <h2 id="rules-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Quali sono le regole base e le puntate disponibili?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Ogni round segue uno schema semplice e ripetibile. Puoi scegliere una o più tra 8 opzioni (4 numeri + 4 bonus). Le vincite dei numeri pagano a quota fissa; i bonus attivano un mini‑gioco con moltiplicatori variabili. Il Top Slot abbina in modo casuale una scommessa a un moltiplicatore: se la ruota si ferma su quell&apos;esito, il moltiplicatore si applica. Distribuzione dei settori, probabilità e payout base:
        </p>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr><th>Esito</th><th>Settori su 54</th><th>Probabilità</th><th>Payout base</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>21</td><td>38,89%</td><td>1:1</td></tr>
              <tr><td>2</td><td>13</td><td>24,07%</td><td>2:1</td></tr>
              <tr><td>5</td><td>7</td><td>12,96%</td><td>5:1</td></tr>
              <tr><td>10</td><td>4</td><td>7,41%</td><td>10:1</td></tr>
              <tr><td>Coin Flip</td><td>4</td><td>7,41%</td><td>Var.</td></tr>
              <tr><td>Cash Hunt</td><td>2</td><td>3,70%</td><td>Var.</td></tr>
              <tr><td>Pachinko</td><td>2</td><td>3,70%</td><td>Var.</td></tr>
              <tr><td>Crazy Time</td><td>1</td><td>1,85%</td><td>Var.</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 24px", fontSize: "0.875rem" }}>
          I payout &quot;Var.&quot; dei bonus dipendono dall&apos;esito dei rispettivi mini‑giochi e possono essere influenzati dal moltiplicatore del Top Slot quando si attiva il bonus.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Round bonus spiegati: Coin Flip, Cash Hunt, Pachinko, Crazy Time
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Coin Flip</strong>: una moneta con lato rosso e blu; a ciascun lato il sistema assegna un moltiplicatore casuale. Il presentatore lancia la moneta; il lato vincente determina il moltiplicatore. Se il Top Slot ha colpito &quot;Coin Flip&quot;, i moltiplicatori assegnati ai lati vengono aumentati di conseguenza.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Cash Hunt</strong>: una parete con 108 simboli copre moltiplicatori mischiati casualmente. Ogni giocatore sceglie un bersaglio; alla rivelazione, riceve il moltiplicatore nascosto sotto il simbolo scelto. Se attivato con moltiplicatore Top Slot, tutti i valori sulla parete vengono prima moltiplicati.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Pachinko</strong>: un disco cade su una parete di pioli; in basso sono presenti caselle con moltiplicatori e almeno una casella &quot;DOUBLE&quot;. Il moltiplicatore di arrivo paga il round; se finisce su &quot;DOUBLE&quot;, tutti i valori raddoppiano e il disco viene rilanciato con potenziali raddoppi successivi.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 24px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Crazy Time</strong>: si apre una porta verso una ruota gigante dei moltiplicatori; i giocatori scelgono uno tra tre flapper (verde, blu, giallo). La ruota include segmenti &quot;DOUBLE&quot; e &quot;TRIPLE&quot;: se un flapper li colpisce, i moltiplicatori aumentano e la ruota gira di nuovo. Se il Top Slot ha colpito &quot;Crazy Time&quot;, i valori sulla ruota partono già moltiplicati.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          RTP, volatilità e margine della casa: cosa aspettarsi?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time presenta RTP differenti per ciascuna scommessa. I bonus hanno in genere RTP leggermente inferiori ai numeri e una volatilità più elevata. Dati di riferimento (fonte: Evolution):
        </p>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr><th>Scommessa</th><th>RTP teorico</th><th>Margine della casa</th><th>Volatilità attesa</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>96,08%</td><td>3,92%</td><td>Bassa</td></tr>
              <tr><td>2</td><td>95,95%</td><td>4,05%</td><td>Medio‑bassa</td></tr>
              <tr><td>5</td><td>95,78%</td><td>4,22%</td><td>Media</td></tr>
              <tr><td>10</td><td>95,73%</td><td>4,27%</td><td>Medio‑alta</td></tr>
              <tr><td>Coin Flip</td><td>95,70%</td><td>4,30%</td><td>Alta</td></tr>
              <tr><td>Cash Hunt</td><td>95,27%</td><td>4,73%</td><td>Alta</td></tr>
              <tr><td>Pachinko</td><td>94,33%</td><td>5,67%</td><td>Alta</td></tr>
              <tr><td>Crazy Time</td><td>94,41%</td><td>5,59%</td><td>Molto alta</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 0", fontSize: "0.875rem" }}>
          L&apos;RTP è un valore teorico su lunghi periodi; nel breve termine i risultati possono discostarsi sensibilmente. I bonus e il 10 offrono esiti più rari ma potenzialmente più elevati; i numeri bassi (1 e 2) producono pagamenti più frequenti ma contenuti.
        </p>
      </section>

      {/* ===== DOVE GIOCARE LEGALMENTE ===== */}
      <section style={{ padding: "60px 16px", background: "rgba(26,17,40,0.5)", borderTop: "1px solid #2D2245", borderBottom: "1px solid #2D2245" }} aria-labelledby="dove-giocare-heading">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 id="dove-giocare-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
            Dove giocare a Crazy Time in Italia in modo legale?
          </h2>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
            In Italia puoi accedere a Crazy Time solo tramite concessionari autorizzati dall&apos;<strong style={{ color: "#F8FAFC" }}>ADM</strong> (ex AAMS). Tra i principali operatori con lobby live figurano Sisal, Eurobet e Goldbet. Il game show è fornito dal provider live Evolution e la disponibilità del tavolo può variare in base al palinsesto e alla manutenzione programmata. Verifica sempre i termini del conto di gioco, le politiche di responsabilità e l&apos;effettiva presenza del titolo nella lobby dell&apos;operatore.
          </p>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "28px 0 12px" }}>
            Sisal vs Eurobet vs Goldbet: quale lobby live conviene?
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
            Le tre lobby live offrono l&apos;ecosistema dei game show Evolution, inclusa Crazy Time quando disponibile. La scelta dipende da stabilità dello streaming, fruibilità dell&apos;app, metodi di pagamento preferiti e qualità del servizio clienti. Ecco un confronto sintetico:
          </p>
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr><th>Operatore</th><th>Dominio ufficiale</th><th>Concessione ADM</th><th>Provider di Crazy Time</th><th>App mobile</th></tr>
              </thead>
              <tbody>
                <tr><td>Sisal</td><td>sisal.it</td><td>Sì</td><td>Evolution</td><td>iOS e Android</td></tr>
                <tr><td>Eurobet</td><td>eurobet.it</td><td>Sì</td><td>Evolution</td><td>iOS e Android</td></tr>
                <tr><td>Goldbet</td><td>goldbet.it</td><td>Sì</td><td>Evolution</td><td>iOS e Android</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 24px", fontSize: "0.875rem" }}>
            Valuta la semplicità di accesso alla lobby live, l&apos;integrazione dei limiti di gioco responsabile nel profilo, la velocità di KYC, i metodi di pagamento supportati e la fluidità dello streaming.
          </p>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
            Bonus benvenuto e promozioni ricorrenti: cosa controllare
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
            I bonus casino sono disciplinati dai Termini e Condizioni dell&apos;operatore e dalle regole ADM. I giochi live, compresi i game show come Crazy Time, possono avere restrizioni specifiche. Prima di aderire, verifica con attenzione:
          </p>
          <ul style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.8", margin: "0 0 24px", paddingLeft: "20px" }}>
            <li>Requisiti di puntata (wagering): se e come il bonus può essere scommesso nelle sezioni live; molti operatori prevedono contribuzione ridotta o esclusioni per i game show.</li>
            <li>Puntata massima ammessa con bonus e giochi esclusi: superare i limiti può portare all&apos;annullamento del bonus.</li>
            <li>Validità temporale: scadenze del bonus/missione e tempi di accredito dei cashback.</li>
            <li>Deposito minimo, metodi di pagamento ammessi e eventuali esclusioni.</li>
            <li>Promozioni ricorrenti: missioni su game show, classifiche, cashback live; verifica sempre se Crazy Time rientra nel perimetro promozionale.</li>
          </ul>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
            Orari, limiti di puntata e streaming: cosa cambia in Italia?
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            Crazy Time è trasmesso da Evolution in modalità live continua e risulta disponibile 24/7, fatta eccezione per brevi finestre di manutenzione. In Italia l&apos;accesso avviene tramite conto di gioco ADM con KYC obbligatorio, strumenti di autolimitazione e possibilità di autoesclusione. Orari: disponibilità globale continuativa. Limiti di puntata: minimi e massimi fissati dal tavolo e dall&apos;operatore; possono differire tra Sisal, Eurobet e Goldbet. Streaming: fornito da Evolution con adattamento del bitrate; interfaccia e messaggistica disponibili in italiano. Requisiti tecnici: connessione stabile (Wi‑Fi o 4G/5G) e dispositivo aggiornato.
          </p>
        </div>
      </section>

      {/* ===== APP E MOBILE ===== */}
      <section style={{ padding: "60px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="app-mobile-heading">
        <h2 id="app-mobile-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          App e mobile: come giocare a Crazy Time su smartphone?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Puoi giocare a Crazy Time su smartphone sia tramite browser mobile (Chrome, Safari, ecc.) sia tramite l&apos;app del tuo operatore con concessione ADM (es. Sisal, Eurobet, Goldbet). Non esiste un&apos;app &quot;ufficiale&quot; autonoma di Crazy Time: l&apos;accesso avviene dalla lobby live del concessionario. La qualità dell&apos;esperienza dipende da dispositivo, rete e impostazioni di risparmio dati/energia.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Crazy Time app dedicata o browser? Pro e contro
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>App dell&apos;operatore — Pro:</strong> accesso rapido con Face ID/Touch ID, sessioni ricordate in modo sicuro; notifiche push su promozioni, limiti e messaggi di gioco responsabile; integrazione nativa dei metodi di pagamento e del profilo KYC.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>App dell&apos;operatore — Contro:</strong> richiede spazio su disco e aggiornamenti periodici; consumo energetico potenzialmente superiore rispetto a sessioni brevi via browser; vincolo a un singolo operatore per sessione.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Browser mobile — Pro:</strong> nessuna installazione; aggiornamenti gestiti dal browser; passaggio rapido tra più operatori in schede diverse; buona compatibilità su dispositivi con poco spazio.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 24px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Browser mobile — Contro:</strong> niente notifiche push dedicate; meno integrazione con biometrici e metodi di pagamento salvati; riconnessioni più frequenti se il sistema chiude le schede in background.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Requisiti di rete e consumo dati in streaming
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il flusso live di Crazy Time è erogato in streaming adattivo da Evolution: la qualità si adegua automaticamente alla banda disponibile. Valori di riferimento per la stima del consumo:
        </p>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr><th>Qualità stimata</th><th>Bitrate video+audio (Mbps)</th><th>Consumo orario stimato (GB/h)</th><th>Download consigliato (Mbps)</th></tr>
            </thead>
            <tbody>
              <tr><td>Bassa</td><td>1,0</td><td>~0,45</td><td>≥1,5</td></tr>
              <tr><td>Media</td><td>2,5</td><td>~1,13</td><td>≥3,0</td></tr>
              <tr><td>Alta</td><td>4,0</td><td>~1,80</td><td>≥5,0</td></tr>
              <tr><td>Full HD</td><td>6,0</td><td>~2,70</td><td>≥8,0</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "24px 0 12px" }}>
          Impostazioni utili: notifiche, limiti, modalità risparmio
        </h3>
        <ul style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.8", margin: 0, paddingLeft: "20px" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Notifiche</strong>: abilita solo quelle rilevanti (es. promemoria limiti, conferme transazioni, manutenzioni della lobby).</li>
          <li><strong style={{ color: "#F8FAFC" }}>Limiti di gioco e autoesclusione</strong>: imposta limiti di deposito, spesa e tempo di sessione; l&apos;autoesclusione è integrata nel circuito ADM e vale trasversalmente per gli operatori aderenti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Autenticazione e sicurezza</strong>: attiva login biometrico nelle app, mantieni aggiornato il dispositivo e usa password robuste.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Modalità risparmio dati</strong>: molte lobby consentono di ridurre la qualità video; ciò abbassa i GB/h ma può diminuire la nitidezza dello stream.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Risparmio energia</strong>: le modalità &quot;battery saver&quot; possono limitare prestazioni di rete in background; se noti lag, disattivale temporaneamente durante la sessione.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Storico e ricevute</strong>: consulta lo storico scommesse per verificare esiti e contribuzione a eventuali promozioni live.</li>
        </ul>
      </section>

      {/* ===== STRATEGIE E STATISTICHE ===== */}
      <section style={{ padding: "60px 16px", background: "rgba(26,17,40,0.5)", borderTop: "1px solid #2D2245", borderBottom: "1px solid #2D2245" }} aria-labelledby="strategie-heading">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 id="strategie-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
            Strategie, statistiche e risultati in diretta: cosa è davvero utile?
          </h2>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
            Crazy Time è un game show live con esiti indipendenti round per round: la ruota fisica determina il settore vincente e il Top Slot assegna, in modo separato e casuale, eventuali moltiplicatori a una specifica scommessa. L&apos;impianto di gioco incorpora un margine a favore del banco, per cui non esistono sistemi che annullino l&apos;edge nel lungo periodo. Le statistiche possono aiutare a comprendere frequenze attese e varianza, ma non a &quot;prevedere&quot; il prossimo esito.
          </p>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
            Esistono strategie vincenti o sistemi? Analisi critica
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
            Non esistono strategie matematicamente vincenti nel lungo periodo su Crazy Time, perché i payout e le probabilità sono strutturati per generare un margine della casa. I sistemi più citati presentano questi limiti:
          </p>
          <ul style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px" }}>
            <li><strong style={{ color: "#F8FAFC" }}>Progressioni (es. Martingala, Paroli)</strong>: aumentare o ridurre la puntata non modifica la probabilità di esito; espone a rischio di raggiungere i limiti del tavolo o del budget prima di recuperare le perdite.</li>
            <li><strong style={{ color: "#F8FAFC" }}>Scommesse &quot;a ventaglio&quot;</strong>: aumentano la frequenza di piccoli incassi, ma comprimono il rendimento medio; i colpi senza bonus o con bonus &quot;vuoti&quot; possono erodere rapidamente il bankroll.</li>
            <li><strong style={{ color: "#F8FAFC" }}>Inseguimento del Top Slot</strong>: il moltiplicatore si applica solo se ruota e Top Slot coincidono; puntare sulla scommessa &quot;boostata&quot; non cambia la probabilità che la ruota cada su quel settore.</li>
            <li><strong style={{ color: "#F8FAFC" }}>&quot;Pattern&quot; di ruota o conduzione</strong>: la ruota è fisica e gli spin sono indipendenti; vedere sequenze ripetute non implica trend sfruttabili.</li>
          </ul>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 24px", fontSize: "0.95rem" }}>
            Approcci pragmatici: definisci stake unitari (es. 0,5–2% del bankroll) e un tetto massimo di perdita per sessione; preferisci combinazioni chiare (es. un numero a bassa varianza + 1–2 bonus) sapendo che il rendimento atteso resta negativo; accetta la varianza dei bonus.
          </p>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
            Come leggere le statistiche senza cadere nella fallacia del giocatore?
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
            Le statistiche storiche sono descrittive, non predittive. La &quot;fallacia del giocatore&quot; porta a credere che, dopo molte assenze, un esito sia &quot;in scadenza&quot;: è falso per eventi indipendenti. Usa le statistiche per confrontare frequenze osservate con quelle teoriche, sapendo che su campioni piccoli la varianza è elevata:
          </p>
          <div className="table-wrapper">
            <table className="stats-table">
              <thead>
                <tr><th>Esito</th><th>Settori su 54</th><th>Probabilità teorica</th><th>Frequenza attesa su 100 giri</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>21</td><td>38,89%</td><td>~38,9</td></tr>
                <tr><td>2</td><td>13</td><td>24,07%</td><td>~24,1</td></tr>
                <tr><td>5</td><td>7</td><td>12,96%</td><td>~13,0</td></tr>
                <tr><td>10</td><td>4</td><td>7,41%</td><td>~7,4</td></tr>
                <tr><td>Coin Flip</td><td>4</td><td>7,41%</td><td>~7,4</td></tr>
                <tr><td>Cash Hunt</td><td>2</td><td>3,70%</td><td>~3,7</td></tr>
                <tr><td>Pachinko</td><td>2</td><td>3,70%</td><td>~3,7</td></tr>
                <tr><td>Crazy Time</td><td>1</td><td>1,85%</td><td>~1,9</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 24px", fontSize: "0.875rem" }}>
            Su 50–200 giri sono normali scostamenti ampi dalle attese. Il fatto che un bonus non esca da 200 giri non aumenta la sua probabilità al giro successivo.
          </p>

          <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
            Tracciatori e streaming in diretta: quali dati contano davvero?
          </h3>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            Molti tracciatori mostrano cronologie degli esiti e medie mobili. Questi dati aiutano a documentare la sessione, non a prevedere il futuro. Le metriche che contano davvero: integrità del flusso (latenza, stabilità della connessione); limiti del tavolo e del conto; ritmo dei round (più round/ora aumentano l&apos;esposizione del bankroll a parità di stake); storico personale per valutare varianza e aderenza al piano di stake; promemoria di tempo e perdita per interrompere la sessione al raggiungimento di soglie prefissate. Diffida di strumenti che promettono &quot;segnali&quot; predittivi: senza accesso a informazioni future o alterazione delle probabilità, non possono generare edge matematico.
          </p>
        </div>
      </section>

      {/* ===== ROVESCIO DELLA MEDAGLIA ===== */}
      <section style={{ padding: "60px 16px", maxWidth: "1280px", margin: "0 auto" }} aria-labelledby="rovescio-heading">
        <h2 id="rovescio-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Il rovescio della medaglia: qual è il limite di Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è progettato per l&apos;intrattenimento e incorpora un margine della casa positivo. La combinazione di ruota fisica e componenti RNG (es. Top Slot e assegnazioni dei moltiplicatori nei bonus) rende impronosticabili i risultati di ciascun round. Nessuna strategia può garantire rendimento positivo nel lungo periodo: per giocare in sicurezza è essenziale gestire budget, tempi e aspettative, usando gli strumenti di tutela previsti da ADM.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Perché il generatore di numeri casuali (RNG) e la ruota rendono imprevedibili gli esiti?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          La meccanica del gioco combina casualità fisica e digitale. La ruota ha 54 settori e ogni spin è indipendente: piccoli cambi di forza applicata, attrito e micro‑variazioni impediscono di &quot;replicare&quot; esattamente un esito. In parallelo, il Top Slot e la preparazione di alcuni valori bonus usano un RNG certificato dal provider Evolution, che assegna moltiplicatori in modo non influenzabile dal giocatore. Ne consegue che: l&apos;esito precedente non altera in alcun modo le probabilità del successivo; il Top Slot non &quot;anticipa&quot; dove si fermerà la ruota; l&apos;edge strutturale mantiene un margine del banco nel lungo periodo, a prescindere dal pattern di puntate del giocatore.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Budget, autoesclusione e segnali di rischio: come proteggersi?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La tutela parte da regole chiare su denaro e tempo, e dall&apos;uso degli strumenti di autolimitazione previsti dagli operatori con concessione ADM. Imposta obiettivi realistici (intrattenimento, non profitto) e programma pause per mitigare il gioco impulsivo. Valuta i campanelli d&apos;allarme: rincorrere le perdite, aumentare lo stake dopo ogni sconfitta, giocare più a lungo del previsto, nascondere l&apos;attività o usare fondi destinati ad altre spese.
        </p>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr><th>Strumento di tutela</th><th>Dove si imposta</th><th>Durata/Parametri</th><th>Effetto</th></tr>
            </thead>
            <tbody>
              <tr><td>Limite di deposito</td><td>Profilo conto dell&apos;operatore</td><td>Settimanale/mensile (obbligatorio in Italia alla registrazione)</td><td>Impedisce di versare oltre la soglia scelta nel periodo</td></tr>
              <tr><td>Limite di spesa/tempo</td><td>Sezione Gioco Responsabile dell&apos;operatore</td><td>Soglie personalizzate per importo e/o minuti/ore</td><td>Blocca ulteriori puntate o avvisa al raggiungimento del limite</td></tr>
              <tr><td>Autoesclusione (RUA)</td><td>Operatore o portale ADM</td><td>30/60/90 giorni o a tempo indeterminato</td><td>Sospende l&apos;accesso al gioco online su tutti gli operatori aderenti</td></tr>
              <tr><td>Reality check / Promemoria</td><td>Impostazioni account (dove disponibile)</td><td>Intervalli predefiniti (es. ogni 30/60 min)</td><td>Mostra tempo di sessione, saldo e opzioni per fare pausa/chiudere</td></tr>
              <tr><td>Esclusione da promo</td><td>Preferenze comunicazioni</td><td>Opt‑out da notifiche promozionali</td><td>Riduce i trigger che incentivano il rientro in sessione</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 24px", fontSize: "0.875rem" }}>
          Buone pratiche: usa stake unitari contenuti (es. 0,5–2% del budget di sessione), definisci stop‑loss e stop‑time, e rispetta i limiti anche dopo una vincita inattesa. Se il gioco smette di essere divertente, attiva subito un periodo di autoesclusione.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.2rem", margin: "0 0 12px" }}>
          Confronto con altri game show: quando evitarlo?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time è tra i game show più variabili: i bonus possono generare moltiplicatori elevati, ma la frequenza di esiti &quot;vuoti&quot; o medi è significativa. Potresti preferire alternative se non tolleri lunghe sequenze senza bonus o se cerchi meccaniche più lineari. Confronto strutturale di alcuni titoli diffusi:
        </p>
        <div className="table-wrapper">
          <table className="stats-table">
            <thead>
              <tr><th>Gioco live</th><th>Provider</th><th>Settori ruota</th><th>Bonus dedicati</th><th>Scelte del giocatore nel bonus</th></tr>
            </thead>
            <tbody>
              <tr><td>Crazy Time</td><td>Evolution</td><td>54</td><td>4 (Coin Flip, Cash Hunt, Pachinko, Crazy Time)</td><td>Sì (es. selezione bersaglio in Cash Hunt, scelta flapper in Crazy Time)</td></tr>
              <tr><td>MONOPOLY Live</td><td>Evolution</td><td>54</td><td>2 (2 Rolls, 4 Rolls)</td><td>No (movimenti determinati dai dadi)</td></tr>
              <tr><td>Dream Catcher</td><td>Evolution</td><td>54</td><td>0 (moltiplicatori su ruota, niente mini‑gioco)</td><td>No</td></tr>
              <tr><td>Mega Wheel</td><td>Pragmatic Play</td><td>54</td><td>0 (moltiplicatore casuale sul numero selezionato dal sistema)</td><td>No</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "12px 0 0", fontSize: "0.875rem" }}>
          Se preferisci payout più regolari e meno dipendenti da bonus, Dream Catcher o Mega Wheel offrono dinamiche più semplici. Se cerchi interazione moderata con tema branded, MONOPOLY Live è un compromesso. Crazy Time è coerente per chi punta all&apos;intrattenimento &quot;spettacolare&quot; accettando alta varianza, ma sempre entro limiti e con aspettative realistiche.
        </p>
      </section>

      {/* ===== FAQ ===== */}
      <section
        style={{ padding: "80px 16px", background: "rgba(26,17,40,0.5)", borderTop: "1px solid #2D2245" }}
        aria-labelledby="faq-heading"
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            id="faq-heading"
            style={{ textAlign: "center", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F8FAFC", margin: "0 0 12px" }}
          >
            Domande Frequenti
          </h2>
          <p style={{ textAlign: "center", color: "#94A3B8", margin: "0 0 40px" }}>
            Tutto quello che devi sapere su Crazy Time
          </p>
          <FAQAccordion items={homeFAQ} />
        </div>
      </section>
    </>
  );
}
