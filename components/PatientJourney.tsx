export default function PatientJourney() {
  const steps = [
    {
      icon: "📅",
      title: "Book Appointment",
      text:
        "Schedule your consultation by phone, WhatsApp or online at your convenience.",
    },
    {
      icon: "🩺",
      title: "Comprehensive Evaluation",
      text:
        "Detailed clinical examination with review of your medical history and symptoms.",
    },
    {
      icon: "📋",
      title: "Accurate Diagnosis",
      text:
        "Digital X-rays, MRI, CT scan and other investigations whenever required for precise diagnosis.",
    },
    {
      icon: "💊",
      title: "Personalised Treatment",
      text:
        "Individual treatment plans including medications, physiotherapy, injections or surgery when indicated.",
    },
    {
      icon: "❤️",
      title: "Recovery & Follow-up",
      text:
        "Guided rehabilitation and regular follow-up to help you return safely to your daily activities.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            letterSpacing: "2px",
            fontWeight: 700,
            marginBottom: "10px",
            textTransform: "uppercase",
          }}
        >
          YOUR JOURNEY
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Your Treatment Journey
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 60px",
            color: "#64748B",
            fontSize: "18px",
            lineHeight: "32px",
          }}
        >
          Every patient receives a structured, evidence-based treatment plan designed to achieve the best possible outcome.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                borderTop: "5px solid #D4AF37",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  margin: "0 auto 22px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#0B3C5D,#1976D2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "34px",
                  color: "#fff",
                }}
              >
                {step.icon}
              </div>

              <div
                style={{
                  color: "#D4AF37",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                STEP {index + 1}
              </div>

              <h3
                style={{
                  color: "#0B3C5D",
                  fontSize: "22px",
                  marginBottom: "16px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "30px",
                  fontSize: "17px",
                  margin: 0,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
