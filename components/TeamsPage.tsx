import teamsData from "@/data/teams.json";
import type { Team } from "@/lib/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TeamDirectory } from "./TeamDirectory";

export function TeamsPage() {
  return (
    <div className="theme">
      <Header />
      <main className="teamsPage">
        <section className="directoryHero">
          <p className="eyebrow">Teams Moving Forward</p>
          <h1>Built on Casper.<br /><em>Still building.</em></h1>
          <p>Explore participating Casper Forward projects and the public milestones they’re sharing as they move from prototype toward production.</p>
        </section>
        <section className="directorySection" aria-label="Team directory">
          <TeamDirectory teams={teamsData as Team[]} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
