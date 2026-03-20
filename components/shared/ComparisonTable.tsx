import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  [key: string]: string | boolean;
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
}

function renderCell(value: string | boolean) {
  if (value === true) return <Check size={18} color="#10B981" strokeWidth={2.5} />;
  if (value === false) return <X size={18} color="#EF4444" strokeWidth={2.5} />;

  return <span style={{ color: "#F8FAFC" }}>{value}</span>;
}

export default function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="table-wrapper">
      <table className="stats-table" style={{ minWidth: "400px" }}>
        <thead>
          <tr>
            <th>Feature</th>
            {headers.map((h) => (
              <th key={h} style={{ textAlign: "center" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 500, color: "#94A3B8" }}>{row.feature}</td>
              {headers.map((h) => (
                <td key={h} style={{ textAlign: "center" }}>
                  {renderCell(row[h] as string | boolean)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
