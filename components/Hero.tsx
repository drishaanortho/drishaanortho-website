export default function Hero() {
  return (
    <section id="home" style={{maxWidth:"1280px",margin:"20px auto",padding:"110px 32px 80px",background:"linear-gradient(135deg,#0B3C5D 0%,#1565C0 55%,#1E88E5 100%)",borderRadius:"32px",display:"flex",flexWrap:"wrap-reverse",alignItems:"center",justifyContent:"space-between",gap:"48px",color:"#fff",overflow:"hidden",boxShadow:"0 24px 70px rgba(0,0,0,.18)"}}>
      <div style={{flex:1,minWidth:320}}>
        <div style={{display:"inline-block",background:"rgba(255,255,255,.15)",padding:"10px 18px",borderRadius:"999px",fontWeight:700}}>🦴 ORTHOPAEDIC & SHOULDER SURGEON</div>
        <h1 style={{fontSize:"clamp(44px,6vw,68px)",lineHeight:1.05,margin:"22px 0 12px",fontWeight:900}}>Dr. Ishaan Meena</h1>
        <div style={{display:"inline-block",background:"rgba(255,255,255,.14)",padding:"12px 18px",borderRadius:"999px",fontWeight:700}}>🏥 Assistant Professor • JLN Medical College, Ajmer</div>
        <p style={{marginTop:28,fontSize:20,lineHeight:1.8,color:"#EAF6FF",maxWidth:650}}>Comprehensive orthopaedic care for fractures, sports injuries, shoulder surgery, arthroscopy, trauma, spine disorders and joint replacement.</p>
        <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:34}}>
          <a href="https://wa.me/917023562036" style={{textDecoration:"none",background:"#25D366",color:"#fff",padding:"17px 30px",borderRadius:"999px",fontWeight:800}}>Book Appointment</a>
          <a href="tel:+917023562036" style={{textDecoration:"none",background:"#fff",color:"#0B3C5D",padding:"17px 30px",borderRadius:"999px",fontWeight:800}}>Call Now</a>
        </div>
      </div>
      <div style={{flex:1,minWidth:320,display:"flex",justifyContent:"center",position:"relative"}}>
        <img src="/dr-ishaan.jpg" alt="Dr Ishaan Meena" style={{width:"430px",maxWidth:"100%",borderRadius:"28px",border:"8px solid rgba(255,255,255,.95)",boxShadow:"0 35px 80px rgba(0,0,0,.28)"}} />
      </div>
    </section>
  );
}
