"use client";

import { useState } from "react";
import { mockSpins } from "@/data/mock-spins";

type FilterType = "1h" | "6h" | "24h";

const resultColors: Record<string, string> = {
  "1": "#3B82F6",
  "2": "#10B981",
  "5": "#F59E0B",
  "10": "#EF4444",
  "Coin Flip": "#7B2FBE",
  "Cash Hunt": "#F97316",
  "Pachinko": "#EC4899",
  "Crazy Time": "#FBBF24",
};

export default function SpinHistory() {
  const [filter, setFilter] = useState<FilterType>("24h");

  const maxHours = filter === "1h" ? 1 : filter === "6h" ? 6 : 24;
  const filtered = mockSpins.filter((s) => s.hoursAgo <= maxHours);

  const filterLabels: Record<FilterType, string> = {
    "1h": "Ultima Ora",
    "6h": "Ultime 6 Ore",
    "24h": "Ultime 24 Ore",
  };

  return (
    <div>
      {/* Filter buttons */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
        {(["1h", "6h", "24h"] as FilterType[]).map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
          >
            {filterLabels[f]}
          </button>
        ))}
        <span style={{ color: "#64748B", fontSize: "0.8rem", alignSelf: "center", marginLeft: "8px" }}>
          {filtered.length} giri
        </span>
      </div>

      <div className="table-wrapper">
        <table className="stats-table" style={{ minWidth: "500px" }}>
          <thead>
            <tr>
              <th>Giro #</th>
              <th>Risultato</th>
              <th>Moltiplicatore</th>
              <th>Bonus</th>
              <th>Ora</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((spin) => (
              <tr key={spin.id}>
                <td style={{ color: "#64748B", fontFamily: "monospace" }}>#{spin.id}</td>
                <td>
                  <span style={{ color: resultColors[spin.result] || "#F8FAFC", fontWeight: 700 }}>
                    {spin.result}
                  </span>
                </td>
                <td style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>{spin.multiplier}</td>
                <td>
                  {spin.isBonus ? (
                    <span className="badge badge-gold">Bonus</span>
                  ) : (
                    <span style={{ color: "#64748B", fontSize: "0.8rem" }}>—</span>
                  )}
                </td>
                <td style={{ color: "#64748B", fontFamily: "monospace", fontSize: "0.85rem" }}>{spin.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p style={{ color: "#64748B", textAlign: "center", padding: "32px" }}>Nessun giro in questo intervallo di tempo.</p>
      )}
    </div>
  );
}
