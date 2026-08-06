export default function HeroContent() {
  const expertise = [
    "Shoulder Surgery",
    "Arthroscopy",
    "Joint Replacement",
    "Trauma Care",
  ];

  return (
    <div
      style={{
        flex: 1,
        minWidth: "340px",
      }}
    >
      <p
        style={{
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          fontSize: "15px",
          marginBottom: "18px",
        }}
      >
        ORTHOPAEDIC • SHOULDER • SPORTS MEDICINE
      </p>

      <h1
        style={{
          fontSize: "72px",
          fontWeight: 800,
          color: "#0B3C5D",
          lineHeight: "1.05",
          margin: 0,
        }}
      >
        Dr. Ishaan
        <br />
        Meena
      </h1>

      <div
        style={{
          marginTop: "22px",
          display: "inline-block",
          background: "#EEF6FF",
          color: "#0B3C5D",
          padding: "12px 22px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "17px",
        }}
      >
        MS (Orthopaedics) • Advanced Shoulder Fellowship
      </div>

      <p
        style={{
          marginTop: "24px",
          color: "#555",
          fontSize: "20px",
          lineHeight: "34px",
          fontWeight: 500,
        }}
      >
        🏥 Assistant Professor,
        <br />
        Department of Orthopaedics,
        <br />
        Jawaharlal Nehru Medical College, Ajmer.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(170px,1fr))",
          gap: "15px",
          maxWidth: "500px",
        }}
      >
        {expertise.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#0B3C5D",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            <span style={{ color: "#16A34A", fontSize: "18px" }}>
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
