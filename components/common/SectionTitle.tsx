type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "850px",
        margin: "0 auto 60px",
      }}
    >
      <p
        style={{
          color: "#1976D2",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "12px",
          fontSize: "15px",
        }}
      >
        {label}
      </p>

      <h2
        style={{
          color: "#0B3C5D",
          fontSize: "46px",
          fontWeight: 800,
          lineHeight: "1.2",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            color: "#64748B",
            fontSize: "18px",
            lineHeight: "32px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
