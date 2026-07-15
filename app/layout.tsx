import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dr. Ishaan Meena Orthopaedic Clinic",
  description: "Official website of Dr. Ishaan Meena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}
