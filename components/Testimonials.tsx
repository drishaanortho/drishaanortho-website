export default function Testimonials() {
  const testimonials = [
    {
      name: "Patient from Ajmer",
      review:
        "Excellent treatment and clear explanation. I recovered well after my surgery. Highly recommended.",
    },
    {
      name: "Patient from Rajasthan",
      review:
        "Very professional, caring and knowledgeable. The entire treatment process was smooth and reassuring.",
    },
    {
      name: "Patient",
      review:
        "The diagnosis was accurate and the staff was very supportive. Thank you for the excellent care.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          What Our Patients Say
        </h2>

        <div
          style={{
            width: "90px",
            height: "5px",
            background: "#25D366",
            borderRadius: "50px",
            margin: "0 auto 50px",
          }}
        />

       <div
  style={{
    textAlign: "center",
    background: "#F8FBFF",
    padding: "50px 30px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  }}
>
  <div style={{ fontSize: "40px" }}>⭐⭐⭐⭐⭐</div>

  <h3
    style={{
      color: "#0B3C5D",
      fontSize: "30px",
      marginTop: "20px",
    }}
  >
    5.0 ★ Google Rating
  </h3>

  <p
    style={{
      color: "#555",
      fontSize: "18px",
      lineHeight: "30px",
      margin: "20px 0",
    }}
  >
    Read all verified Google reviews from our patients and see why they trust Dr. Ishaan Meena for orthopedic care.
  </p>

  <a
    href="https://maps.app.goo.gl/TqqUAeKrBJVqVREAA"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#2563EB",
      color: "#fff",
      padding: "14px 28px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "700",
    }}
  >
    Read All Google Reviews
  </a>
</div>
      </div>
    </section>
  );
}
