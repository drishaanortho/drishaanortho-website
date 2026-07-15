export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif",padding:"40px",maxWidth:"1100px",margin:"0 auto"}}>
      <section style={{display:"flex",flexWrap:"wrap",gap:"30px",alignItems:"center"}}>
        <img src="/dr-ishaan.jpg" alt="Dr Ishaan Meena" style={{width:"280px",borderRadius:"16px"}} />
        <div>
          <h1>Dr. Ishaan Meena</h1>
          <h2>Orthopaedic & Shoulder Surgeon</h2>
          <p><strong>MS (Orthopaedics)</strong> | Fellowship in Advanced Shoulder Surgery</p>
          <p>Assistant Professor, JLN Medical College, Ajmer</p>
          <p>📍 Shiv Enclave Apartments, Near Ajmer Hospital & Savitri School, Civil Lines, Ajmer</p>
          <p>🕒 Clinic Timing: 3:00 PM – 8:00 PM (Every Day)</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"16px"}}>
            <a href="/appointment"><button>Book Appointment</button></a>
            <a href="tel:+917023562036"><button>Call Now</button></a>
            <a href="https://wa.me/917023562036"><button>WhatsApp</button></a>
          </div>
        </div>
      </section>
      <hr style={{margin:"40px 0"}} />
      <section><h2>About Dr. Ishaan Meena</h2><p>Dr. Ishaan Meena is an Orthopaedic Surgeon with expertise in trauma, fracture management, shoulder surgery, arthroscopy, sports injuries, joint replacement and spine disorders.</p></section>
      <section style={{marginTop:"40px"}}><h2>Our Services</h2><ul><li>Trauma & Fracture Care</li><li>Shoulder Surgery</li><li>Arthroscopy</li><li>Sports Injury Treatment</li><li>Joint Replacement</li><li>Spine Disorders</li><li>CTEV & Pediatric Orthopaedics</li><li>Arthritis, Malunion & Nonunion</li></ul></section>
      <section style={{marginTop:"40px"}}><h2>Contact</h2><p>📞 +91 7023562036</p><p>📧 dr.ishaanmeena@gmail.com</p><p><a href="https://maps.app.goo.gl/aPpDrVNk3fE9bckU6">View Clinic on Google Maps</a></p></section>
    </main>
  );
}
