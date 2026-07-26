export default function ShoulderTreatment() {
  const treatments = [
    "Accurate Clinical Evaluation",
    "Digital X-rays & MRI (when required)",
    "Medicines for pain relief",
    "Physiotherapy & Rehabilitation",
    "Ultrasound-guided injections (selected patients)",
    "Arthroscopic (Keyhole) Shoulder Surgery",
    "Open Shoulder Surgery for complex conditions",
    "Post-operative rehabilitation and follow-up",
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
          marginBottom: "15px",
        }}
      >
        Treatment Options
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.8",
        }}
      >
        Every patient receives an individualized treatment plan based on the diagnosis, activity level and treatment goals.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "18px",
        }}
      >
        {treatments.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "24px" }}>✔️</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
