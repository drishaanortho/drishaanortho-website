export default function ContactPage() {
  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          marginBottom: "30px",
        }}
      >
        Contact Dr. Ishaan Meena
      </h1>

      <div
        style={{
          background: "#f5f9ff",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2>Dr. Ishaan Meena Orthopaedic Clinic</h2>

        <p><strong>Doctor:</strong> Dr. Ishaan Meena</p>

        <p><strong>Qualifications:</strong> MBBS, MS (Orthopaedics), Fellowship in Advanced Shoulder Surgery</p>

        <p><strong>Phone:</strong> +91 7023562036</p>

        <p><strong>Email:</strong> ishaanshehra@gmail.com</p>

        <p>
          <strong>Address:</strong><br />
          Shiv Enclave, Near Savitri School & RG Academy,<br />
          Civil Lines, Ajmer, Rajasthan – 305001
        </p>

        <p><strong>Clinic Timings:</strong> 3:00 PM – 8:00 PM (Daily)</p>

        <div style={{ marginTop: "25px" }}>
          <a
            href="tel:+917023562036"
            style={{
              background: "#0B3C5D",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              marginRight: "12px",
              textDecoration: "none",
            }}
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917023562036"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
