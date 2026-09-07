import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const casperSans = localFont({
  src: [
    { path: "../public/fonts/WOFF/CasperSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/WOFF/CasperSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/WOFF/CasperSans-Medium.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-casper-sans",
});

export const metadata: Metadata = {
  title: { default: "Casper Forward — Keep Building", template: "%s | Casper Forward" },
  description: "Casper Forward helps promising builders move from hackathon prototype to production on Casper.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={casperSans.variable}><body>{children}</body></html>;
}
