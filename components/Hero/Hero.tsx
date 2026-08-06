import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(135deg,#F9FCFF 0%,#EEF7FF 60%,#FFFFFF 100%)",
          padding: "140px 20px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "340px",
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
