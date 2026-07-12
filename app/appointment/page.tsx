export default function AppointmentPage() {
  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>Book an Appointment</h1>

      <p>
        Fill in the details below and we will contact you to confirm your
        appointment.
      </p>

      <form style={{ display: "grid", gap: "15px", marginTop: "25px" }}>
        <input
          type="text"
          placeholder="Patient Name"
          style={{ padding: "12px" }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={{ padding: "12px" }}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={{ padding: "12px" }}
        />

        <textarea
          placeholder="Describe your problem"
          rows={5}
          style={{ padding: "12px" }}
        />

        <input
          type="date"
          style={{ padding: "12px" }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "#0f766e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Book Appointment
        </button>
      </form>
    </main>
  );
}
