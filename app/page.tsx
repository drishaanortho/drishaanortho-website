import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import PatientJourney from "../components/PatientJourney";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StickyContactBar from "../components/StickyContactBar";
import FAQ from "../components/FAQ";
import AppointmentForm from "../components/AppointmentForm";
import Contact from "../components/Contact";
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
      <PatientJourney />

<div id="reviews">
  <Testimonials />
  
</div>
<FAQ />
      <AppointmentForm />
      <Contact />
     <Footer />
      <StickyContactBar />
    </main>
  );
}
