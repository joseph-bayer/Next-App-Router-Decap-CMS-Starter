import AnnouncementBanner from "@/components/announcement-banner/announcement-banner";
import BypassBlock from "@/components/bypass-block/bypass-block";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Josefin_Sans, Luckiest_Guy } from "next/font/google";
import GlobalContextWrapper from "../context/global-context";
import "../styles/globals.scss";

const josefin_sans_font = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

const indie_flower_font = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-indie-flower",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Next.js (App Router) + Decap CMS Template",
  description: "A template for Next.js + Decap CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefin_sans_font.variable} ${indie_flower_font.variable}`}
    >
      <body className="min-h-screen">
        <GlobalContextWrapper>
          <BypassBlock />
          <Navbar />
          <AnnouncementBanner />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </GlobalContextWrapper>
      </body>
    </html>
  );
}
