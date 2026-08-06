export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎓",
      title: "Fellowship Trained",
      description:
        "Advanced fellowship training in Shoulder Surgery with expertise in modern orthopaedic techniques.",
    },
    {
      icon: "🏥",
      title: "Academic Excellence",
      description:
        "Assistant Professor, Department of Orthopaedics, JLN Medical College, Ajmer.",
    },
    {
      icon: "🦴",
      title: "Advanced Surgical Care",
      description:
        "Specialized care in shoulder surgery, arthroscopy, trauma and joint replacement.",
    },
    {
      icon: "⭐",
      title: "Patient-Centred Care",
      description:
        "Every patient receives a personalized treatment plan focused on the best possible outcome.",
    },
    {
      icon: "🚑",
      title: "Emergency Trauma Care",
      description:
        "Prompt evaluation and treatment for fractures, accident injuries and orthopaedic emergencies.",
    },
    {
      icon: "📚",
      title: "Evidence-Based Practice",
      description:
        "Modern treatment based on current research, clinical guidelines and proven surgical techniques.",
    },
  ];

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            letterSpacing: "3px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          WHY CHOOSE DR. ISHAAN MEENA
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "46px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Trusted Orthopaedic Care
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 60px",
            color: "#666",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Combining clinical expertise, advanced surgical training and
          compassionate patient care to deliver the best orthopaedic outcomes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                borderTop: "5px solid #D4AF37",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
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
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "17px",
                  lineHeight: "30px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
