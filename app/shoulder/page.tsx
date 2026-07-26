export default function ShoulderPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#0B3C5D,#1E88E5)",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Shoulder Disorders
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Comprehensive diagnosis and treatment of shoulder pain, sports
          injuries, fractures, rotator cuff problems, frozen shoulder and
          arthritis by Dr. Ishaan Meena.
        </p>
      </section>

      {/* Introduction */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ color: "#0B3C5D" }}>
          Shoulder Pain Specialist in Ajmer
        </h2>

        <p style={{ lineHeight: 1.8 }}>
          Shoulder pain can affect people of every age. It may develop after an
          injury, sports activity, repetitive work or simply due to ageing.
          Early diagnosis helps restore function, reduce pain and prevent
          long-term stiffness.
        </p>

        <p style={{ lineHeight: 1.8 }}>
          We provide modern evidence-based treatment ranging from medications
          and physiotherapy to minimally invasive arthroscopic surgery and
          shoulder reconstruction whenever required.
        </p>
      </section>
    </main>
  );
}
