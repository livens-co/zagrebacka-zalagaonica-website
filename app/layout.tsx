import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
import CookiesConsent from "@/components/CookiesConsent";


const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zagrebačka zalagaonica",
  openGraph: {
    title: "Zagrebačka zalagaonica",
    description:
      "Zagrebačka zalagaonica bavi se otkupom, zalogom i prodajom rabljene robe poput zlata, luksuznih satova, elektronike, te ostalih predmeta na upit.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={font.className}>
        <div className="mainLayout">
          <GoogleAnalytics/>
          <CookiesConsent />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
