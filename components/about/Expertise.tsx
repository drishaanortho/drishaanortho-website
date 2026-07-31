export default function Expertise() {
  const items = [
    "Shoulder Surgery",
    "Sports Injuries",
    "Arthroscopy",
    "Joint Replacement",
    "Trauma & Fracture Care",
    "Spine Disorders",
  ];

  return (
    <section style={{ marginTop: "55px" }}>
      <h3
        style={{
          fontSize: "34px",
          color: "#0B3C5D",
          marginBottom: "28px",
          textAlign: "center",
        }}
      >
        Areas of Expertise
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              background: "#0B3C5D",
              color: "#fff",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "16px",
              boxShadow: "0 12px 25px rgba(11,60,93,.15)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
