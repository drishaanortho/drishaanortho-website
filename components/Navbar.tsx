export default function Navbar() {
  return (
    <nav
      style={{
        background: "#0f766e",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Dr. Ishaan Meena</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/services" style={{ color: "white", textDecoration: "none" }}>
          Services
        </a>

        <a href="/gallery" style={{ color: "white", textDecoration: "none" }}>
          Gallery
        </a>

        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>

        <a href="/appointment" style={{ color: "white", textDecoration: "none" }}>
          Appointment
        </a>
      </div>
    </nav>
  );
}
