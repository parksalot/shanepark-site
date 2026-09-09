import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { INDUSTRIES } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: { absolute: industry.title },
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <div className="wrap">
      <PageHeader eyebrow="Industry" title={industry.name} lede={industry.summary} />

      <section className="section prose">
        <h2>What usually goes wrong</h2>
        <p>{industry.problem}</p>
      </section>

      <section className="section prose">
        <h2>How I handle it</h2>
        <ul className="list">
          {industry.approach.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      {industry.clients ? (
        <section className="section prose">
          <h2>Experience</h2>
          <p>{industry.clients}</p>
        </section>
      ) : null}

      <CTA />
    </div>
  );
}
