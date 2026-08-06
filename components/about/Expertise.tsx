export default function Expertise() {
  const expertise = [
    {
      icon: "🦴",
      title: "Shoulder Surgery",
    },
    {
      icon: "⚽",
      title: "Sports Injuries",
    },
    {
      icon: "🔬",
      title: "Arthroscopy",
    },
    {
      icon: "🦿",
      title: "Joint Replacement",
    },
    {
      icon: "🚑",
      title: "Trauma & Fracture Care",
    },
    {
      icon: "🩺",
      title: "Spine Disorders",
    },
  ];

  return (
    <section style={{ marginTop: "90px" }}>
      <p
        style={{
          textAlign: "center",
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        SPECIALIZED CARE
      </p>

      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "44px",
          fontWeight: 800,
          marginBottom: "55px",
        }}
      >
        Areas of Expertise
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "25px",
        }}
      >
        {expertise.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              borderTop: "5px solid #1976D2",
            }}
          >
            <div
              style={{
                fontSize: "46px",
                marginBottom: "18px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#0B3C5D",
                fontSize: "22px",
                margin: 0,
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
