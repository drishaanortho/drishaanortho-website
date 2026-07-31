export default function Qualifications() {
  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #E5E7EB",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  } as const;

  return (
    <section style={{ marginTop: "60px" }}>
      <h3
        style={{
          fontSize: "34px",
          color: "#0B3C5D",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Qualifications & Academic Profile
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "24px",
        }}
      >
        <div style={cardStyle}>
          <h4 style={{ color: "#0B3C5D", marginTop: 0 }}>MBBS</h4>
          <p style={{ color: "#64748B", lineHeight: "28px" }}>
            Bachelor of Medicine & Bachelor of Surgery
          </p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#0B3C5D", marginTop: 0 }}>
            MS (Orthopaedics)
          </h4>
          <p style={{ color: "#64748B", lineHeight: "28px" }}>
            Postgraduate specialization in Orthopaedic Surgery.
          </p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#0B3C5D", marginTop: 0 }}>
            Fellowship in Advanced Shoulder Surgery
          </h4>
          <p style={{ color: "#64748B", lineHeight: "28px" }}>
            Advanced fellowship focused on shoulder disorders,
            arthroscopy and reconstruction.
          </p>
        </div>
      </div>
    </section>
  );
}
