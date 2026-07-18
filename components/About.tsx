export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: "1100px",
        margin: "50px auto",
        padding: "50px 25px",
        background: "#F8FBFF",
        borderRadius: "30px",
      }}
    >
      <h2
        style={{
          color: "#0B3C5D",
          fontSize: "40px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        About Dr. Ishaan Meena
      </h2>

      <div
        style={{
          width: "90px",
          height: "5px",
          background: "#25D366",
          borderRadius: "50px",
          margin: "0 auto 35px",
        }}
      />

      <p
        style={{
          fontSize: "20px",
          lineHeight: "38px",
          color: "#444",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        Dr. Ishaan Meena is a dedicated <strong>Orthopedic Surgeon</strong> and
        <strong> Assistant Professor</strong> at Jawaharlal Nehru Medical
        College, Ajmer. He completed his <strong>MBBS</strong>,
        <strong> MS (Orthopaedics)</strong> and
        <strong> Fellowship in Advanced Shoulder Surgery</strong>. He provides
        expert care for fractures, trauma, shoulder disorders, arthroscopy,
        sports injuries, joint replacement, spine disorders and complex
        orthopedic conditions with a patient-centered, evidence-based approach.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "22px",
          marginTop: "45px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "28px",
            borderRadius: "22px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            borderTop: "5px solid #25D366",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px" }}>🏥</div>
          <h3 style={{ color: "#0B3C5D" }}>Assistant Professor</h3>
          <p style={{ color: "#666" }}>
            Jawaharlal Nehru Medical College, Ajmer
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "28px",
            borderRadius: "22px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            borderTop: "5px solid #25D366",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px" }}>🎓</div>
          <h3 style={{ color: "#0B3C5D" }}>MS (Orthopaedics)</h3>
          <p style={{ color: "#666" }}>
            Postgraduate Qualification in Orthopaedics
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "28px",
            borderRadius: "22px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            borderTop: "5px solid #25D366",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px" }}>🦴</div>
          <h3 style={{ color: "#0B3C5D" }}>
            Fellowship in Advanced Shoulder Surgery
          </h3>
          <p style={{ color: "#666" }}>
            Specialized training in advanced shoulder procedures
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "28px",
            borderRadius: "22px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            borderTop: "5px solid #25D366",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px" }}>⭐</div>
          <h3 style={{ color: "#0B3C5D" }}>Experience</h3>
          <p style={{ color: "#666" }}>
            5+ Years of Clinical Experience & Thousands of Patients Treated
          </p>
        </div>
      </div>
    </section>
  );
}
