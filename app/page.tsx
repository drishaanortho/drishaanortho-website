export default function Home() {
  const services = [
    "Trauma & Fracture Care",
    "Shoulder Surgery",
    "Arthroscopy",
    "Sports Injury Treatment",
    "Joint Replacement",
    "Spine Disorders",
    "CTEV & Deformity Correction",
    "Nonunion & Malunion Treatment"
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
          backgroundColor: "#0B3C5D",
          color: "white",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ margin: 0 }}>Dr. Ishaan Meena</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="#about" style={{ color: "white" }}>About</a>
          <a href="#services" style={{ color: "white" }}>Services</a>
          <a href="#contact" style={{ color: "white" }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "20px",
          display: "flex",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "320px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "55px",
              color: "#0B3C5D",
              marginBottom: "10px",
            }}
          >
            Dr. Ishaan Meena
          </h1>

          <h2 style={{ color: "#333" }}>
            Orthopaedic & Shoulder Surgeon
          </h2>

          <p style={{ fontSize: "20px" }}>
            <strong>MS (Orthopaedics)</strong> |
            Fellowship in Advanced Shoulder Surgery
          </p>

          <p style={{ fontSize: "18px" }}>
            Assistant Professor, JLN Medical College, Ajmer
          </p>

          <p style={{ fontSize: "18px" }}>
            Dedicated to evidence-based and compassionate orthopaedic care.
          </p>
            <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <a href="/appointment">
              <button
                style={{
                  backgroundColor: "#0B3C5D",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "none",
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
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                Call Now
              </button>
            </a>

            <a href="https://wa.me/917023562036">
              <button
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "40px",
          }}
        >
          About Dr. Ishaan Meena
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
            color: "#444",
          }}
        >
          Dr. Ishaan Meena is an Orthopaedic Surgeon with expertise in
          trauma surgery, fracture management, shoulder surgery,
          arthroscopy, sports injuries, joint replacement and spine
          disorders.
        </p>
      </section>

      {/* SERVICES SECTION */}

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
            fontSize: "40px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "40px auto",
          }}
        >
          {services.map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "#eef4ff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#0B3C5D" }}>
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>       {/* CONTACT SECTION */}

      <section
        id="contact"
        style={{
          backgroundColor: "#0B3C5D",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          Contact
        </h2>

        <p style={{ fontSize: "20px" }}>
          📍 Shiv Enclave Apartments, Near Ajmer Hospital &
          Savitri School, Civil Lines, Ajmer
        </p>

        <p style={{ fontSize: "20px" }}>
          📞 +91 70235 62036
        </p>

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
          © {new Date().getFullYear()} Dr. Ishaan Meena |
          Orthopaedic & Shoulder Surgeon
        </p>
      </footer>
    </main>
  );
}
