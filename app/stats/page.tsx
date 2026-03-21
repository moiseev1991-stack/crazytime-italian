import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { wheelSegments } from "@/data/segments";
import { bonusRounds } from "@/data/bonuses";
import StatsCard from "@/components/shared/StatsCard";
import SpinHistory from "@/components/stats/SpinHistory";
import { FerrisWheel, Dices, BarChart3, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time Stats Live – Statistiche, Risultati e Tracker 2026",
  description:
    "Statistiche Crazy Time aggiornate in tempo reale: estrazioni live, risultati storici, tracker, scores e ultime uscite. Dati aggiornati ogni minuto per il mercato italiano.",
  alternates: { canonical: `${SITE_URL}/stats` },
  openGraph: {
    title: "Crazy Time Stats Live – Statistiche, Risultati e Tracker 2026",
    description: "Statistiche Crazy Time aggiornate in tempo reale: estrazioni live, risultati storici, tracker, scores e ultime uscite. Dati aggiornati ogni minuto per il mercato italiano.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/stats`,
  },
};

const bonusStats = [
  { bonus: bonusRounds[0], avgMult: "30x", hitsPer100: "~7,4", record: "5.000x" },
  { bonus: bonusRounds[1], avgMult: "50x", hitsPer100: "~3,7", record: "25.000x" },
  { bonus: bonusRounds[2], avgMult: "40x", hitsPer100: "~3,7", record: "10.000x" },
  { bonus: bonusRounds[3], avgMult: "80x", hitsPer100: "~1,9", record: "20.000x" },
];

export default function StatsPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 16px" }}>

      {/* Hero */}
      <header style={{ marginBottom: "48px" }}>
        <div
          style={{
            position: "relative",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "16px",
            marginBottom: "32px",
          }}
        >
          <Image
            src="/images/hero/stats.webp"
            alt="Statistiche e risultati della ruota di Crazy Time"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={80}
          />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.70)" }} aria-hidden="true" />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 70%, transparent 100%)" }} aria-hidden="true" />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, #0F0A1A, transparent)" }} aria-hidden="true" />
          <div className="hero-sub-content" style={{ position: "relative", zIndex: 10, padding: "40px 32px", maxWidth: "720px" }}>
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
              Crazy Time Stats –{" "}
              <span style={{ color: "#FFD700", textShadow: "0 0 10px rgba(255,215,0,0.5), 0 2px 8px rgba(0,0,0,1)", WebkitTextStroke: "0.5px rgba(0,0,0,0.3)" }}>
                Statistiche Live e Risultati in Tempo Reale
              </span>
            </h1>
            <p style={{ color: "rgb(226, 232, 240)", fontSize: "1rem", lineHeight: "1.7", margin: 0, textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              Monitora i giri recenti, la frequenza dei bonus e i dati sui moltiplicatori.
            </p>
          </div>
        </div>
      </header>

      {/* Summary dashboard */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="summary-heading">
        <h2 id="summary-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 20px" }}>
          Dati Principali
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
          <StatsCard label="Segmenti Ruota" value="54" icon={<FerrisWheel size={32} color="#7B2FBE" strokeWidth={1.5} />} color="#7B2FBE" sublabel="Segmenti totali sulla ruota" />
          <StatsCard label="Frequenza Bonus" value="~16%" icon={<Dices size={32} color="#F59E0B" strokeWidth={1.5} />} color="#F59E0B" sublabel="9 segmenti su 54 sono bonus" />
          <StatsCard label="RTP Medio" value="96,08%" icon={<BarChart3 size={32} color="#10B981" strokeWidth={1.5} />} color="#10B981" sublabel="Sulla puntata Numero 1 (la più alta)" />
          <StatsCard label="Moltiplicatore Massimo" value="20.000x" icon={<Trophy size={32} color="#EF4444" strokeWidth={1.5} />} color="#EF4444" sublabel="Bonus Crazy Time + Top Slot" />
        </div>
      </section>

      {/* Segment distribution chart */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="distribution-heading">
        <h2 id="distribution-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 20px" }}>
          Distribuzione dei Segmenti
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="dist-grid">
          {/* Bar chart */}
          <div
            style={{
              background: "#1A1128",
              border: "1px solid #2D2245",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <h3 style={{ color: "#94A3B8", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 24px" }}>
              Tasso di occorrenza
            </h3>
            {wheelSegments.map((seg) => (
              <div key={seg.name} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ color: "#F8FAFC", fontSize: "0.875rem", fontWeight: 500 }}>{seg.name}</span>
                  <span style={{ color: seg.color, fontWeight: 700, fontSize: "0.875rem" }}>{seg.count}/54</span>
                </div>
                <div style={{ background: "#2D2245", borderRadius: "4px", height: "12px" }}>
                  <div
                    style={{
                      width: `${(seg.count / 54) * 100}%`,
                      height: "100%",
                      backgroundColor: seg.color,
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <p style={{ color: "#64748B", fontSize: "0.75rem", margin: "4px 0 0", textAlign: "right" }}>
                  {seg.probability}
                </p>
              </div>
            ))}
          </div>

          {/* Pie-like visual */}
          <div
            style={{
              background: "#1A1128",
              border: "1px solid #2D2245",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <h3 style={{ color: "#94A3B8", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 24px" }}>
              Category Split
            </h3>

            {/* Visual circles */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "24px", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "conic-gradient(#3B82F6 0% 38.89%, #10B981 38.89% 62.96%, #F59E0B 62.96% 75.92%, #EF4444 75.92% 83.33%, #7B2FBE 83.33% 90.74%, #8B5CF6 90.74% 94.44%, #EC4899 94.44% 98.14%, #F97316 98.14% 100%)",
                    margin: "0 auto 12px",
                  }}
                  aria-hidden="true"
                />
                <p style={{ color: "#94A3B8", fontSize: "0.75rem", margin: 0 }}>Tutti i segmenti</p>
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {wheelSegments.map((seg) => (
                <div key={seg.name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: seg.color, flexShrink: 0 }} />
                  <span style={{ color: "#F8FAFC", fontSize: "0.825rem", flex: 1 }}>{seg.name}</span>
                  <span style={{ color: "#94A3B8", fontSize: "0.8rem", fontFamily: "monospace" }}>{seg.count} ({seg.probability})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full statistics table */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="full-table-heading">
        <h2 id="full-table-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 20px" }}>
          Riferimento Statistiche Storiche
        </h2>
        <div className="table-wrapper">
          <table className="stats-table" style={{ minWidth: "600px" }}>
            <thead>
              <tr>
                <th>Segmento</th>
                <th>Quantità</th>
                <th>Probabilità</th>
                <th>RTP</th>
                <th>Tipo</th>
                <th>Media Uscite / 100 Giri</th>
              </tr>
            </thead>
            <tbody>
              {wheelSegments.map((seg) => (
                <tr key={seg.name}>
                  <td>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: seg.color, display: "inline-block" }} />
                      <strong style={{ color: seg.color }}>{seg.name}</strong>
                    </span>
                  </td>
                  <td>{seg.count}</td>
                  <td>{seg.probability}</td>
                  <td style={{ color: "#10B981" }}>{seg.rtp}</td>
                  <td>
                    <span className={seg.isBonus ? "badge badge-gold" : "badge badge-blue"}>
                      {seg.isBonus ? "Bonus" : "Numero"}
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", color: "#94A3B8" }}>
                    ~{(seg.count / 54 * 100).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bonus round stats */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="bonus-stats-heading">
        <h2 id="bonus-stats-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 20px" }}>
          Statistiche Round Bonus
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {bonusStats.map(({ bonus, avgMult, hitsPer100, record }) => (
            <div
              key={bonus.id}
              style={{
                background: "#1A1128",
                border: `1px solid ${bonus.color}30`,
                borderRadius: "12px",
                padding: "20px",
                borderTop: `3px solid ${bonus.color}`,
              }}
            >
              <h3
                style={{
                  color: bonus.color,
                  fontWeight: 700,
                  fontSize: "1rem",
                  margin: "0 0 16px",
                }}
              >
                {bonus.name}
              </h3>

              {/* Mini bar */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ color: "#64748B", fontSize: "0.75rem" }}>Frequenza</span>
                  <span style={{ color: "#94A3B8", fontSize: "0.75rem" }}>{bonus.hitRate}</span>
                </div>
                <div style={{ background: "#2D2245", borderRadius: "4px", height: "6px" }}>
                  <div
                    style={{
                      width: bonus.hitRate,
                      height: "100%",
                      backgroundColor: bonus.color,
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>

              {[
                { label: "Uscite ogni 100 giri", value: hitsPer100 },
                { label: "Moltiplicatore medio", value: avgMult },
                { label: "Vincita record", value: record },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #2D224540" }}>
                  <span style={{ color: "#64748B", fontSize: "0.78rem" }}>{stat.label}</span>
                  <span style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.85rem" }}>{stat.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== COME LEGGERE LE STATISTICHE ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="come-leggere-heading">
        <h2 id="come-leggere-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px" }}>
          Che cos&apos;è Crazy Time Live e come funzionano le statistiche?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time Live è un game show dal vivo di Evolution basato su una ruota a 54 segmenti che include numeri (1, 2, 5, 10) e quattro round bonus (Coin Flip, Cash Hunt, Pachinko, Crazy Time). A ogni giro la ruota è indipendente, mentre un &quot;Top Slot&quot; sopra la ruota può assegnare casualmente moltiplicatori a un numero o a un bonus prima dello spin. Le &quot;statistiche&quot; non sono previsioni: sono storici di esiti già avvenuti, utili per analisi descrittive (frequenze osservate, cronologie), non per anticipare risultati futuri.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Come leggere la ruota e i segmenti principali?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La ruota di Crazy Time ha 54 segmenti totali con questa distribuzione: più segmenti per un esito significano una probabilità maggiore di fermarsi su quell&apos;esito. I numeri pagano in proporzione (1:1, 2:1, 5:1, 10:1), mentre i bonus aprono un mini‑gioco con vincite variabili. Il Top Slot (indipendente) può aggiungere moltiplicatori a un singolo esito per quel giro.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "12px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Esito</th>
                <th>Segmenti sulla ruota</th>
                <th>Probabilità stimata</th>
                <th>Payout base</th>
                <th>RTP teorico</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>21 / 54</td><td>38,89%</td><td>1:1</td><td style={{ color: "#10B981" }}>96,08%</td></tr>
              <tr><td>2</td><td>13 / 54</td><td>24,07%</td><td>2:1</td><td style={{ color: "#10B981" }}>95,95%</td></tr>
              <tr><td>5</td><td>7 / 54</td><td>12,96%</td><td>5:1</td><td style={{ color: "#10B981" }}>95,78%</td></tr>
              <tr><td>10</td><td>4 / 54</td><td>7,41%</td><td>10:1</td><td style={{ color: "#F59E0B" }}>95,73%</td></tr>
              <tr><td>Coin Flip (bonus)</td><td>4 / 54</td><td>7,41%</td><td>Variabile</td><td style={{ color: "#F59E0B" }}>95,70%</td></tr>
              <tr><td>Cash Hunt (bonus)</td><td>2 / 54</td><td>3,70%</td><td>Variabile</td><td style={{ color: "#F59E0B" }}>95,27%</td></tr>
              <tr><td>Pachinko (bonus)</td><td>2 / 54</td><td>3,70%</td><td>Variabile</td><td style={{ color: "#EF4444" }}>94,33%</td></tr>
              <tr><td>Crazy Time (bonus)</td><td>1 / 54</td><td>1,85%</td><td>Variabile</td><td style={{ color: "#EF4444" }}>94,41%</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>
          Note: le probabilità sono calcolate come segmenti/54 prima di eventuali moltiplicatori Top Slot; gli RTP riportati sono quelli tipicamente dichiarati dal provider e possono variare leggermente in base a mercato/operatore. Indicazioni pratiche per la lettura:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>I numeri compaiono più spesso dei bonus perché occupano più segmenti.</li>
          <li>I bonus hanno volatilità più alta: frequenze più basse ma potenziali vincite maggiori e variabili.</li>
          <li>Gli storici mostrano cosa è già uscito; non esiste &quot;debito&quot; della ruota e ogni giro resta indipendente.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Cos&apos;è &quot;Crazy Time A&quot; e cosa cambia rispetto ad altri stream?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          &quot;Crazy Time A&quot; è un&apos;etichetta usata da alcuni casinò/aggregatori o siti di statistiche per distinguere flussi (stream) o tavoli omonimi quando sono disponibili più istanze parallele dello stesso gioco. Non è una variante con regole diverse: layout della ruota, meccaniche, payout base e RTP rimangono gli stessi; cambiano solo elementi di erogazione del servizio (studio, presentatore, latenza/qualità video, ID stream). Il Top Slot e gli esiti sono indipendenti per ciascuno stream, quindi le statistiche vanno sempre lette per singolo canale e non sommate tra stream diversi.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Stessa matematica del gioco: identica distribuzione dei 54 segmenti e medesimi payout base.</li>
          <li>Stream separati: ogni tavolo/stream ha il proprio Top Slot e la propria sequenza di giri.</li>
          <li>Verifica rapida: controlla l&apos;ID del tavolo/stream nell&apos;interfaccia del casinò e l&apos;orario CET/CEST per allineare correttamente gli storici.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Dove trovare statistiche affidabili per l&apos;Italia?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La fonte più affidabile è la cronologia integrata nell&apos;interfaccia ufficiale del gioco fornita da Evolution tramite operatori con licenza ADM. Questi storici mostrano gli ultimi esiti del tuo specifico stream. Siti terzi possono offrire dashboard estese, ma non sono fonti ufficiali: usa sempre un riscontro con la cronologia in‑game e verifica che il fuso orario sia Europe/Rome (CET/CEST) e che lo stream corrisponda.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "0" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Fonte</th>
                <th>Ufficialità</th>
                <th>Contenuto dati</th>
                <th>Quando usarla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Storico in‑game (UI Evolution)</td>
                <td style={{ color: "#10B981" }}>Ufficiale</td>
                <td>Ultimi esiti, stream corretto, ora locale</td>
                <td>Sempre, come riferimento primario</td>
              </tr>
              <tr>
                <td>Operatori ADM</td>
                <td style={{ color: "#10B981" }}>Ufficiale (licenziato)</td>
                <td>Accesso al gioco, talvolta pannelli cronologia estesi</td>
                <td>Per giocare legalmente e consultare dati coerenti</td>
              </tr>
              <tr>
                <td>Tracker/portali terzi</td>
                <td style={{ color: "#F59E0B" }}>Non ufficiale</td>
                <td>Dashboard storiche, filtri, etichette stream A/B</td>
                <td>Solo per analisi descrittive, da validare con l&apos;in‑game</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== STATISTICHE LIVE E FILTRI ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="stats-live-heading">
        <h2 id="stats-live-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px" }}>
          Statistiche live e risultati di oggi: come consultarli?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Le statistiche live di Crazy Time sono accessibili principalmente dall&apos;interfaccia ufficiale del gioco fornita da Evolution tramite operatori con licenza ADM. Questi dati mostrano la cronologia degli esiti dello stream a cui stai effettivamente partecipando (non un riepilogo globale) e servono per analisi descrittive, non per predire i risultati futuri.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Cronologia dei giri in tempo reale: cosa mostra davvero?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La cronologia in tempo reale elenca gli ultimi esiti della ruota nello specifico stream in cui ti trovi. Non è uno strumento previsionale, né riporta &quot;debiti&quot; o &quot;pattern vincolanti&quot;: ogni giro è indipendente. Cambiando stream o tavolo, la cronologia mostrata è differente perché riflette solo il canale selezionato.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.875rem" }}>
          <li>A cosa serve: controllo dello stato corrente del tuo stream (esiti appena avvenuti).</li>
          <li>Cosa non fa: non calcola probabilità future, non &quot;compensa&quot; uscite mancate, non unifica più stream.</li>
          <li>Limiti comuni: finestra temporale ridotta agli ultimi esiti; assenza di dettagli approfonditi storici.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Quali filtri usare: moltiplicatori, bonus e fasce orarie?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Filtro</th>
                <th>Definizione operativa</th>
                <th>Perché utile</th>
                <th>Avvertenze</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moltiplicatori Top Slot</td>
                <td>Giri in cui il Top Slot ha applicato un moltiplicatore</td>
                <td>Valuta l&apos;impatto dei moltiplicatori sulle vincite osservate</td>
                <td>I moltiplicatori sono casuali e indipendenti; non aumentano la probabilità che si ripetano</td>
              </tr>
              <tr>
                <td>Round bonus</td>
                <td>Isola Coin Flip, Cash Hunt, Pachinko, Crazy Time</td>
                <td>Analizza volatilità e frequenza osservata dei bonus nel tuo stream</td>
                <td>Frequenze osservate non sono predittive; confronta con la cronologia ufficiale</td>
              </tr>
              <tr>
                <td>Fasce orarie Europe/Rome</td>
                <td>Segmentazione per orario locale (CET/CEST)</td>
                <td>Utile per confrontare sessioni diverse nello stesso fuso</td>
                <td>Il gioco non cambia matematica tra fasce orarie; evita inferenze causali</td>
              </tr>
              <tr>
                <td>Stream (A/B/…)</td>
                <td>Filtra i dati per singolo canale/stream identificato</td>
                <td>Previene il &quot;mescolamento&quot; di cronologie discordanti</td>
                <td>Controlla sempre l&apos;ID del tavolo: gli stream sono indipendenti tra loro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Come impostare avvisi senza inseguire le perdite?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Definisci limiti sul conto: molti operatori ADM offrono limiti di deposito, perdita e durata sessione; attivali dal profilo giocatore.</li>
          <li>Configura alert temporali: promemoria ogni 20–30 minuti per valutare pausa o chiusura della sessione.</li>
          <li>Stabilisci uno stop‑loss e uno stop‑win: chiudi la sessione al raggiungimento di una perdita massima sostenibile o di un utile prefissato.</li>
          <li>Evita trigger &quot;event‑based&quot;: non creare avvisi del tipo &quot;X giri senza bonus&quot; (fallacia dello scommettitore).</li>
          <li>Pre‑imposta importi fissi: usa pezzature costanti e un tetto di spesa complessivo per la sessione.</li>
        </ul>
      </section>

      {/* ===== PROBABILITÀ E RTP ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="prob-rtp-heading">
        <h2 id="prob-rtp-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px" }}>
          Probabilità, RTP e frequenze: cosa aspettarsi da Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Le probabilità dipendono unicamente dal numero di segmenti occupati da ciascun esito; il Top Slot può applicare occasionalmente moltiplicatori a un esito, ma non modifica la probabilità che la ruota si fermi su quel segmento. L&apos;RTP è dichiarato dal provider per ogni tipo di puntata e rappresenta il ritorno teorico a lungo periodo; nel breve termine, le frequenze osservate possono discostarsi sensibilmente dal valore atteso.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Probabilità di numeri e round bonus con attesa media tra uscite
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Esito</th>
                <th>Segmenti su 54</th>
                <th>Probabilità</th>
                <th>Payout base</th>
                <th>Attesa media tra uscite (giri)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>21</td><td>38,89%</td><td>1:1</td><td>≈ 2,57</td></tr>
              <tr><td>2</td><td>13</td><td>24,07%</td><td>2:1</td><td>≈ 4,15</td></tr>
              <tr><td>5</td><td>7</td><td>12,96%</td><td>5:1</td><td>≈ 7,72</td></tr>
              <tr><td>10</td><td>4</td><td>7,41%</td><td>10:1</td><td>≈ 13,50</td></tr>
              <tr><td>Coin Flip (bonus)</td><td>4</td><td>7,41%</td><td>Variabile</td><td>≈ 13,50</td></tr>
              <tr><td>Cash Hunt (bonus)</td><td>2</td><td>3,70%</td><td>Variabile</td><td>≈ 27,00</td></tr>
              <tr><td>Pachinko (bonus)</td><td>2</td><td>3,70%</td><td>Variabile</td><td>≈ 27,00</td></tr>
              <tr><td>Crazy Time (bonus)</td><td>1</td><td>1,85%</td><td>Variabile</td><td>≈ 54,00</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", fontSize: "0.875rem" }}>
          L&apos;attesa media tra uscite è calcolata come 1/p (p = probabilità dell&apos;esito per singolo giro) ed è una media teorica: sequenze più lunghe o più corte sono normali nel breve periodo.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          RTP e payout: che impatto hanno sul bankroll?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Puntata</th>
                <th>RTP teorico</th>
                <th>Margine casa</th>
                <th>Perdita attesa su 100€ di turnover</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td style={{ color: "#10B981" }}>96,08%</td><td>3,92%</td><td>€ 3,92</td></tr>
              <tr><td>2</td><td style={{ color: "#10B981" }}>95,95%</td><td>4,05%</td><td>€ 4,05</td></tr>
              <tr><td>5</td><td style={{ color: "#10B981" }}>95,78%</td><td>4,22%</td><td>€ 4,22</td></tr>
              <tr><td>10</td><td style={{ color: "#F59E0B" }}>95,73%</td><td>4,27%</td><td>€ 4,27</td></tr>
              <tr><td>Coin Flip</td><td style={{ color: "#F59E0B" }}>95,70%</td><td>4,30%</td><td>€ 4,30</td></tr>
              <tr><td>Cash Hunt</td><td style={{ color: "#F59E0B" }}>95,27%</td><td>4,73%</td><td>€ 4,73</td></tr>
              <tr><td>Pachinko</td><td style={{ color: "#EF4444" }}>94,33%</td><td>5,67%</td><td>€ 5,67</td></tr>
              <tr><td>Crazy Time</td><td style={{ color: "#EF4444" }}>94,41%</td><td>5,59%</td><td>€ 5,59</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Volatilità e &quot;pattern&quot;: perché le strisce ingannano?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
          Le &quot;strisce&quot; (sequenze ripetute di un esito) sono un effetto naturale della casualità e non indicano che un altro esito &quot;debba&quot; uscire a breve. Ogni giro è indipendente: la probabilità che esca un bonus non aumenta solo perché non si vede da molti giri. In giochi con esiti poco probabili (es. Crazy Time al 1,85%), sono normali lunghi periodi senza apparizioni e improvvise concentrazioni in poche decine di giri. La ruota non &quot;ricorda&quot; gli esiti precedenti; il Top Slot è casuale e separato.
        </p>
      </section>

      {/* ===== EVOLUZIONE TRACKING ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="tracking-evoluzione-heading">
        <h2 id="tracking-evoluzione-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px" }}>
          Com&apos;è evoluto il tracking delle statistiche di Crazy Time?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Il tracciamento delle statistiche di Crazy Time si è evoluto rapidamente dal lancio del gioco (2020) passando da annotazioni manuali a dashboard live di terze parti. Oggi la cronologia in‑game fornita da Evolution tramite operatori con licenza ADM resta la base più affidabile per il singolo stream; i portali esterni possono offrire funzioni aggiuntive (filtri, aggregazioni), ma possono introdurre errori di rilevazione o allineamento.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Dalle note manuali ai feed live: tappe principali
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Annotazioni personali (2020): appunti a mano o fogli di calcolo con gli ultimi giri visibili nella UI del casinò.</li>
          <li>Foglio collaborativo/community: condivisione di cronologie aggregate, rischio di duplicazioni o stream confusi.</li>
          <li>Scraping della UI: bot che estraggono in tempo reale esito, orario (CET/CEST) e, quando visibile, moltiplicatore Top Slot.</li>
          <li>Dashboard multi‑stream: etichettano i canali (A/B/…) e permettono filtri per bonus, moltiplicatori e fasce orarie Europe/Rome.</li>
          <li>Avvisi personalizzati: notifiche su soglie definite dall&apos;utente (tempo speso, esposizione), non ufficiali e da verificare con la cronologia in‑game.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Quali limiti hanno i &quot;live stats&quot; tecnicamente?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Limite</th>
                <th>Causa tipica</th>
                <th>Effetto pratico</th>
                <th>Mitigazione consigliata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Latenza del video</td>
                <td>CDN, qualità rete, buffering</td>
                <td>Ritardo tra esito reale e visualizzazione</td>
                <td>Affidarsi al risultato in‑game; non basare decisioni sul solo timer/ritardo</td>
              </tr>
              <tr>
                <td>Stream specifico</td>
                <td>Esiti indipendenti per A/B/…</td>
                <td>Mescolanza di cronologie diverse se non filtrate</td>
                <td>Verificare ID/etichetta stream e confrontare con l&apos;interfaccia del casinò</td>
              </tr>
              <tr>
                <td>Time‑zone errato</td>
                <td>Fuso non impostato su Europe/Rome</td>
                <td>Timestamp non confrontabili tra fonti</td>
                <td>Impostare CET/CEST; indicare l&apos;offset rispetto a UTC</td>
              </tr>
              <tr>
                <td>Errori di parsing</td>
                <td>OCR/scraper fraintendono simboli o colori</td>
                <td>Esiti o moltiplicatori registrati in modo sbagliato</td>
                <td>Validare a campione contro la cronologia ufficiale</td>
              </tr>
              <tr>
                <td>Nessun feed pubblico</td>
                <td>Assenza di API documentate per esiti</td>
                <td>Dati indiretti, maggiore rischio di inconsistenza</td>
                <td>Usare la cronologia in‑game come fonte autorevole</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Previsioni algoritmiche: perché non funzionano sul lungo periodo?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
          I modelli predittivi applicati alle cronologie di Crazy Time non superano il margine della casa sul lungo periodo. La ruota assegna esiti in base a segmenti fissi (54 totali) e ogni giro è indipendente; il Top Slot aggiunge moltiplicatori in modo casuale e separato. L&apos;assenza di segnali predittivi stabili rende inevitabile che strategie basate su regressioni, reti neurali o pattern matching si sovra‑adattino al passato senza poter generare vantaggio atteso positivo. Con RTP ~94–96%, l&apos;EV medio resta negativo al crescere del turnover.
        </p>
      </section>

      {/* ===== LE STATISTICHE BATTONO IL BANCO? ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="banco-heading">
        <h2 id="banco-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px" }}>
          Le statistiche battono il banco? L&apos;altra faccia della medaglia
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Le statistiche descrivono ciò che è già successo: non eliminano il margine della casa né rendono prevedibili i prossimi esiti. In Crazy Time, ogni giro della ruota è indipendente e governato da probabilità fisse determinate dalla distribuzione dei 54 segmenti. L&apos;RTP resta inferiore al 100% per tutte le puntate, quindi sul lungo periodo l&apos;aspettativa matematica del giocatore è negativa.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Fallacia dello scommettitore: gli esiti sono indipendenti?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          La fallacia dello scommettitore è l&apos;errore di credere che un esito sia &quot;in ritardo&quot; e quindi più probabile dopo una sequenza opposta. In realtà, la probabilità di ciascun esito a ogni giro è costante. I numeri nella tabella seguente mostrano perché le strisce non implicano correzioni forzate.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Formula</th>
                <th>Valore (appross.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crazy Time in 1 giro</td>
                <td>1/54</td>
                <td>≈ 1,85%</td>
              </tr>
              <tr>
                <td>Almeno un bonus in 1 giro (qualsiasi dei 4)</td>
                <td>9/54 = 1/6</td>
                <td>≈ 16,67%</td>
              </tr>
              <tr>
                <td>Nessun Crazy Time in 50 giri</td>
                <td>(53/54)^50</td>
                <td>≈ 39,29%</td>
              </tr>
              <tr>
                <td>Almeno un Crazy Time in 50 giri</td>
                <td>1 − (53/54)^50</td>
                <td>≈ 60,71%</td>
              </tr>
              <tr>
                <td>Nessun Crazy Time in 100 giri</td>
                <td>(53/54)^100</td>
                <td>≈ 15,44%</td>
              </tr>
              <tr>
                <td>Almeno un Crazy Time in 100 giri</td>
                <td>1 − (53/54)^100</td>
                <td>≈ 84,56%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          Qual è un piano di stake e stop davvero responsabile?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Stake costante e contenuto: usa pezzature fisse e proporzionate al budget di sessione, evitando progressioni dopo le perdite.</li>
          <li>Stop‑loss e stop‑win predefiniti: chiudi la sessione al raggiungimento di una perdita massima sostenibile o di un utile prefissato.</li>
          <li>Timer e pause: imposta promemoria periodici (es. ogni 20–30 minuti) per valutare una pausa o la chiusura.</li>
          <li>Evita trigger &quot;event‑based&quot;: niente allarmi del tipo &quot;X giri senza bonus&quot; (fallacia dello scommettitore).</li>
          <li>Autoesclusione e limiti sul conto: sfrutta funzioni di deposito/spesa/tempo e gli strumenti di gioco responsabile degli operatori con licenza ADM.</li>
        </ul>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>
          FAQ Italia: è legale, quali limiti d&apos;età e come funziona la tassazione?
        </h3>
        <div className="table-wrapper" style={{ marginBottom: "0" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Italia (quadro ADM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Autorità competente</td>
                <td>Agenzia delle Dogane e dei Monopoli (ADM)</td>
              </tr>
              <tr>
                <td>Età minima</td>
                <td>18 anni compiuti</td>
              </tr>
              <tr>
                <td>Legalità</td>
                <td>Consentita solo tramite operatori con concessione ADM</td>
              </tr>
              <tr>
                <td>Verifica identità (KYC)</td>
                <td>Obbligatoria per aprire/uso del conto di gioco</td>
              </tr>
              <tr>
                <td>Gioco responsabile</td>
                <td>Limiti di deposito/spesa/tempo, autoesclusione disponibili; vedere linee guida ADM</td>
              </tr>
              <tr>
                <td>Tassazione delle vincite per il giocatore</td>
                <td>In via generale non imponibili IRPEF se erogate da operatori ADM; il prelievo avviene a monte sull&apos;operatore</td>
              </tr>
              <tr>
                <td>Rischi siti non autorizzati</td>
                <td>Rischi legali, assenza di tutele, possibili contestazioni fiscali</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== DOMANDE FREQUENTI ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="faq-stats-heading">
        <h2 id="faq-stats-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 24px" }}>
          Domande Frequenti
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Esiste un&apos;API ufficiale per scaricare le statistiche live di Crazy Time in Italia?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, Evolution non pubblica API pubbliche documentate per gli esiti di Crazy Time; l&apos;unica fonte ufficiale per lo stream a cui partecipi è la cronologia in‑game tramite operatori con licenza ADM. I siti terzi ottengono dati con scraping/OCR e possono introdurre errori o ritardi di alcuni secondi; in caso di discrepanze fa fede il risultato mostrato nel client ufficiale.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quante giocate senza bonus sono statisticamente plausibili in Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Con p(bonus) = 9/54 = 1/6 per giro, la probabilità di zero bonus in n giri è (5/6)^n, quindi 10 giri senza bonus ≈ 16,15%, 30 giri ≈ 0,42%, 50 giri ≈ 0,011%. Sequenze senza bonus anche lunghe sono compatibili con un processo indipendente: che un bonus &quot;manca da X giri&quot; non aumenta la sua probabilità oltre il 16,67% per giro.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Qual è la probabilità di vedere almeno un bonus in 10, 25 o 50 giri?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Vale 1 − (5/6)^n, quindi in 10 giri ≈ 83,85%, in 25 giri ≈ 98,95%, in 50 giri ≈ 99,989%. Questi valori riguardano &quot;almeno uno tra Coin Flip, Cash Hunt, Pachinko o Crazy Time&quot; nello stesso stream e non sono trasferibili tra stream diversi.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Qual è la probabilità di non vedere mai Crazy Time (il bonus) per 150 giri?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Con p(Crazy Time) = 1/54 per giro, la probabilità di zero uscite in 150 giri è (53/54)^150 ≈ 6,0%. Anche assenze prolungate sono possibili in un processo a esiti indipendenti con probabilità 1,85% per giro.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come si calcola la perdita attesa della mia sessione su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>La perdita attesa è uguale al turnover moltiplicato per il margine della casa, quindi perdita ≈ puntata media per giro × numero di giri × (1 − RTP). Esempio: con 2 € per giro, 200 giri e RTP medio 95,5% (margine 4,5%), il turnover è 400 € e la perdita attesa ≈ 18 €.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>I moltiplicatori del Top Slot aumentano la probabilità di vincita?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, aumentano solo il payout condizionato all&apos;hit dell&apos;esito, non la probabilità che la ruota si fermi su quell&apos;esito. La probabilità di una combinazione &quot;Top Slot su E con xM&quot; e &quot;ruota su E&quot; è il prodotto P(Top Slot seleziona E con xM) × P(ruota su E), poiché i due eventi sono indipendenti.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso usare le statistiche dello stream &quot;Crazy Time A&quot; per prevedere lo stream &quot;B&quot;?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, gli stream sono indipendenti e ogni canale ha Top Slot e sequenza di giri propri; mescolare storici porta a inferenze errate. Per verificare la corrispondenza, confronta l&apos;ID tavolo nello UI, controlla il fuso Europe/Rome e accerta che gli ultimi esiti coincidano nello stesso minuto di gioco.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Perché le statistiche di un sito terzo non coincidono con la cronologia in‑game?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Le cause tipiche sono latenza video di 1–5 secondi, fuso orario non impostato su Europe/Rome, stream A/B errato o errori di parsing dell&apos;interfaccia. Se gli ultimi esiti non collimano, considera autorevole la cronologia in‑game dello specifico operatore ADM e stream.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quanti giri all&apos;ora fa Crazy Time e quale turnover orario ne deriva?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Per via dei round bonus, il ciclo medio è variabile e produce in genere 40–60 giri/ora; il turnover orario è quindi puntata media per giro × 40–60. Con 2 € per giro si generano ≈ 80–120 € di turnover/ora e, con margine 4–6%, una perdita attesa oraria di ≈ 3,2–7,2 €.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come verifico fuso orario e stream corretti per l&apos;Italia nel 2026?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Imposta sempre Europe/Rome: CET = UTC+1 e CEST = UTC+2 dal 29 marzo al 25 ottobre 2026; poi controlla che l&apos;ID del tavolo/stream in UI coincida con l&apos;etichetta usata dal sito di statistiche. Se orario o canale differiscono, gli esiti non sono confrontabili.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>I limiti di puntata minimi e massimi cambiano l&apos;efficacia delle strategie?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sì, i limiti fissati dall&apos;operatore ADM e dal tavolo Evolution vincolano l&apos;esposizione per giro e impediscono progressioni teoriche illimitate; l&apos;esposizione minima è pari al minimo per selezione moltiplicato per il numero di esiti coperti, mentre il massimo per selezione o totale blocca qualsiasi rincaro oltre soglia.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Le promozioni (cashback, bonus) possono ridurre il margine della casa?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Le promo non cambiano la matematica del gioco ma possono ridurre la perdita effettiva sul turnover; un cashback del 10% sulle perdite riduce un margine del 4,5% a circa 4,05% (su 1.000 € di turnover: perdita attesa 45 €, rimborso ≈ 4,50 €). Verifica sempre requisiti di puntata, cap e validità.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>È consentito usare bot o overlay per tracciare gli esiti su operatori ADM?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Di norma no: automazioni, scraping e sovrapposizioni non autorizzate violano i Termini d&apos;uso e possono portare a limitazioni del conto; la raccolta dati va fatta consultando la cronologia in‑game ufficiale e, se necessario, annotando manualmente gli esiti dello stream corretto.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Qual è un modo corretto per stimare la &quot;serie attesa&quot; senza cadere nella fallacia dello scommettitore?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Usa la distribuzione geometrica: l&apos;attesa teorica tra due hit è 1/p giri e la probabilità di attendere più di n giri senza hit è (1−p)^n; per Crazy Time con p=1/54, il 95° percentile di attesa è circa 160 giri perché (53/54)^160 ≈ 5%. Le serie osservate non &quot;obbligano&quot; correzioni future.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come risolvo discrepanze tra esito annunciato e payout ricevuto?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Fai riferimento al Game Round ID e al risultato visualizzato nel client ufficiale, che è la fonte autorevole per pagamenti; se il saldo non riflette l&apos;esito, apri un ticket all&apos;operatore ADM indicando Round ID, timestamp Europe/Rome e screenshot del round, così da permettere la verifica lato server.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come trasformare frequenze osservate in stime affidabili senza overfitting?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Lavora su campioni grandi e completi per il tuo stream e applica la statistica binomiale; per il bonus qualsiasi atteso al 16,67%, su 5.000 giri la deviazione standard della frequenza è circa 0,53 punti percentuali, quindi osservare il 18% equivale a uno scostamento di ≈ 2,5 deviazioni standard, compatibile con la varianza senza implicare cambi di probabilità.</p>
          </div>

          <div style={{ paddingBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quali strumenti di gioco responsabile sono obbligatori con gli operatori ADM?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Alla registrazione devi impostare un limite di deposito settimanale; la riduzione è immediata, l&apos;aumento diventa efficace dopo 7 giorni, ed è sempre disponibile l&apos;autoesclusione. Questi vincoli, uniti a limiti di tempo e perdita per sessione, servono a controllare esposizione e turnover in un gioco con RTP inferiore al 100%.</p>
          </div>

        </div>
      </section>

      {/* Spin history (client component) */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="history-heading">
        <h2 id="history-heading" style={{ color: "#F8FAFC", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 8px" }}>
          Storico dei Giri
        </h2>
        <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: "0 0 20px" }}>
          I dati della cronologia sono esiti già avvenuti nello stream: utili per analisi descrittive delle frequenze osservate, non per prevedere il prossimo giro. Ogni spin è indipendente e la ruota non ricorda la storia precedente.
        </p>
        <SpinHistory />
      </section>

      {/* Disclaimer */}
      <div
        style={{
          background: "rgba(100,116,139,0.1)",
          border: "1px solid rgba(100,116,139,0.2)",
          borderRadius: "10px",
          padding: "16px 20px",
          fontSize: "0.8rem",
          color: "#64748B",
          lineHeight: "1.7",
        }}
        role="note"
      >
        <strong>Nota sui Dati:</strong> Le statistiche descrivono ciò che è già successo: non eliminano il margine della casa né rendono prevedibili i prossimi esiti. In Crazy Time ogni giro è indipendente e governato da probabilità fisse determinate dalla distribuzione dei 54 segmenti; l&apos;RTP resta inferiore al 100% per tutte le puntate. I dati di esempio mostrati sono a scopo illustrativo — il monitoraggio in tempo reale richiede l&apos;interfaccia ufficiale del provider tramite un account su operatori con licenza ADM.
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
