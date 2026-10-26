"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  const resolveHref = (href: string) => {
    if (href === "teams") return "/teams";
    return `/${href}`;
  };

  return (
    <header className="siteHeader">
      <div className="navShell">
        <Link href="/" className="brand" aria-label="Casper Forward home">
          <Image
            className="brandLogo"
            src="/brand/casper-forward-logo.svg"
            alt="Casper Forward"
            width={396}
            height={60}
            loading="eager"
            unoptimized
          />
        </Link>
        <button
          className="menuButton"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <nav id="main-navigation" className={`mainNav ${open ? "isOpen" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={resolveHref(item.href)} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button buttonPrimary navApply" href="/apply">Apply <ExternalLinkIcon /></Link>
      </div>
    </header>
  );
}
