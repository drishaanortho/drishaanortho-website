export default function HeroContent() {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "320px",
      }}
    >
      <p
        style={{
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "16px",
          fontSize: "15px",
        }}
      >
        ORTHOPAEDIC • SHOULDER • SPORTS INJURY SURGEON
      </p>

      <h1
        style={{
          fontSize: "64px",
          color: "#0B3C5D",
          fontWeight: 800,
          lineHeight: "1.05",
          margin: 0,
        }}
      >
        Dr. Ishaan
        <br />
        Meena
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "24px",
          color: "#1976D2",
          fontWeight: 600,
        }}
      >
        MS (Orthopaedics) • Fellowship in Advanced Shoulder Surgery
      </p>

      <p
        style={{
          marginTop: "18px",
          color: "#555",
          fontSize: "19px",
          lineHeight: "34px",
          maxWidth: "650px",
        }}
      >
        Assistant Professor, Department of Orthopaedics,
        Jawaharlal Nehru Medical College, Ajmer.
      </p>

      <p
        style={{
          marginTop: "12px",
          color: "#666",
          fontSize: "18px",
          lineHeight: "32px",
          maxWidth: "650px",
        }}
      >
        Delivering evidence-based orthopaedic care with expertise in shoulder
        surgery, trauma, arthroscopy, sports injuries, joint replacement and
        spine disorders.
      </p>
    </div>
  );
}
