import type { StyleKey } from "./types";

export const styleNames: Record<StyleKey, string> = {
  a: "Casper Editorial",
  b: "Builder / Technical",
  c: "Premium Dark",
  d: "Minimal Institutional",
};

export function basePathFor(style: StyleKey) {
  return style === "a" ? "" : `/style-${style}`;
}

export function teamsPathFor(style: StyleKey) {
  return style === "a" ? "/teams" : `/style-${style}/teams`;
}

export function applyPathFor(style: StyleKey) {
  return `/style-${style}/apply`;
}
