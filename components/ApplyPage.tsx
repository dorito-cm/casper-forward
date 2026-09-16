import { applicationContent, applicationFormEmbedUrl, applicationFormUrl } from "@/lib/application";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

export function ApplyPage() {
  return (
    <div className="theme">
      <Header />
      <main className="applyPage">
        <section className="applyIntro">
          <div className="applyIntroCopy">
            <p className="eyebrow">{applicationContent.eyebrow}</p>
            <h1>{applicationContent.title.lead} <em>{applicationContent.title.emphasis}</em></h1>
            <p className="applyLead">{applicationContent.intro}</p>
            <p className="applySupporting">{applicationContent.supporting}</p>
            <a className="button buttonSecondary applyFallback" href={applicationFormUrl} target="_blank" rel="noreferrer">
              {applicationContent.fallback} <ExternalLinkIcon />
            </a>
          </div>
        </section>

        <section className="applicationFormSection" aria-label="Casper Forward application form">
          <div className="applicationFormShell">
            <iframe
              className="applicationFormFrame"
              src={applicationFormEmbedUrl}
              title="Casper Forward Builder Application"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
