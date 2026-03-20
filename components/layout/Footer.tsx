import Link from "next/link";
import Image from "next/image";
import { Lock, FileText } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0A0614",
        borderTop: "1px solid #2D2245",
        marginTop: "80px",
        padding: "48px 16px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand column */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <Image
                src="/images/logo-transparent.png"
                alt="Crazy Time Logo"
                width={160}
                height={44}
                style={{ objectFit: "contain", height: "44px", width: "auto" }}
              />
            </Link>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginTop: "12px", lineHeight: "1.6" }}>
              La tua guida indipendente a Crazy Time — il game show live casino di Evolution Gaming.
            </p>
          </div>

          {/* Pages column */}
          <div>
            <h3 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.9rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Pagine
            </h3>
            <nav aria-label="Navigazione footer">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Resources column */}
          <div>
            <h3 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.9rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Risorse
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><Link href="/info#strategies" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Strategie</Link></li>
              <li><Link href="/stats" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Statistiche</Link></li>
              <li><Link href="/demo" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Demo / Gioco Gratuito</Link></li>
              <li><Link href="/app" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>App Mobile</Link></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.9rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Legale
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><Link href="/privacy-policy" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Cookie Policy</Link></li>
              <li><Link href="/responsible-gaming" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Gioco Responsabile</Link></li>
              <li><Link href="/terms-and-conditions" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>Termini e Condizioni</Link></li>
            </ul>
          </div>

          {/* Responsible gambling column */}
          <div>
            <h3 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.9rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Gioco Responsabile
            </h3>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "8px",
                padding: "8px 14px",
                marginBottom: "14px",
              }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#EF4444" }}>18+</span>
              <span style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Solo per adulti</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <a href="https://www.giocoresponsabile.it" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>
                  GiocoResponsabile.it
                </a>
              </li>
              <li>
                <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>
                  BeGambleAware.org
                </a>
              </li>
              <li>
                <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem" }}>
                  GambleAware.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            borderTop: "1px solid #2D2245",
            paddingTop: "24px",
            marginBottom: "20px",
          }}
        >
          <p style={{ color: "#64748B", fontSize: "0.78rem", lineHeight: "1.7" }}>
            <strong style={{ color: "#94A3B8" }}>Disclaimer:</strong> Questo sito ha scopo puramente informativo e non è un operatore di gioco d&apos;azzardo. Non accettiamo scommesse né offriamo servizi di gioco. Crazy Time è un marchio registrato di Evolution Gaming. I link ai casinò presenti su questo sito possono essere link di affiliazione — potremmo ricevere una commissione quando ti registri tramite i nostri link. Il gioco comporta rischi; scommetti solo ciò che puoi permetterti di perdere. Questo sito non è destinato a utenti di età inferiore ai 18 anni. Verifica le leggi locali prima di giocare.
          </p>
        </div>

        {/* Copyright */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#64748B", fontSize: "0.8rem" }}>
            © {currentYear} CrazyTimeGame.info — Tutti i diritti riservati
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ color: "#64748B", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <Lock size={13} color="#64748B" strokeWidth={1.5} /> SSL Sicuro
            </span>
            <span style={{ color: "#64748B", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "5px" }}>
              <FileText size={13} color="#64748B" strokeWidth={1.5} /> Sito Informativo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
