interface Step {
  number: number;
  title: string;
  description?: string;
}

interface StepGuideProps {
  steps: Step[];
  variant?: "vertical" | "horizontal";
}

export default function StepGuide({ steps, variant = "vertical" }: StepGuideProps) {
  if (variant === "horizontal") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: "16px",
        }}
        className="step-guide-horizontal"
      >
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              background: "#1A1128",
              border: "1px solid #2D2245",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              className="step-number"
              style={{ margin: "0 auto 12px" }}
            >
              {step.number}
            </div>
            <h4 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "0.95rem", margin: "0 0 8px" }}>
              {step.title}
            </h4>
            {step.description && (
              <p style={{ color: "#94A3B8", fontSize: "0.825rem", margin: 0, lineHeight: "1.6" }}>
                {step.description}
              </p>
            )}
          </div>
        ))}
        <style>{`
          @media (max-width: 640px) {
            .step-guide-horizontal {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {steps.map((step, index) => (
        <div
          key={step.number}
          style={{
            display: "flex",
            gap: "20px",
            position: "relative",
          }}
        >
          {/* Left column: number + line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
            <div className="step-number">{step.number}</div>
            {index < steps.length - 1 && (
              <div
                style={{
                  width: "2px",
                  flexGrow: 1,
                  minHeight: "32px",
                  background: "linear-gradient(to bottom, #7B2FBE, #2D2245)",
                  margin: "4px 0",
                }}
              />
            )}
          </div>

          {/* Right column: content */}
          <div style={{ paddingBottom: index < steps.length - 1 ? "24px" : "0", paddingTop: "8px" }}>
            <h4 style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "1rem", margin: "0 0 6px" }}>
              {step.title}
            </h4>
            {step.description && (
              <p style={{ color: "#94A3B8", fontSize: "0.875rem", margin: 0, lineHeight: "1.6" }}>
                {step.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
