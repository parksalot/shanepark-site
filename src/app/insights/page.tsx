import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { INSIGHTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Teardowns of the problems that don't look like advertising problems — tracking mismatches, feed failures, and reports that quietly lie.",
};

export default function InsightsIndex() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="Insights"
        title="Teardowns, not thought leadership."
        lede="Each of these is a real diagnosis from a live account, written up as the answer to a question people actually type into Google."
      />
      <section className="section">
        <div className="rows">
          {INSIGHTS.map((insight) => (
            <div key={insight.slug} className="row">
              <p className="row-name">{insight.title}</p>
              <div>
                <p className="row-body">{insight.description}</p>
                {insight.published ? (
                  <Link href={`/insights/${insight.slug}`} className="row-more">
                    Read it &rarr;
                  </Link>
                ) : (
                  <p className="row-status">Writing this one now</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
