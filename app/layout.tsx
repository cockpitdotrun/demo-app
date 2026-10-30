import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "amble - Doctor-trusted treatments Growth for you",
  description: "Boost energy, sharpen focus, support cellular health, and become your healthiest self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="h-full min-h-screen font-sans antialiased bg-white text-[#121212] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
