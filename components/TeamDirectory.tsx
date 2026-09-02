"use client";

import { useMemo, useState } from "react";
import { TeamCard } from "./TeamCard";
import type { Team, TeamStatus } from "@/lib/types";

const filters: Array<{ label: string; value: "ALL" | TeamStatus }> = [
  { label: "All", value: "ALL" },
  { label: "Building", value: "BUILDING" },
  { label: "Testnet", value: "TESTNET" },
  { label: "Mainnet Prep", value: "MAINNET PREP" },
  { label: "Live", value: "LIVE" },
];

export function TeamDirectory({ teams }: { teams: Team[] }) {
  const [filter, setFilter] = useState<"ALL" | TeamStatus>("ALL");
  const visible = useMemo(() => filter === "ALL" ? teams : teams.filter((team) => team.status === filter), [filter, teams]);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter teams by status">
        {filters.map((item) => (
          <button key={item.value} type="button" className={filter === item.value ? "active" : ""} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="resultsCount" aria-live="polite">Showing {visible.length} {visible.length === 1 ? "team" : "teams"}</p>
      <div className="teamGrid directoryGrid">
        {visible.map((team) => <TeamCard key={team.slug} team={team} />)}
      </div>
    </>
  );
}
