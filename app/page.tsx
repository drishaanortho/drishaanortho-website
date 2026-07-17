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
top: "15px",
margin: "0 auto",
width: "95%",
maxWidth: "1200px",
background: "rgba(255,255,255,0.75)",
backdropFilter: "blur(18px)",
borderRadius: "18px",
padding: "16px 24px",
display: "flex",
justifyContent: "space-around",
alignItems: "center",
zIndex: 1000,
boxShadow: "0 10px 30px rgba(11,60,93,0.15)",
border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        <a href="#home" style={{
  textDecoration: "none",
  color: "#0B3C5D",
fontSize: "17px",
fontWeight: "700",
letterSpacing: "0.3px",
padding: "10px 16px",
borderRadius: "12px",
transition: "0.3s",
}}>Home</a>
        <a href="#about" style={{
  textDecoration: "none",
  color: "#0B3C5D",
fontSize: "17px",
fontWeight: "700",
letterSpacing: "0.3px",
padding: "10px 16px",
borderRadius: "12px",
transition: "0.3s",
}}>About</a>
        <a href="#services" style={{
  textDecoration: "none",
  color: "#0B3C5D",
fontSize: "17px",
fontWeight: "700",
letterSpacing: "0.3px",
padding: "10px 16px",
borderRadius: "12px",
transition: "0.3s",
}}>Services</a>
        <a href="#contact" style={{
  textDecoration: "none",
  color: "#0B3C5D",
fontSize: "17px",
fontWeight: "700",
letterSpacing: "0.3px",
padding: "10px 16px",
borderRadius: "12px",
transition: "0.3s",
}}>Contact</a>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
maxWidth: "1250px",
margin: "30px auto",
padding: "70px 30px 90px",
textAlign: "center",
background: "linear-gradient(135deg,#0B3C5D 0%,#1E88E5 100%)",
borderRadius: "30px",
boxShadow: "0 20px 60px rgba(11,60,93,0.25)",
color: "#ffffff",
}}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr Ishaan Meena"
          style={{
  width: "260px",
  height: "260px",
  objectFit: "cover",
  borderRadius: "50%",
  border: "8px solid rgba(255,255,255,0.95)",
  boxShadow: "0 30px 70px rgba(11,60,93,0.35)",
  margin: "0 auto 30px auto",
  display: "block",
}}
        />
 <h1
  style={{
    fontSize: "56px",
    color: "#ffffff",
    fontWeight: "800",
    letterSpacing: "-1px",
    marginBottom: "12px",
    textShadow: "0 2px 8px rgba(11,60,93,0.15)",
  }}
>
          Dr. Ishaan Meena
        </h1>

        <h2
  style={{
    color: "#EAF4FF",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    marginTop: "15px",
    marginBottom: "25px",
  }}
>
          Orthopaedic & Shoulder Surgeon
        </h2>

        <p
  style={{
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "15px",
  }}
>
          <strong>MS (Orthopaedics)</strong> | Fellowship in Advanced Shoulder Surgery
        </p>
<p
  style={{
    fontSize: "21px",
    color: "#D8EAF8",
    fontWeight: "500",
    marginBottom: "18px",
  }}
>
  Assistant Professor, JLN Medical College, Ajmer
</p>

  <p
  style={{
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#0B3C5D",
    padding: "10px 22px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "600",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    marginBottom: "25px",
  }}
>
          OPD Timing: 3:00 PM - 8:00 PM | Monday - Sunday
        </p>

        <p
          style={{
            fontSize: "19px",
            color: "#EAF4FF",
            maxWidth: "820px",
            margin: "25px auto",
            lineHeight: "36px",
          }}
        >
          Dedicated to evidence-based, compassionate and advanced orthopaedic care
          with expertise in trauma surgery, shoulder surgery, arthroscopy, sports
          injuries and joint replacement.
        </p>

        <div
style={{
display: "flex",
gap: "20px",
flexWrap: "wrap",
justifyContent: "center",
marginTop: "35px",
marginBottom: "60px",
}}
>
          <a
            href="https://wa.me/917023562036?text=Hello%20Dr.%20Ishaan%20Meena,%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{
  backgroundColor: "#0B3C5D",
  color: "white",
  padding: "18px 40px",
  borderRadius: "999px",
  border: "none",
  fontSize: "19px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(11,60,93,0.30)",
}}>
              Book Appointment
            </button>
          </a>

          <a href="tel:+917023562036">
            <button style={{
  backgroundColor: "#1E88E5",
  color: "white",
  padding: "18px 40px",
  borderRadius: "999px",
  border: "none",
  fontSize: "19px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(30,136,229,0.30)",
}}>
              Call Now
            </button>
          </a>

          <a href="https://wa.me/917023562036" target="_blank" rel="noopener noreferrer">
            <button style={{
  backgroundColor: "#25D366",
  color: "white",
  padding: "18px 40px",
  borderRadius: "999px",
  border: "none",
  fontSize: "19px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(37,211,102,0.30)",
}}>
              WhatsApp
            </button>
          </a>
        </div>
      </section>

      <section id="about" style={{ maxWidth: "1000px", margin: "auto", padding: "30px 20px" }}>
        <h2 style={{ color: "#0B3C5D", fontSize: "34px", marginBottom: "25px" }}>
          About Dr. Ishaan Meena
        </h2>

        <p style={{ fontSize: "20px", lineHeight: "36px", color: "#444" }}>
          Dr. Ishaan Meena is an Orthopaedic and Shoulder Surgeon specializing in
          trauma care, shoulder surgery, arthroscopy, sports injuries, joint
          replacement, spine disorders, deformity correction, and complex fracture
          management.
        </p>
      </section>

        {/* WHY CHOOSE US */}
<section
  style={{
    maxWidth: "1100px",
    margin: "auto",
    padding: "50px 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#0B3C5D",
      fontSize: "30px",
      marginBottom: "40px",
    }}
  >
    Why Choose Dr. Ishaan Meena?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3>🎓 Fellowship Trained</h3>
      <p>Advanced Fellowship in Shoulder Surgery.</p>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3>🏥 Academic Excellence</h3>
      <p>Assistant Professor at JLN Medical College, Ajmer.</p>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3>🦴 Specialized Expertise</h3>
      <p>Focused care in shoulder surgery, trauma and arthroscopy.</p>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3>🤝 Patient-Centered Care</h3>
      <p>Evidence-based treatment tailored for every patient.</p>
    </div>
  </div>
</section>
      {/* STATISTICS SECTION */}
<section
  style={{
    backgroundColor: "white",
    padding: "60px 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#0B3C5D",
      fontSize: "34px",
      marginBottom: "40px",
    }}
  >
    Achievements & Experience
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "auto",
    }}
  >
    <div
      style={{
        backgroundColor: "#f4f8fc",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0B3C5D", fontSize: "40px", margin: 0 }}>
        5000+
      </h2>
      <p>Patients Treated</p>
    </div>

    <div
      style={{
        backgroundColor: "#f4f8fc",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0B3C5D", fontSize: "40px", margin: 0 }}>
        1000+
      </h2>
      <p>Orthopaedic Procedures</p>
    </div>

    <div
      style={{
        backgroundColor: "#f4f8fc",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0B3C5D", fontSize: "40px", margin: 0 }}>
        5+
      </h2>
      <p>Years of Experience</p>
    </div>

    <div
      style={{
        backgroundColor: "#f4f8fc",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0B3C5D", fontSize: "40px", margin: 0 }}>
        24×7
      </h2>
      <p>Emergency Trauma Care</p>
    </div>
  </div>
</section>
      <section id="services" style={{ backgroundColor: "white", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0B3C5D", fontSize: "32px", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "15px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {services.map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "white",
                padding: "10px 18px",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  color: "#0B3C5D",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                🦴 {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

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

        <a
          href="https://maps.app.goo.gl/aPpDrVNk3fE9bckU6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "15px",
            marginBottom: "20px",
            backgroundColor: "white",
            color: "#0B3C5D",
            padding: "12px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Clinic Location
        </a>

        <p style={{ fontSize: "20px" }}>📞 +91 70235 62036</p>
        <p style={{ fontSize: "20px" }}>🕒 3:00 PM – 8:00 PM (Every Day)</p>

        <p style={{ fontSize: "20px" }}>
          ✉️ <a href="mailto:dr.ishaanmeena@gmail.com" style={{ color: "white" }}>
            dr.ishaanmeena@gmail.com
          </a>
        </p>
      </section>

      <footer
        style={{
          backgroundColor: "#06263B",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>© {new Date().getFullYear()} Dr. Ishaan Meena | Orthopaedic & Shoulder Surgeon</p>
      </footer>

      <a
        href="https://wa.me/917023562036"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          fontSize: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        💬
      </a>
    </main>
  );
}
