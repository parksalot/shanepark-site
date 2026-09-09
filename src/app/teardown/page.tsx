import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Request an Account Teardown | Shane Park" },
  description:
    "Send me your Google, Meta, or Amazon account and I'll tell you what it's actually doing and where the reporting is wrong.",
  alternates: { canonical: "/teardown" },
};

const STEPS = [
  "You send me read-only access, or just a few screenshots if that's easier to start.",
  "I go through the account and its measurement, and I write up what I find in plain language with the dollars attached.",
  "The findings are yours to keep. If the fix is something your own team can ship, I'll say so and tell you how — I'd rather you fix it than hire me to.",
];

export default function TeardownPage() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="Teardown"
        title="Send me the account."
        lede="A fixed-fee forensic pass over your account and the measurement under it. No pitch deck, and no discovery call before there's anything to discuss."
      />

      <section className="section">
        <p className="eyebrow">How it goes</p>
        <ul className="list">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>Get in touch</h2>
        <p>
          Email is the fastest route. Tell me what you&rsquo;re spending, where,
          and what stopped making sense.
        </p>
        <p>
          <a className="btn btn-primary" href={`mailto:${SITE.email}?subject=Account teardown`}>
            Email me
          </a>
        </p>
      </section>
    </div>
  );
}
