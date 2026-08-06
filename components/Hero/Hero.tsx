import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <>
      <section
        style={{
          background: "#F8FBFF",
          padding: "140px 20px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "320px",
            }}
          >
            <HeroContent />
            <HeroButtons />
          </div>

          <HeroImage />
        </div>
      </section>

      <HeroStats />
    </>
  );
}
