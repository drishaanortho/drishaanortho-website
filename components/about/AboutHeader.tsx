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
            boxShadow: "0 30px 70px rgba(11,60,93,.15)",
            border: "8px solid white",
          }}
        />
      </div>

      <div>
        <p
          style={{
            color: "#1976D2",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "12px",
            textTransform: "uppercase",
          }}
        >
          Meet Your Orthopaedic Specialist
        </p>

        <h2
          style={{
            fontSize: "48px",
            color: "#0B3C5D",
            margin: 0,
            lineHeight: "1.2",
          }}
        >
          Dr. Ishaan Meena
        </h2>

        <h3
          style={{
            marginTop: "14px",
            color: "#1976D2",
            fontWeight: 600,
          }}
        >
          Orthopaedic Surgeon
        </h3>

        <p
          style={{
            marginTop: "22px",
            fontSize: "18px",
            color: "#555",
            lineHeight: "34px",
          }}
        >
          Assistant Professor, Department of Orthopaedics,
          Jawaharlal Nehru Medical College, Ajmer.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "34px",
          }}
        >
          Dedicated to evidence-based orthopaedic care with
          expertise in trauma, shoulder surgery, arthroscopy,
          sports injuries, joint replacement and spine disorders.
        </p>
      </div>
    </div>
  );
}
