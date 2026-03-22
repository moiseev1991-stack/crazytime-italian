"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Header bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(15, 10, 26, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #2D2245",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            aria-label="CrazyTimeGame Home"
          >
            <Image
              src="/images/logo-transparent.png"
              alt="Crazy Time Logo"
              width={160}
              height={44}
              style={{ objectFit: "contain", height: "44px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="desktop-nav" style={{ display: "flex", gap: "4px" }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#F59E0B" : "#94A3B8",
                    backgroundColor: isActive ? "rgba(245, 158, 11, 0.1)" : "transparent",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color = "#F8FAFC";
                      (e.target as HTMLElement).style.backgroundColor = "rgba(123, 47, 190, 0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color = "#94A3B8";
                      (e.target as HTMLElement).style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#casino"
            className="desktop-nav"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#F59E0B",
              color: "#000",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#EAB308")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#F59E0B")}
          >
            Registrati
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#F8FAFC",
            }}
            className="mobile-menu-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside header to avoid backdrop-filter containing block */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            backgroundColor: "#0F0A1A",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Menu header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#C084FC", fontWeight: 700, fontSize: "1.2rem" }}>CrazyTime</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Chiudi menu"
              style={{
                color: "#fff",
                fontSize: "1.8rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav
            style={{ display: "flex", flexDirection: "column", padding: "8px 20px", flex: 1, overflowY: "auto" }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: pathname === link.href ? "#F59E0B" : "#F8FAFC",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div style={{ padding: "16px 20px 0" }}>
            <a
              href="/#casino"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                background: "#F59E0B",
                color: "#000",
                fontWeight: 700,
                fontSize: "1.1rem",
                padding: "16px",
                borderRadius: "10px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Registrati — Gioca Ora
            </a>
          </div>

          {/* Footer */}
          <div
            style={{
              padding: "20px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              fontSize: "0.8rem",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            18+ | Gioca Responsabilmente
          </div>
        </div>
      )}
    </>
  );
}
