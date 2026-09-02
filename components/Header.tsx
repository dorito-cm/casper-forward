"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { applyPathFor, basePathFor, teamsPathFor } from "@/lib/styles";
import type { StyleKey } from "@/lib/types";

export function Header({ styleKey }: { styleKey: StyleKey }) {
  const [open, setOpen] = useState(false);
  const basePath = basePathFor(styleKey);

  const resolveHref = (href: string) => {
    if (href === "teams") return teamsPathFor(styleKey);
    return `${basePath || "/"}${href}`;
  };

  return (
    <header className="siteHeader">
      <div className="navShell">
        <Link href={basePath || "/"} className="brand" aria-label="Casper Forward home">
          <span className="brandMark" aria-hidden="true">C</span>
          <span>Casper Forward</span>
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
        <Link className="button buttonPrimary navApply" href={applyPathFor(styleKey)}>Apply <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
