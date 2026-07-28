export default function KneePage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "120px 20px 80px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#0B3C5D",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Knee Disorders
      </h1>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "34px",
          color: "#555",
        }}
      >
        Knee pain is one of the most common orthopaedic problems affecting
        people of all ages. It may result from arthritis, ligament injuries,
        meniscus tears, sports injuries, or age-related degeneration. Early
        diagnosis and appropriate treatment help relieve pain, restore mobility,
        and improve quality of life.
      </p>

      <h2
        style={{
          color: "#0B3C5D",
          marginTop: "50px",
        }}
      >
        Common Knee Conditions
      </h2>

      <ul
        style={{
          lineHeight: "34px",
          color: "#555",
          fontSize: "18px",
        }}
      >
        <li>Knee Osteoarthritis</li>
        <li>ACL & PCL Ligament Injuries</li>
        <li>Meniscus Tears</li>
        <li>Patellar Instability</li>
        <li>Sports Injuries</li>
        <li>Knee Fractures</li>
      </ul>

      <h2
        style={{
          color: "#0B3C5D",
          marginTop: "50px",
        }}
      >
        Symptoms
      </h2>

      <ul
        style={{
          lineHeight: "34px",
          color: "#555",
          fontSize: "18px",
        }}
      >
        <li>Knee pain</li>
        <li>Swelling</li>
        <li>Difficulty walking</li>
        <li>Joint stiffness</li>
        <li>Instability or giving way</li>
        <li>Locking or clicking sensation</li>
      </ul>

      <h2
        style={{
          color: "#0B3C5D",
          marginTop: "50px",
        }}
      >
        Treatment Options
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "34px",
          color: "#555",
        }}
      >
        Treatment depends on the underlying condition and may include
        medications, physiotherapy, injections, arthroscopic surgery, ligament
        reconstruction, fracture fixation, or total knee replacement when
        indicated.
      </p>

      <div
        style={{
          marginTop: "60px",
          background: "#0B3C5D",
          color: "white",
          padding: "35px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2>Need Expert Knee Care?</h2>

        <p style={{ lineHeight: "30px" }}>
          Book your consultation with Dr. Ishaan Meena for expert diagnosis and
          personalized treatment of knee disorders.
        </p>

        <a
          href="https://wa.me/917023562036"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#25D366",
            color: "#fff",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: "40px",
            fontWeight: "bold",
          }}
        >
          Book Appointment on WhatsApp
        </a>
      </div>
    </main>
  );
}
