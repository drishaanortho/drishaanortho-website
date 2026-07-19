"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = {
    textDecoration: "none",
    color: "#0B3C5D",
    fontWeight: 700,
    fontSize: "16px",
    padding: "10px 14px",
    borderRadius: "10px",
    transition: "0.3s",
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
          maxWidth: "1200px",
          zIndex: 9999,
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,.35)",
          boxShadow: "0 10px 35px rgba(0,0,0,.12)",
          padding: "12px 18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={52}
            height={52}
          />

          <div>
            <div
              style={{
                color: "#0B3C5D",
                fontSize: "21px",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Dr. Ishaan Meena
            </div>

            <div
              style={{
                color: "#666",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Orthopaedic Clinic
            </div>
          </div>
        </a>
                {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <a href="#home" style={navLink}>Home</a>

          <a href="#about" style={navLink}>About</a>

          <a href="#services" style={navLink}>Services</a>

          <a href="#reviews" style={navLink}>Reviews</a>

          <a href="#contact" style={navLink}>Contact</a>

          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#D4AF37",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
            cursor: "pointer",
            color: "#0B3C5D",
            display: "none",
          }}
          className="menu-btn"
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
          <a href="#home" style={{ ...navLink, display: "block" }}>Home</a>

          <a href="#about" style={{ ...navLink, display: "block" }}>About</a>

          <a href="#services" style={{ ...navLink, display: "block" }}>Services</a>

          <a href="#reviews" style={{ ...navLink, display: "block" }}>Reviews</a>

          <a href="#contact" style={{ ...navLink, display: "block" }}>Contact</a>

          <a
            href="https://wa.me/917023562036"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "12px",
              textAlign: "center",
              background: "#D4AF37",
              color: "#fff",
              padding: "14px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
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

          nav {
            padding: 10px 16px !important;
          }
        }

        @media (min-width: 901px) {
          .menu-btn {
            display: none !important;
          }
        }

        a:hover {
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}
