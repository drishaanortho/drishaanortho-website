import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GoogleReviews from "../components/GoogleReviews";
import StickyContactBar from "../components/StickyContactBar";
import FAQ from "../components/FAQ";
import AppointmentForm from "../components/AppointmentForm";
export default function Home() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Ishaan Meena",
  "medicalSpecialty": "Orthopedic",
  "url": "https://drishaanortho.com",
  "telephone": "+91 7023562036",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shiv Enclave Apartments, Near Ajmer Hospital & Savitri School, Civil Lines",
    "addressLocality": "Ajmer",
    "addressRegion": "Rajasthan",
    "postalCode": "305001",
    "addressCountry": "IN"
  }
};
  
  return (
    <main
  id="home"
  style={{
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f8fc",
    minHeight: "100vh",
    scrollBehavior: "smooth",
  }}
>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
      {/* NAVBAR */}
      <Navbar />
<Hero />
      <GoogleReviews />

<div id="about">
  <About />
</div>

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

<div id="services">
  <Services />
</div>
      <Conditions />

<div id="reviews">
  <Testimonials />
  
</div>
<FAQ />
      <AppointmentForm />
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
          href="https://maps.app.goo.gl/qjg22wTr6N7DtpS69"
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
          🗺️ Get Directions
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

        <p style={{ fontSize: "20px" }}>
  <a
    href="tel:+917023562036"
    style={{ color: "white", textDecoration: "none" }}
  >
    📞 +91 70235 62036
  </a>
</p>
        <p style={{ fontSize: "20px" }}>🕒 3:00 PM – 8:00 PM (Every Day)</p>

        <p style={{ fontSize: "20px" }}>
          ✉️ <a href="mailto:dr.ishaanmeena@gmail.com" style={{ color: "white" }}>
            dr.ishaanmeena@gmail.com
          </a>
        </p>
      </section>
      <div
  style={{
    marginTop: "40px",
    borderRadius: "16px",
    overflow: "hidden",
    maxWidth: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  }}
        >
      <iframe
    src="https://www.google.com/maps?q=Dr+Ishaan+Meena+Ajmer&output=embed"
    width="100%"
    height="350"
    style={{ border: 0 }}
    loading="lazy"
  />
</div>

      <Footer />
      <StickyContactBar />
    </main>
  );
}
