export default function HeroContent() {
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
          lineHeight: "1.05",
          color: "#0B3C5D",
          fontWeight: 800,
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
          padding: "12px 20px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "17px",
        }}
      >
        MS (Orthopaedics) • Advanced Shoulder Fellowship
      </div>

      <p
        style={{
          marginTop: "22px",
          color: "#555",
          fontSize: "20px",
          lineHeight: "34px",
          maxWidth: "650px",
        }}
      >
        Assistant Professor,
        <br />
        Department of Orthopaedics,
        Jawaharlal Nehru Medical College, Ajmer.
      </p>

      <div
        style={{
          marginTop: "28px",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(180px, 1fr))",
          gap: "14px",
          maxWidth: "520px",
        }}
      >
        {[
          "Shoulder Surgery",
          "Arthroscopy",
          "Joint Replacement",
          "Trauma Care",
        ].map((item) => (
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
            <span
              style={{
                color: "#16A34A",
                fontSize: "18px",
              }}
            >
              ✓
            </span>

            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
