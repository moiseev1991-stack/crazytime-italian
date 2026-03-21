import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { casinos } from "@/data/casinos";
import CasinoCTA from "@/components/shared/CasinoCTA";
import StepGuide from "@/components/shared/StepGuide";
import ComparisonTable from "@/components/shared/ComparisonTable";
import { Smartphone, Wifi, FerrisWheel, Tv, Hand, RefreshCw, Bell, Info, Gamepad2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Crazy Time App – Scarica Gratis per Android e iOS 2026",
  description:
    "Scarica l'app Crazy Time per Android e iOS. Gioca in mobilità con statistiche live, demo gratis e accesso diretto ai casino live italiani con licenza ADM.",
  alternates: { canonical: `${SITE_URL}/app` },
  openGraph: {
    title: "Crazy Time App – Scarica Gratis per Android e iOS 2026",
    description: "Scarica l'app Crazy Time per Android e iOS. Gioca in mobilità con statistiche live, demo gratis e accesso diretto ai casino live italiani con licenza ADM.",
    type: "website",
    locale: "it_IT",
    siteName: "Crazy Time Italia",
    url: `${SITE_URL}/app`,
  },
};

const androidSteps = [
  {
    number: 1,
    title: "Apri il sito del casinò sul tuo dispositivo Android",
    description: "Vai su uno dei nostri casinò consigliati tramite Chrome o un altro browser.",
  },
  {
    number: 2,
    title: "Trova la sezione app mobile",
    description: "Cerca 'App Mobile' o 'Scarica App' nel footer o nel menu principale.",
  },
  {
    number: 3,
    title: "Scarica il file APK",
    description: "Tocca 'Scarica per Android'. Il file APK verrà scaricato sul tuo dispositivo.",
  },
  {
    number: 4,
    title: "Abilita 'Installa da fonti sconosciute'",
    description: "Vai in Impostazioni → Sicurezza → abilita 'Installa app sconosciute' per il tuo browser.",
  },
  {
    number: 5,
    title: "Installa e accedi",
    description: "Apri il file APK scaricato, tocca Installa, poi avvia l'app e accedi con il tuo account casinò.",
  },
];

const iosSteps = [
  {
    number: 1,
    title: "Apri Safari sul tuo iPhone o iPad",
    description: "Safari è necessario per la migliore esperienza PWA (Progressive Web App).",
  },
  {
    number: 2,
    title: "Vai al sito del casinò",
    description: "Inserisci l'URL del casinò e accedi al tuo account.",
  },
  {
    number: 3,
    title: "Aggiungi alla schermata Home — crea una scorciatoia che si comporta come un'app",
    description: "Tocca l'icona Condividi → 'Aggiungi a Home'. Questo crea una scorciatoia che si comporta come un'app.",
  },
  {
    number: 4,
    title: "Oppure scarica l'app del casinò dall'App Store",
    description: "Alcuni casinò dispongono di app iOS native. Cerca il nome del casinò nell'App Store.",
  },
];

const appBrowserHeaders = ["App Mobile", "Browser"];
const appBrowserRows = [
  { feature: "Prestazioni", "App Mobile": "5/5", "Browser": "4/5" },
  { feature: "Notifiche push", "App Mobile": true, "Browser": false },
  { feature: "Accesso automatico", "App Mobile": true, "Browser": "Browser salva" },
  { feature: "Spazio richiesto", "App Mobile": "~50–100MB", "Browser": "Nessuno" },
  { feature: "Aggiornamenti", "App Mobile": "Manuale", "Browser": "Automatico" },
  { feature: "Accesso offline", "App Mobile": false, "Browser": false },
  { feature: "Tutti i giochi disponibili", "App Mobile": "Varia", "Browser": true },
];

export default function AppPage() {

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 16px" }}>

      {/* Hero */}
      <header style={{ marginBottom: "60px" }}>
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
            src="/images/hero/app.webp"
            alt="Crazy Time mobile app gameplay"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
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
              Crazy Time App –{" "}
              <span style={{ color: "#FFD700", textShadow: "0 0 10px rgba(255,215,0,0.5), 0 2px 8px rgba(0,0,0,1)", WebkitTextStroke: "0.5px rgba(0,0,0,0.3)" }}>
                Download Gratis Android e iOS
              </span>
            </h1>
            <p style={{ color: "rgb(226, 232, 240)", fontSize: "1rem", lineHeight: "1.7", margin: 0, textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>
              Accedi a Crazy Time dal tuo dispositivo mobile, ovunque tu sia.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center" }} className="app-hero-grid">
          <div>
            <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: "1.7", margin: "0 0 24px" }}>
              Crazy Time è un game show live disponibile in Italia esclusivamente tramite le app degli operatori con concessione <strong style={{ color: "#F8FAFC" }}>ADM</strong>. Non esiste un&apos;app «ufficiale Crazy Time» separata: per giocare è necessario scaricare l&apos;app del proprio operatore autorizzato (es. Sisal, Eurobet, Snai, Lottomatica), registrarsi con KYC e accedere alla sezione Casinò Live.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#1A1128",
                  border: "1px solid #2D2245",
                  borderRadius: "10px",
                  padding: "10px 16px",
                }}
              >
                <Smartphone size={22} color="#10B981" strokeWidth={1.5} />
                <div>
                  <p style={{ color: "#94A3B8", fontSize: "0.7rem", margin: 0 }}>ANDROID</p>
                  <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.85rem", margin: 0 }}>8.0+</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#1A1128",
                  border: "1px solid #2D2245",
                  borderRadius: "10px",
                  padding: "10px 16px",
                }}
              >
                <Smartphone size={22} color="#3B82F6" strokeWidth={1.5} />
                <div>
                  <p style={{ color: "#94A3B8", fontSize: "0.7rem", margin: 0 }}>iOS</p>
                  <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.85rem", margin: 0 }}>14.0+</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#1A1128",
                  border: "1px solid #2D2245",
                  borderRadius: "10px",
                  padding: "10px 16px",
                }}
              >
                <Wifi size={22} color="#3B82F6" strokeWidth={1.5} />
                <div>
                  <p style={{ color: "#94A3B8", fontSize: "0.7rem", margin: 0 }}>VELOCITÀ MIN</p>
                  <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.85rem", margin: 0 }}>2 Mbps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup visual */}
          <div
            style={{
              width: "160px",
              height: "280px",
              border: "2px solid #2D2245",
              borderRadius: "28px",
              flexShrink: 0,
              position: "relative",
              boxShadow: "0 20px 60px rgba(123,47,190,0.3)",
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <Image
              src="/images/phone-mockup.webp"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              quality={85}
            />
          </div>
        </div>
      </header>

      {/* Mobile experience */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="mobile-exp-heading">
        <h2 id="mobile-exp-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          Panoramica dell&apos;Esperienza Mobile
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            Crazy Time è trasmesso in streaming live con <strong style={{ color: "#F8FAFC" }}>bitrate adattivo</strong>: la qualità si adatta automaticamente alla rete e al dispositivo. Per un&apos;esperienza stabile prediligi Wi‑Fi o 4G/5G con buona copertura; connessioni instabili causano cali di qualità video durante lo streaming e ritardi nelle finestre di scommessa.
          </p>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            I requisiti minimi consigliati sono <strong style={{ color: "#F8FAFC" }}>iOS 15+/Android 10+</strong>, almeno 3 GB di RAM disponibile e una connessione stabile di almeno 5 Mbps. Il consumo dati stimato è 1,5–3,0 GB/ora in HD; in 4G/5G imposta la qualità video su «adattiva» o «standard» per ridurre il traffico dati.
          </p>
          <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
            Le app degli operatori ADM includono funzioni di controllo del gioco: <strong style={{ color: "#F8FAFC" }}>limiti di deposito, spesa, tempo e autoesclusione</strong>. Abilita queste protezioni prima di iniziare a puntare e mantieni l&apos;app aggiornata per accedere alle ultime versioni dell&apos;interfaccia e degli strumenti di sicurezza.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          {[
            { icon: <Tv size={28} color="#7B2FBE" strokeWidth={1.5} />, title: "Streaming Live HD", desc: "Qualità adattiva in base alla connessione" },
            { icon: <Hand size={28} color="#F59E0B" strokeWidth={1.5} />, title: "Controlli Touch", desc: "Scommesse complete tramite interfaccia touch" },
            { icon: <RefreshCw size={28} color="#3B82F6" strokeWidth={1.5} />, title: "Rotazione Auto", desc: "Supporto verticale e orizzontale" },
            { icon: <Bell size={28} color="#A855F7" strokeWidth={1.5} />, title: "Avvisi Vincita", desc: "Notifiche visive e audio per le vincite" },
          ].map((feature) => (
            <div key={feature.title} className="card" style={{ padding: "18px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", margin: "0 0 8px" }}>{feature.icon}</div>
              <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.875rem", margin: "0 0 4px" }}>{feature.title}</p>
              <p style={{ color: "#94A3B8", fontSize: "0.78rem", margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Android */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="android-heading">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Smartphone size={28} color="#10B981" strokeWidth={1.5} />
          <h2 id="android-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>
            Android — APK Download
          </h2>
        </div>
        <StepGuide steps={androidSteps} variant="vertical" />
        <div
          style={{
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "10px",
            padding: "16px 20px",
            marginTop: "20px",
          }}
        >
          <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>
            <strong style={{ color: "#3B82F6", display: "inline-flex", alignItems: "center", gap: "6px" }}><Info size={16} color="#3B82F6" strokeWidth={2} /> Nota sulla sicurezza:</strong> Scarica i file APK solo dai siti ufficiali dei casinò. Non scaricare mai app di gioco d&apos;azzardo da store di terze parti. Verifica sempre la licenza del casinò prima di scaricare qualsiasi software.
          </p>
        </div>
      </section>

      {/* iOS */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="ios-heading">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Smartphone size={28} color="#3B82F6" strokeWidth={1.5} />
          <h2 id="ios-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>
            iOS — Accesso su iPhone e iPad
          </h2>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.7", margin: "0 0 24px", fontSize: "0.95rem" }}>
          Le restrizioni dell&apos;App Store di Apple sulle app di gioco d&apos;azzardo con denaro reale fanno sì che la maggior parte dei casinò opti per il gioco tramite browser su iOS. Questo funziona molto bene — Safari moderno su iOS gestisce streaming live e app web complesse in modo efficiente.
        </p>
        <StepGuide steps={iosSteps} variant="vertical" />
      </section>

      {/* App vs Browser comparison */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="comparison-heading">
        <h2 id="comparison-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          App vs Browser — Quale è Meglio?
        </h2>
        <ComparisonTable headers={appBrowserHeaders} rows={appBrowserRows} />
        <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginTop: "16px", lineHeight: "1.6" }}>
          Per Crazy Time in particolare, il gioco tramite browser è spesso altrettanto fluido di quello tramite app nativa — il gioco è progettato per funzionare nel browser. Il principale vantaggio di un&apos;app casinò è la comodità (accesso più rapido, notifiche push per le promozioni).
        </p>
      </section>

      {/* System requirements */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="sysreqs-heading">
        <h2 id="sysreqs-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 20px" }}>
          Requisiti di Sistema
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {[
            {
              icon: <Smartphone size={22} color="#10B981" strokeWidth={1.5} />,
              title: "Android",
              color: "#10B981",
              requirements: [
                "Android 8.0 (Oreo) o versione successiva",
                "Minimo 2 GB di RAM",
                "Connessione internet stabile (2+ Mbps)",
                "Chrome 80+ consigliato",
                "~100 MB di spazio per le app APK",
              ],
            },
            {
              icon: <Smartphone size={22} color="#3B82F6" strokeWidth={1.5} />,
              title: "iOS",
              color: "#3B82F6",
              requirements: [
                "iOS 14.0 o versione successiva",
                "iPhone 8, SE (2020) o modelli successivi",
                "Safari 14+ consigliato",
                "Wi-Fi stabile o 4G/5G",
                "Nessuno spazio richiesto per il gioco via browser",
              ],
            },
            {
              icon: <Globe size={22} color="#7B2FBE" strokeWidth={1.5} />,
              title: "Connessione Internet",
              color: "#7B2FBE",
              requirements: [
                "Minimo: 1 Mbps (streaming 720p)",
                "Consigliato: 2+ Mbps (streaming 1080p)",
                "Latenza molto bassa preferibile",
                "Wi-Fi preferito rispetto ai dati mobili",
                "Dati mobili 5G funzionano bene",
              ],
            },
          ].map((section) => (
            <div
              key={section.title}
              style={{
                background: "#1A1128",
                border: `1px solid ${section.color}30`,
                borderRadius: "12px",
                padding: "20px",
                borderTop: `3px solid ${section.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                {section.icon}
                <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{section.title}</h3>
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 16px", color: "#94A3B8", fontSize: "0.85rem" }}>
                {section.requirements.map((req) => (
                  <li key={req} style={{ marginBottom: "6px" }}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COME SCARICARE: APP STORE / GOOGLE PLAY / OPERATORI ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="dove-app-heading">
        <h2 id="dove-app-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Come scaricare e giocare a Crazy Time App su iOS e Android?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è un game show live sviluppato da Evolution e disponibile in Italia esclusivamente tramite le app degli operatori con concessione ADM. Non esiste un&apos;app &quot;ufficiale Crazy Time&quot; separata: per giocare da Roma o da qualunque città italiana è necessario scaricare l&apos;app del proprio operatore (es. Sisal, Eurobet, Snai, Lottomatica), registrarsi, verificare l&apos;identità e accedere alla sezione Casinò Live.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          1. Dove trovo l&apos;app: App Store, Google Play o siti degli operatori?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Cerca e scarica l&apos;app dell&apos;operatore autorizzato: all&apos;interno dell&apos;app, Crazy Time si trova nella categoria &quot;Casinò Live&quot; o &quot;Game Show&quot;. Evita store o APK non ufficiali: usa solo App Store/Google Play in versione italiana o la pagina &quot;App/Mobile&quot; del sito dell&apos;operatore.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Sisal</strong>: app iOS/Android con sezione &quot;Casinò Live&quot; (provider Evolution). Naviga su &quot;App e Mobile&quot; dal sito per i link ufficiali.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Eurobet</strong>: app iOS/Android; Crazy Time è normalmente nella lobby &quot;Live Casino / Game Shows&quot;. Link ufficiali dal sito nella sezione &quot;Mobile&quot;.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Snai</strong>: app iOS/Android; accedi a &quot;Casinò Live&quot; e filtra per &quot;Game Show&quot;. I link ufficiali sono nella sezione &quot;App&quot;.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Lottomatica</strong>: app iOS/Android; cerca &quot;Casinò Live&quot; e la categoria &quot;Game Shows&quot;. Link ufficiali nella sezione &quot;Mobile&quot;.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>iOS (App Store Italia)</strong>: apri App Store, cerca il brand dell&apos;operatore, scarica l&apos;app ufficiale e accedi alla sezione Casinò Live per trovare Crazy Time.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Android (Google Play Italia)</strong>: apri Google Play, cerca l&apos;app ufficiale dell&apos;operatore e installa. Alcuni operatori forniscono anche il download diretto dal proprio sito: in tal caso, usa solo il link ufficiale e abilita l&apos;installazione da fonti attendibili solo quando richiesto, poi disattivala.</li>
          <li>All&apos;interno dell&apos;app: effettua o completa la registrazione (KYC), imposta i limiti di gioco, quindi entra in &quot;Casinò Live&quot; → &quot;Game Show&quot; → &quot;Crazy Time&quot;.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          2. Come si installa su Sisal, Eurobet, Snai e Lottomatica?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Le fasi sono simili per tutti gli operatori ADM: scarica l&apos;app ufficiale, registra/verifica il conto, imposta i limiti di gioco e accedi alla sezione &quot;Casinò Live&quot; per aprire Crazy Time.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "20px" }}>
          {[
            { name: "Sisal", color: "#7B2FBE", steps: ["Scarica l'app ufficiale dalla sezione \"App e Mobile\" del sito o dallo store.", "Accedi o crea un conto e completa la verifica documento (KYC).", "Apri \"Casinò Live\" → filtra \"Game Shows\" → seleziona Crazy Time."] },
            { name: "Eurobet", color: "#F59E0B", steps: ["Installa l'app ufficiale dalla sezione \"Mobile\".", "Login/registrazione, impostazione limiti e consenso geolocalizzazione.", "Vai su \"Live Casino\" → \"Game Shows\" → Crazy Time."] },
            { name: "Snai", color: "#10B981", steps: ["Scarica l'app dalla sezione \"App\".", "Completa la verifica identità e metodi di pagamento.", "Sezione \"Casinò Live\" → cerca \"Crazy Time\" tra i Game Show."] },
            { name: "Lottomatica", color: "#3B82F6", steps: ["Installa l'app ufficiale dalla sezione \"Mobile\".", "Accedi/registrati, verifica il conto e imposta i limiti.", "Apri \"Casinò Live\" → categoria \"Game Shows\" → Crazy Time."] },
          ].map((op) => (
            <div key={op.name} style={{ background: "#1A1128", border: `1px solid ${op.color}30`, borderTop: `3px solid ${op.color}`, borderRadius: "12px", padding: "18px" }}>
              <h4 style={{ color: op.color, fontWeight: 700, fontSize: "0.95rem", margin: "0 0 10px" }}>{op.name}</h4>
              <ol style={{ color: "#94A3B8", fontSize: "0.85rem", lineHeight: "1.7", margin: 0, paddingLeft: "16px" }}>
                {op.steps.map((s, i) => <li key={i} style={{ marginBottom: "4px" }}>{s}</li>)}
              </ol>
            </div>
          ))}
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.875rem", margin: 0 }}>
          <strong style={{ color: "#F8FAFC" }}>Nota su modalità demo:</strong> per i game show live la modalità &quot;prova&quot; non è generalmente disponibile, perché si tratta di streaming in tempo reale con croupier/presenter. Alcuni operatori consentono di visualizzare la lobby o la schermata informativa senza piazzare puntate.
        </p>
      </section>

      {/* ===== DOVE GIOCARE IN ITALIA ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="dove-italia-heading">
        <h2 id="dove-italia-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Dove giocare in Italia: operatori ADM, versioni demo e bonus
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          In Italia Crazy Time è accessibile solo tramite operatori con concessione ADM. Non esiste un &quot;sito ufficiale&quot; dove giocare direttamente al game show: l&apos;accesso avviene all&apos;interno delle app e dei siti degli operatori legali come Sisal, Eurobet, Snai e Lottomatica. Le differenze principali riguardano interfaccia, promozioni di brand, metodi di pagamento, assistenza e limiti configurati a livello di operatore.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          1. Crazy Time su Sisal, Eurobet, Snai e Lottomatica: cosa cambia?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il game show è lo stesso (fornitore Evolution), ma l&apos;esperienza lato utente cambia in base all&apos;operatore:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Navigazione:</strong> posizione e filtri della lobby (es. &quot;Casinò Live&quot; → &quot;Game Shows&quot;).</li>
          <li><strong style={{ color: "#F8FAFC" }}>Promozioni:</strong> iniziative e missioni sono specifiche del brand e possono escludere i game show; leggi sempre termini e condizioni.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Pagamenti:</strong> insieme di carte, wallet e bonifici supportati e tempistiche di prelievo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Limiti:</strong> depositi, sessioni, autoesclusione e reality check configurabili nel profilo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Assistenza:</strong> canali, orari e tempi di risposta (FAQ, chat, email, ticket).</li>
          <li><strong style={{ color: "#F8FAFC" }}>App:</strong> stabilità, notifiche, aggiornamenti e qualità dello streaming.</li>
        </ul>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Operatore ADM</th>
                <th>App iOS</th>
                <th>App Android</th>
                <th>Dove cercare Crazy Time (in app)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sisal</td><td style={{ color: "#10B981" }}>Sì</td><td style={{ color: "#10B981" }}>Sì</td><td>Casinò Live → Game Shows</td></tr>
              <tr><td>Eurobet</td><td style={{ color: "#10B981" }}>Sì</td><td style={{ color: "#10B981" }}>Sì</td><td>Live Casino → Game Shows</td></tr>
              <tr><td>Snai</td><td style={{ color: "#10B981" }}>Sì</td><td style={{ color: "#10B981" }}>Sì</td><td>Casinò Live → Game Show</td></tr>
              <tr><td>Lottomatica</td><td style={{ color: "#10B981" }}>Sì</td><td style={{ color: "#10B981" }}>Sì</td><td>Casinò Live → Game Shows</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          2. Esiste Crazy Time gratis? Demo su Eurobet e Snai: come provarla
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          I game show live di Evolution, incluso Crazy Time, non prevedono modalità demo &quot;gratis&quot; giocabile: lo streaming è in tempo reale e l&apos;accesso comporta il piazzamento di puntate con saldo reale. Tuttavia, su Eurobet e Snai puoi generalmente:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Accedere alla lobby Live e aprire la scheda informativa del gioco per leggere regole, tipi di puntata e payout.</li>
          <li>Visualizzare la cronologia dei risultati e la struttura della ruota (quando disponibile nella UI) senza effettuare scommesse.</li>
          <li>Impostare limiti di deposito/sessione prima di iniziare, per testare il gioco con puntate minime.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Non esistono APK o siti &quot;ufficiali&quot; che offrano Crazy Time free‑play legale in Italia.</li>
          <li>Diffida di siti terzi che promettono &quot;demo live&quot; non autorizzate: gioca solo tramite operatori ADM.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          3. Qual è il sito ufficiale per Crazy Time in Italia?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, fontSize: "0.95rem" }}>
          Crazy Time è un prodotto di Evolution, ma non si gioca sul sito del fornitore. In Italia l&apos;accesso legale avviene esclusivamente tramite operatori con concessione ADM, come Sisal, Eurobet, Snai e Lottomatica. Se cerchi un &quot;sito ufficiale Crazy Time&quot;, la risposta corretta è: non esiste un dominio unico per giocare; il canale ufficiale sono le app e i siti degli operatori autorizzati. Puoi verificare la legittimità consultando il portale di ADM e controllando che l&apos;operatore riporti chiaramente i riferimenti di concessione, termini e informativa sul gioco responsabile.
        </p>
      </section>

      {/* ===== STRATEGIE, STATISTICHE E LIMITI ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="strategie-app-heading">
        <h2 id="strategie-app-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Strategie, statistiche e limiti: come usare l&apos;app in modo responsabile
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Crazy Time è un game show live con esito casuale indipendente a ogni round. Le app degli operatori ADM offrono strumenti per consultare cronologia e regole, ma le &quot;stats&quot; non predicono il futuro: servono per comprendere il gioco, non per elaborare sistemi vincenti. Utilizza sempre i limiti di gioco e le funzioni di protezione per mantenere il controllo.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          1. Dove vedere stats e cronologia in Italia senza cadere nel bias?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Nelle app e sui siti degli operatori ADM la lobby di Crazy Time include di norma: cronologia recente dei risultati, link alle regole ufficiali e, talvolta, schema dei pagamenti. Queste informazioni sono utili per conoscere la struttura del gioco, non per prevedere gli esiti. Ogni round è indipendente (RNG per i moltiplicatori/Top Slot e meccanica fisica della ruota) e non &quot;ricorda&quot; gli eventi precedenti.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Dove guardare:</strong> nella finestra del gioco cerca &quot;i&quot; (informazioni), &quot;regole&quot; o &quot;payout&quot;; la cronologia è di solito visibile come nastro dei risultati recenti.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Come interpretarle:</strong> usa la cronologia per confermare le tipologie di esito (numeri e bonus), non per assumere pattern ripetibili.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Bias da evitare:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Fallacia del giocatore:</strong> credere che un esito &quot;sia dovuto&quot; perché non esce da tempo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Hot‑hand/recency bias:</strong> puntare perché &quot;sta uscendo spesso&quot;. La probabilità non cambia.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Conferma selettiva:</strong> ricordare solo le serie che confermano l&apos;ipotesi.</li>
          <li>Non ufficiale ≠ affidabile: siti terzi con &quot;stats live&quot; non sono affiliati ad Evolution/ADM e non offrono previsioni attendibili.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          2. Quali sono RTP, volatilità e limiti del bankroll su Crazy Time?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time ha RTP teorici per ogni tipo di puntata e una volatilità complessiva elevata (soprattutto sulle scommesse &quot;bonus&quot;). I valori di RTP possono variare leggermente per configurazione/mercato; verifica sempre la schermata &quot;Informazioni&quot; del tavolo nell&apos;app.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Puntata</th>
                <th>Segmenti sulla ruota</th>
                <th>Probabilità (≈)</th>
                <th>Payout base</th>
                <th>RTP teorico (≈)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>21/54</td><td>38,89%</td><td>1:1</td><td style={{ color: "#10B981" }}>96,08%</td></tr>
              <tr><td>2</td><td>13/54</td><td>24,07%</td><td>2:1</td><td style={{ color: "#10B981" }}>95,95%</td></tr>
              <tr><td>5</td><td>7/54</td><td>12,96%</td><td>5:1</td><td style={{ color: "#10B981" }}>95,78%</td></tr>
              <tr><td>10</td><td>4/54</td><td>7,41%</td><td>10:1</td><td style={{ color: "#F59E0B" }}>95,73%</td></tr>
              <tr><td>Coin Flip (bonus)</td><td>4/54</td><td>7,41%</td><td>Variabile</td><td style={{ color: "#F59E0B" }}>95,70%</td></tr>
              <tr><td>Cash Hunt (bonus)</td><td>2/54</td><td>3,70%</td><td>Variabile</td><td style={{ color: "#F59E0B" }}>95,27%</td></tr>
              <tr><td>Pachinko (bonus)</td><td>2/54</td><td>3,70%</td><td>Variabile</td><td style={{ color: "#EF4444" }}>94,33%</td></tr>
              <tr><td>Crazy Time (bonus)</td><td>1/54</td><td>1,85%</td><td>Variabile</td><td style={{ color: "#EF4444" }}>94,41%</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Gestione del bankroll:</strong> poiché l&apos;RTP è inferiore al 100%, il vantaggio resta dell&apos;operatore; non esiste progressione che lo annulli. Imposta un budget massimo non essenziale e dimensiona la puntata in modo da sostenere la varianza.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Dimensionamento prudente: puntata media pari allo 0,5–1% del bankroll se vuoi sessioni lunghe; 1–2% se accetti maggiore volatilità.</li>
          <li>Stop‑loss e stop‑win: definisci a priori un tetto di perdita (es. 20–30% del bankroll di sessione) e un obiettivo di profitto realistico (es. 10–20%); al raggiungimento, chiudi la sessione.</li>
          <li>Nessun &quot;Kelly&quot; su giochi a svantaggio: con RTP &lt; 100% l&apos;approccio Kelly teorico non è applicabile (edge negativo).</li>
          <li>Distribuzione delle puntate: combinare numeri e bonus riduce la concentrazione del rischio ma non cambia l&apos;attesa matematica.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          3. Perché impostare limiti, autoesclusione e timeout nell&apos;app?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Gli operatori con concessione ADM sono tenuti a fornire strumenti di gioco responsabile: limiti di deposito, reality check, timeout e autoesclusione. Queste funzioni aiutano a prevenire l&apos;incremento incontrollato delle puntate, il chasing delle perdite e le sessioni eccessivamente lunghe. In Italia è disponibile il Registro Unico delle Autoesclusioni (RUA) gestito da ADM, che rende l&apos;autoesclusione valida su tutti gli operatori online autorizzati.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Limiti di deposito e/o perdita:</strong> imposta tetti giornalieri/settimanali/mensili dal profilo dell&apos;app; efficaci per tenere il budget sotto controllo.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Reality check:</strong> promemoria a intervalli predefiniti con tempo giocato e saldo netto della sessione; supporta decisioni informate.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Timeout (pausa):</strong> blocco temporaneo dell&apos;accesso al gioco per ore/giorni; utile dopo una serie negativa o quando manca lucidità.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Autoesclusione:</strong> sospensione più lunga (temporanea o a tempo indeterminato). Puoi attivarla dall&apos;account dell&apos;operatore o tramite i canali previsti da ADM.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Imposta i limiti prima di iniziare a giocare e adeguali solo dopo un periodo di &quot;raffreddamento&quot;.</li>
          <li>Evita il multitasking e le notifiche durante il live: riducono la capacità di prendere decisioni consapevoli.</li>
          <li>Se il gioco non è più ricreativo, interrompi e valuta il supporto attraverso i canali di aiuto indicati dagli operatori e da ADM.</li>
        </ul>
      </section>

      {/* ===== DAL GAME SHOW ALLA TUA APP ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="evoluzione-app-heading">
        <h2 id="evoluzione-app-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          Dal game show alla tua app: come si è evoluto Crazy Time
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Dalla prima ruota &quot;money wheel&quot; di nuova generazione a esperienze con realtà aumentata e bonus multilivello, l&apos;evoluzione dei game show live di Evolution ha portato a Crazy Time (2020), progettato fin dall&apos;inizio per essere fruibile su app iOS/Android degli operatori ADM in Italia. Ogni tappa ha aggiunto un tassello: moltiplicatori, ambienti 3D, interfacce mobile‑first e streaming a bassa latenza, fino all&apos;attuale mix di ruota fisica e mini‑giochi dinamici.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          1. Come si è passati da Dream Catcher e Monopoly Live a Crazy Time?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Il percorso è stato graduale: Dream Catcher (2017) ha reintrodotto il formato &quot;ruota della fortuna&quot; in chiave mobile, MONOPOLY Live (2019) ha innestato un IP globale con un bonus board 3D, e Crazy Time (2020) ha estremizzato l&apos;idea con quattro bonus distinti e un Top Slot di moltiplicazione casuale a ogni round.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Gioco</th>
                <th>Anno</th>
                <th>Meccanica base</th>
                <th>Bonus principali</th>
                <th>Innovazione chiave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: "#3B82F6" }}>Dream Catcher</strong></td>
                <td>2017</td>
                <td>Ruota fisica con segmenti numerici e payout fissi</td>
                <td>Segmenti moltiplicatori 2× e 7×</td>
                <td>Rilancio del formato &quot;money wheel&quot; in live streaming mobile</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#10B981" }}>MONOPOLY Live</strong></td>
                <td>2019</td>
                <td>Ruota fisica; accesso a bonus board virtuale</td>
                <td>2 Rolls, 4 Rolls, Chance</td>
                <td>Integrazione IP globale e bonus 3D in realtà aumentata</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#F59E0B" }}>Crazy Time</strong></td>
                <td>2020</td>
                <td>Ruota fisica a 54 segmenti con Top Slot</td>
                <td>Coin Flip, Cash Hunt, Pachinko, Crazy Time</td>
                <td>Quattro giochi bonus distinti + Top Slot RNG ogni round</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          2. Come funzionano le tecnologie live di Evolution (ruota, RNG, studio)?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Crazy Time combina hardware reale e logiche software sotto controllo di infrastrutture studio proprietarie. La ruota è fisica e azionata dal presentatore; l&apos;esito del &quot;Top Slot&quot; è generato in modo casuale e applicato prima della chiusura delle puntate. La trasmissione usa streaming a bassa latenza e interfacce HTML5 per app e browser degli operatori.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Ruota fisica e flapper:</strong> 54 segmenti con numeri e bonus; il flapper meccanico determina l&apos;esito della ruota in modo osservabile.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Top Slot RNG:</strong> ad ogni round un sistema random seleziona una combinazione (scommessa + moltiplicatore) mostrata sopra la ruota; se l&apos;esito della ruota coincide, il moltiplicatore si applica.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Mini‑giochi bonus:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Coin Flip:</strong> moltiplicatore assegnato ai due lati della moneta; lancio e risultato.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Cash Hunt:</strong> griglia di target coperti; il giocatore seleziona un simbolo, poi si rivelano i moltiplicatori.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Pachinko:</strong> disco che scende tra pioli fino a un moltiplicatore o &quot;Double&quot;.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Crazy Time:</strong> ruota gigante in set separato con tre alette (rosso, verde, blu) e moltiplicatori/&quot;Double&quot;.</li>
        </ul>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li><strong style={{ color: "#F8FAFC" }}>Infrastruttura studio:</strong> più camere, regia live, illuminazione dedicata, keying/AR per sovrapposizioni grafiche, e Game Control Unit (GCU) per sincronizzare feed video, puntate e risultati.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Streaming e client:</strong> player HTML5 in app/sito dell&apos;operatore, protocolli a bassa latenza, adattamento di bitrate e risoluzione per rete mobile.</li>
          <li><strong style={{ color: "#F8FAFC" }}>Conformità:</strong> audit e certificazioni nei mercati regolati; in Italia l&apos;accesso avviene solo tramite operatori con concessione ADM.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          3. Quali tentativi non hanno funzionato e perché non hanno preso piede?
        </h3>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Cloni &quot;ruota&quot; solo‑RNG senza live presenter: meno coinvolgenti e con bassa fidelizzazione rispetto alla presenza del presentatore e alla scenografia live.</li>
          <li>Client legacy in Flash: deprecati e sostituiti da HTML5 per motivi di sicurezza, performance e compatibilità mobile.</li>
          <li>Esperimenti VR/AR immersivi per il pubblico: adozione limitata per barriere hardware e frizione d&apos;uso; l&apos;approccio AR resta principalmente lato studio/regia.</li>
          <li>&quot;Predictor&quot; e app di previsione non ufficiali: non conformi e privi di valore predittivo su processi casuali; non si integrano con operatori ADM e violano spesso termini d&apos;uso.</li>
          <li>UI eccessivamente complesse su schermi piccoli: alto tasso di abbandono; il design mobile‑first ha privilegiato pulsanti essenziali e feedback chiari.</li>
        </ul>
      </section>

      {/* ===== L'ALTRO LATO DELLA MEDAGLIA ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="rischi-app-heading">
        <h2 id="rischi-app-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 16px" }}>
          L&apos;altro lato della medaglia: qual è il rischio maggiore nell&apos;usare l&apos;app?
        </h2>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 16px", fontSize: "0.95rem" }}>
          Il rischio principale è cognitivo e comportamentale: scambiare sequenze casuali per &quot;pattern&quot; e aumentare le puntate sulla base di illusioni (streaks), con potenziale impatto economico e psicologico. A questo si sommano costi indiretti di streaming (dati, batteria) e l&apos;uso in contesti non adatti. Ricorda: ogni round di Crazy Time è indipendente e il vantaggio matematico resta dell&apos;operatore.
        </p>
        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          1. Perché il mito delle &apos;streaks&apos; non prevede il futuro?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          In Crazy Time la ruota è fisica e il Top Slot è casuale: gli esiti sono indipendenti tra loro. Vedere uscire più volte lo stesso risultato non &quot;carica&quot; o &quot;scarica&quot; la probabilità del prossimo round (fallacia del giocatore). Esempi numerici:
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Probabilità che &quot;Crazy Time&quot; (1 segmento su 54 ≈ 1,85%) NON esca in 50 giri: (53/54)<sup>50</sup> ≈ 39%; in 100 giri: ≈ 15%. Anche serie lunghe senza bonus sono possibili e non &quot;creano debiti&quot; da colmare.</li>
          <li>Probabilità che il numero &quot;1&quot; (21 segmenti su 54 ≈ 38,89%) esca 5 volte di fila: 0,3889<sup>5</sup> ≈ 0,88%. Eventi rari possono accadere in qualsiasi punto della sequenza.</li>
          <li>Probabilità che &quot;Crazy Time&quot; esca due volte di fila: 0,0185<sup>2</sup> ≈ 0,034%. Anche qui, se è appena uscito non diventa &quot;meno probabile&quot; al prossimo giro: resta ≈ 1,85%.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", fontSize: "0.95rem" }}>
          <strong style={{ color: "#F8FAFC" }}>Conclusione operativa:</strong> non basare la gestione del bankroll su cronologie o &quot;streaks&quot;. Usa importi fissi e limiti predefiniti; evita progressioni che reagiscono alle serie (martingala, chasing), perché non cambiano l&apos;attesa matematica e amplificano il rischio.
        </p>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          2. Quali sono i costi nascosti di rete e dati (streaming HD, batteria)?
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Lo streaming live a bitrate adattivo consuma dati in proporzione alla banda media utilizzata. La tabella mostra stime puramente matematiche a partire dal bitrate medio (1 Mbps = circa 0,45 GB/ora). L&apos;uso reale può variare per sovraccarichi di rete e overhead del protocollo.
        </p>
        <div className="table-wrapper" style={{ marginBottom: "16px" }}>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Bitrate medio (Mbps)</th>
                <th>GB per ora (stima)</th>
                <th>Scenario tipico</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1,0</td><td>≈ 0,45 GB/h</td><td>SD stabile su rete mobile 3G/4G debole</td></tr>
              <tr><td>2,0</td><td>≈ 0,90 GB/h</td><td>SD/HD adattivo su 4G</td></tr>
              <tr><td>3,5</td><td>≈ 1,58 GB/h</td><td>HD adattivo su 4G/5G</td></tr>
              <tr><td>5,0</td><td>≈ 2,25 GB/h</td><td>HD stabile su Wi‑Fi 5 GHz o 5G</td></tr>
              <tr><td>8,0</td><td>≈ 3,60 GB/h</td><td>HD elevato/Latenza ridotta su Wi‑Fi/5G</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.95rem" }}>
          Oltre ai dati, lo streaming prolungato incide su batteria e temperatura del dispositivo per via della decodifica video continua e della rete attiva. Mitigazioni pratiche: usa Wi‑Fi quando possibile, riduci la luminosità, chiudi app in background, tieni il dispositivo in carica per sessioni lunghe.
        </p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 20px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Controlla il piano dati prima di giocare in mobilità: lo sforamento può generare costi significativi.</li>
          <li>Evita hotspot pubblici non sicuri; preferisci reti protette.</li>
          <li>Aggiorna app e sistema per migliorare efficienza e stabilità dello streaming.</li>
        </ul>

        <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 12px" }}>
          3. Quando NON scaricare l&apos;app? Segnali d&apos;allarme e alternative legali
        </h3>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 12px", fontSize: "0.95rem" }}>
          Non scaricare o disinstalla l&apos;app se riconosci uno di questi segnali: aspettativa di &quot;recuperare perdite&quot; rapidamente, uso di denaro destinato a spese essenziali, irritabilità se non puoi giocare, aumento delle puntate per inseguire emozioni, riduzione del sonno per sessioni notturne, o se sei minorenne (vietato, 18+). In Italia è disponibile il Registro Unico delle Autoesclusioni (RUA) gestito da ADM.
        </p>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Segnali d&apos;allarme:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Chasing delle perdite e aumento delle puntate oltre il budget.</li>
          <li>Gioco per gestire stress o stati d&apos;animo negativi.</li>
          <li>Riduzione di lavoro/studio/relazioni a causa del gioco.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Cosa fare subito:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Imposta limiti severi o attiva un timeout/autoesclusione nel tuo account.</li>
          <li>Cerca supporto tramite le risorse di gioco responsabile indicate dagli operatori e da ADM.</li>
        </ul>
        <p style={{ color: "#94A3B8", lineHeight: "1.8", margin: "0 0 8px", fontSize: "0.875rem" }}>Alternative legali e non a premi:</p>
        <ul style={{ color: "#94A3B8", lineHeight: "1.8", margin: 0, paddingLeft: "20px", fontSize: "0.95rem" }}>
          <li>Giochi e puzzle senza denaro reale su App Store/Google Play.</li>
          <li>Contenuti informativi: leggi le regole e le probabilità nel pannello &quot;Info&quot; del gioco senza puntare.</li>
          <li>Intrattenimento non interattivo (video/stream) che non comporta rischi economici.</li>
        </ul>
      </section>

      {/* ===== DOMANDE FREQUENTI ===== */}
      <section style={{ marginBottom: "60px" }} aria-labelledby="faq-app-heading">
        <h2 id="faq-app-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 24px" }}>
          Domande Frequenti
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso usare Crazy Time su iPad o tablet Android?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sì, Crazy Time funziona anche su iPad e tablet Android tramite l&apos;app dell&apos;operatore ADM o browser mobile. Su schermi ampi l&apos;interfaccia dei bonus risulta più leggibile e la stabilità dello streaming tende a migliorare con SoC recenti e RAM ≥ 3 GB. L&apos;installazione avviene come su smartphone, usando gli stessi store e credenziali; l&apos;orientamento orizzontale ottimizza pulsanti e video.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>È obbligatorio installare l&apos;app o posso giocare dal browser mobile?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Non è obbligatorio: molti operatori ADM offrono Crazy Time anche via browser mobile HTML5. L&apos;accesso via browser richiede comunque login e geolocalizzazione attiva nel browser; alcune funzioni native (es. notifiche push o login biometrico) restano esclusive dell&apos;app. Se il browser non abilita la posizione o usa impostazioni di risparmio dati aggressive, lo streaming può degradare; in tal caso l&apos;app garantisce in media maggiore stabilità.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Perché l&apos;app o il tavolo mostrano &quot;non disponibile nel tuo Paese&quot; quando sono in Italia?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Di solito dipende da incongruenze tra IP e GPS, store non impostato su Italia o VPN/proxy attivi. Disabilita la VPN, attiva la localizzazione con precisione alta, passa da Wi‑Fi a rete mobile o viceversa e verifica che l&apos;App Store/Google Play siano sul Paese Italia; se persiste, fornisci al supporto dell&apos;operatore l&apos;orario e il tuo IP pubblico per la verifica delle regole geografiche.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>È legale o sicuro usare una VPN per giocare a Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No: usare VPN o proxy per aggirare la geolocalizzazione viola i Termini degli operatori ADM e può portare a blocco del conto e trattenuta dei prelievi fino a verifica AML. Gli operatori confrontano IP, GPS e device fingerprint; anomalie geografiche attivano controlli rafforzati. Per conformità territoriale e antiriciclaggio, gioca solo con geolocalizzazione reale in Italia.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quali documenti servono per aprire e verificare il conto, e qual è la scadenza ADM?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Servono documento d&apos;identità valido e codice fiscale; la verifica KYC deve concludersi entro 30 giorni dalla registrazione secondo le regole ADM. Fino al completamento i prelievi restano bloccati e scaduto il termine l&apos;account può essere sospeso; carica foto leggibili fronte/retro e verifica che i dati coincidano con il profilo per evitare respinte.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Devo dichiarare al fisco le vincite ottenute su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, se giochi su operatori con concessione ADM le vincite non si dichiarano perché l&apos;imposta è a carico dell&apos;operatore. Giocare su siti non autorizzati non offre questa tutela e può integrare violazioni; controlla sempre presenza di concessione ADM e dominio ufficiale .it del brand.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Cosa succede se mi si disconnette l&apos;app durante un round di Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Se la puntata è stata accettata, il round prosegue e l&apos;esito viene accreditato alla riconnessione e nella cronologia; se non è stata accettata, non si gioca alcunché. In caso di anomalia tecnica documenta l&apos;ID del round, data e ora e contatta il supporto dell&apos;operatore, che è l&apos;unico canale autorizzato ad aprire verifiche con il fornitore del gioco.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Crazy Time è attivo 24/7 o ha orari specifici?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>In genere è disponibile 24 ore su 24, 7 giorni su 7, con possibili brevi finestre di manutenzione. Se il tavolo risulta chiuso, controlla la lobby per eventuali messaggi di manutenzione o prova a rientrare dopo alcuni minuti.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Dove vedo i limiti minimi e massimi di puntata su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>I limiti sono indicati nell&apos;interfaccia del tavolo vicino ai gettoni e nella schermata &quot;Info/Regole&quot; e possono differire per tavolo e operatore. Verifica anche eventuali limiti personali attivi sul conto, che prevalgono e possono ridurre gli importi selezionabili in puntata e nei bonus.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Non trovo Crazy Time nell&apos;app: quali sono le cause più comuni?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Le cause tipiche sono filtri di lobby attivi, catalogo temporaneamente aggiornato, manutenzione del tavolo, geolocalizzazione non valida o versione app obsoleta. Rimuovi i filtri, aggiorna l&apos;app, riavvia la sessione con localizzazione attiva e verifica nella categoria Game Show; se assente, consulta le comunicazioni dell&apos;operatore perché la disponibilità può variare nel tempo.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>L&apos;audio del presentatore è in italiano? Esistono sottotitoli?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Il commento dei game show globali è prevalentemente in inglese, mentre interfaccia, regole e messaggistica sono localizzati in italiano. Puoi silenziare l&apos;audio, regolare livelli separati e, quando previsto dal client, attivare testi informativi o sovraimpressioni; la disponibilità di sottotitoli non è garantita su tutti i tavoli.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>I limiti di deposito e il reality check valgono solo per Crazy Time o per tutto il conto?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Valgono per tutto il conto di gioco presso l&apos;operatore ADM, non per singolo titolo. Limiti, timeout e autoesclusione incidono su casinò live, slot e scommesse dello stesso account; l&apos;autoesclusione registrata nel RUA si estende a tutti gli operatori online autorizzati in Italia.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>I bonus dell&apos;operatore sono validi su Crazy Time o sono esclusi?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Spesso i game show live sono esclusi o contribuiscono in misura ridotta ai requisiti di puntata, tipicamente tra 0% e 10% quando ammessi. Controlla sempre la tabella di contribuzione nei Termini della promozione, perché esclusioni e percentuali variano per brand e iniziativa.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Esistono statistiche ufficiali o API pubbliche dei risultati di Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, non ci sono API pubbliche ufficiali; l&apos;unica fonte legittima è la cronologia integrata nel client del gioco. Dati raccolti da siti terzi non sono certificati, non hanno valore predittivo e non sono collegati ad ADM o al fornitore.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come verifico che l&apos;app sia legittima e conforme ADM prima di scaricarla?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Scarica solo da App Store/Google Play italiani o dai link &quot;App/Mobile&quot; del dominio ufficiale .it dell&apos;operatore e verifica la presenza del numero di concessione ADM nelle note legali. Controlla anche il nome dello sviluppatore corrispondente al brand, il certificato https valido e l&apos;assenza di richieste di APK da fonti terze.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso usare lo stesso account su app e sito desktop dell&apos;operatore?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Sì, account, saldo e limiti sono unificati per brand e si sincronizzano in tempo reale tra app e sito. Puoi avviare una sessione su desktop e proseguirla su mobile, tenendo conto che l&apos;accesso simultaneo da più dispositivi può essere limitato per sicurezza.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Quali permessi chiede l&apos;app e come gestirli per la privacy?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>I permessi tipici sono geolocalizzazione per la conformità territoriale, fotocamera per l&apos;acquisizione dei documenti KYC e notifiche opzionali. Puoi negare o revocare singoli permessi dalle impostazioni di sistema; senza posizione attiva il gioco live non si apre, mentre senza notifiche perdi solo avvisi non essenziali.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Posso giocare da fuori Italia se ho un conto ADM attivo?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>No, l&apos;accesso ai tavoli è consentito solo quando ti trovi fisicamente in Italia; la licenza ADM non si estende all&apos;estero. Anche all&apos;interno dell&apos;UE l&apos;operatore deve bloccare il gioco se la geolocalizzazione non risulta in Italia; tentare di aggirare il blocco con VPN viola i Termini.</p>
          </div>

          <div style={{ borderBottom: "1px solid #2D2245", paddingBottom: "16px", marginBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come funzionano depositi e prelievi per il live e quali vincoli AML si applicano?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Depositi e prelievi seguono regole di contabilità a circuito chiuso: il prelievo viene in genere riaccreditato sul metodo usato in deposito, nel rispetto delle verifiche KYC/AML. I pagamenti europei sono soggetti a SCA PSD2 a due fattori e l&apos;operatore può richiedere controlli aggiuntivi su importi elevati o attività atipiche prima di autorizzare l&apos;uscita fondi.</p>
          </div>

          <div style={{ paddingBottom: "16px" }}>
            <h3 style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem", margin: "0 0 8px" }}>Come segnalo un&apos;anomalia di gioco o un payout mancante su Crazy Time?</h3>
            <p style={{ color: "#94A3B8", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>Raccogli prova dell&apos;evento con ID round, data e ora, descrizione dell&apos;anomalia e, se possibile, uno screenshot, poi contatta l&apos;assistenza dell&apos;operatore dal quale accedi al gioco. Solo l&apos;operatore può inoltrare una verifica ufficiale al fornitore; richieste prive di ID round o inviate direttamente al provider non vengono prese in carico.</p>
          </div>

        </div>
      </section>

      {/* Mobile casinos */}
      <section aria-labelledby="mobile-casinos-heading">
        <h2 id="mobile-casinos-heading" style={{ color: "#F8FAFC", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px" }}>
          Casinò con le Migliori App Mobile
        </h2>
        <p style={{ color: "#94A3B8", margin: "0 0 28px", fontSize: "0.95rem" }}>
          Questi casinò offrono app dedicate con accesso a Crazy Time e un&apos;eccellente UX mobile.
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
        @media (max-width: 768px) {
          .app-hero-grid { grid-template-columns: 1fr !important; }
          .app-hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </div>
  );
}
