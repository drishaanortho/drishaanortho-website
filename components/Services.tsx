export default function Services() {
  const services = [
    {
      icon: "🦴",
      title: "Fracture & Trauma Care",
      description:
        "Comprehensive management of simple, complex and neglected fractures using modern surgical and non-surgical techniques.",
    },
    {
      icon: "🦵",
      title: "Joint Replacement",
      description:
        "Advanced knee and hip replacement surgery focused on pain relief, improved mobility and faster recovery.",
    },
    {
      icon: "🏃",
      title: "Sports Injury & Arthroscopy",
      description:
        "Expert treatment for ACL, meniscus, ligament, cartilage and sports injuries using minimally invasive arthroscopy.",
    },
    {
      icon: "💪",
      title: "Shoulder Surgery",
      description:
        "Specialized care for rotator cuff tears, shoulder instability, frozen shoulder and recurrent dislocation.",
    },
    {
      icon: "🩻",
      title: "Spine Disorders",
      description:
        "Evaluation and treatment of neck pain, back pain, disc problems, sciatica and other spinal conditions.",
    },
    {
      icon: "👶",
      title: "Paediatric Orthopaedics",
      description:
        "Management of congenital deformities, CTEV, limb deformities and children's orthopaedic conditions.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 100%)",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#1E88E5",
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          SPECIALIZED ORTHOPAEDIC CARE
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "15px",
          }}
        >
          Orthopaedic Services
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 60px",
            color: "#666",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Comprehensive orthopaedic care using evidence-based treatment,
          modern surgical techniques and personalised rehabilitation.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
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
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                border: "1px solid #E8EEF5",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#0B3C5D,#1E88E5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "34px",
                  marginBottom: "25px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "#0B3C5D",
                  fontSize: "24px",
                  marginBottom: "15px",
                  fontWeight: 700,
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
