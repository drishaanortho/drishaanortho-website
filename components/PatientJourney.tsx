export default function PatientJourney() {
  const steps = [
    {
      icon: "📅",
      title: "Book Appointment",
      text: "Schedule your consultation online or via WhatsApp.",
    },
    {
      icon: "🩺",
      title: "Clinical Evaluation",
      text: "Comprehensive examination and medical history.",
    },
    {
      icon: "🩻",
      title: "Accurate Diagnosis",
      text: "Digital X-rays, MRI and other investigations when required.",
    },
    {
      icon: "💊",
      title: "Personalized Treatment",
      text: "Non-operative or surgical treatment tailored to your condition.",
    },
    {
      icon: "💪",
      title: "Recovery & Follow-up",
      text: "Rehabilitation and regular follow-up for the best outcomes.",
    },
  ];

  return (
    <section
      style={{
        background: "#F8FBFF",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            fontWeight: "800",
          }}
        >
          Your Treatment Journey
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "700px",
            margin: "20px auto 50px",
            lineHeight: "30px",
          }}
        >
          We ensure a smooth and patient-focused experience from consultation to complete recovery.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.title}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "48px" }}>{step.icon}</div>

              <h3
                style={{
                  marginTop: "20px",
                  color: "#0B3C5D",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
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
