export default function Hero() {
  return (
    <section
      id="home"
      style={{
        maxWidth: "1250px",
        margin: "20px auto",
        padding: "110px 30px 70px",
        background:
          "linear-gradient(135deg,#0B3C5D 0%,#1976D2 100%)",
        borderRadius: "30px",
        display: "flex",
        flexWrap: "wrap-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        color: "white",
        boxShadow: "0 20px 60px rgba(0,0,0,.18)",
      }}
    >
      {/* Left Side */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <p
          style={{
            color: "#BFE4FF",
            fontSize: "18px",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          ORTHOPAEDIC & SHOULDER SURGEON
        </p>

        <h1
          style={{
  fontSize: "58px",
  margin: 0,
  lineHeight: "1.1",
  fontWeight: "800",
  letterSpacing: "-1px",
  color: "white",
}}
        >
          Dr. Ishaan Meena
        </h1>
        <div
  style={{
    display: "inline-block",
    background: "rgba(255,255,255,0.15)",
    padding: "10px 18px",
    borderRadius: "999px",
    marginTop: "12px",
    fontSize: "17px",
    fontWeight: "600",
    color: "#FFFFFF",
  }}
>
  🏥 Assistant Professor • JLN Medical College, Ajmer
</div>
        <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "18px",
  }}
>
  <span
    style={{
      background: "rgba(255,255,255,0.15)",
      padding: "8px 16px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: "600",
    }}
  >
    🎓 MS (Orthopaedics)
  </span>

  <span
    style={{
      background: "rgba(255,255,255,0.15)",
      padding: "8px 16px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: "600",
    }}
  >
    🦴 Advanced Shoulder Fellowship
  </span>
</div>

        <div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "18px",
    marginBottom: "10px",
  }}
>
  <span
    style={{
      background: "rgba(255,255,255,0.18)",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
    }}
  >
    🩺 Orthopaedic Surgeon
  </span>

  <span
    style={{
      background: "rgba(255,255,255,0.18)",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
    }}
  >
    ⭐ Fellowship Trained
  </span>
</div>
        <div
  style={{
    display: "inline-block",
    background: "rgba(255,255,255,0.18)",
    padding: "10px 18px",
    borderRadius: "999px",
    marginTop: "18px",
    fontWeight: "bold",
  }}
>
  🕒 OPD: 3:00 PM – 8:00 PM (Every Day)
</div>
        <p
          style={{
            marginTop: "20px",
            lineHeight: "34px",
            fontSize: "19px",
            color: "#F2F7FB",
          }}
        >
          Advanced care for fractures, shoulder disorders,
          sports injuries, arthroscopy, joint replacement,
          spine disorders and trauma surgery.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/917023562036"
            style={{
              background: "#25D366",
              color: "white",
              padding: "16px 28px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Appointment
          </a>

          <a
            href="tel:+917023562036"
            style={{
              background: "white",
              color: "#0B3C5D",
              padding: "16px 28px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Call Now
          </a>
        </div>
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    textAlign: "center",
    gap: "15px",
  }}
>
  <div>
    <div style={{ fontSize: "26px", fontWeight: "bold" }}>5000+</div>
    <div style={{ color: "#D7EFFF", fontSize: "14px" }}>Patients</div>
  </div>

  <div>
    <div style={{ fontSize: "26px", fontWeight: "bold" }}>1000+</div>
    <div style={{ color: "#D7EFFF", fontSize: "14px" }}>Procedures</div>
  </div>

  <div>
    <div style={{ fontSize: "26px", fontWeight: "bold" }}>5+</div>
    <div style={{ color: "#D7EFFF", fontSize: "14px" }}>Years</div>
  </div>
</div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: "1",
          textAlign: "center",
          minWidth: "280px",
        }}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "380px",
            maxWidth: "100%",
            borderRadius: "35px",
            border: "8px solid rgba(255,255,255,0.95)",
            boxShadow: "0 30px 70px rgba(0,0,0,.35)",
          }}
        />
      </div>
    </section>
  );
}
