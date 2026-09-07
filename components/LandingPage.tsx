import Image from "next/image";
import Link from "next/link";
import teamsData from "@/data/teams.json";
import { eligibility, journey, primaryResources, reasons, secondaryResources, supportAreas } from "@/lib/content";
import { applyPathFor, teamsPathFor } from "@/lib/styles";
import type { StyleKey, Team } from "@/lib/types";
import { ExternalLinkIcon } from "./ExternalLinkIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionHeading } from "./SectionHeading";
import { StyleSwitcher } from "./StyleSwitcher";
import { TeamCard } from "./TeamCard";

const teams = teamsData as Team[];

export function LandingPage({ styleKey }: { styleKey: StyleKey }) {
  const featured = teams.filter((team) => team.featured).slice(0, 3);

  return (
    <div className={`theme theme-${styleKey}`}>
      <Header styleKey={styleKey} />
      <main>
        <section className="hero" id="top">
          <div className="heroDecoration" aria-hidden="true" />
          <div className="heroGrid">
            <div className="heroMain">
              <p className="pill"><span /> Post-Hackathon Builder Program</p>
              <h1>Keep <em>Building.</em></h1>
              <p className="heroCopy">Casper Forward helps promising builders move from hackathon prototype to production on Casper — with continued technical, ecosystem and go-to-market support along the way.</p>
              <div className="heroActions">
                <Link className="button buttonPrimary" href={applyPathFor(styleKey)}>Apply to Casper Forward <ExternalLinkIcon /></Link>
                <a className="button buttonSecondary" href="#program">See how it works <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <aside className="heroAside">
              <div className="continuationMotif" aria-hidden="true"><span>01</span><span>→</span><span>∞</span></div>
              <p className="eyebrow">Built for continuation</p>
              <p>No forced graduation dates. No one-size-fits-all roadmap. Teams progress around the needs and pace of the product they’re actually building.</p>
            </aside>
          </div>
        </section>

        <div className="signalRail" aria-label="Program themes">
          {["Prototype → Production", "Technical Support", "Ecosystem Access", "GTM & Launch", "Mainnet Readiness"].map((item) => <span key={item}>{item}</span>)}
        </div>

        <section id="program" className="section">
          <SectionHeading eyebrow="Why Casper Forward" title="Hackathons should be a start, not an ending." intro="A working prototype is only the beginning. Technical blockers, product decisions, infrastructure needs and launch preparation can all slow promising teams down after an event ends. Casper Forward keeps serious builders connected while they work through what comes next." />
          <div className="reasonGrid">
            {reasons.map((reason) => (
              <article className="reasonCard" key={reason.number}>
                <p className="cardIndex">{reason.number} / {reason.label}</p>
                <div><h3>{reason.title}</h3><p>{reason.copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section journeySection">
          <SectionHeading eyebrow="Builder Journey" title="A clear path forward." intro="Every project is different. Progress is based on readiness and the next useful milestone — not a fixed cohort schedule." />
          <ol className="journeyGrid">
            {journey.map((step) => (
              <li key={step.number}>
                <span className="stepNumber">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section id="support" className="section">
          <SectionHeading eyebrow="Program Support" title="Support where it actually matters." intro="Casper Forward brings the right people and resources closer to the problems teams encounter while turning a prototype into a real product." />
          <div className="supportLayout">
            <div className="supportGrid">
              {supportAreas.map((area) => <article key={area.label}><span>{area.label}</span><h3>{area.title}</h3><p>{area.copy}</p></article>)}
            </div>
            <aside className="supportVisual">
              <div className="quoteBlock">
                <blockquote>“The goal isn’t to rush every prototype to Mainnet. It’s to help serious teams keep moving.”</blockquote>
                <p>Casper Forward</p>
              </div>
              <div className="supportImage"><Image src="/images/support-hub.png" alt="Casper hub connected to development, security, community, infrastructure, and launch nodes" width={1122} height={1402} sizes="(max-width: 900px) 100vw, 38vw" /></div>
            </aside>
          </div>
        </section>

        <section id="teams" className="section teamsSection">
          <SectionHeading eyebrow="Teams Moving Forward" title="Built on Casper. Still building." intro="A public view of participating projects and the milestones they choose to share as they keep moving." />
          <div className="teamGrid">{featured.map((team) => <TeamCard team={team} key={team.slug} />)}</div>
          <div className="sectionAction"><Link className="button buttonSecondary" href={teamsPathFor(styleKey)}>Explore all teams <span aria-hidden="true">→</span></Link></div>
        </section>

        <section id="resources" className="section resourcesSection">
          <SectionHeading eyebrow="Builder Resources" title="Everything closer to hand." intro="A focused starting point for recurring questions, core documentation, builder tooling and program coordination." />
          <div className="resourceGrid">
            {primaryResources.map((resource) => <a className="resourceCard" href={resource.href} key={resource.title} target={resource.href === "#" ? undefined : "_blank"} rel={resource.href === "#" ? undefined : "noreferrer"}><span>{resource.label}</span><h3>{resource.title}</h3><p>{resource.copy}</p><b><ExternalLinkIcon /></b></a>)}
          </div>
          <div className="secondaryResources">
            {secondaryResources.map((resource) => <a href={resource.href} key={resource.title} target="_blank" rel="noreferrer"><strong>{resource.title}</strong><span>{resource.copy}</span><b><ExternalLinkIcon /></b></a>)}
          </div>
        </section>

        <section id="eligibility" className="section eligibilitySection">
          <SectionHeading eyebrow="Eligibility" title="For teams that intend to keep going." intro="Casper Forward is designed for projects showing meaningful progress and a clear intention to continue building on Casper." />
          <div className="eligibilityGrid">
            <EligibilityList title="Who is it for?" items={eligibility.audience} />
            <EligibilityList title="What matters?" items={eligibility.qualities} />
          </div>
        </section>

        <section id="apply" className="section ctaSection">
          <div><p className="eyebrow">Casper Forward</p><h2>Built something promising on Casper? Keep going.</h2><p>Tell us what you’re building, where it stands and what would help you reach the next milestone.</p></div>
          <Link className="button ctaButton" href={applyPathFor(styleKey)}>Apply to Casper Forward <ExternalLinkIcon /></Link>
        </section>
      </main>
      <Footer styleKey={styleKey} />
      <StyleSwitcher active={styleKey} />
    </div>
  );
}

function EligibilityList({ title, items }: { title: string; items: string[] }) {
  return <article><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
