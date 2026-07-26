export default function ShoulderConsult() {
  const points = [
    "Persistent shoulder pain lasting more than 2 weeks",
    "Difficulty lifting your arm",
    "Pain disturbing your sleep",
    "Shoulder dislocation after injury",
    "Weakness after a fall or sports injury",
    "Swelling or deformity around the shoulder",
    "Suspected fracture",
    "Restricted shoulder movements affecting daily activities",
  ];

  return (
    <section
      style={{
        background: "#0B3C5D",
        color: "white",
        padding: "70px 20px",
        marginTop: "70px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          When Should You Consult an Orthopaedic Surgeon?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "18px",
            marginTop: "40px",
          }}
        >
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              ✅ {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
