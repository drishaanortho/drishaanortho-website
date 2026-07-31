import AboutHeader from "./about/AboutHeader";
import Qualifications from "./about/Qualifications";
import Expertise from "./about/Expertise";

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "30px",
      }}
    >
      <AboutHeader />

      <Qualifications />

      <Expertise />
    </section>
  );
}
