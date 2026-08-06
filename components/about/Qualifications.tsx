export default function Qualifications() {
  const qualifications = [
    {
      icon: "🎓",
      title: "MBBS",
      subtitle: "Bachelor of Medicine & Bachelor of Surgery",
      description:
        "Built a strong clinical foundation in medicine, surgery and comprehensive patient care.",
    },
    {
      icon: "🦴",
      title: "MS (Orthopaedics)",
      subtitle: "Postgraduate Specialization",
      description:
        "Advanced training in trauma, fractures, joint disorders, musculoskeletal conditions and orthopaedic surgery.",
    },
    {
      icon: "🏆",
      title: "Advanced Shoulder Fellowship",
      subtitle: "Fellowship Training",
      description:
        "Specialized fellowship focused on shoulder surgery, arthroscopy, sports injuries and advanced reconstruction.",
    },
  ];

  return (
    <section style={{ marginTop: "90px" }}>
      <p
        style={{
          textAlign: "center",
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "12px",
          fontSize: "15px",
        }}
      >
        Education & Training
      </p>

      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "44px",
          fontWeight: 800,
          marginBottom: "55px",
        }}
      >
        Qualifications & Academic Profile
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {qualifications.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "26px",
              padding: "35px",
              borderTop: "6px solid #D4AF37",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              minHeight: "320px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                background: "linear-gradient(135deg,#0B3C5D,#1976D2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "34px",
                marginBottom: "24px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#0B3C5D",
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#D4AF37",
                fontWeight: 700,
                marginBottom: "18px",
                fontSize: "16px",
              }}
            >
              {item.subtitle}
            </p>

            <p
              style={{
                color: "#64748B",
                lineHeight: "30px",
                fontSize: "17px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
