import React from "react";

interface StatsCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatsCard({ label, value, sublabel, icon, color = "#7B2FBE" }: StatsCardProps) {
  return (
    <div
      style={{
        background: "#1A1128",
        border: `1px solid ${color}40`,
        borderRadius: "12px",
        padding: "24px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: `${color}15`,
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {icon && (
        <div
          style={{
            width: "72px", height: "72px", borderRadius: "18px",
            background: `linear-gradient(135deg, ${color}18, ${color}06)`,
            border: `1px solid ${color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          {icon}
        </div>
      )}
      <p
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          color: color,
          margin: "0 0 6px",
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      <p style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.9rem", margin: "0 0 4px" }}>
        {label}
      </p>
      {sublabel && (
        <p style={{ color: "#94A3B8", fontSize: "0.78rem", margin: 0 }}>{sublabel}</p>
      )}
    </div>
  );
}
