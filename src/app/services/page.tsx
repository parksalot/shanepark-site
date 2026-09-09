import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Account teardowns, tracking and measurement rebuilds, and ongoing Google, Meta, and Amazon management.",
};

export default function ServicesIndex() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="Services"
        title="Three ways in."
        lede="Most people start with a teardown, because it costs less than a month of being wrong."
      />
      <section className="section">
        <div className="rows">
          {SERVICES.map((service) => (
            <div key={service.slug} className="row">
              <p className="row-name">{service.name}</p>
              <div>
                <p className="row-body">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="row-more">
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
