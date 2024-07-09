import type { Metadata } from "next";
import "../styles/globals.scss";
import GlobalContextWrapper from "../context/global-context";
import { Josefin_Sans } from "next/font/google";

const josefin_sans_font = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
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
    <html lang="en" className={`${josefin_sans_font.variable}`}>
      <body>
        <GlobalContextWrapper>{children}</GlobalContextWrapper>
      </body>
    </html>
  );
}
