"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");

  const handleWhatsApp = () => {
    const message = `*Appointment Request*

Name: ${name}
Mobile: ${phone}
Age: ${age}
Preferred Date: ${date}
Problem: ${problem}`;

    const url = `https://wa.me/917023562036?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="appointment"
      style={{
        padding: "60px 20px",
        background: "#f4f8fc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B3C5D",
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Book an Appointment
      </h2>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Describe your problem"
          rows={5}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          onClick={handleWhatsApp}
          style={{
            background: "#25D366",
            color: "white",
            padding: "16px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          📅 Book on WhatsApp
        </button>
      </div>
    </section>
  );
}
