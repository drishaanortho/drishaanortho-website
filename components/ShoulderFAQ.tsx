export default function ShoulderFAQ() {
  const faqs = [
    {
      question: "Can frozen shoulder heal without surgery?",
      answer:
        "Many patients improve with medicines, physiotherapy and exercises. Surgery is considered only when symptoms persist despite adequate treatment.",
    },
    {
      question: "When is shoulder arthroscopy recommended?",
      answer:
        "Arthroscopy may be recommended for conditions such as rotator cuff tears, recurrent shoulder instability, impingement syndrome and certain sports injuries after proper evaluation.",
    },
    {
      question: "Do all shoulder injuries require surgery?",
      answer:
        "No. Many shoulder conditions can be managed successfully with non-surgical treatment. Surgery is advised only when it offers the best chance of recovery.",
    },
    {
      question: "When should I get an MRI?",
      answer:
        "MRI is recommended when soft tissue injuries such as rotator cuff tears, labral injuries or ligament damage are suspected after clinical examination.",
    },
    {
      question: "How long does recovery take after shoulder surgery?",
      answer:
        "Recovery depends on the procedure performed. Most patients require physiotherapy, and complete recovery may take several weeks to a few months.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "80px auto",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "38px",
          marginBottom: "40px",
        }}
      >
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <details
          key={index}
          style={{
            background: "#fff",
            marginBottom: "15px",
            borderRadius: "12px",
            padding: "18px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: "#0B3C5D",
            }}
          >
            {faq.question}
          </summary>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            {faq.answer}
          </p>
        </details>
      ))}
    </section>
  );
}
