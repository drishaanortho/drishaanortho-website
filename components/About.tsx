export default function About() {
  return (
    <section id="about" style={{maxWidth:"1200px",margin:"70px auto",padding:"70px 30px",background:"#fff",borderRadius:"30px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))",gap:"50px",alignItems:"center"}}>
        <div style={{textAlign:"center"}}>
          <img src="/dr-ishaan.jpg" alt="Dr. Ishaan Meena" style={{width:"100%",maxWidth:"420px",borderRadius:"28px",boxShadow:"0 25px 60px rgba(11,60,93,.18)",border:"8px solid white"}} />
        </div>
        <div>
          <p style={{color:"#1976D2",fontWeight:700,letterSpacing:"2px",marginBottom:"12px"}}>ABOUT DR. ISHAAN MEENA</p>
          <h2 style={{fontSize:"44px",color:"#0B3C5D",margin:0}}>Trusted Orthopaedic Care</h2>
          <p style={{marginTop:"24px",lineHeight:"32px",color:"#555",fontSize:"18px"}}>
            Dr. Ishaan Meena is an Orthopaedic Surgeon and Assistant Professor in the Department of Orthopaedics, Jawaharlal Nehru Medical College, Ajmer. He completed MBBS, MS (Orthopaedics) and Fellowship in Advanced Shoulder Surgery. His practice focuses on evidence-based, patient-centred care for trauma, shoulder disorders, sports injuries, arthroscopy, joint replacement and spine conditions.
          </p>
          <div style={{marginTop:"28px"}}>
            <p><strong>Qualifications</strong></p>
            <p>• MBBS</p>
            <p>• MS (Orthopaedics)</p>
            <p>• Fellowship in Advanced Shoulder Surgery</p>
          </div>
          <div style={{marginTop:"24px"}}>
            <p><strong>Areas of Expertise</strong></p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"12px",marginTop:"12px"}}>
              {["Shoulder Surgery","Sports Injuries","Arthroscopy","Joint Replacement","Trauma Care","Spine Disorders"].map((item)=>(
                <span key={item} style={{background:"#EEF6FF",color:"#0B3C5D",padding:"10px 16px",borderRadius:"999px",fontWeight:600}}>{item}</span>
              ))}
            </div>
          </div>
          <a href="#contact" style={{display:"inline-block",marginTop:"35px",background:"#0B3C5D",color:"white",padding:"14px 28px",borderRadius:"999px",textDecoration:"none",fontWeight:700}}>Book Consultation</a>
        </div>
      </div>
    </section>
  );
}
