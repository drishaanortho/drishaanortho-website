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
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
{/* HERO SECTION */}
<section
  id="home"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "30px 20px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
      marginBottom: "30px",
    }}
  />

  <h1
    style={{
      fontSize: "52px",
      color: "#0B3C5D",
      marginBottom: "10px",
      marginTop: "0",
    }}
  >
    Dr. Ishaan Meena
  </h1>

  <h2
    style={{
      color: "#333",
      fontSize: "32px",
      marginTop: "0",
      marginBottom: "20px",
    }}
  >
    Orthopaedic & Shoulder Surgeon
  </h2>

  <p
    style={{
      fontSize: "22px",
      maxWidth: "800px",
      marginBottom: "10px",
    }}
  >
    <strong>MS (Orthopaedics)</strong> | Fellowship in Advanced Shoulder Surgery
  </p>

  <p
    style={{
      fontSize: "20px",
      marginBottom: "10px",
    }}
  >
    Assistant Professor, JLN Medical College, Ajmer
  </p>

  <p
    style={{
      fontSize: "18px",
      color: "#555",
      maxWidth: "750px",
      lineHeight: "30px",
      marginBottom: "30px",
    }}
  >
    Dedicated to evidence-based, compassionate and advanced orthopaedic care with expertise in trauma, shoulder surgery, arthroscopy and sports injuries.
  </p>

  <div
    style={{
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      justifyContent: "center",
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
          fontSize: "16px",
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
          fontSize: "16px",
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
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        WhatsApp
      </button>
    </a>
  </div>
</section>

        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
            width: "100%",
maxWidth: "320px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        />
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
          Dr. Ishaan Meena is an Orthopaedic Surgeon with expertise in trauma
          surgery, fracture management, shoulder surgery, arthroscopy, sports
          injuries, joint replacement and spine disorders.
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
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
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
              <h3 style={{ color: "#0B3C5D" }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
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
