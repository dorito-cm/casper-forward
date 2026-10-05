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
  title: { default: "Casper Forward | Keep Building.", template: "%s | Casper Forward" },
  description: "Casper Forward helps promising builders move from hackathon prototype to production on Casper.",
  metadataBase: new URL("https://forward.casper.network"),
  openGraph: {
    title: "Casper Forward | Keep Building.",
    description: "Casper Forward helps promising builders move from hackathon prototype to production on Casper.",
    url: "/",
    siteName: "Casper Forward",
    type: "website",
    images: [{
      url: "/brand/casper-forward-og.png",
      width: 1200,
      height: 630,
      alt: "Casper Forward: Keep Building. Post-hackathon builder program with red, lime, and translucent geometric artwork.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casper Forward | Keep Building.",
    description: "Casper Forward helps promising builders move from hackathon prototype to production on Casper.",
    images: [{
      url: "/brand/casper-forward-og.png",
      alt: "Casper Forward: Keep Building. Post-hackathon builder program with red, lime, and translucent geometric artwork.",
    }],
  },
  icons: {
    icon: [
      { url: "/brand/icons/icon-16.png", type: "image/png", sizes: "17x16" },
      { url: "/brand/icons/icon-32.png", type: "image/png", sizes: "33x32" },
      { url: "/brand/icons/icon-64.png", type: "image/png", sizes: "65x64" },
      { url: "/brand/icons/icon-64.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={casperSans.variable}><body>{children}</body></html>;
}
