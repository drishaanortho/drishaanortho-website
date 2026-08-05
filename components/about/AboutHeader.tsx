export default function Qualifications() {
  const qualifications = [
    {
      icon: "🎓",
      title: "MBBS",
      description:
        "Bachelor of Medicine & Bachelor of Surgery with a strong foundation in clinical medicine and patient care.",
    },
    {
      icon: "🦴",
      title: "MS (Orthopaedics)",
      description:
        "Postgraduate specialization in Orthopaedic Surgery with advanced training in trauma and musculoskeletal disorders.",
    },
    {
      icon: "🏆",
      title: "Fellowship in Advanced Shoulder Surgery",
      description:
        "Advanced fellowship focused on shoulder disorders, arthroscopy, sports injuries and reconstruction.",
    },
  ];

  return (
    <section style={{ marginTop: "80px" }}>
      <p
        style={{
          textAlign: "center",
          color: "#1976D2",
          letterSpacing: "2px",
          fontWeight: 700,
          marginBottom: "10px",
        }}
      >
        EDUCATION & TRAINING
      </p>

      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "42px",
          fontWeight: 800,
          marginBottom: "50px",
        }}
      >
        Qualifications & Academic Profile
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {qualifications.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "35px",
              borderTop: "5px solid #D4AF37",
              boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg,#0B3C5D,#1976D2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "34px",
                marginBottom: "22px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#0B3C5D",
                fontSize: "24px",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

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
