export default function HeroImage() {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "320px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Main Image */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "36px",
          padding: "12px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        <img
          src="/dr-ishaan.jpg"
          alt="Dr. Ishaan Meena"
          style={{
            width: "420px",
            maxWidth: "100%",
            borderRadius: "28px",
            display: "block",
          }}
        />

        {/* Top Card */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "-35px",
            background: "#fff",
            padding: "14px 18px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              color: "#0B3C5D",
              fontSize: "22px",
            }}
          >
            5000+
          </div>

          <div
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            Happy Patients
          </div>
        </div>

        {/* Bottom Card */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "-35px",
            background: "#fff",
            padding: "14px 18px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              color: "#0B3C5D",
              fontSize: "22px",
            }}
          >
            ★ 5.0
          </div>

          <div
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            Google Rating
          </div>
        </div>
      </div>
    </div>
  );
}
