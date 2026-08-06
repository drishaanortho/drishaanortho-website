export default function ShoulderSurgeryPage() {
  return (
    <main
      style={{
        background: "#F8FBFF",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
            <section
        style={{
          background: "linear-gradient(135deg,#0B3C5D,#1976D2)",
          color: "white",
          padding: "100px 20px",
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
              color: "#D4AF37",
              letterSpacing: "2px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            ADVANCED SHOULDER CARE
          </p>

          <h1
            style={{
              fontSize: "54px",
              margin: 0,
              fontWeight: 800,
            }}
          >
            Shoulder Surgery
          </h1>

          <p
            style={{
              fontSize: "22px",
              marginTop: "25px",
              maxWidth: "700px",
              lineHeight: "36px",
              color: "#EAF5FF",
            }}
          >
            Expert diagnosis and treatment of shoulder conditions including
            rotator cuff tears, frozen shoulder, shoulder instability,
            arthritis and sports injuries by Dr. Ishaan Meena.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <a
              href="tel:+917023562036"
              style={{
                background: "#fff",
                color: "#0B3C5D",
                padding: "16px 30px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/917023562036"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "16px 30px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
            <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            color: "#0B3C5D",
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Conditions We Treat
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Rotator Cuff Tear",
            "Frozen Shoulder",
            "Shoulder Dislocation",
            "Shoulder Instability",
            "SLAP Tears",
            "Shoulder Arthritis",
            "Shoulder Impingement",
            "Sports Related Shoulder Injuries",
          ].map((condition) => (
            <div
              key={condition}
              style={{
                background: "#fff",
                padding: "28px",
                borderRadius: "20px",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                borderLeft: "5px solid #D4AF37",
                fontWeight: 600,
                color: "#0B3C5D",
                fontSize: "18px",
              }}
            >
              ✓ {condition}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#ffffff",
          padding: "90px 20px",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h2
              style={{
                color: "#0B3C5D",
                fontSize: "36px",
              }}
            >
              Common Symptoms
            </h2>

            <ul
              style={{
                color: "#555",
                lineHeight: "36px",
                fontSize: "18px",
              }}
            >
              <li>Shoulder pain while lifting the arm</li>
              <li>Night pain affecting sleep</li>
              <li>Weakness in the shoulder</li>
              <li>Stiffness and reduced movement</li>
              <li>Clicking or catching sensation</li>
              <li>Difficulty performing daily activities</li>
            </ul>
          </div>

          <div>
            <h2
              style={{
                color: "#0B3C5D",
                fontSize: "36px",
              }}
            >
              Diagnosis
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Every patient undergoes a detailed clinical examination followed
              by appropriate investigations when needed.
            </p>

            <ul
              style={{
                color: "#555",
                lineHeight: "36px",
                fontSize: "18px",
              }}
            >
              <li>Clinical Examination</li>
              <li>Digital X-rays</li>
              <li>MRI Scan</li>
              <li>Ultrasound (selected cases)</li>
              <li>Advanced imaging when required</li>
            </ul>
          </div>
        </div>
      </section>
            <section
        style={{
          background: "#F8FBFF",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#0B3C5D",
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Treatment Options
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                title: "Non-Surgical Treatment",
                text: "Medication, physiotherapy, activity modification and guided rehabilitation for appropriate cases.",
              },
              {
                title: "Arthroscopic Shoulder Surgery",
                text: "Minimally invasive keyhole surgery for rotator cuff tears, instability, labral injuries and impingement.",
              },
              {
                title: "Shoulder Replacement",
                text: "Advanced shoulder replacement surgery for severe arthritis and complex shoulder conditions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#0B3C5D",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "30px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#ffffff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#0B3C5D",
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            Recovery & Rehabilitation
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "34px",
            }}
          >
            Recovery depends on the type of shoulder condition and treatment
            performed. A structured rehabilitation program, regular follow-up
            and physiotherapy help patients regain strength, mobility and
            return to their normal activities safely.
          </p>
        </div>
      </section>
      </main>
);
}
