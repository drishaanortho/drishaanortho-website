export default function AboutHeader() {
  const highlights = [
    "Fellowship Trained in Advanced Shoulder Surgery",
    "Assistant Professor, JLN Medical College, Ajmer",
    "Evidence-Based Orthopaedic Care",
    "Personalized Treatment for Every Patient",
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
        gap: "70px",
        alignItems: "center",
      }}
    >
      {/* Left Side */}
      <div style={{ textAlign: "center" }}>
        <img
          src="/dr-ishaan.jpg"
          alt="Dr. Ishaan Meena"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "30px",
            border: "8px solid white",
            boxShadow: "0 30px 80px rgba(11,60,93,.15)",
          }}
        />
      </div>

      {/* Right Side */}
      <div>
        <p
          style={{
            color: "#1976D2",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "14px",
            fontSize: "15px",
          }}
        >
          ABOUT DR. ISHAAN MEENA
        </p>

        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: "1.15",
            margin: 0,
          }}
        >
          Orthopaedic &
          <br />
          Shoulder Surgeon
        </h2>

        <p
          style={{
            marginTop: "24px",
            color: "#555",
            fontSize: "19px",
            lineHeight: "34px",
          }}
        >
          Dr. Ishaan Meena is committed to providing ethical, evidence-based
          orthopaedic care with a patient-first approach. His practice focuses
          on accurate diagnosis, personalized treatment, and restoring mobility
          through modern surgical and non-surgical techniques.
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#555",
            fontSize: "19px",
            lineHeight: "34px",
          }}
        >
          With expertise in shoulder surgery, arthroscopy, trauma care, sports
          injuries, joint replacement and spine disorders, he strives to help
          every patient return to an active and pain-free lifestyle.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "16px",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "#ffffff",
                padding: "16px 18px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,.06)",
              }}
            >
              <span
                style={{
                  color: "#16A34A",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>

              <span
                style={{
                  color: "#0B3C5D",
                  fontWeight: 600,
                  fontSize: "16px",
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
