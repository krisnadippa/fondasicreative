import type { Metadata } from "next";
import { Geist, Geist_Mono, Barriecito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barriecito = Barriecito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barriecito",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://fondasicreative.com"
  ),
  title: "FONDASI CREATIVE SPACE",
  description: "Fondasi Creative Space - Ruang Kreatif & Eksplorasi Karya",
  icons: {
    icon: [
      { url: "/images/logo.jpeg" },
      { url: "/images/logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "FONDASI CREATIVE SPACE",
    description: "Fondasi Creative Space - Ruang Kreatif & Eksplorasi Karya",
    url: "/",
    siteName: "FONDASI CREATIVE SPACE",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Logo FONDASI CREATIVE SPACE",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FONDASI CREATIVE SPACE",
    description: "Fondasi Creative Space - Ruang Kreatif & Eksplorasi Karya",
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barriecito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
