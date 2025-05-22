import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const polysans = localFont({
  src: [
    {
      path: "../../public/fonts/polysans/polysanstrial-neutral.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/polysans/polysanstrial-slim.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-polysans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Global Services",
  description: "Arjun Global Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${polysans.variable} font-sans antialiased`}>
        <Head>
          <title>Arjun Global Services</title>
          <meta name="description" content="Arjun Global Services website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
