</section>
      <section id="services" style={{ backgroundColor: "white", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0B3C5D", fontSize: "32px", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "15px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {services.map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "white",
                padding: "10px 18px",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  color: "#0B3C5D",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                🦴 {service}
              </h3>
            </div>
          ))}
        </div>
      </section>
