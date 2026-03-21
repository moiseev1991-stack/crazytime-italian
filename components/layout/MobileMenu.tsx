"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: "#0F0A1A",
        display: "flex",
        flexDirection: "column",
        padding: "80px 24px 24px",
        overflowY: "auto",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Chiudi menu"
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#F8FAFC",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Links */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }} aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                color: isActive ? "#F59E0B" : "#F8FAFC",
                fontSize: "1.25rem",
                fontWeight: 600,
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ marginTop: "auto", paddingTop: "24px" }}>
        <p style={{ fontSize: "0.75rem", color: "#64748B", textAlign: "center" }}>
          18+ | Gioca Responsabilmente
        </p>
      </div>
    </div>
  );
}
