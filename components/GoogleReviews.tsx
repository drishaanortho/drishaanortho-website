export default function GoogleReviews() {
  return (
    <section
  style={{
    background: "#ffffff",
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#0B5ED7", fontSize: "32px" }}>
    ⭐ 5.0 Rated on Google
  </h2>

  <p style={{ fontSize: "20px", marginTop: "10px" }}>
    Trusted by <strong>100+ Patients</strong>
  </p>

  <p style={{ fontSize: "18px", color: "#666" }}>
    ⭐⭐⭐⭐⭐ 5.0 (101 Google Reviews)
  </p>

  <div
    style={{
      marginTop: "25px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="YOUR_GOOGLE_REVIEW_LINK"
      target="_blank"
      style={{
        background: "#0B5ED7",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Read Google Reviews
    </a>

    <a
      href="https://maps.google.com/?q=Dr+Ishaan+Meena+Ajmer"
      target="_blank"
      style={{
        background: "#28A745",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Get Directions
    </a>
  </div>
</section>
      );
}
