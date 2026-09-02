import Link from "next/link";
import { styleNames, basePathFor } from "@/lib/styles";
import type { StyleKey } from "@/lib/types";

export function StyleSwitcher({ active }: { active: StyleKey }) {
  return (
    <aside className="styleSwitcher" aria-label="Visual concept switcher">
      <span>Concept</span>
      {(Object.keys(styleNames) as StyleKey[]).map((key) => (
        <Link key={key} className={active === key ? "active" : ""} href={basePathFor(key) || "/"} title={styleNames[key]}>{key.toUpperCase()}</Link>
      ))}
    </aside>
  );
}
