import { applicationContent, applicationFormEmbedUrl, applicationFormUrl } from "@/lib/application";
import type { StyleKey } from "@/lib/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { StyleSwitcher } from "./StyleSwitcher";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

export function ApplyPage({ styleKey }: { styleKey: StyleKey }) {
  return (
    <div className={`theme theme-${styleKey}`}>
      <Header styleKey={styleKey} />
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
      <Footer styleKey={styleKey} />
      <StyleSwitcher active={styleKey} context="apply" />
    </div>
  );
}
