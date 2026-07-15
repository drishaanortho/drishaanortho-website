export default function Home() {
  const services = [
    "Trauma & Fracture Care",
    "Shoulder Surgery",
    "Arthroscopy",
    "Sports Injury Treatment",
    "Joint Replacement",
    "Spine Disorders",
    "CTEV & Deformity Correction",
    "Nonunion & Malunion Treatment",
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f8fc",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-around",
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <a href="#home" style={{ textDecoration: "none", color: "#0B3C5D" }}>
          Home
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "#0B3C5D" }}>
          About
        </a>
        <a
          href="#services"
          style={{ textDecoration: "none", color: "#0B3C5D" }}
        >
          Services
        </a>
        <a
          href="#contact"
          style={{ textDecoration: "none", color: "#0B3C5D" }}
        >
          Contact
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 20px 50px",
          textAlign: "center",
        }}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            marginBottom: "15px",
          }}
        />

        <h1
          style={{
            fontSize: "42px",
            color: "#0B3C5D",
            marginBottom: "10px",
          }}
        >
          Dr. Ishaan Meena
        </h1>

      <h2
  style={{
    color: "#333",
    fontSize: "24px",
    marginTop: "10px",
    marginBottom: "20px",
  }}
>
  Orthopaedic & Shoulder Surgeon
</h2>

        <p style={{ fontSize: "22px" }}>
          <strong>MS (Orthopaedics)</strong> | Fellowship in Advanced Shoulder
          Surgery
        </p>

        <p style={{ fontSize: "20px" }}>
          Assistant Professor, JLN Medical College, Ajmer
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "750px",
            margin: "20px auto",
            lineHeight: "30px",
          }}
        >
          Dedicated to evidence-based, compassionate and advanced orthopaedic
          care with expertise in trauma surgery, shoulder surgery,
          arthroscopy, sports injuries and joint replacement.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <a href="/appointment">
            <button
              style={{
                backgroundColor: "#0B3C5D",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Appointment
            </button>
          </a>

          <a href="tel:+917023562036">
            <button
              style={{
                backgroundColor: "#1E88E5",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Call Now
            </button>
          </a>

          <a
            href="https://wa.me/917023562036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "#25D366",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "42px",
            marginBottom: "25px",
          }}
        >
          About Dr. Ishaan Meena
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "36px",
            color: "#444",
          }}
        >
          Dr. Ishaan Meena is an Orthopaedic Surgeon with expertise in trauma
          surgery, fracture management, shoulder surgery, arthroscopy, sports
          injuries, joint replacement, spine disorders, CTEV correction and
          management of nonunion and malunion cases.
        </p>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          backgroundColor: "white",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {services.map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "#eef4ff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  color: "#0B3C5D",
                  margin: 0,
                }}
              >
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          backgroundColor: "#0B3C5D",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>Contact</h2>

        <p style={{ fontSize: "20px", lineHeight: "36px" }}>
          📍 Shiv Enclave Apartments, Near Ajmer Hospital & Savitri School,
          Civil Lines, Ajmer
        </p>

        <p style={{ fontSize: "20px" }}>📞 +91 70235 62036</p>

        <p style={{ fontSize: "20px" }}>
          🕒 3:00 PM – 8:00 PM (Every Day)
        </p>

        <p style={{ fontSize: "20px" }}>
          ✉️ drishaanortho@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#06263B",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>
          © {new Date().getFullYear()} Dr. Ishaan Meena | Orthopaedic &
          Shoulder Surgeon
        </p>
      </footer>
    </main>
  );
}
