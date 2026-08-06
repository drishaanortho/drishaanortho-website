import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyContactBar from "../../components/StickyContactBar";

export default function KneePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#F8FBFF",
          color: "#333",
        }}
      >
        {/* Hero */}

        <section
          style={{
            background:
              "linear-gradient(135deg,#0B3C5D,#1976D2)",
            color: "#fff",
            padding: "150px 20px 90px",
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
                color: "#D4AF37",
                letterSpacing: "3px",
                fontWeight: 700,
              }}
            >
              ADVANCED KNEE CARE
            </p>

            <h1
              style={{
                fontSize: "56px",
                fontWeight: 800,
                marginTop: "20px",
                marginBottom: "25px",
              }}
            >
              Knee Pain &
              <br />
              Sports Injury Specialist
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "34px",
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              Comprehensive treatment for knee arthritis,
              ligament injuries, meniscus tears, sports
              injuries and fractures using modern
              evidence-based orthopaedic care.
            </p>
          </div>
        </section>

        {/* Introduction */}

        <section
          style={{
            maxWidth: "1200px",
            margin: "70px auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              color: "#0B3C5D",
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
            Knee Pain Specialist in Ajmer
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Knee pain is one of the most common orthopaedic
            problems affecting people of all ages. It may
            result from arthritis, sports injuries,
            ligament tears, meniscus injuries or fractures.
            Early diagnosis and appropriate treatment help
            relieve pain, restore mobility and improve
            quality of life.
          </p>
                  {/* Common Knee Conditions */}

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
              fontSize: "40px",
              marginBottom: "35px",
            }}
          >
            Common Knee Conditions We Treat
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "Knee Osteoarthritis",
              "ACL & PCL Ligament Injuries",
              "Meniscus Tears",
              "Sports Injuries",
              "Patellar Instability",
              "Knee Fractures",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  padding: "28px",
                  borderRadius: "18px",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#0B3C5D",
                    margin: 0,
                  }}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Symptoms */}

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
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            Symptoms
          </h2>

          <ul
            style={{
              fontSize: "19px",
              lineHeight: "38px",
              color: "#555",
            }}
          >
            <li>Knee pain while walking or climbing stairs</li>
            <li>Swelling around the knee</li>
            <li>Joint stiffness</li>
            <li>Difficulty bending or straightening the knee</li>
            <li>Locking or clicking sensation</li>
            <li>Instability or giving way</li>
          </ul>
        </section>

        {/* Diagnosis */}

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
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            Diagnosis
          </h2>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "34px",
              color: "#555",
            }}
          >
            Accurate diagnosis begins with a detailed history,
            physical examination and appropriate imaging such
            as X-rays or MRI whenever required. This helps us
            identify the exact cause of knee pain and plan the
            most effective treatment.
          </p>
        </section>

        {/* Treatment Options */}

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
              fontSize: "40px",
              marginBottom: "25px",
            }}
          >
            Treatment Options
          </h2>

          <ul
            style={{
              fontSize: "19px",
              lineHeight: "38px",
              color: "#555",
            }}
          >
            <li>Medications and pain management</li>
            <li>Physiotherapy and rehabilitation</li>
            <li>Sports injury management</li>
            <li>Arthroscopic knee surgery</li>
            <li>Ligament reconstruction</li>
            <li>Total and Partial Knee Replacement</li>
          </ul>
        </section>
                  {/* Why Choose Dr. Ishaan Meena */}

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
              fontSize: "40px",
              marginBottom: "35px",
              textAlign: "center",
            }}
          >
            Why Choose Dr. Ishaan Meena?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                title: "Fellowship Trained",
                text: "Advanced training in shoulder surgery and modern orthopaedic procedures.",
              },
              {
                title: "Evidence-Based Care",
                text: "Treatment plans based on current orthopaedic guidelines and best practices.",
              },
              {
                title: "Sports Injury Expertise",
                text: "Specialized care for ligament, meniscus and other sports-related injuries.",
              },
              {
                title: "Comprehensive Care",
                text: "From diagnosis and physiotherapy to surgery and rehabilitation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "18px",
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
        </section>

        {/* Call To Action */}

        <section
          style={{
            background:
              "linear-gradient(135deg,#0B3C5D,#1976D2)",
            color: "#fff",
            textAlign: "center",
            padding: "80px 20px",
            marginTop: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Book Your Knee Consultation Today
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto 35px",
              lineHeight: "32px",
              fontSize: "18px",
            }}
          >
            Whether you're suffering from knee pain, arthritis,
            sports injuries or ligament tears, early treatment
            can improve recovery and help you return to your
            daily activities with confidence.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
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
              Call Now
            </a>

            <a
              href="https://wa.me/917023562036"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "16px 30px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactBar />
    </>
  );
      }
