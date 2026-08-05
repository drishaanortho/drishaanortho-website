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
    <section
      style={{
        marginTop: "70px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        Education & Training
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
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {qualifications.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              borderRadius: "22px",
              padding: "28px",
              borderTop: "4px solid #D4AF37",
              boxShadow: "0 12px 30px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "14px",
                background: "#0B3C5D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#0B3C5D",
                fontSize: "28px",
                margin: "0 0 14px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#64748B",
                fontSize: "17px",
                lineHeight: "30px",
                margin: 0,
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
