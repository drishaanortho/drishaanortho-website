export default function Testimonials() {
  const reviews = [
    {
      name: "Verified Patient",
      review:
        "Dr. Ishaan Meena explained my condition in detail and guided me through every step of my treatment. His approach was professional, caring and reassuring.",
    },
    {
      name: "Patient",
      review:
        "Excellent experience from consultation to recovery. The staff was supportive and the treatment was well planned. Highly recommended for orthopaedic care.",
    },
    {
      name: "Google Review",
      review:
        "Very knowledgeable and humble doctor. I received clear explanations and the treatment helped me recover much faster than expected.",
    },
  ];

  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            letterSpacing: "3px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          PATIENT TESTIMONIALS
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "46px",
            fontWeight: 800,
            marginBottom: "15px",
          }}
        >
          What Our Patients Say
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "750px",
            margin: "0 auto 50px",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Patient satisfaction is our greatest achievement. Every review
          reflects our commitment to compassionate care and excellent clinical
          outcomes.
        </p>

        {/* Google Rating Card */}
        <div
          style={{
            background: "#F8FBFF",
            borderRadius: "24px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
            marginBottom: "50px",
          }}
        >
          <div style={{ fontSize: "42px" }}>★★★★★</div>

          <h3
            style={{
              color: "#0B3C5D",
              fontSize: "34px",
              margin: "15px 0 10px",
            }}
          >
            5.0 Google Rating
          </h3>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              marginBottom: "25px",
            }}
          >
            Trusted by 100+ Happy Patients
          </p>

          <a
            href="https://maps.app.goo.gl/TqqUAeKrBJVqVREAA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#1976D2",
              color: "#fff",
              padding: "15px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View Google Reviews →
          </a>
        </div>

        {/* Review Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.name}
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
                  color: "#FFD700",
                  fontSize: "24px",
                  marginBottom: "15px",
                }}
              >
                ★★★★★
              </div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "30px",
                  fontSize: "17px",
                  fontStyle: "italic",
                }}
              >
                "{review.review}"
              </p>

              <h4
                style={{
                  color: "#0B3C5D",
                  marginTop: "25px",
                  fontSize: "18px",
                }}
              >
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
