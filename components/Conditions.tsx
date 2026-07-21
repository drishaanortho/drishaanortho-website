export default function Conditions() {
  const conditions = [
    {
      icon: "💪",
      title: "Shoulder Disorders",
      description: "Frozen shoulder, rotator cuff tears, instability and shoulder pain.",
    },
    {
      icon: "🦵",
      title: "Knee Disorders",
      description: "Arthritis, ligament injuries, meniscus tears and knee pain.",
    },
    {
      icon: "🦴",
      title: "Fracture & Trauma",
      description: "Comprehensive management of simple and complex fractures.",
    },
    {
      icon: "🏃",
      title: "Sports Injuries",
      description: "ACL, meniscus, ligament and muscle injuries.",
    },
    {
      icon: "🩻",
      title: "Spine Disorders",
      description: "Neck pain, back pain, slipped disc and spinal problems.",
    },
    {
      icon: "🦿",
      title: "Joint Replacement",
      description: "Hip and knee replacement for advanced arthritis.",
    },
    {
      icon: "👣",
      title: "Foot & Ankle",
      description: "Heel pain, ankle injuries, deformities and fractures.",
    },
    {
      icon: "✋",
      title: "Hand & Wrist",
      description: "Carpal tunnel syndrome, tendon injuries and fractures.",
    },
    {
      icon: "🧒",
      title: "Pediatric Orthopaedics & CTEV",
      description: "Congenital deformities, CTEV and children's bone disorders.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Conditions We Treat
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: "30px",
          }}
        >
          Comprehensive diagnosis and treatment for a wide range of orthopaedic
          conditions using modern evidence-based techniques.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {conditions.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#F8FBFF",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#0B3C5D",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                {item.description}
              </p>

              <button
                style={{
                  marginTop: "20px",
                  background: "#0B3C5D",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
