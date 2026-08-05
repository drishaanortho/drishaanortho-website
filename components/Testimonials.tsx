export default function Testimonials() {
  const testimonials = [
    {
      name: "Verified Patient",
      location: "Ajmer",
      review:
        "Dr. Ishaan Meena explained my condition in detail and guided me through every step of my treatment. His approach was professional, caring and reassuring.",
    },
    {
      name: "Patient",
      location: "Rajasthan",
      review:
        "Excellent experience from consultation to recovery. The staff was supportive and the treatment was well planned. Highly recommended for orthopaedic care.",
    },
    {
      name: "Google Review",
      location: "Verified",
      review:
        "Very knowledgeable, humble and approachable doctor. I am extremely satisfied with the treatment and follow-up care.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          PATIENT TESTIMONIALS
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          What Our Patients Say
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            maxWidth: "760px",
            margin: "0 auto 60px",
            lineHeight: "32px",
            fontSize: "18px",
          }}
        >
          Patient satisfaction is our greatest achievement. Every review reflects
          our commitment to compassionate care and excellent clinical outcomes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.review}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                borderTop: "5px solid #D4AF37",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "30px",
                  fontSize: "17px",
                  fontStyle: "italic",
                }}
              >
                "{item.review}"
              </p>

              <div
                style={{
                  marginTop: "25px",
                  borderTop: "1px solid #E5E7EB",
                  paddingTop: "18px",
                }}
              >
                <h3
                  style={{
                    color: "#0B3C5D",
                    margin: 0,
                    fontSize: "20px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#1976D2",
                    marginTop: "6px",
                    marginBottom: 0,
                    fontWeight: 600,
                  }}
                >
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <a
            href="https://maps.app.goo.gl/TqqUAeKrBJVqVREAA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg,#0B3C5D,#1976D2)",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "18px",
              boxShadow: "0 10px 25px rgba(11,60,93,.25)",
            }}
          >
            Read More Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
