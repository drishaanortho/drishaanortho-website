export const metadata = {
  title: "Dr Ishaan Orthopaedic Clinic",
  description: "Official website of Dr Ishaan Meena, Orthopaedic Surgeon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
