import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
