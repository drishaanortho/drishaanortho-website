export default function GalleryPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Gallery</h1>

      <p>
        Explore our orthopaedic practice through operation theatre moments,
        conferences, workshops, patient education, and clinical achievements.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "50px", textAlign: "center" }}>
          📷 Surgery
        </div>

        <div style={{ border: "1px solid #ddd", padding: "50px", textAlign: "center" }}>
          📷 Conference
        </div>

        <div style={{ border: "1px solid #ddd", padding: "50px", textAlign: "center" }}>
          📷 Workshop
        </div>

        <div style={{ border: "1px solid #ddd", padding: "50px", textAlign: "center" }}>
          📷 Patient Care
        </div>
      </div>
    </main>
  );
}
