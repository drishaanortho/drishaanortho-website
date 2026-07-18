export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: "1000px", margin: "auto", padding: "30px 20px" }}
    >
      <h2
        style={{
          color: "#0B3C5D",
          fontSize: "34px",
          marginBottom: "25px",
        }}
      >
        About Dr. Ishaan Meena
      </h2>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "36px",
          color: "#444",
        }}
      >
        Dr. Ishaan Meena is an Orthopaedic & Shoulder Surgeon and
Assistant Professor at JLN Medical College, Ajmer.
He specializes in trauma care, shoulder surgery,
arthroscopy, sports injury management, joint replacement,
spine disorders, deformity correction, and complex
fracture treatment. His focus is on providing
evidence-based, patient-centred care with modern
surgical techniques and compassionate treatment.
      </p>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginTop: "35px",
  }}
>
  <div style={{ background: "#fff", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", textAlign: "center" }}>
    🎓<br />
    <strong>MS (Orthopaedics)</strong>
  </div>

  <div style={{ background: "#fff", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", textAlign: "center" }}>
    🦴<br />
    <strong>Advanced Shoulder Fellowship</strong>
  </div>

  <div style={{ background: "#fff", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", textAlign: "center" }}>
    👨‍🏫<br />
    <strong>Assistant Professor</strong>
  </div>

  <div style={{ background: "#fff", padding: "20px", borderRadius: "18px", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", textAlign: "center" }}>
    ⭐<br />
    <strong>5+ Years Experience</strong>
  </div>
</div>
    </section>
  );
}
