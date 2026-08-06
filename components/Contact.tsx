import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#F8FBFF",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#1976D2",
            letterSpacing: "3px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          CONTACT & APPOINTMENT
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#0B3C5D",
            fontSize: "46px",
            fontWeight: 800,
            marginBottom: "18px",
          }}
        >
          Book Your Consultation
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            maxWidth: "760px",
            margin: "0 auto 60px",
            lineHeight: "30px",
          }}
        >
          Whether you need an orthopaedic consultation, fracture treatment,
          shoulder surgery or a second opinion, we're here to help.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
            gap: "35px",
          }}
        >
          {/* Left Card */}

          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "40px",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
            }}
          >
            <h3
              style={{
                color: "#0B3C5D",
                fontSize: "30px",
                marginBottom: "30px",
              }}
            >
              Clinic Information
            </h3>

            <div style={{ marginBottom: "25px" }}>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#0B3C5D",
    fontWeight: 700,
  }}
>
  <MapPin size={22} color="#1976D2" />
  Clinic Address
</div>

              <p
                style={{
                  color: "#666",
                  lineHeight: "30px",
                }}
              >
                Shiv Enclave Apartments,
                <br />
                Near Ajmer Hospital &
                <br />
                Savitri School,
                Civil Lines, Ajmer.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#0B3C5D",
    fontWeight: 700,
  }}
>
  <Phone size={22} color="#1976D2" />
  Phone
</div>

              <p style={{ color: "#666" }}>
                +91 70235 62036
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#0B3C5D",
    fontWeight: 700,
  }}
>
  <Mail size={22} color="#1976D2" />
  Email
</div>

              <p style={{ color: "#666" }}>
                dr.ishaanmeena@gmail.com
              </p>
            </div>

            <div>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#0B3C5D",
    fontWeight: 700,
  }}
>
  <Clock size={22} color="#1976D2" />
  OPD Timings
</div>

              <p style={{ color: "#666" }}>
                Every Day
                <br />
                3:00 PM – 8:00 PM
              </p>
            </div>
          </div>

          {/* Right Card */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#0B3C5D,#1976D2)",
              borderRadius: "28px",
              padding: "40px",
              color: "white",
              boxShadow: "0 20px 40px rgba(11,60,93,.25)",
            }}
          >
            <h3
              style={{
                fontSize: "34px",
                marginBottom: "20px",
              }}
            >
              Need an Appointment?
            </h3>
            <div
  style={{
    background: "rgba(255,255,255,0.12)",
    borderRadius: "14px",
    padding: "15px",
    marginBottom: "25px",
    textAlign: "center",
  }}
>
  <div
    style={{
      fontSize: "26px",
      fontWeight: "700",
    }}
  >
    ⭐⭐⭐⭐⭐
  </div>

  <div
    style={{
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "8px",
    }}
  >
    5.0 Google Rating
  </div>

  <div
    style={{
      color: "#EAF5FF",
      marginTop: "6px",
    }}
  >
    Trusted by 100+ Patients
  </div>
</div>

            <p
              style={{
                color: "#EAF5FF",
                lineHeight: "32px",
                marginBottom: "35px",
              }}
            >
              Book your consultation today for expert orthopaedic care,
              fracture management, shoulder surgery, sports injuries,
              arthroscopy and joint replacement.
            </p>

            <a
              href="tel:+917023562036"
              style={{
                display: "block",
                background: "#ffffff",
                color: "#0B3C5D",
                textAlign: "center",
                padding: "18px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              <Phone size={20} style={{ marginRight: "8px" }} />
Call Now
            </a>

            <a
              href="https://wa.me/917023562036"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#25D366",
                color: "#fff",
                textAlign: "center",
                padding: "18px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              Message on WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/qjqj22wTr6N7DtpS6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#D4AF37",
                color: "#fff",
                textAlign: "center",
                padding: "18px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              <MapPin size={20} style={{ marginRight: "8px" }} />
Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
                  }
