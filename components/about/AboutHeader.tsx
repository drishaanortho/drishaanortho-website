export default function AboutHeader() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: "60px",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "100%",
            maxWidth: "430px",
            borderRadius: "28px",
            border: "8px solid white",
            boxShadow: "0 30px 70px rgba(11,60,93,.15)",
          }}
        />
      </div>

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
            marginTop: "14px",
            color: "#1976D2",
            fontWeight: 700,
            fontSize: "30px",
          }}
        >
          Orthopaedic & Shoulder Surgeon
        </h3>

        <p
          style={{
            color: "#D4AF37",
            fontWeight: 700,
            marginTop: "18px",
            fontSize: "18px",
          }}
        >
          MS (Orthopaedics) • Fellowship in Advanced Shoulder Surgery
        </p>

        <p
          style={{
            marginTop: "24px",
            fontSize: "19px",
            color: "#555",
            lineHeight: "34px",
          }}
        >
          Assistant Professor, Department of Orthopaedics,
          Jawaharlal Nehru Medical College, Ajmer.
        </p>

        <p
          style={{
            fontSize: "19px",
            color: "#555",
            lineHeight: "34px",
          }}
        >
          Dedicated to delivering ethical, evidence-based orthopaedic care with
          expertise in trauma surgery, shoulder surgery, arthroscopy, sports
          injuries, joint replacement, spine disorders and paediatric
          orthopaedics.
        </p>
      </div>
    </div>
  );
}
