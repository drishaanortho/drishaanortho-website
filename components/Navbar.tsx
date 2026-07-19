import Image from "next/image";
export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: "15px",
        margin: "0 auto",
        width: "95%",
        maxWidth: "1200px",
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: "18px",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 30px rgba(11,60,93,0.15)",
        border: "1px solid rgba(255,255,255,0.4)",
        zIndex: 1000,
      }}
    >
      <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <Image
    src="/logo.png"
    alt="Dr. Ishaan Meena Orthopaedic Clinic"
    width={55}
    height={55}
  />

  <div>
    <h2
      style={{
        margin: 0,
        color: "#0B3C5D",
        fontSize: "22px",
        fontWeight: "800",
        lineHeight: "1.1",
      }}
    >
      Dr. Ishaan Meena
    </h2>

    <p
      style={{
        margin: 0,
        color: "#666",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      Orthopaedic Clinic
    </p>
  </div>
</div>

      <div
  style={{
    display: "flex",
    gap: "20px",
    alignItems: "center",
  }}
>
  <a href="#home" style={{ textDecoration: "none", color: "#0B3C5D", fontWeight: 600 }}>
    Home
  </a>

  <a href="#about" style={{ textDecoration: "none", color: "#0B3C5D", fontWeight: 600 }}>
    About
  </a>

  <a href="#services" style={{ textDecoration: "none", color: "#0B3C5D", fontWeight: 600 }}>
    Services
  </a>

  <a href="#contact" style={{ textDecoration: "none", color: "#0B3C5D", fontWeight: 600 }}>
    Contact
  </a>
</div>
    </nav>
  );
}
