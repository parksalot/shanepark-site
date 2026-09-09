import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ten years in accounting automating my own job, then a decade of paid media. Shane Park Media Group, Kansas City.",
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="About"
        title="I automated my way out of accounting."
        lede="Ten years of it, mostly spent writing macros to do the parts of my job that shouldn't have needed a person. Eight hours became thirty minutes, repeatedly, and that turned out to be the whole skill."
      />

      <section className="section prose">
        <p>
          Paid media has the same shape. Most of the work in an ad account is
          something a machine should be doing, and most of the value is in the
          twenty minutes where a person asks why a number looks wrong. So I
          built the tooling for the first part &mdash; the reporting platform my
          clients log into, the automations that pull four platforms together
          every morning &mdash; to buy back time for the second part.
        </p>
        <p>
          I run Shane Park Media Group out of Kansas City. I work with a small
          number of brands directly, and with other agencies who need a
          specialist on an account that stopped making sense. If you want to see
          how I think before you talk to me, the{" "}
          <a href="/method" className="link">
            method
          </a>{" "}
          page is the honest version.
        </p>
      </section>

      <CTA />
    </div>
  );
}
