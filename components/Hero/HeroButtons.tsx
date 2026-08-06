export default function HeroButtons() {
  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://wa.me/917023562036"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#0B5ED7",
            color: "#fff",
            padding: "16px 34px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "17px",
            boxShadow: "0 10px 25px rgba(11,94,215,.25)",
          }}
        >
          Book Appointment
        </a>

        <a
          href="tel:+917023562036"
          style={{
            background: "#fff",
            color: "#0B3C5D",
            padding: "16px 34px",
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
          gap: "12px",
          background: "#fff",
          padding: "14px 22px",
          borderRadius: "999px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        }}
      >
        <span style={{ fontSize: "22px" }}>⭐⭐⭐⭐⭐</span>

        <div>
          <div
            style={{
              color: "#0B3C5D",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            5.0 Google Rating
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Trusted by 100+ Patients
          </div>
        </div>
      </div>
    </div>
  );
}
