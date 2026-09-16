import Image from "next/image";
import Link from "next/link";
import teamsData from "@/data/teams.json";
import { eligibility, journey, primaryResources, reasons, secondaryResources, supportAreas } from "@/lib/content";
import type { Team } from "@/lib/types";
import { ExternalLinkIcon } from "./ExternalLinkIcon";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionHeading } from "./SectionHeading";
import { TeamCard } from "./TeamCard";

const teams = teamsData as Team[];

export function LandingPage() {
  const featured = teams.filter((team) => team.featured).slice(0, 3);

  return (
    <div className="theme">
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="heroDecoration" aria-hidden="true" />
          <div className="heroGrid">
            <div className="heroMain">
              <p className="pill"><span /> Post-Hackathon Builder Program</p>
              <h1>Keep <em>Building.</em></h1>
              <p className="heroCopy">Casper Forward helps promising builders move from a hackathon prototype to production on Casper, with continued technical, ecosystem, and go-to-market support.</p>
              <div className="heroActions">
                <Link className="button buttonPrimary" href="/apply">Apply to Casper Forward <ExternalLinkIcon /></Link>
                <a className="button buttonSecondary" href="#program">Explore the Program <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <div className="signalRail" aria-label="Program themes">
          {["Prototype → Production", "Technical Support", "Ecosystem Access", "GTM & Launch", "Mainnet Readiness"].map((item) => <span key={item}>{item}</span>)}
        </div>

        <section id="program" className="section">
          <SectionHeading eyebrow="Why Casper Forward" title={<>The buildathon <em style={{ fontSynthesis: "style" }}>is</em> the beginning.</>} intro="We enjoyed building with you; now let’s see what we can make of it. Think of the Buildathon as our introduction, and Casper Forward is where we keep working together to build the best possible version of your project." />
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
          <SectionHeading eyebrow="Builder Journey" title="The Path to Mainnet" intro="Each team starts from where its project stands today. Together, we identify the priorities and milestones that can move it closer to production." />
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
          <SectionHeading eyebrow="Program Support" title="What you can access through Casper Forward" intro="Casper Forward connects participating teams with technical expertise, ecosystem resources, and launch support throughout their development." />
          <div className="supportLayout">
            <div className="supportGrid">
              {supportAreas.map((area) => <article key={area.label}><span>{area.label}</span><h3>{area.title}</h3><p>{area.copy}</p></article>)}
            </div>
            <aside className="supportVisual">
              <div className="supportImage"><Image src="/images/support-hub.png" alt="Casper hub connected to development, security, community, infrastructure, and launch nodes" width={1122} height={1402} sizes="(max-width: 900px) 100vw, 38vw" /></div>
            </aside>
          </div>
        </section>

        <section id="teams" className="section teamsSection">
          <SectionHeading eyebrow="Teams Moving Forward" title="Meet the builders." intro="Follow participating projects as they develop, reach new milestones, and bring their products closer to Mainnet." />
          <div className="teamGrid">{featured.map((team) => <TeamCard team={team} key={team.slug} />)}</div>
          <div className="sectionAction"><Link className="button buttonSecondary" href="/teams">Explore all teams <span aria-hidden="true">→</span></Link></div>
        </section>

        <section id="resources" className="section resourcesSection">
          <SectionHeading eyebrow="Builder Resources" title="Everything closer to hand." intro="Key documentation, development tools, and program resources for Casper Forward teams." />
          <div className="resourceGrid">
            {primaryResources.map((resource) => resource.href ? (
              <a className="resourceCard" href={resource.href} key={resource.title} target="_blank" rel="noreferrer"><span>{resource.label}</span><h3>{resource.title}</h3><p>{resource.copy}</p><b><ExternalLinkIcon /></b></a>
            ) : (
              <article className="resourceCard" key={resource.title}><span>{resource.label}</span><h3>{resource.title}</h3><p>{resource.copy}</p></article>
            ))}
          </div>
          <div className="secondaryResources">
            {secondaryResources.map((resource) => <a href={resource.href} key={resource.title} target="_blank" rel="noreferrer"><strong>{resource.title}</strong><span>{resource.copy}</span><b><ExternalLinkIcon /></b></a>)}
          </div>
        </section>

        <section id="eligibility" className="section eligibilitySection">
          <SectionHeading eyebrow="Eligibility" title="For selected teams ready to take their projects further." intro="Casper Forward is designed for projects that have demonstrated meaningful progress and have a clear plan to continue developing on Casper." />
          <div className="eligibilityGrid">
            <EligibilityList title="Who is it for?" items={eligibility.audience} />
            <EligibilityList title="What matters?" items={eligibility.qualities} />
          </div>
        </section>

        <section id="apply" className="section ctaSection">
          <div><p className="eyebrow">Casper Forward</p><h2>Where could your project go next?</h2><p>Tell us what you’ve built, where it stands, and what you want to achieve next.</p></div>
          <Link className="button ctaButton" href="/apply">Apply to Casper Forward <ExternalLinkIcon /></Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function EligibilityList({ title, items }: { title: string; items: string[] }) {
  return <article><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
