export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="sectionHeading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="sectionIntro">{intro}</p>
    </div>
  );
}
