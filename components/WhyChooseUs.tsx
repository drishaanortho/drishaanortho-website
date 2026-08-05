export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎓",
      title: "Fellowship Trained",
      description:
        "Advanced fellowship training in shoulder surgery, arthroscopy and complex shoulder reconstruction.",
    },
    {
      icon: "🏥",
      title: "Academic Excellence",
      description:
        "Assistant Professor, Department of Orthopaedics, Jawaharlal Nehru Medical College, Ajmer.",
    },
    {
      icon: "🦴",
      title: "Comprehensive Expertise",
      description:
        "Specialized care in trauma, fractures, shoulder surgery, sports injuries, joint replacement and spine disorders.",
    },
    {
      icon: "🤝",
      title: "Patient-First Care",
      description:
        "Every treatment plan is personalized with ethical, evidence-based care and long-term recovery in mind.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#F8FBFF",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#1976D2",
            letterSpacing: "2px",
            fontWeight: 700,
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          Why Patients Trust Us
        </p>

        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Why Choose Dr. Ishaan Meena?
        </h2>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 60px",
            color: "#64748B",
            fontSize: "18px",
            lineHeight: "32px",
          }}
        >
          Combining advanced surgical expertise, academic excellence and
          compassionate patient care to deliver the best possible orthopaedic
          outcomes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "24px",
                borderTop: "5px solid #D4AF37",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 22px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#0B3C5D,#1976D2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "34px",
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
                  margin: 0,
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
