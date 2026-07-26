export default function ShoulderConditions() {
  const conditions = [
    {
      title: "Frozen Shoulder",
      description:
        "Pain and stiffness causing restricted shoulder movements.",
    },
    {
      title: "Rotator Cuff Tear",
      description:
        "Damage to the shoulder tendons leading to pain and weakness.",
    },
    {
      title: "Shoulder Dislocation",
      description:
        "The shoulder joint comes out of its normal position after injury.",
    },
    {
      title: "Shoulder Arthritis",
      description:
        "Wear and tear of the shoulder joint causing pain and reduced mobility.",
    },
    {
      title: "Shoulder Impingement",
      description:
        "Compression of tendons resulting in pain while lifting the arm.",
    },
    {
      title: "Proximal Humerus Fracture",
      description:
        "Fracture around the shoulder requiring expert trauma management.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          marginBottom: "40px",
          fontSize: "36px",
        }}
      >
        Common Shoulder Conditions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {conditions.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ color: "#1E88E5", marginBottom: "10px" }}>
              {item.title}
            </h3>

            <p style={{ lineHeight: 1.7 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
