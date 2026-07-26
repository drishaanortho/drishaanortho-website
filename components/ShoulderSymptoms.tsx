export default function ShoulderSymptoms() {
  const symptoms = [
    "Pain while lifting or moving the arm",
    "Difficulty reaching overhead",
    "Shoulder stiffness and reduced range of motion",
    "Night pain while sleeping on the affected side",
    "Weakness in the shoulder or arm",
    "Clicking, popping, or grinding sensation",
    "Swelling after an injury",
    "Feeling that the shoulder may slip out of place",
  ];

  return (
    <section
      style={{
        background: "#f8fbff",
        padding: "70px 20px",
        marginTop: "50px",
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
            fontSize: "38px",
            marginBottom: "15px",
          }}
        >
          Common Symptoms
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
          }}
        >
          Shoulder disorders may present with one or more of the following
          symptoms:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "18px",
          }}
        >
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "18px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>✅</span>

              <span
                style={{
                  fontSize: "17px",
                  lineHeight: "1.6",
                }}
              >
                {symptom}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
