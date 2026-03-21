"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
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

      {/* Mobile menu overlay — outside header to avoid backdrop-filter containing block */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} currentPath={pathname} />
    </>
  );
}
