"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        95;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  const navLink = {
    textDecoration: "none",
    color: "#0B3C5D",
    fontWeight: 800,
    fontSize: "16px",
    letterSpacing: "0.2px",
    padding: "10px 14px",
    borderRadius: "10px",
    transition: "0.3s",
    cursor: "pointer",
  } as const;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          maxWidth: "1250px",
          zIndex: 9999,
          background: "rgba(255,255,255,0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,.35)",
          boxShadow: "0 18px 45px rgba(0,0,0,.12)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
          />

          <div>
            <div
              style={{
                color: "#0B3C5D",
                fontSize: "24px",
                fontWeight: 900,
                letterSpacing: "-0.5px",
              }}
            >
              Dr. Ishaan Meena
            </div>

            <div
              style={{
                color: "#666",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.4px",
              }}
            >
              Orthopaedic Surgeon
            </div>
          </div>
        </a>
                <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <a onClick={() => scrollToSection("home")} style={navLink}>
            Home
          </a>

          <a onClick={() => scrollToSection("about")} style={navLink}>
            About
          </a>

          <a onClick={() => scrollToSection("services")} style={navLink}>
            Services
          </a>

          <a onClick={() => scrollToSection("reviews")} style={navLink}>
            Reviews
          </a>

          <a onClick={() => scrollToSection("contact")} style={navLink}>
            Contact
          </a>

          <a
            onClick={() => scrollToSection("appointment")}
            style={{
              background:
                "linear-gradient(135deg,#D4AF37,#C69A1B)",
              boxShadow:
                "0 10px 25px rgba(212,175,55,.35)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
            cursor: "pointer",
            color: "#0B3C5D",
            display: "none",
          }}
        >
          ☰
        </button>
      </nav>
            {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "95px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "95%",
            maxWidth: "500px",
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 12px 35px rgba(0,0,0,.18)",
            padding: "18px",
            zIndex: 9998,
          }}
        >
          <a
            onClick={() => scrollToSection("home")}
            style={{ ...navLink, display: "block" }}
          >
            Home
          </a>

          <a
            onClick={() => scrollToSection("about")}
            style={{ ...navLink, display: "block" }}
          >
            About
          </a>

          <a
            onClick={() => scrollToSection("services")}
            style={{ ...navLink, display: "block" }}
          >
            Services
          </a>

          <a
            onClick={() => scrollToSection("reviews")}
            style={{ ...navLink, display: "block" }}
          >
            Reviews
          </a>

          <a
            onClick={() => scrollToSection("contact")}
            style={{ ...navLink, display: "block" }}
          >
            Contact
          </a>

          <a
            onClick={() => scrollToSection("appointment")}
            style={{
              display: "block",
              marginTop: "12px",
              textAlign: "center",
              background: "linear-gradient(135deg,#D4AF37,#C69A1B)",
              boxShadow: "0 10px 25px rgba(212,175,55,.35)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Book Appointment
          </a>
        </div>
      )}
            <style jsx>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 901px) {
          .menu-btn {
            display: none !important;
          }
        }

        a {
          transition: all 0.3s ease;
        }

        a:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
