import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Casper Forward — Keep Building", template: "%s | Casper Forward" },
  description: "Casper Forward helps promising builders move from hackathon prototype to production on Casper.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
