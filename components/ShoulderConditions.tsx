export default function ShoulderConditions() {
  const conditions = [
    {
      icon: "❄️",
      title: "Frozen Shoulder",
      description:
        "Pain and stiffness causing restricted shoulder movements. Early treatment helps restore mobility and reduce pain.",
    },
    {
      icon: "💪",
      title: "Rotator Cuff Tear",
      description:
        "Injury to the shoulder tendons resulting in pain, weakness and difficulty lifting the arm.",
    },
    {
      icon: "🦴",
      title: "Shoulder Dislocation",
      description:
        "The shoulder joint comes out of its normal position due to trauma or sports injuries.",
    },
    {
      icon: "🔵",
      title: "Shoulder Arthritis",
      description:
        "Degeneration of the shoulder joint causing chronic pain, stiffness and reduced movement.",
    },
    {
      icon: "⚡",
      title: "Shoulder Impingement",
      description:
        "Compression of shoulder tendons leading to pain while raising the arm and overhead activities.",
    },
    {
      icon: "🩻",
      title: "Proximal Humerus Fracture",
      description:
        "Fracture around the shoulder requiring expert evaluation and appropriate surgical or non-surgical treatment.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "0 20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          Common Shoulder Conditions
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            color: "#666",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          We provide comprehensive diagnosis and evidence-based treatment for a
          wide range of shoulder disorders using the latest orthopaedic
          techniques.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {conditions.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "0.3s",
              border: "1px solid #eef2f7",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                background: "#E8F4FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "38px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#0B3C5D",
                marginBottom: "15px",
                fontSize: "24px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "16px",
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
