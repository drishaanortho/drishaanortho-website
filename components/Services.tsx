export default function Services() {
  const services = [
    {
      icon: "🦴",
      title: "Fracture Management",
      description:
        "Expert treatment for simple and complex fractures using modern techniques.",
    },
    {
      icon: "🏥",
      title: "Joint Replacement",
      description:
        "Advanced hip and knee replacement surgery for pain-free mobility.",
    },
    {
      icon: "⚽",
      title: "Sports Injuries",
      description:
        "Comprehensive care for ligament injuries, arthroscopy and sports rehabilitation.",
    },
    {
      icon: "💪",
      title: "Shoulder Surgery",
      description:
        "Specialized treatment for shoulder instability, rotator cuff tears and advanced shoulder procedures.",
    },
    {
      icon: "🩻",
      title: "Spine Disorders",
      description:
        "Evaluation and treatment of neck pain, back pain and spinal conditions.",
    },
    {
      icon: "🚑",
      title: "Trauma Care",
      description:
        "24×7 emergency management of orthopedic trauma and accident injuries.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "#F8FBFF",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "40px",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            width: "90px",
            height: "5px",
            background: "#25D366",
            borderRadius: "50px",
            margin: "0 auto 50px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "30px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                borderTop: "5px solid #25D366",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "18px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "#0B3C5D",
                  fontSize: "24px",
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "30px",
                  fontSize: "17px",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
