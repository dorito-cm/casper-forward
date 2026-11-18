import Image from "next/image";

const partners = [
  { name: "Allium", src: "/partners/allium-light.avif", href: "https://www.allium.so/" },
  { name: "ChainGPT", src: "/partners/chaingpt-light.svg", href: "https://www.chaingpt.org/" },
  { name: "MarketAcross", src: "/partners/marketacross-light.svg", href: "https://marketacross.com/" },
  { name: "Safe Edges", src: "/partners/safeedges-light.png", href: "https://safeedges.in/" },
];

export function EcosystemPartners() {
  return (
    <section id="ecosystem-partners" className="ecosystemPartners" aria-labelledby="ecosystem-partners-heading">
      <div className="section partnersInner">
        <div className="partnersHeading">
          <p className="eyebrow">ECOSYSTEM PARTNERS</p>
          <h2 id="ecosystem-partners-heading">Supporting the next generation of builders.</h2>
        </div>
        <ul className="partnersGrid">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a className="partnerLink" href={partner.href} target="_blank" rel="noopener noreferrer">
                <div className="partnerLogoFrame">
                  <Image className={partner.name === "Allium" ? "partnerLogo--allium" : undefined} src={partner.src} alt={partner.name} fill unoptimized />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
