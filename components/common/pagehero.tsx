type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#0B3C5D,#1976D2)",
        color: "#fff",
        padding: "140px 20px 90px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            letterSpacing: "3px",
            fontWeight: 700,
            color: "#D4AF37",
            marginBottom: "15px",
          }}
        >
          DR. ISHAAN MEENA
        </p>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "34px",
            color: "#EAF5FF",
            maxWidth: "750px",
            margin: "0 auto 40px",
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+917023562036"
            style={{
              background: "#fff",
              color: "#0B3C5D",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917023562036"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
