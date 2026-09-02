import Image from "next/image";
import type { Team } from "@/lib/types";

const linkLabels: Array<[keyof Pick<Team, "website" | "github" | "x">, string]> = [
  ["website", "Website"], ["github", "GitHub"], ["x", "X"],
];

export function TeamCard({ team }: { team: Team }) {
  return (
    <article className="teamCard">
      <div className="teamCardTop">
        <Image src={team.logo} width={64} height={64} alt={`${team.name} logo`} className="teamLogo" />
        <span className={`status status-${team.status.toLowerCase().replace(" ", "-")}`}>{team.status}</span>
      </div>
      <div>
        <h3>{team.name}</h3>
        <p>{team.description}</p>
      </div>
      <div className="milestone">
        <span>Latest milestone</span>
        <strong>{team.latestMilestone}</strong>
      </div>
      <div className="teamLinks" aria-label={`${team.name} links`}>
        {linkLabels.map(([key, label]) => team[key] ? (
          <a key={key} href={team[key]} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
        ) : null)}
        {!team.website && !team.github && !team.x ? <span className="linksPending">Links coming soon</span> : null}
      </div>
    </article>
  );
}
