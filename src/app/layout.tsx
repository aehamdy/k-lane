import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import StayInTouch from "@/components/common/StayInTouch";
import Footer from "@/components/common/Footer";
import HeaderWrapper from "@/components/common/HeaderWrapper";
import Cursor from "@/components/common/Cursor";
import PageTransitionProvider from "@/components/common/PageTransition";
import siteData from "@/config/siteData";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteData.name} Coffee Shop | Specialty Coffee & Cozy Spaces`,
  description: siteData.description,
  icons: {
    icon: "/favicon.ico", // standard favicon
    shortcut: "/favicon-32x32.png", // optional
    apple: "/apple-touch-icon.png", // for iOS home screen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative page-vertical-gap p-micro lg:p-base bg-white ${archivo.variable} ${inter.variable} antialiased`}
      >
        <Cursor />

        <HeaderWrapper />

        <PageTransitionProvider>{children}</PageTransitionProvider>

        <StayInTouch />

        <Footer />
      </body>
    </html>
  );
}
