import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Subscription eCommerce, DTC personal care, and apparel and retail brands — the problems each one actually has, and how I handle them.",
};

export default function IndustriesIndex() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="Industries"
        title="eCommerce, three ways."
        lede="I work with eCommerce brands. Different models break in different ways, and these are the patterns I've seen enough times to recognize on sight."
      />
      <section className="section">
        <div className="rows">
          {INDUSTRIES.map((industry) => (
            <div key={industry.slug} className="row">
              <p className="row-name">{industry.name}</p>
              <div>
                <p className="row-body">{industry.summary}</p>
                <Link href={`/industries/${industry.slug}`} className="row-more">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
