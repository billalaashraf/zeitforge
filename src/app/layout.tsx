import type { Metadata } from "next";
import { UnifrakturCook, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unifraktur = UnifrakturCook({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ZeitForge — Product Studio for SaaS",
  description:
    "We help SaaS companies design, build, and scale digital products with sharp strategy, clean interfaces, automation, and reliable development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unifraktur.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
