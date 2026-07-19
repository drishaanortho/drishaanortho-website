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
      <h2
        style={{
          margin: 0,
          color: "#0B3C5D",
          fontWeight: "800",
          fontSize: "24px",
        }}
      >
        🩺 Dr Ishaan Ortho
      </h2>

      <div>
        Navbar Loading...
      </div>
    </nav>
  );
}
