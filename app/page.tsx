import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
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
<Hero />
<About />
<WhyChooseUs />
        {/* WHY CHOOSE US */}

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
        <h2
  style={{
    fontSize: "42px",
    marginBottom: "15px",
    fontWeight: "700",
  }}
>
  Contact Us
</h2>

<p
  style={{
    fontSize: "20px",
    color: "#D9EAF7",
    marginBottom: "40px",
  }}
>
  We're here to help you. Reach out or visit our clinic.
</p>

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
        <a
  href="https://wa.me/917023562036"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginLeft: "15px",
    marginTop: "15px",
    marginBottom: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 24px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  💬 WhatsApp
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
