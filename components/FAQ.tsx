"use client";

import { useState } from "react";
export default function FAQ() {
  const faqs = [
    {
      question: "Do I need an appointment before visiting?",
      answer: "Appointments are recommended, but walk-in patients are also welcome during OPD hours.",
    },
    {
      question: "What are your OPD timings?",
      answer: "OPD is available every day from 3:00 PM to 8:00 PM.",
    },
    {
      question: "What conditions do you treat?",
      answer: "We treat fractures, sports injuries, shoulder disorders, spine problems, arthritis, joint pain, and other orthopaedic conditions.",
    },
    {
      question: "Do you perform shoulder arthroscopy?",
      answer: "Yes. Advanced shoulder arthroscopy and shoulder surgeries are one of our specialties.",
    },
    {
      question: "Is emergency fracture care available?",
      answer: "Yes. Emergency trauma and fracture care is available.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f4f8fc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        {faqs.map((faq, index) => (
          <div
    key={index}
    onClick={() =>
        setOpenIndex(openIndex === index ? null : index)
    }
    style={{
        background: "white",
        marginBottom: "20px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        cursor: "pointer",
    }}
          >
            <h3 style={{ color: "#0B3C5D", marginBottom: "10px" }}>
              {faq.question}
            </h3>
            {openIndex === index && (
    <p style={{ color: "#555", lineHeight: "1.7" }}>
        {faq.answer}
    </p>
)}
          </div>
        ))}
      </div>
    </section>
  );
}
