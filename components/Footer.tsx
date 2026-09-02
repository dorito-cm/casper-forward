import Link from "next/link";
import { basePathFor } from "@/lib/styles";
import type { StyleKey } from "@/lib/types";

export function Footer({ styleKey }: { styleKey: StyleKey }) {
  return (
    <footer className="footer">
      <div className="footerInner">
        <Link className="footerBrand" href={basePathFor(styleKey) || "/"}>Casper Forward — Keep Building.</Link>
        <p>Prototype to production, and onward.</p>
        <p>© {new Date().getFullYear()} Casper Forward</p>
      </div>
    </footer>
  );
}
