import Link from "next/link";
import { styleNames, applyPathFor, basePathFor } from "@/lib/styles";
import type { StyleKey } from "@/lib/types";

export function StyleSwitcher({ active, context = "landing" }: { active: StyleKey; context?: "landing" | "apply" }) {
  return (
    <aside className="styleSwitcher" aria-label="Visual concept switcher">
      <span>Concept</span>
      {(Object.keys(styleNames) as StyleKey[]).map((key) => (
        <Link key={key} className={active === key ? "active" : ""} href={context === "apply" ? applyPathFor(key) : basePathFor(key) || "/"} title={styleNames[key]}>{key.toUpperCase()}</Link>
      ))}
    </aside>
  );
}
