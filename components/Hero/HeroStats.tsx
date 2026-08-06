export default function HeroStats() {
  const stats = [
    {
      number: "5000+",
      label: "Patients Treated",
    },
    {
      number: "1000+",
      label: "Orthopaedic Procedures",
    },
    {
      number: "5+",
      label: "Years of Experience",
    },
    {
      number: "24×7",
      label: "Emergency Trauma Care",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "-40px auto 80px",
        padding: "0 20px",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          boxShadow: "0 20px 50px rgba(0,0,0,.12)",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              textAlign: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#0B3C5D",
                fontSize: "38px",
                fontWeight: 800,
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                marginTop: "10px",
                color: "#64748B",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
