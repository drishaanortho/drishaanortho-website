import Link from "next/link";

export default function Conditions() {
  const conditions = [
    {
      icon: "💪",
      title: "Shoulder Disorders",
      description:
        "Frozen shoulder, rotator cuff tears, instability and shoulder pain.",
      link: "/shoulder",
    },
    {
      icon: "🦵",
      title: "Knee Disorders",
      description:
        "Arthritis, ligament injuries, meniscus tears and knee pain.",
      link: "/knee",
    },
    {
      icon: "🦴",
      title: "Fracture & Trauma",
      description:
        "Comprehensive management of simple and complex fractures.",
      link: "/fracture-management",
    },
    {
      icon: "🏃",
      title: "Sports Injuries",
      description:
        "ACL, meniscus, ligament and muscle injuries.",
      link: "/sports-injuries",
    },
    {
      icon: "🩻",
      title: "Spine Disorders",
      description:
        "Neck pain, back pain, slipped disc and spinal problems.",
      link: "/spine",
    },
    {
      icon: "🦿",
      title: "Joint Replacement",
      description:
        "Hip and knee replacement for advanced arthritis.",
      link: "/joint-replacement",
    },
    {
      icon: "👣",
      title: "Foot & Ankle",
      description:
        "Heel pain, ankle injuries, deformities and fractures.",
      link: "/foot-ankle",
    },
    {
      icon: "✋",
      title: "Hand & Wrist",
      description:
        "Carpal tunnel syndrome, tendon injuries and fractures.",
      link: "/hand-wrist",
    },
    {
      icon: "🧒",
      title: "Pediatric Orthopaedics & CTEV",
      description:
        "Congenital deformities, CTEV and children's bone disorders.",
      link: "/pediatric-orthopaedics",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Conditions We Treat
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: "30px",
          }}
        >
          Comprehensive diagnosis and treatment for a wide range of orthopaedic
          conditions using modern evidence-based techniques.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {conditions.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#F8FBFF",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  transition: "0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                  border: "1px solid #E5EEF8",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "15px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: "#0B3C5D",
                    marginBottom: "12px",
                    fontSize: "22px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "28px",
                    minHeight: "84px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    background: "#0B3C5D",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "30px",
                    fontWeight: "600",
                  }}
                >
                  Explore Treatment →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
