import Image from "next/image";
import { Star } from "lucide-react";
import { Casino } from "@/data/casinos";

interface CasinoCTAProps {
  casino: Casino;
  variant?: "full" | "compact";
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - Math.ceil(rating);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} size={14} color="#F59E0B" fill="#F59E0B" strokeWidth={1.5} />
      ))}
      {half && (
        <span style={{ position: "relative", display: "inline-flex" }}>
          <Star size={14} color="#F59E0B" strokeWidth={1.5} />
          <span style={{ position: "absolute", inset: 0, overflow: "hidden", width: "50%" }}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" strokeWidth={1.5} />
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} size={14} color="#F59E0B" strokeWidth={1.5} />
      ))}
    </span>
  );
}

export default function CasinoCTA({ casino, variant = "full" }: CasinoCTAProps) {
  if (variant === "compact") {
    return (
      <div
        style={{
          background: "#1A1128",
          border: "1px solid #2D2245",
          borderRadius: "12px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {casino.highlight && (
          <span className="badge badge-gold">{casino.highlight}</span>
        )}
        <div
          style={{
            width: "120px",
            height: "40px",
            backgroundColor: "#2D2245",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "6px",
          }}
        >
          <Image
            src={casino.logoUrl}
            alt={casino.name}
            width={140}
            height={48}
            style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <p style={{ color: "#10B981", fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
          {casino.bonus}
        </p>
        <a
          href={casino.affiliateUrl}
          rel="nofollow sponsored"
          target="_blank"
          className="btn-primary"
          style={{ width: "100%", padding: "10px 16px", fontSize: "0.875rem" }}
        >
          Gioca Ora
        </a>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#1A1128",
        border: "1px solid #2D2245",
        borderRadius: "12px",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "140px 1fr auto auto auto",
        alignItems: "center",
        gap: "16px",
      }}
      className="casino-row"
    >
      {/* Logo */}
      <div
        style={{
          height: "48px",
          backgroundColor: "#2D2245",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          src={casino.logoUrl}
          alt={casino.name}
          width={140}
          height={48}
          style={{ objectFit: "contain", maxHeight: "100%" }}
        />
      </div>

      {/* Name + bonus */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <span style={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.95rem" }}>{casino.name}</span>
          {casino.highlight && (
            <span className="badge badge-gold">{casino.highlight}</span>
          )}
        </div>
        <p style={{ color: "#10B981", fontSize: "0.875rem", margin: 0 }}>{casino.bonus}</p>
      </div>

      {/* Min deposit */}
      <div style={{ textAlign: "center", minWidth: "80px" }}>
        <p style={{ color: "#94A3B8", fontSize: "0.7rem", margin: "0 0 2px", textTransform: "uppercase" }}>Dep. Minimo</p>
        <p style={{ color: "#F8FAFC", fontWeight: 600, margin: 0, fontSize: "0.9rem" }}>{casino.minDeposit}</p>
      </div>

      {/* Rating */}
      <div style={{ textAlign: "center", minWidth: "80px" }}>
        <p style={{ color: "#94A3B8", fontSize: "0.7rem", margin: "0 0 2px", textTransform: "uppercase" }}>Valutazione</p>
        <Stars rating={casino.rating} />
        <p style={{ color: "#94A3B8", fontSize: "0.75rem", margin: "2px 0 0" }}>{casino.rating}/5</p>
      </div>

      {/* CTA */}
      <a
        href={casino.affiliateUrl}
        rel="nofollow sponsored"
        target="_blank"
        className="btn-primary"
        style={{ whiteSpace: "nowrap", fontSize: "0.875rem" }}
      >
        Gioca Ora →
      </a>

      <style>{`
        @media (max-width: 768px) {
          .casino-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
