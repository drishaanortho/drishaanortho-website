export default function WhyChooseShoulder() {
  const points = [
    "MS (Orthopaedics)",
    "Fellowship in Advanced Shoulder Surgery",
    "Assistant Professor, JLN Medical College, Ajmer",
    "Special Expertise in Shoulder Disorders & Arthroscopy",
    "Evidence-Based Treatment",
    "Personalized Treatment Plans",
    "Modern Surgical & Non-Surgical Care",
    "Comprehensive Follow-up & Rehabilitation",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          Why Choose Dr. Ishaan Meena?
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "750px",
            margin: "0 auto 50px",
            lineHeight: "1.8",
          }}
        >
          Dedicated to delivering compassionate, evidence-based orthopaedic care
          with a focus on restoring function, relieving pain and helping
          patients return to their normal activities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          {points.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#F7FAFF",
                borderRadius: "15px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: "28px" }}>⭐</span>

              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
