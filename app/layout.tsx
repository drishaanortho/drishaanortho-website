import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Ishaan Meena | Orthopaedic & Shoulder Surgeon | Ajmer",
  description:
    "Dr. Ishaan Meena is an Orthopaedic & Shoulder Surgeon in Ajmer providing expert treatment for fractures, sports injuries, shoulder disorders, joint replacement, arthroscopy, spine disorders, and trauma care.",

  keywords: [
    "Orthopaedic Surgeon Ajmer",
    "Shoulder Surgeon Ajmer",
    "Sports Injury Specialist Ajmer",
    "Fracture Specialist Ajmer",
    "Joint Replacement Surgeon Ajmer",
    "Arthroscopy Ajmer",
    "Spine Specialist Ajmer",
    "Dr Ishaan Meena",
    "Orthopaedic Clinic Ajmer",
  ],

  authors: [{ name: "Dr. Ishaan Meena" }],

  creator: "Dr. Ishaan Meena",

  metadataBase: new URL("https://drishaanortho.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dr. Ishaan Meena | Orthopaedic & Shoulder Surgeon",
    description:
      "Expert Orthopaedic & Shoulder Surgery in Ajmer. Fractures, Sports Injuries, Arthroscopy, Joint Replacement and Trauma Care.",
    url: "https://drishaanortho.com",
    siteName: "Dr. Ishaan Meena Orthopaedic Clinic",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Ishaan Meena | Orthopaedic & Shoulder Surgeon",
    description:
      "Expert Orthopaedic & Shoulder Surgery in Ajmer.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
