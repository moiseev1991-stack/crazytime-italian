"use client";

import { useState } from "react";
import { FAQItem } from "@/data/faq";
import { SITE_URL } from "@/lib/constants";

interface FAQAccordionProps {
  items: FAQItem[];
  pageUrl?: string;
}

export default function FAQAccordion({ items, pageUrl = "/" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span style={{ paddingRight: "16px", fontSize: "0.95rem" }}>{item.question}</span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7B2FBE",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`accordion-content${isOpen ? " open" : ""}`}
              >
                <p style={{ margin: 0, lineHeight: "1.7", fontSize: "0.9rem" }}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
