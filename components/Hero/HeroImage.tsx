export default function HeroImage() {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "360px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr. Ishaan Meena"
          style={{
            width: "500px",
            maxWidth: "100%",
            borderRadius: "32px",
            border: "10px solid #ffffff",
            boxShadow: "0 35px 80px rgba(0,0,0,.18)",
            display: "block",
          }}
        />

        {/* Google Rating */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "-35px",
            background: "#ffffff",
            padding: "16px 20px",
            borderRadius: "18px",
            boxShadow: "0 12px 30px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              color: "#F4B400",
              fontSize: "18px",
            }}
          >
            ⭐⭐⭐⭐⭐
          </div>

          <div
            style={{
              fontWeight: 800,
              fontSize: "22px",
              color: "#0B3C5D",
            }}
          >
            5.0
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Google Rating
          </div>
        </div>

        {/* Patients */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "-35px",
            background: "#ffffff",
            padding: "16px 20px",
            borderRadius: "18px",
            boxShadow: "0 12px 30px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: "24px",
              color: "#0B3C5D",
            }}
          >
            5000+
          </div>

          <div
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Patients Treated
          </div>
        </div>
      </div>
    </div>
  );
}
