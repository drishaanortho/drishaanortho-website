export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0B3C5D",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        Contact Us
      </h2>

      <p
        style={{
          fontSize: "20px",
          color: "#D9EAFF",
          marginBottom: "40px",
        }}
      >
        We're here to help. Reach out or visit our clinic.
      </p>

      <p style={{ fontSize: "20px", lineHeight: "36px" }}>
        📍 Shiv Enclave Apartments, Near Ajmer Hospital &
        <br />
        Savitri School, Civil Lines, Ajmer
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <a
          href="https://maps.app.goo.gl/qjqj22wTr6N7DtpS6"
          target="_blank"
          style={{
            background: "white",
            color: "#0B3C5D",
            padding: "12px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🗺 Get Directions
        </a>

        <a
          href="https://wa.me/917023562036"
          target="_blank"
          style={{
            background: "#25D366",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 WhatsApp
        </a>
      </div>

      <p style={{ fontSize: "20px" }}>
        📞 +91 70235 62036
      </p>

      <p style={{ fontSize: "20px" }}>
        🕒 3:00 PM – 8:00 PM (Every Day)
      </p>

      <p style={{ fontSize: "20px" }}>
        ✉ dr.ishaanmeena@gmail.com
      </p>
    </section>
  );
}
