import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <Link className="footerBrand" href="/">Casper Forward — Keep Building.</Link>
        <p>Prototype to production, and onward.</p>
        <p>© {new Date().getFullYear()} Casper Forward</p>
      </div>
    </footer>
  );
}
