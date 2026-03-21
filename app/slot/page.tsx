import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { wheelSegments, topSlotMultipliers } from "@/data/segments";
import { casinos } from "@/data/casinos";
import CasinoCTA from "@/components/shared/CasinoCTA";
import { Target, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time: Come Funziona, RTP, Regole e Bonus Round 2026",
  description:
    "Scopri come funziona Crazy Time: regole complete, RTP ufficiale, probabilità dei bonus round Pachinko, Cash Hunt e Coin Flip. Guida aggiornata 2026.",
  alternates: { canonical: `${SITE_URL}/slot` },
  openGraph: {
    title: "Crazy Time: Come Funziona, RTP, Regole e Bonus Round 2026",
    description: "Scopri come funziona Crazy Time: regole complete, RTP ufficiale, probabilità dei bonus round Pachinko, Cash Hunt e Coin Flip. Guida aggiornata 2026.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/slot`,
  },
};

export default function SlotPage() {
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
            src="/images/hero/slot.webp"
            alt="Crazy Time slot segmenti della ruota e terminali di scommessa"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.70)" }} aria-hidden="true" />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)" }} aria-hidden="true" />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, #0F0A1A, transparent)" }} aria-hidden="true" />
          <div style={{ position: "relative", zIndex: 10, padding: "40px 32px" }}>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "#F8FAFC",
                margin: "0 0 12px",
                lineHeight: 1.2,
                textShadow: "0 2px 8px rgba(0,0,0,1), 0 4px 24px rgba(0,0,0,0.8)",
              }}
            >
              Crazy Time –{" "}
              <span style={{ color: "#FFD700", textShadow: "0 0 10px rgba(255,215,0,0.5), 0 2px 8px rgba(0,0,0,1)", WebkitTextStroke: "0.5px rgba(0,0,0,0.3)" }}>
                Come Funziona: Regole, RTP e Bonus Round
              </span>
            </h1>
            <p style={{ color: "rgb(226, 232, 240)", fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "620px", margin: 0, textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              Tutto sulla meccanica della ruota, i segmenti e le probabilità di vincita.
            </p>
          </div>
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "40px" }} className="slot-layout">

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

          {/* Meccaniche Principali del Gioco */}
          <section aria-labelledby="mechanics-heading">
            <h2 id="mechanics-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
              Meccaniche Principali del Gioco
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Crazy Time è un game show live di Evolution basato su una ruota meccanica a <strong style={{ color: "#F8FAFC" }}>54 segmenti</strong> e su round bonus interattivi. Prima di ogni giro, puoi puntare su uno o più esiti tra numeri (1, 2, 5, 10) e giochi bonus (Coin Flip, Cash Hunt, Pachinko, Crazy Time). Il risultato è determinato dall&apos;arresto della ruota; quando esce un bonus, i giocatori che hanno puntato su quel segmento entrano nel relativo mini‑gioco.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Puoi coprire contemporaneamente più esiti. I numeri pagano una vincita fissa proporzionale al valore (1:1, 2:1, 5:1, 10:1), mentre i bonus avviano mini‑giochi con vincite variabili. La ruota ha <strong style={{ color: "#F8FAFC" }}>21 segmenti &quot;1&quot;</strong>, <strong style={{ color: "#F8FAFC" }}>13 segmenti &quot;2&quot;</strong>, <strong style={{ color: "#F8FAFC" }}>7 segmenti &quot;5&quot;</strong>, <strong style={{ color: "#F8FAFC" }}>4 segmenti &quot;10&quot;</strong> e <strong style={{ color: "#F8FAFC" }}>9 segmenti bonus</strong> (4× Coin Flip, 2× Cash Hunt, 2× Pachinko, 1× Crazy Time).
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il round segue quattro fasi: scelta degli esiti su cui puntare entro il timer di betting; conferma della scommessa; giro della ruota con eventuale moltiplicatore del <strong style={{ color: "#F8FAFC" }}>Top Slot</strong>; pagamento istantaneo se hai puntato sul segmento vincente o partecipazione al mini‑gioco nel caso di bonus.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il sistema usa una <strong style={{ color: "#F8FAFC" }}>RNG certificata</strong> per il Top Slot e la fisica della ruota per determinare l&apos;esito: i giri sono indipendenti round per round e nessuna strategia può modificare l&apos;aspettativa matematica del gioco, che incorpora un margine della casa positivo per ciascuna scommessa.
              </p>
            </div>
          </section>

          {/* Distribuzione dei Segmenti della Ruota */}
          <section aria-labelledby="segments-heading">
            <h2 id="segments-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
              Distribuzione dei Segmenti della Ruota
            </h2>

            {/* Visual bar chart */}
            <div
              style={{
                background: "#1A1128",
                border: "1px solid #2D2245",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "24px",
              }}
            >
              <h3 style={{ color: "#94A3B8", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 20px" }}>
                Distribuzione Segmenti (54 totali)
              </h3>
              {wheelSegments.map((seg) => (
                <div key={seg.name} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 500 }}>{seg.name}</span>
                    <span style={{ color: "#94A3B8", fontSize: "0.8rem" }}>{seg.count} segmenti · {seg.probability}</span>
                  </div>
                  <div style={{ background: "#2D2245", borderRadius: "4px", height: "10px", overflow: "hidden" }}>
                    <div
                      className="segment-bar"
                      style={{
                        width: `${(seg.count / 54) * 100}%`,
                        height: "100%",
                        backgroundColor: seg.color,
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Data table */}
            <div className="table-wrapper">
              <table className="stats-table">
                <thead>
                  <tr>
                    <th>Segmento</th>
                    <th>Quantità</th>
                    <th>Probabilità</th>
                    <th>Pagamento</th>
                    <th>RTP</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {wheelSegments.map((seg) => (
                    <tr key={seg.name}>
                      <td style={{ fontWeight: 600, color: seg.color }}>{seg.name}</td>
                      <td>{seg.count}</td>
                      <td>{seg.probability}</td>
                      <td>{seg.payout}</td>
                      <td style={{ color: "#10B981" }}>{seg.rtp}</td>
                      <td>
                        <span className={seg.isBonus ? "badge badge-gold" : "badge badge-blue"}>
                          {seg.isBonus ? "Bonus" : "Numero"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Meccaniche del Top Slot */}
          <section aria-labelledby="top-slot-heading">
            <h2 id="top-slot-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
              Meccaniche del Top Slot
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il <strong style={{ color: "#F8FAFC" }}>Top Slot</strong> è un riquadro posizionato sopra la ruota principale che, a ogni round, assegna in modo casuale tramite RNG certificata un moltiplicatore a uno specifico segmento o bonus. Il moltiplicatore può arrivare di norma fino a 50x e si attiva solo se la ruota si ferma sullo stesso segmento selezionato dal Top Slot.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il moltiplicatore agisce in modo diverso in base al tipo di scommessa: per i <strong style={{ color: "#F8FAFC" }}>numeri</strong> si moltiplica direttamente il payout base; per i <strong style={{ color: "#F8FAFC" }}>bonus</strong> il moltiplicatore entra nel mini‑gioco e aumenta i valori di partenza di Coin Flip, Cash Hunt, Pachinko o Crazy Time prima che vengano assegnati i premi.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
                Il Top Slot agisce in modo <strong style={{ color: "#F8FAFC" }}>indipendente</strong> dalla ruota: il settore e il moltiplicatore vengono determinati separatamente e l&apos;assegnazione non influenza la probabilità che la ruota si fermi su quel settore. Ogni giro rimane un evento casuale autonomo.
              </p>
            </div>

            <div
              style={{
                background: "#1A1128",
                border: "1px solid #2D2245",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 20px" }}>
                Valori Moltiplicatori del Top Slot
              </h3>
              <div className="table-wrapper">
                <table className="stats-table" style={{ minWidth: "400px" }}>
                  <thead>
                    <tr>
                      <th>Moltiplicatore</th>
                      <th>Categoria</th>
                      <th>Effetto su Scommessa 10x</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSlotMultipliers.map((mult) => {
                      const category = mult <= 4 ? "Basso" : mult <= 10 ? "Medio" : "Alto";
                      const categoryColor = mult <= 4 ? "#3B82F6" : mult <= 10 ? "#F59E0B" : "#EF4444";
                      return (
                        <tr key={mult}>
                          <td style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "1.1rem" }}>{mult}x</td>
                          <td><span style={{ color: categoryColor }}>{category}</span></td>
                          <td style={{ color: "#94A3B8" }}>10 × 10 × {mult} = <strong style={{ color: "#10B981" }}>{100 * mult}x</strong> puntata</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Interfaccia di Scommessa */}
          <section aria-labelledby="betting-heading">
            <h2 id="betting-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
              Interfaccia di Scommessa
            </h2>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
              L&apos;interfaccia di scommessa mostra <strong style={{ color: "#F8FAFC" }}>otto pannelli</strong> — uno per ogni esito della ruota (1, 2, 5, 10 e i quattro bonus). Puoi selezionare uno o più pannelli contemporaneamente; ogni puntata va confermata entro il tempo di betting indicato dalla lobby. Dopo il «no more bets» l&apos;importo è bloccato e non può essere modificato o annullato.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
              Il round segue quattro fasi ordinate: <strong style={{ color: "#F8FAFC" }}>puntate aperte</strong> → giro della ruota con <strong style={{ color: "#F8FAFC" }}>Top Slot</strong> attivo → determinazione dell&apos;esito → pagamento istantaneo (numeri) o avvio del mini‑gioco (bonus). Puoi coprire più esiti nello stesso round per bilanciare frequenza e potenziale di vincita, tenendo presente che ciascun esito mantiene il proprio RTP e margine della casa.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {[
                { label: "Scommessa Min", value: "€0,10", icon: "↓" },
                { label: "Scommessa Max", value: "€5.000", icon: "↑" },
                { label: "Segmenti", value: "8 opzioni", icon: <Target size={24} color="#F59E0B" strokeWidth={1.5} /> },
                { label: "Durata Round", value: "~60 sec", icon: "⏱" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#1A1128",
                    border: "1px solid #2D2245",
                    borderRadius: "10px",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", margin: "0 0 6px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "28px" }}>{stat.icon}</div>
                  <p style={{ color: "#F59E0B", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 4px" }}>{stat.value}</p>
                  <p style={{ color: "#94A3B8", fontSize: "0.8rem", margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Analisi RTP e Probabilità */}
          <section aria-labelledby="rtp-heading">
            <h2 id="rtp-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
              Analisi RTP e Probabilità
            </h2>
            <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", fontSize: "0.95rem" }}>
              L&apos;RTP (Return to Player) è la percentuale teorica restituita in vincite su un numero elevatissimo di round; in Crazy Time varia per ciascuna scommessa. I <strong style={{ color: "#F8FAFC" }}>numeri</strong> presentano RTP più alti (fino a <strong style={{ color: "#F8FAFC" }}>96,08%</strong> sul segmento «1»), mentre i <strong style={{ color: "#F8FAFC" }}>bonus</strong> hanno RTP più bassi ma volatilità superiore e potenziali vincite più elevate per singolo round. L&apos;RTP non garantisce risultati nel breve periodo: oscillazioni e sequenze «a vuoto» sono normali, specialmente sui bonus; i moltiplicatori del Top Slot incidono solo sul giro in cui compaiono.
            </p>
            <div className="table-wrapper">
              <table className="stats-table" style={{ minWidth: "400px" }}>
                <thead>
                  <tr>
                    <th>Scommessa</th>
                    <th>RTP</th>
                    <th>Probabilità</th>
                    <th>Pagamento</th>
                  </tr>
                </thead>
                <tbody>
                  {wheelSegments.map((seg) => (
                    <tr key={seg.name}>
                      <td style={{ fontWeight: 600, color: seg.color }}>{seg.name}</td>
                      <td>
                        <span style={{ color: parseFloat(seg.rtp) >= 95.5 ? "#10B981" : "#F59E0B" }}>
                          {seg.rtp}
                        </span>
                      </td>
                      <td style={{ color: "#94A3B8" }}>{seg.probability}</td>
                      <td>{seg.payout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{
                background: "rgba(16,185,129,0.05)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "10px",
                padding: "16px 20px",
                marginTop: "16px",
                fontSize: "0.875rem",
                color: "#94A3B8",
              }}
            >
              <strong style={{ color: "#10B981" }}>Vantaggio della casa complessivo: ~4%.</strong> Il RTP dichiarato del 96,08% è un valore teorico di lungo periodo calcolato su milioni di giri. Le sessioni individuali possono discostarsi significativamente da questa media.
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="slot-sidebar">
          {/* Quick links */}
          <div style={{ background: "#1A1128", border: "1px solid #2D2245", borderRadius: "12px", padding: "20px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 16px" }}>Navigazione Rapida</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { href: "/info", label: "Guida ai Round Bonus" },
                { href: "/stats", label: "Statistiche Live" },
                { href: "/demo", label: "Demo / Gioco Gratuito" },
                { href: "/live", label: "Guarda Live" },
                { href: "/app", label: "App Mobile" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#7B2FBE" }}>›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Play CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(123,47,190,0.2), rgba(245,158,11,0.1))",
              border: "1px solid rgba(123,47,190,0.3)",
              borderRadius: "12px",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", margin: "0 0 8px" }}><Gamepad2 size={32} color="#7B2FBE" strokeWidth={1.5} /></div>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>Pronto a Giocare?</h3>
            <p style={{ color: "#94A3B8", fontSize: "0.825rem", margin: "0 0 16px", lineHeight: "1.6" }}>
              Unisciti a un casinò autorizzato e accedi ai tavoli live Crazy Time istantaneamente.
            </p>
            <a href="#" rel="nofollow" className="btn-primary" style={{ width: "100%", display: "block" }}>
              Trova un Casinò
            </a>
            <p style={{ color: "#64748B", fontSize: "0.72rem", margin: "10px 0 0" }}>18+ | T&C si applicano | Gioca responsabilmente</p>
          </div>

          {/* Top casino */}
          <CasinoCTA casino={casinos[0]} variant="compact" />
        </aside>
      </div>

      {/* ===== DOVE GIOCARE ===== */}
      <section style={{ marginTop: "60px" }} aria-labelledby="dove-giocare-slot-heading">
        <h2 id="dove-giocare-slot-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Dove giocare a Crazy Time in Italia nel 2026?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          In Italia Crazy Time è disponibile esclusivamente all&apos;interno dei casinò online autorizzati ADM (Agenzia delle Dogane e dei Monopoli) che includono il live game show di Evolution nel proprio palinsesto. Non si gioca sul sito del provider: l&apos;accesso avviene tramite i concessionari con conto di gioco verificato.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quali concessionari ADM offrono Crazy Time? (Sisal, Eurobet, SNAI, GoldBet, Lottomatica)
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I principali operatori legali italiani con sezione Casinò Live ospitano i game show di Evolution, tra cui Crazy Time. La disponibilità può variare per fasce orarie o manutenzioni tecniche; verifica sempre il palinsesto live dopo l&apos;accesso al conto di gioco.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Sisal: ampia sezione &quot;Casinò Live&quot; con game show Evolution; ricerca &quot;Crazy Time&quot; nella lobby live.</li>
          <li>Eurobet: catalogo live con game show; Crazy Time generalmente elencato tra i giochi in evidenza.</li>
          <li>SNAI: palinsesto live con titoli Evolution; Crazy Time accessibile dalla categoria game show.</li>
          <li>GoldBet: sezione Casinò Live con game show; verifica disponibilità di Crazy Time nella lobby.</li>
          <li>Lottomatica: Casinò Live con giochi Evolution; Crazy Time solitamente presente tra i game show.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", fontSize: "0.875rem" }}>
          Nota: l&apos;accesso richiede un conto ADM attivo e verificato. In caso di blocchi temporanei o manutenzione, il gioco può risultare &quot;non disponibile&quot; per brevi periodi.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time sito ufficiale vs casinò autorizzati: dove si gioca davvero
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time è un prodotto B2B di Evolution: il provider non accetta giocatori direttamente. Le ricerche &quot;Crazy Time sito ufficiale&quot; portano a pagine informative del provider o a materiali promozionali, non a tavoli dove puntare. Per giocare con denaro reale è obbligatorio passare da un concessionario ADM.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Canale</th>
                <th>È possibile giocare</th>
                <th>Motivo</th>
                <th>Cosa verificare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sito del provider (Evolution) o pagine informative su Crazy Time</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Evolution opera in modalità B2B e non offre gioco diretto al pubblico</td>
                <td>Usa solo casinò con concessione ADM e conto verificato</td>
              </tr>
              <tr>
                <td>Casinò online autorizzato ADM (es. Sisal, Eurobet, SNAI, GoldBet, Lottomatica)</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>Gli operatori ADM integrano il flusso live di Evolution e gestiscono conto, pagamenti e tutele</td>
                <td>Presenza del logo/livrea ADM, termini del gioco, limiti di puntata, orari di disponibilità</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", fontSize: "0.875rem" }}>
          Consiglio operativo: dopo il login, apri la lobby &quot;Casinò Live&quot;, filtra per &quot;Game Show&quot; e usa la ricerca interna digitando &quot;Crazy Time&quot;. Se non appare, potrebbe essere in manutenzione o momentaneamente non disponibile.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Bonus e promo specifiche per Crazy Time: cosa controllare
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Molte promozioni dei casinò italiani riguardano slot o categorie specifiche; i game show live come Crazy Time possono essere inclusi, esclusi o avere contribuzioni ridotte. Prima di aderire a una promo, leggi sempre i Termini &amp; Condizioni (T&amp;C) pubblicati dall&apos;operatore.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Contribuzione al wagering: i giochi live spesso contribuiscono in misura ridotta o nulla al requisito di puntata.</li>
          <li>Esclusioni di categorie: alcune promo valgono &quot;solo slot&quot; o &quot;no live&quot;. Controlla se &quot;Game Show/Live&quot; rientra tra i giochi qualificanti.</li>
          <li>Opt-in e attivazione: molte offerte richiedono adesione manuale (opt-in) o inserimento di un codice prima di giocare.</li>
          <li>Validità temporale: bonus e mission hanno finestre limitate (es. 24/72 ore). Giocare fuori tempo non genera qualificazione.</li>
          <li>Puntata minima/massima qualificante: alcune promo richiedono una puntata minima o fissano un tetto massimo valido ai fini della promo.</li>
          <li>Limiti di vincita o cap dei cashback: verifica massimali di rimborso o premi, nonché il formato (bonus non prelevabile vs. saldo reale).</li>
          <li>Esclusione di sistemi: T&amp;C spesso vietano strategie di copertura/martingala; violazioni possono annullare la promozione.</li>
          <li>Requisiti di verifica: promozioni e prelievi richiedono conto verificato (KYC) e metodi di pagamento intestati al titolare.</li>
        </ul>
      </section>

      {/* ===== RTP E DIFFERENZE SLOT ===== */}
      <section style={{ marginTop: "48px" }} aria-labelledby="rtp-differenze-heading">
        <h2 id="rtp-differenze-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Qual è l&apos;RTP ufficiale e come influisce sui risultati
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          L&apos;RTP (Return to Player) è la percentuale teorica che, su un numero elevatissimo di round, viene restituita in vincite rispetto alle puntate. In Crazy Time l&apos;RTP varia per ciascuna scommessa: i numeri presentano RTP più alti (fino a 96,08% sul &quot;1&quot;), mentre i bonus hanno RTP più bassi ma una volatilità superiore e potenziali vincite più elevate per singolo round.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>L&apos;RTP non garantisce risultati nel breve periodo: oscillazioni e sequenze &quot;a vuoto&quot; sono normali, specialmente sui bonus.</li>
          <li>Puntate con RTP più alto riducono teoricamente il margine della casa, ma non eliminano la varianza.</li>
          <li>I moltiplicatori del Top Slot incidono solo sul giro in cui compaiono e possono incrementare considerevolmente il payout di un esito.</li>
          <li>Gestione del bankroll: definisci limiti e dimensiona la puntata in base alla volatilità attesa (bonus più &quot;irregolari&quot;, numeri più &quot;regolari&quot;).</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Crazy Time è una slot? Differenze tra game show live e slot online
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          No: Crazy Time non è una &quot;slot&quot; tradizionale. È un gioco live con presentatore, ruota fisica e mini‑giochi; condivide con le slot la presenza di RTP e moltiplicatori, ma la struttura e la determinazione dell&apos;esito sono diverse. Ecco le principali differenze operative:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Meccanica dell&apos;esito:</strong> ruota fisica gestita in studio live, con Top Slot che può aggiungere un moltiplicatore; nelle slot l&apos;esito deriva interamente da RNG certificato.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Partecipazione live:</strong> conduttore e interazione in tempo reale; le slot sono esperienze individuali non &quot;sincrone&quot;.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Puntate e ritmo:</strong> round a finestre temporali comuni a tutti i giocatori; nelle slot avvii il giro quando vuoi.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Struttura delle vincite:</strong> numeri a pagamento fisso e bonus interattivi variabili; nelle slot, tabelle pagamenti, linee e funzioni bonus interne.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Promozioni e requisiti:</strong> spesso i giochi live hanno contribuzione ridotta ai wagering dei bonus rispetto alle slot; verifica sempre i T&amp;C dell&apos;operatore.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
          In sintesi, Crazy Time è un game show live regolamentato e con RTP pubblici per ciascun tipo di puntata; è ideale per chi cerca un&apos;esperienza sociale e scenografica, sapendo che la volatilità dei bonus rende l&apos;andamento meno lineare rispetto a molte slot a bassa varianza.
        </p>
      </section>

      {/* ===== DEMO / GRATIS ===== */}
      <section style={{ marginTop: "48px" }} aria-labelledby="demo-gratis-slot-heading">
        <h2 id="demo-gratis-slot-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Posso provare Crazy Time gratis senza registrazione?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è un game show live di Evolution integrato nei casinò online autorizzati ADM. A differenza delle slot, i giochi live non offrono una &quot;demo&quot; con saldo virtuale: per partecipare ai round serve un conto attivo presso un concessionario. Alcuni operatori consentono di entrare nella lobby e guardare il flusso video senza puntare (&quot;modalità spettatore&quot;), ma non è possibile giocare gratis al tavolo live con denaro fittizio.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Demo Crazy Time: dove trovare versioni gratuite su Eurobet e SNAI
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Per i giochi live Evolution, tra cui Crazy Time, non esiste una modalità demo con saldo fun. Su Eurobet e SNAI puoi accedere alla pagina del gioco e, dopo il login, visualizzare il flusso live anche senza piazzare scommesse, ma non è disponibile una versione &quot;gratuita&quot; del tavolo con credito virtuale.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Eurobet:</strong> entra in Casinò Live, sezione Game Show, cerca &quot;Crazy Time&quot;. L&apos;accesso al video richiede l&apos;account; non è prevista demo a soldi finti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>SNAI:</strong> vai su Casinò Live e usa la ricerca interna per &quot;Crazy Time&quot;. Il gioco è fruibile in streaming dopo il login; non sono previste puntate con saldo virtuale.</li>
          <li>Eventuali &quot;demo&quot; reperibili online si riferiscono a simulazioni o giochi ispirati a Crazy Time, non al tavolo live ufficiale Evolution.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Modalità spettatore: cosa puoi vedere senza puntare e limiti delle demo
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La modalità spettatore permette di osservare il gioco prima di impegnare denaro reale. È utile per comprendere ritmo, segmenti e funzionamento dei bonus, fermo restando che senza puntata non si partecipa ai round bonus né si maturano vincite.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Cosa puoi vedere:</strong> presentatore in studio, ruota a 54 segmenti, esito di ogni giro, moltiplicatore del Top Slot, cronologia recente dei risultati.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cosa non puoi fare:</strong> piazzare puntate, entrare nei bonus (Coin Flip, Cash Hunt, Pachinko, Crazy Time), inviare scommesse tardive o incassare vincite.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Requisiti tipici:</strong> login al conto di gioco presso il concessionario ADM; talvolta è richiesta la permanenza in Italia per la visione del flusso streaming.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Disponibilità:</strong> il flusso può essere temporaneamente non disponibile per manutenzione o limiti tecnici definiti dall&apos;operatore.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Quale puntata minima scegliere? Tabella per bankroll ridotto
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Nei casinò ADM il limite minimo per singolo esito su Crazy Time è solitamente compreso tra 0,10 € e 0,50 € (verifica sempre nella schermata delle puntate del tuo operatore). Con bankroll ridotti, molti giocatori adottano unità del 0,5–1% del capitale di sessione per contenere la volatilità.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Bankroll di sessione</th>
                <th>Unità al 0,5%</th>
                <th>Unità all&apos;1%</th>
                <th>Stima round (0,5%)</th>
                <th>Stima round (1%)</th>
                <th>Compatibilità min puntata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 €</td>
                <td>0,05 €</td>
                <td>0,10 €</td>
                <td>≈ 50 round</td>
                <td>≈ 50 round</td>
                <td>0,05 € sotto il minimo tipico; 0,10 € compatibile</td>
              </tr>
              <tr>
                <td>20 €</td>
                <td>0,10 €</td>
                <td>0,20 €</td>
                <td>≈ 100 round</td>
                <td>≈ 50 round</td>
                <td>Entrambe compatibili</td>
              </tr>
              <tr>
                <td>50 €</td>
                <td>0,25 €</td>
                <td>0,50 €</td>
                <td>≈ 100 round</td>
                <td>≈ 50 round</td>
                <td>Entrambe compatibili</td>
              </tr>
              <tr>
                <td>100 €</td>
                <td>0,50 €</td>
                <td>1,00 €</td>
                <td>≈ 100 round</td>
                <td>≈ 50 round</td>
                <td>Compatibile; verifica il tetto min/max tavolo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.875rem" }}>
          Indicazioni pratiche: se il tuo operatore imposta un minimo per esito di 0,50 €, i bankroll molto piccoli (es. 10 €) potrebbero esaurirsi rapidamente se copri più esiti a ogni giro. Inizia con il minimo disponibile, limita il numero di esiti coperti e rivaluta la strategia in base alla volatilità del gioco.
        </p>
      </section>

      {/* ===== CONFRONTO OPERATORI ===== */}
      <section style={{ marginTop: "48px" }} aria-labelledby="confronto-operatori-heading">
        <h2 id="confronto-operatori-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Confronto operatori italiani: Sisal, Eurobet, SNAI, GoldBet, Planetwin365
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          I principali concessionari ADM integrano Crazy Time tramite il provider Evolution: l&apos;RTP e le regole del gioco sono fissati dal provider e non cambiano tra operatori. A variare, invece, sono aspetti di esperienza utente (limiti tavolo esposti in lobby, prestazioni dell&apos;app, flusso di cassa e canali di pagamento supportati).
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Qual è il payout medio reale? Limiti tavolo, latenza streaming, qualità video
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il &quot;payout medio reale&quot; che i giocatori osservano in una breve sessione dipende dalla varianza del gioco e non riflette l&apos;RTP a lungo termine. L&apos;RTP di Crazy Time è definito da Evolution ed è identico su tutti i concessionari ADM; ciò che può cambiare tra operatori è il contesto di fruizione (limiti, stabilità del flusso, qualità del player).
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Aspetto</th>
                <th>Chi lo determina</th>
                <th>Varia tra operatori</th>
                <th>Impatto pratico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RTP e regole di Crazy Time</td>
                <td>Provider (Evolution)</td>
                <td style={{ color: "#EF4444" }}>No</td>
                <td>Percentuali e meccaniche uguali su tutti i siti ADM</td>
              </tr>
              <tr>
                <td>Limiti di puntata min/max visibili in lobby</td>
                <td>Operatore (concessione ADM)</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>Incidono su gestione del bankroll e accessibilità delle strategie</td>
              </tr>
              <tr>
                <td>Latenza e stabilità dello streaming</td>
                <td>Infrastruttura del provider + rete utente</td>
                <td style={{ color: "#F59E0B" }}>Può variare</td>
                <td>Un flusso stabile riduce ritardi nel betting e disconnessioni</td>
              </tr>
              <tr>
                <td>Qualità video (adattiva)</td>
                <td>Player/operatori + banda dell&apos;utente</td>
                <td style={{ color: "#F59E0B" }}>Può variare</td>
                <td>Maggiore chiarezza del flusso, migliore leggibilità dei risultati</td>
              </tr>
              <tr>
                <td>Interfaccia e usabilità della lobby</td>
                <td>Operatore</td>
                <td style={{ color: "#10B981" }}>Sì</td>
                <td>Ricerca rapida del tavolo, filtri &quot;Game Show&quot;, cronologia esiti</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          App e mobile: stabilità, notifiche promo, accesso rapido al live
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Tutti i concessionari citati offrono una versione mobile web responsive; molte realtà mettono anche a disposizione app dedicate. L&apos;esperienza su smartphone dipende da tre elementi: stabilità dell&apos;app/player, gestione delle notifiche (promo, mission, reminder) e facilità di accesso al live game show.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Stabilità: preferisci l&apos;uso su Wi‑Fi o rete 4G/5G con segnale stabile; chiudi app in background che consumano banda.</li>
          <li>Notifiche promo: attiva solo quelle rilevanti; molte promo sono a tempo e richiedono opt‑in nell&apos;area promozioni dell&apos;operatore.</li>
          <li>Accesso rapido: aggiungi Crazy Time ai &quot;Preferiti/Recenti&quot; della lobby live e usa la ricerca interna per trovarlo in pochi tocchi.</li>
          <li>Risparmio dati: imposta qualità video &quot;auto/adattiva&quot; per ridurre buffering e disconnessioni su reti meno stabili.</li>
          <li>Assistenza: in caso di errori video o latenza elevata, contatta la help desk del tuo operatore dall&apos;app o dal sito ufficiale.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Pagamenti e prelievi: carte, e-wallet, tempi e commissioni
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Nei siti ADM, depositi e prelievi devono essere intestati al titolare del conto e conformi alle procedure KYC. I metodi disponibili variano per operatore; tra quelli comunemente supportati rientrano carte (Visa/Mastercard, incluse carte prepagate come PostePay), bonifico bancario, e-wallet (ad es. PayPal) e talvolta voucher/prepagate abilitate.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Depositi: in genere istantanei con carte ed e-wallet; i bonifici richiedono più tempo.</li>
          <li>Prelievi: disponibili solo verso metodi verificati e riconducibili al titolare; tempi e commissioni sono indicati nella sezione Pagamenti.</li>
          <li>Documenti: per il primo prelievo è spesso richiesta la verifica completa del profilo (documento d&apos;identità e metodo di pagamento).</li>
          <li>Trasparenza costi: consulta la pagina &quot;Pagamenti/FAQ&quot; dell&apos;operatore per conoscere limiti min/max, eventuali fee e tempistiche.</li>
        </ul>
      </section>

      {/* ===== RISCHI E GIOCO RESPONSABILE ===== */}
      <section style={{ marginTop: "48px" }} aria-labelledby="rischi-slot-heading">
        <h2 id="rischi-slot-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          L&apos;altro lato della medaglia: rischi, miti e gioco responsabile
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è un game show live ad alta volatilità: i round bonus generano vincite potenzialmente elevate ma irregolari, e sequenze lunghe senza eventi remunerativi sono possibili. Per un approccio consapevole è fondamentale conoscere i limiti del gioco, evitare letture errate delle statistiche e utilizzare gli strumenti di tutela previsti dal quadro regolamentare ADM.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          L&apos;argomento più forte contro Crazy Time: alta volatilità e bias del giocatore
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La combinazione tra bassa frequenza dei bonus e aspettative elevate porta molti giocatori a sovrastimare la probabilità di &quot;recupero&quot; nel breve termine. In realtà, ogni giro è indipendente e non &quot;compensa&quot; quelli precedenti. I bias cognitivi più comuni possono spingere a decisioni impulsive e incrementi non pianificati della puntata.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Bias cognitivo</th>
                <th>Cosa fa credere</th>
                <th>Impatto sul gioco</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fallacia del giocatore</td>
                <td>Che dopo molti giri senza bonus, &quot;ora deve uscire&quot;</td>
                <td>Porta ad aumenti ingiustificati delle puntate e a overexposure</td>
              </tr>
              <tr>
                <td>Hot‑hand fallacy</td>
                <td>Che una &quot;striscia calda&quot; continuerà</td>
                <td>Spinge a inseguire serie fortunate, ignorando l&apos;indipendenza dei giri</td>
              </tr>
              <tr>
                <td>Recency bias</td>
                <td>Che gli ultimi esiti siano più rappresentativi del futuro</td>
                <td>Decisioni basate sulla cronologia recente, non sulle reali probabilità</td>
              </tr>
              <tr>
                <td>Illusione di controllo</td>
                <td>Che scelte o tempistiche personali influenzino l&apos;esito</td>
                <td>Aumenta la propensione al rischio senza fondamento statistico</td>
              </tr>
              <tr>
                <td>Costi sommersi (sunk cost)</td>
                <td>&quot;Devo recuperare perché ho già investito molto&quot;</td>
                <td>Raddoppi insostenibili, sessioni prolungate oltre il budget</td>
              </tr>
              <tr>
                <td>Conferma selettiva</td>
                <td>Si ricordano solo i colpi riusciti</td>
                <td>Valutazione distorta del risultato complessivo della sessione</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Strategie vincenti esistono? Analisi critica di martingala e &quot;stats Italia&quot;
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Non esistono strategie che trasformino un&apos;aspettativa matematica negativa in positiva. Sistemi come la martingala (raddoppiare dopo una perdita) non modificano l&apos;RTP del gioco e sono limitati da tetti di puntata e dal bankroll: una breve sequenza sfavorevole può azzerare la cassa prima che si verifichi un singolo colpo vincente.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Martingala e varianti: aspettativa invariata, rischio di rovina crescente, limiti min/max del tavolo che troncano la progressione.</li>
          <li>&quot;Inseguire&quot; bonus o numeri: la frequenza osservata su pochi giri non è una stima affidabile della probabilità reale.</li>
          <li>Storici/&quot;stats Italia&quot;: utili solo come registro di ciò che è già accaduto; non forniscono segnali per il futuro.</li>
          <li>Approccio razionale: definisci budget, obiettivi non finanziari (tempo di intrattenimento), stop‑loss e stop‑win realistici.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          Strumenti ADM per limitare i rischi: limiti, autoesclusione, realtà di gioco
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il quadro regolamentare italiano prevede strumenti concreti per controllare l&apos;attività di gioco online. Tutti i concessionari ADM devono offrire funzioni di autolimitazione e tutele di base. Informazioni ufficiali su normativa e tutela del giocatore sono disponibili sul portale dell&apos;Agenzia delle Dogane e dei Monopoli (ADM) e, per gli aspetti sanitari, presso l&apos;Istituto Superiore di Sanità (ISS).
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Limiti di deposito: impostazione di un tetto settimanale personalizzato; l&apos;aumento è soggetto a tempi di raffreddamento, la riduzione è immediata.</li>
          <li>Reality check e cronologia: messaggi periodici sul tempo di gioco e saldo; accesso allo storico puntate e movimenti.</li>
          <li>Time‑out/pausa: sospensione volontaria dell&apos;account per periodi brevi, senza chiusura definitiva.</li>
          <li>Autoesclusione centralizzata (RUA): esclusione temporanea o a tempo indeterminato valida su tutti i concessionari ADM.</li>
          <li>Supporto: consulta le sezioni &quot;Gioco Responsabile&quot; dei concessionari e, in caso di bisogno, rivolgiti ai servizi sanitari territoriali indicati dall&apos;ISS.</li>
        </ul>
      </section>

      {/* Casinò consigliati */}
      <section style={{ marginTop: "60px" }} aria-labelledby="casinos-slot-heading">
        <h2 id="casinos-slot-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Dove Giocare a Crazy Time
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Casinò autorizzati con i tavoli live Evolution Gaming.
        </p>
        <p style={{ margin: "0 0 20px" }}>
          <span className="badge badge-red">Solo 18+</span>{" "}
          <span style={{ color: "#64748B", fontSize: "0.8rem" }}>T&C si applicano. Gioca responsabilmente.</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {casinos.map((casino) => (
            <CasinoCTA key={casino.id} casino={casino} variant="full" />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .slot-layout { grid-template-columns: 1fr !important; }
          .slot-sidebar { order: -1; }
        }
      `}</style>
    </div>
  );
}
