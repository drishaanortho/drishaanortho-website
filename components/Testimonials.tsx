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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.name + item.review}
              style={{
                background: "#F8FBFF",
                padding: "30px",
                borderRadius: "22px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "15px" }}>
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "30px",
                  fontSize: "17px",
                }}
              >
                "{item.review}"
              </p>

              <h3
                style={{
                  color: "#0B3C5D",
                  marginTop: "25px",
                }}
              >
                — {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
