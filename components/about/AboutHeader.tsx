export default function AboutHeader() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: "70px",
        alignItems: "center",
      }}
    >
      {/* Doctor Image */}
      <div style={{ textAlign: "center" }}>
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "100%",
            maxWidth: "470px",
            borderRadius: "30px",
            border: "10px solid white",
            boxShadow: "0 35px 80px rgba(11,60,93,0.22)",
          }}
        />
      </div>

      {/* Content */}
      <div>
        <p
          style={{
            color: "#1976D2",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Meet Your Orthopaedic Specialist
        </p>

        <h2
          style={{
            fontSize: "52px",
            color: "#0B3C5D",
            margin: 0,
            lineHeight: "1.15",
            fontWeight: 800,
          }}
        >
          Dr. Ishaan Meena
        </h2>

        <h3
          style={{
            marginTop: "16px",
            color: "#1976D2",
            fontWeight: 600,
            fontSize: "28px",
          }}
        >
          Orthopaedic & Shoulder Surgeon
        </h3>

        <p
          style={{
            color: "#D4AF37",
            fontWeight: 700,
            marginTop: "12px",
            marginBottom: "24px",
            fontSize: "18px",
          }}
        >
          MS (Orthopaedics) • Fellowship in Advanced Shoulder Surgery
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "34px",
            marginBottom: "18px",
          }}
        >
          Assistant Professor, Department of Orthopaedics,
          Jawaharlal Nehru Medical College, Ajmer. Dedicated to
          delivering ethical, evidence-based orthopaedic care with a
          patient-first approach.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "34px",
          }}
        >
          Special interests include trauma surgery, fracture
          management, shoulder surgery, arthroscopy, sports injuries,
          joint replacement, spine disorders and paediatric
          orthopaedics. Every treatment plan is tailored to help
          patients recover safely, regain mobility and return to an
          active lifestyle.
        </p>
      </div>
    </div>
  );
}
