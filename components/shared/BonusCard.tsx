import Link from "next/link";
import { BonusRound } from "@/data/bonuses";

interface BonusCardProps {
  bonus: BonusRound;
  variant?: "preview" | "detailed";
}

export default function BonusCard({ bonus, variant = "preview" }: BonusCardProps) {
  return (
    <div
      style={{
        background: "#1A1128",
        border: `1px solid ${bonus.color}40`,
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minWidth: variant === "preview" ? "260px" : "auto",
        maxWidth: variant === "preview" ? "320px" : "auto",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      className="bonus-card"
    >
      {/* Image area */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
        {/* Hit rate badge */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.65)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            padding: "3px 10px",
            fontSize: "0.72rem",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Hit: {bonus.hitRate}
        </div>

        {/* Coin Flip */}
        {bonus.id === "coin-flip" && (
          <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ display: "block" }}>
            <rect width="200" height="160" fill="#1e1b4b" opacity="0.5"/>
            <circle cx="100" cy="80" r="40" fill="#3b82f6" opacity="0.1"/>
            <circle cx="100" cy="80" r="32" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.3"/>
            {/* Coin red side */}
            <g className="bonus-svg-anim" style={{ animation: "coinFlip 3s ease-in-out infinite", transformOrigin: "100px 80px" }}>
              <circle cx="100" cy="80" r="24" fill="#2563eb" opacity="0.85"/>
              <circle cx="100" cy="80" r="24" fill="none" stroke="#60a5fa" strokeWidth="1.2"/>
              <circle cx="100" cy="80" r="18" fill="none" stroke="#93c5fd" strokeWidth="0.6" opacity="0.5"/>
              <text x="100" y="80" fill="#fff" fontSize="9" textAnchor="middle" dominantBaseline="central" fontWeight="700">B</text>
            </g>
            {/* Red dot */}
            <circle cx="74" cy="60" r="5" fill="#ef4444" opacity="0.75"/>
            <text x="74" y="60" fill="#fff" fontSize="5" textAnchor="middle" dominantBaseline="central" fontWeight="600">R</text>
            {/* Particles */}
            <circle cx="58" cy="118" r="2.5" fill="#60a5fa" className="bonus-svg-anim" style={{ animation: "softPulse 2s infinite" }}/>
            <circle cx="148" cy="36" r="1.8" fill="#93c5fd" className="bonus-svg-anim" style={{ animation: "softPulse 2.6s infinite 0.5s" }}/>
            <circle cx="38" cy="52" r="1.2" fill="#bfdbfe" className="bonus-svg-anim" style={{ animation: "softPulse 3.2s infinite 1s" }}/>
            <circle cx="162" cy="130" r="2" fill="#60a5fa" className="bonus-svg-anim" style={{ animation: "softPulse 2.4s infinite 1.5s" }}/>
          </svg>
        )}

        {/* Cash Hunt */}
        {bonus.id === "cash-hunt" && (
          <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ display: "block" }}>
            <rect width="200" height="160" fill="#052e16" opacity="0.45"/>
            {/* Grid */}
            <g opacity="0.25">
              {[40, 80, 120, 160].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="#34d399" strokeWidth="0.4"/>
              ))}
              {[32, 64, 96, 128].map((y) => (
                <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#34d399" strokeWidth="0.4"/>
              ))}
            </g>
            {/* Target circles with multipliers */}
            {[
              { cx: 60,  cy: 48,  label: "50x", op: 0.55 },
              { cx: 100, cy: 48,  label: "5x",  op: 0.4 },
              { cx: 140, cy: 48,  label: "100x", op: 0.65 },
              { cx: 60,  cy: 80,  label: "10x", op: 0.35 },
              { cx: 100, cy: 80,  label: "?",   op: 0.9, highlight: true },
              { cx: 140, cy: 80,  label: "25x", op: 0.45 },
              { cx: 60,  cy: 112, label: "3x",  op: 0.5 },
              { cx: 100, cy: 112, label: "75x", op: 0.3 },
              { cx: 140, cy: 112, label: "15x", op: 0.55 },
            ].map(({ cx, cy, label, op, highlight }) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="11" fill={highlight ? "#10b981" : "#059669"} opacity={op}/>
                <text x={cx} y={cy} fill={highlight ? "#fff" : "#a7f3d0"} fontSize={label.length > 2 ? "6.5" : "8"} textAnchor="middle" dominantBaseline="central" fontWeight={highlight ? "700" : "400"}>{label}</text>
              </g>
            ))}
            {/* Crosshair on center target */}
            <circle cx="100" cy="80" r="16" fill="none" stroke="#34d399" strokeWidth="1.8" opacity="0.7"/>
            <line x1="114" y1="66" x2="134" y2="46" stroke="#34d399" strokeWidth="1.2" opacity="0.6"/>
            <circle cx="134" cy="46" r="3.5" fill="none" stroke="#34d399" strokeWidth="1.2" opacity="0.7"/>
          </svg>
        )}

        {/* Pachinko */}
        {bonus.id === "pachinko" && (
          <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ display: "block" }}>
            <rect width="200" height="160" fill="#451a03" opacity="0.3"/>
            {/* Pegs */}
            {[
              [45,42],[80,42],[115,42],[150,42],
              [62,62],[97,62],[132,62],
              [45,82],[80,82],[115,82],[150,82],
              [62,102],[97,102],[132,102],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3.5" fill="#f59e0b" opacity="0.4"/>
            ))}
            {/* Puck trajectory (dashed) */}
            <polyline
              points="97,18 80,42 97,62 112,82 97,102"
              fill="none" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35"
            />
            {/* Falling puck */}
            <circle
              cx="97" cy="18" r="5.5" fill="#fbbf24"
              className="bonus-svg-anim"
              style={{ animation: "puckDrop 2.2s ease-in infinite" }}
            />
            {/* Multiplier slots */}
            {[
              { x: 28,  label: "2x"  },
              { x: 56,  label: "5x"  },
              { x: 84,  label: "2x"  },
              { x: 112, label: "50x" },
              { x: 140, label: "10x" },
            ].map(({ x, label }) => (
              <g key={x}>
                <rect x={x} y="128" width="26" height="18" rx="3" fill="#d97706" opacity="0.6"/>
                <text x={x + 13} y="137" fill="#fef3c7" fontSize="7" textAnchor="middle" dominantBaseline="central">{label}</text>
              </g>
            ))}
          </svg>
        )}

        {/* Crazy Time bonus */}
        {bonus.id === "crazy-time" && (
          <svg width="100%" height="100%" viewBox="0 0 200 160" style={{ display: "block" }}>
            <rect width="200" height="160" fill="#500724" opacity="0.25"/>
            {/* Outer rings */}
            <circle cx="100" cy="80" r="54" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="100" cy="80" r="46" fill="none" stroke="#f97316" strokeWidth="0.8" opacity="0.25"/>
            {/* Spinning wheel */}
            <g className="bonus-svg-anim" style={{ animation: "ctSpin 10s linear infinite", transformOrigin: "100px 80px" }}>
              <circle cx="100" cy="80" r="38" fill="#9a3412" opacity="0.18"/>
              <circle cx="100" cy="80" r="38" fill="none" stroke="#f97316" strokeWidth="1.2" opacity="0.5"/>
              {/* Sector dividers */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1={100 + 0 * Math.cos(rad)}
                    y1={80 + 0 * Math.sin(rad)}
                    x2={100 + 38 * Math.cos(rad)}
                    y2={80 + 38 * Math.sin(rad)}
                    stroke="#f97316" strokeWidth="0.4" opacity="0.35"
                  />
                );
              })}
              {/* Multiplier labels in sectors */}
              {[
                { angle: 22,  label: "2x"  },
                { angle: 67,  label: "50x" },
                { angle: 112, label: "10x" },
                { angle: 157, label: "5x"  },
                { angle: 202, label: "20x" },
                { angle: 247, label: "3x"  },
                { angle: 292, label: "100x"},
                { angle: 337, label: "15x" },
              ].map(({ angle, label }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 26;
                return (
                  <text
                    key={angle}
                    x={100 + r * Math.cos(rad)}
                    y={80 + r * Math.sin(rad)}
                    fill="#fed7aa"
                    fontSize={label.length > 2 ? "5.5" : "7"}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontWeight="600"
                  >{label}</text>
                );
              })}
            </g>
            {/* Center pin */}
            <circle cx="100" cy="80" r="5.5" fill="#f97316"/>
            <circle cx="100" cy="80" r="3" fill="#fed7aa"/>
            {/* Particles */}
            <circle cx="162" cy="28" r="1.8" fill="#fb923c" className="bonus-svg-anim" style={{ animation: "softPulse 2.1s infinite" }}/>
            <circle cx="36" cy="132" r="2.2" fill="#fb923c" className="bonus-svg-anim" style={{ animation: "softPulse 3s infinite 0.7s" }}/>
          </svg>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
        <div>
          <h3
            style={{
              color: "#F8FAFC",
              fontWeight: 700,
              fontSize: "1.1rem",
              margin: "0 0 8px",
              background: `linear-gradient(135deg, ${bonus.color}, ${bonus.accentColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {bonus.name}
          </h3>
          <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0, lineHeight: "1.6" }}>
            {bonus.shortDescription}
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#64748B", fontSize: "0.7rem", textTransform: "uppercase", margin: "0 0 2px" }}>Vincita Max</p>
            <p style={{ color: "#F59E0B", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>{bonus.maxWin}</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#64748B", fontSize: "0.7rem", textTransform: "uppercase", margin: "0 0 2px" }}>Pag. Medio</p>
            <p style={{ color: "#10B981", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{bonus.avgPayout}</p>
          </div>
        </div>

        {variant === "preview" && (
          <Link
            href="/info"
            style={{
              display: "block",
              textAlign: "center",
              padding: "10px",
              borderRadius: "8px",
              border: `1px solid ${bonus.color}60`,
              color: bonus.color,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "background 0.2s",
              marginTop: "auto",
            }}
          >
            Scopri di Più →
          </Link>
        )}

        {variant === "detailed" && (
          <ul style={{ margin: 0, padding: "0 0 0 16px", color: "#94A3B8", fontSize: "0.875rem" }}>
            {bonus.mechanics.map((m, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>{m}</li>
            ))}
          </ul>
        )}
      </div>

      <style>{`
        .bonus-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
