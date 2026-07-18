export default function Hero() {
  return (
    <section
      id="home"
      style={{
        maxWidth: "1250px",
        margin: "30px auto",
        padding: "70px 30px",
        background:
          "linear-gradient(135deg,#0B3C5D 0%,#1976D2 100%)",
        borderRadius: "30px",
        display: "flex",
        flexWrap: "wrap",
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

        <p
          style={{
            fontSize: "24px",
            marginTop: "18px",
            color: "#EAF4FF",
          }}
        >
          MS (Orthopaedics)
          <br />
          Fellowship in Advanced Shoulder Surgery
        </p>
        <p
  style={{
    fontSize: "18px",
    color: "#D7EFFF",
    marginTop: "10px",
    fontWeight: "600",
  }}
>
  Assistant Professor, JLN Medical College, Ajmer
</p>
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
            width: "320px",
            maxWidth: "100%",
            borderRadius: "25px",
            border: "6px solid white",
            boxShadow: "0 20px 50px rgba(0,0,0,.3)",
          }}
        />
      </div>
    </section>
  );
}
