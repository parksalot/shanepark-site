import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { AGENCY, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Fractional Ad Ops for Agencies | Shane Park" },
  description:
    "Short fractional engagements for marketing agencies — find where the hours go, automate the manual reporting and account work, train the team, and leave.",
  alternates: { canonical: "/for-agencies" },
};

export default function ForAgenciesPage() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="For agencies"
        title="I fix agency bloat, then I leave."
        lede="Agencies aren't short on talent. They're short on leverage — good people spending their week on work a machine should be doing. I come in for a defined stretch, take that work off the humans, hand you the documentation, and go."
      />

      <section className="section prose">
        <h2>Who this is for</h2>
        <p>{AGENCY.audience}</p>
      </section>

      <section className="section prose">
        <h2>What it usually looks like</h2>
        <p>
          None of this is a competence problem. It&rsquo;s what happens when a
          business grows one client at a time and the operations never get a
          dedicated owner.
        </p>
        <ul className="list">
          {AGENCY.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>How the engagement runs</h2>
        <ul className="list">
          {AGENCY.engagement.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>Why me</h2>
        <p>{AGENCY.proof}</p>
        <p>
          I also spent ten years in accounting automating my own job before I
          ever bought an ad &mdash; eight hours down to thirty minutes, over and
          over. That is the entire skill, and agencies are full of the same
          problem wearing different clothes.
        </p>
      </section>

      <section className="section prose">
        <h2>What this isn&rsquo;t</h2>
        <p>
          It isn&rsquo;t a retainer, and it isn&rsquo;t me quietly becoming a
          member of staff. It also isn&rsquo;t a threat to your client
          relationships &mdash; I don&rsquo;t go around you, and I don&rsquo;t
          pitch your accounts. If you want ongoing execution help instead, I do
          that too, but it&rsquo;s a different conversation and I&rsquo;d rather
          be straight about which one you&rsquo;re buying.
        </p>
      </section>

      <CTA
        heading="Tell me where the time goes"
        body="One conversation is usually enough for me to say whether there's real leverage in your operation or whether you're already running tight."
      />
    </div>
  );
}
