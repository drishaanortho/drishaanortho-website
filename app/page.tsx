export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0B3C5D,#1E88E5)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1 style={{fontSize:"55px"}}>Dr. Ishaan Meena</h1>

        <h2>Orthopaedic Surgeon</h2>

        <p style={{fontSize:"22px"}}>
          MBBS • MS Orthopaedics
          <br/>
          Fellowship in Advanced Shoulder Surgery
          <br/>
          Assistant Professor
          <br/>
          JLN Medical College, Ajmer
        </p>

        <a
          href="tel:+917023562036"
          style={{
            background:"#FFD700",
            color:"#000",
            padding:"18px 35px",
            borderRadius:"10px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Book Appointment
        </a>

      </section>

      {/* ABOUT SECTION */}

      <section
        style={{
          padding:"80px 20px",
          background:"#ffffff",
          textAlign:"center"
        }}
      >

        <h2
          style={{
            color:"#0B3C5D",
            fontSize:"42px"
          }}
        >
          About Dr. Ishaan Meena
        </h2>

        <p
          style={{
            maxWidth:"900px",
            margin:"30px auto",
            lineHeight:"34px",
            fontSize:"20px",
            color:"#444"
          }}
        >
          Dr. Ishaan Meena is a dedicated Orthopaedic Surgeon with
          expertise in trauma surgery, fracture management,
          shoulder surgery, arthroscopy, sports injuries,
          joint replacement and spine disorders.

          <br/><br/>

          He serves as Assistant Professor at
          Jawaharlal Nehru Medical College, Ajmer,
          and is committed to providing evidence-based,
          compassionate and advanced orthopaedic care.
        </p>

      </section>

    </main>
  );
}
