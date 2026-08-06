export default function HeroImage() {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "350px",
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
            border: "10px solid white",
            boxShadow: "0 35px 80px rgba(0,0,0,0.18)",
          }}
        />

        {/* Google Rating Card */}
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "-40px",
            background: "#fff",
            borderRadius: "18px",
            padding: "16px 20px",
            boxShadow: "0 12px 30px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "800",
              color: "#0B3C5D",
            }}
          >
            ⭐ 5.0
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

        {/* Patients Card */}
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            right: "-40px",
            background: "#fff",
            borderRadius: "18px",
            padding: "16px 20px",
            boxShadow: "0 12px 30px rgba(0,0,0,.12)",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "800",
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
