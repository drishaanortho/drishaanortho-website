export default function HeroButtons() {
  return (
    <div style={{ marginTop: "35px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <a
          href="https://wa.me/917023562036"
          style={{
            background: "linear-gradient(135deg,#0B3C5D,#1976D2)",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "17px",
            boxShadow: "0 12px 30px rgba(25,118,210,.25)",
          }}
        >
          Book Appointment
        </a>

        <a
          href="tel:+917023562036"
          style={{
            background: "#fff",
            color: "#0B3C5D",
            padding: "16px 32px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "17px",
            border: "2px solid #0B3C5D",
          }}
        >
          Call Now
        </a>
      </div>

      <div
        style={{
          marginTop: "28px",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#F8FBFF",
          border: "1px solid #DCEBFA",
          padding: "12px 18px",
          borderRadius: "999px",
        }}
      >
        <span style={{ fontSize: "22px" }}>⭐⭐⭐⭐⭐</span>

        <span
          style={{
            color: "#0B3C5D",
            fontWeight: 700,
          }}
        >
          5.0 Google Rating
        </span>
      </div>

      <div
        style={{
          marginTop: "28px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {[
          "Shoulder Surgery",
          "Arthroscopy",
          "Joint Replacement",
          "Trauma Care",
        ].map((item) => (
          <span
            key={item}
            style={{
              background: "#EEF6FF",
              color: "#0B3C5D",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "15px",
              border: "1px solid #D8E9FA",
            }}
          >
            ✓ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
