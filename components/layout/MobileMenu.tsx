"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <nav
        style={{
          position: "relative",
          width: "280px",
          height: "100%",
          backgroundColor: "#1A1128",
          borderRight: "1px solid #2D2245",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
        aria-label="Mobile navigation"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #F59E0B, #7B2FBE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CrazyTime
          </span>
          <button
            onClick={onClose}
            aria-label="Chiudi menu"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#94A3B8",
              padding: "4px",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {NAV_LINKS.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                padding: "14px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#F59E0B" : "#F8FAFC",
                backgroundColor: isActive ? "rgba(245, 158, 11, 0.1)" : "transparent",
                borderLeft: isActive ? "3px solid #F59E0B" : "3px solid transparent",
                display: "block",
              }}
            >
              {link.label}
            </Link>
          );
        })}

        <div
          style={{
            marginTop: "auto",
            paddingTop: "24px",
            borderTop: "1px solid #2D2245",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#94A3B8", textAlign: "center" }}>
            18+ | Gioca Responsabilmente
          </p>
        </div>
      </nav>
    </div>
  );
}
