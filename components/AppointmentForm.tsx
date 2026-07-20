"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");

  return (
    <section
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
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

  <input
    type="number"
    placeholder="Age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
  />

  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />

  <textarea
    placeholder="Describe your problem"
    rows={4}
    value={problem}
    onChange={(e) => setProblem(e.target.value)}
  />
</div>
      <button
  onClick={() => {
    const message =
      `*Appointment Request*%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Age: ${age}%0A` +
      `Preferred Date: ${date}%0A` +
      `Problem: ${problem}`;

    window.location.href =
  `https://wa.me/917023562036?text=${encodeURIComponent(
    `Appointment Request

Name: ${name}
Phone: ${phone}
Age: ${age}
Preferred Date: ${date}
Problem: ${problem}`
  )}`;
  }}
  style={{
    marginTop: "25px",
    background: "#25D366",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  📅 Book on WhatsApp
</button>
    </section>
  );
}
