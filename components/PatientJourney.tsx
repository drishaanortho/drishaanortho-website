export default function PatientJourney() {
  const journey = [
    {
      step: "01",
      icon: "📅",
      title: "Book Appointment",
      text: "Schedule your consultation online, by phone or through WhatsApp.",
    },
    {
      step: "02",
      icon: "🩺",
      title: "Clinical Evaluation",
      text: "Detailed history, physical examination and assessment of your condition.",
    },
    {
      step: "03",
      icon: "🩻",
      title: "Accurate Diagnosis",
      text: "Digital X-rays, MRI and other investigations whenever required.",
    },
    {
      step: "04",
      icon: "💊",
      title: "Personalized Treatment",
      text: "Individualized treatment plan with non-operative or surgical care.",
    },
    {
      step: "05",
      icon: "💪",
      title: "Recovery & Follow-up",
      text: "Rehabilitation, regular follow-up and guidance for complete recovery.",
    },
  ];

  return (
    <section
      style={{
        background: "#F8FBFF",
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
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "10px",
          }}
        >
          YOUR TREATMENT JOURNEY
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
          From Consultation to Recovery
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
          We guide every patient through a structured treatment process focused
          on accurate diagnosis, effective treatment and complete recovery.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {journey.map((item) => (
            <div
              key={item.step}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  color: "#D4AF37",
                  fontWeight: 800,
                  fontSize: "22px",
                }}
              >
                {item.step}
              </div>

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
                  margin: "0 auto 22px",
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
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
