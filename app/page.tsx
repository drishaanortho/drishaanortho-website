export default function Home() {
  return (
    <main>

      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0B3C5D,#1E88E5)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >

        <h1
          style={{
            fontSize: "55px",
            marginBottom: "10px"
          }}
        >
          Dr. Ishaan Meena
        </h1>

        <h2
          style={{
            fontWeight: "400"
          }}
        >
          Orthopaedic Surgeon
        </h2>

        <br />

        <p
          style={{
            maxWidth: "700px",
            fontSize: "22px",
            lineHeight: "35px"
          }}
        >
          MBBS • MS Orthopaedics
          <br />
          Fellowship in Advanced Shoulder Surgery
          <br />
          Assistant Professor
          <br />
          JLN Medical College, Ajmer
        </p>

        <br />

        <a
          href="tel:+917023562036"
          style={{
            background: "#FFD700",
            color: "#000",
            padding: "18px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
          📞 Book Appointment
        </a>

        <br />

        <a
          href="https://wa.me/917023562036"
          style={{
            color: "white",
            marginTop: "20px",
            fontSize: "18px"
          }}
        >
          💬 Chat on WhatsApp
        </a>

      </section>

    </main>
  );
}
