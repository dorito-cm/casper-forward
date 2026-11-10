import Image from "next/image";

const partners = [
  { name: "Allium", src: "/partners/allium.svg", href: "https://www.allium.so/" },
  { name: "ChainGPT", src: "/partners/chaingpt.svg", href: "https://www.chaingpt.org/" },
  { name: "MarketAcross", src: "/partners/marketacross.svg", href: "https://marketacross.com/" },
  { name: "Safe Edges", src: "/partners/safeedges.png", href: "https://safeedges.in/" },
];

export function EcosystemPartners() {
  return (
    <section id="ecosystem-partners" className="section ecosystemPartners" aria-labelledby="ecosystem-partners-heading">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">ECOSYSTEM PARTNERS</p>
          <h2 id="ecosystem-partners-heading">Supporting the next generation of builders.</h2>
        </div>
      </div>
      <ul className="partnersGrid">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a className="partnerLink" href={partner.href} target="_blank" rel="noopener noreferrer">
              <div className={`partnerLogoFrame${partner.name === "MarketAcross" ? " partnerLogoFrame--marketAcross" : ""}`}>
                <Image src={partner.src} alt={partner.name} fill unoptimized />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
