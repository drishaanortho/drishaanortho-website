export default function Services() {
  const services = [
    {
      icon: "🦴",
      title: "Shoulder Surgery",
      description:
        "Advanced treatment for shoulder pain and instability using modern surgical and minimally invasive techniques.",
      conditions: [
        "Rotator Cuff Tear",
        "Frozen Shoulder",
        "Shoulder Dislocation",
      ],
    },
    {
      icon: "⚽",
      title: "Sports Injuries",
      description:
        "Comprehensive management of ligament, tendon and sports-related injuries for faster recovery.",
      conditions: [
        "ACL Injury",
        "Meniscus Tear",
        "Ligament Injury",
      ],
    },
    {
      icon: "🔬",
      title: "Arthroscopy",
      description:
        "Minimally invasive procedures for accurate diagnosis and treatment of joint disorders.",
      conditions: [
        "Knee Arthroscopy",
        "Shoulder Arthroscopy",
        "Cartilage Injury",
      ],
    },
    {
      icon: "🦿",
      title: "Joint Replacement",
      description:
        "Modern hip and knee replacement surgery focused on restoring mobility and reducing pain.",
      conditions: [
        "Knee Replacement",
        "Hip Replacement",
        "Revision Surgery",
      ],
    },
    {
      icon: "🚑",
      title: "Trauma & Fracture Care",
      description:
        "Expert management of simple and complex fractures with modern fixation techniques.",
      conditions: [
        "Complex Fractures",
        "Accident Injuries",
        "Nonunion & Malunion",
      ],
    },
    {
      icon: "🩺",
      title: "Spine Disorders",
      description:
        "Evaluation and treatment of neck pain, back pain and other spinal conditions.",
      conditions: [
        "Neck Pain",
        "Back Pain",
        "Sciatica",
      ],
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "#F8FBFF",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            letterSpacing: "3px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          EXPERT ORTHOPAEDIC CARE
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "46px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Treatments & Specialities
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 60px",
            color: "#666",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Comprehensive orthopaedic care for fractures, shoulder disorders,
          sports injuries, joint replacement and spine conditions using
          evidence-based treatment.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                borderTop: "5px solid #1976D2",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#0B3C5D,#1976D2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "#0B3C5D",
                  fontSize: "26px",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#64748B",
                  lineHeight: "30px",
                  fontSize: "17px",
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  marginTop: "24px",
                }}
              >
                {service.conditions.map((condition) => (
                  <div
                    key={condition}
                    style={{
                      marginBottom: "10px",
                      color: "#0B3C5D",
                      fontWeight: 600,
                    }}
                  >
                    ✓ {condition}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  color: "#1976D2",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
