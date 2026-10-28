
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.domainkamu.com"),
  title: {
    default: "Home Custom Indonesia | Produk Custom dan Percetakan",
    template: "%s | Home Custom Indonesia",
  },
  description:
    "Home Custom Indonesia menyediakan produk custom seperti pin, kipas, gantungan kunci, bingkai foto, dan merchandise untuk kebutuhan personal, komunitas, acara, serta bisnis.",
  keywords: [
    "Home Custom Indonesia",
    "produk custom",
    "percetakan produk custom",
    "pin custom",
    "kipas custom",
    "gantungan kunci custom",
    "merchandise custom",
    "souvenir custom",
  ],
  openGraph: {
    title: "Home Custom Indonesia | Produk Custom dan Percetakan",
    description:
      "Wujudkan ide menjadi produk custom untuk kebutuhan personal, komunitas, acara, dan bisnis.",
    siteName: "Home Custom Indonesia",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
