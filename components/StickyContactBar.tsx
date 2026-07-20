export default function StickyContactBar() {
  return (
    <div
        style={{
  position: "fixed",
  bottom: "15px",
  left: "15px",
  right: "15px",
  display: "flex",
  zIndex: 9999,
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
}}
    >
      <a
        href="tel:+917023562036"
        style={{
          flex: 1,
          background: "#0B5ED7",
          color: "white",
          textAlign: "center",
          padding: "16px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/917023562036"
        target="_blank"
        style={{
          flex: 1,
          background: "#25D366",
          color: "white",
          textAlign: "center",
          padding: "14px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
