export default function Footer() {
  return (
    <footer
      style={{
        background: "#0B3C5D",
        color: "#ffffff",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Clinic Information */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "18px",
              color: "#ffffff",
            }}
          >
            Dr. Ishaan Meena
          </h2>

          <p style={{ color: "#D9E6F2", lineHeight: "30px" }}>
            <strong>Orthopaedic Surgeon</strong>
            <br />
            MBBS | MS (Orthopaedics)
            <br />
            Fellowship in Advanced Shoulder Surgery
            <br />
            Assistant Professor,
            <br />
            JLN Medical College, Ajmer
          </p>

          <p
            style={{
              marginTop: "20px",
              color: "#D9E6F2",
              lineHeight: "30px",
            }}
          >
            Providing trusted orthopaedic care with compassion,
            advanced treatment and excellence.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Contact
          </h3>

          <p style={{ lineHeight: "32px" }}>
            📞{" "}
            <a
              href="tel:+917023562036"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              +91 70235 62036
            </a>
          </p>

          <p style={{ lineHeight: "32px" }}>
            📧{" "}
            <a
              href="mailto:dr.ishaanmeena@gmail.com"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              dr.ishaanmeena@gmail.com
            </a>
          </p>

          <p
            style={{
              lineHeight: "30px",
              marginTop: "10px",
            }}
          >
            📍 Shiv Enclave Apartments,
            <br />
            Near Ajmer Hospital &
            <br />
            Savitri School,
            <br />
            Civil Lines, Ajmer
          </p>

          <p
            style={{
              marginTop: "15px",
            }}
          >
            🕒 Daily: 3:00 PM – 8:00 PM
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Quick Links
          </h3>

          <p style={{ lineHeight: "34px" }}>Home</p>
          <p style={{ lineHeight: "34px" }}>About</p>
          <p style={{ lineHeight: "34px" }}>Services</p>
          <p style={{ lineHeight: "34px" }}>Google Reviews</p>
          <p style={{ lineHeight: "34px" }}>Contact</p>
        </div>

        {/* Connect */}
        <div>
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "22px",
            }}
          >
            Connect
          </h3>

          <p style={{ lineHeight: "34px" }}>
            📷 Instagram
          </p>

          <p style={{ lineHeight: "34px" }}>
            💼 LinkedIn
          </p>

          <p style={{ lineHeight: "34px" }}>
            ⭐ Google Reviews
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          padding: "20px",
          textAlign: "center",
          color: "#D9E6F2",
          fontSize: "15px",
        }}
      >
        © 2026 Dr. Ishaan Meena Orthopaedic Clinic. All Rights Reserved.
        <br />
        Providing trusted orthopaedic care with compassion and excellence.
      </div>
    </footer>
  );
}
