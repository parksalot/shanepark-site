import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { SERVICES } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    // Absolute so the hand-written, search-intent title isn't suffixed again.
    title: { absolute: service.title },
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="wrap">
      <PageHeader eyebrow="Service" title={service.name} lede={service.lede} />

      <section className="section prose">
        <h2>What&rsquo;s included</h2>
        <ul className="list">
          {service.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section prose">
        <h2>Who it&rsquo;s for</h2>
        <p>{service.who}</p>
      </section>

      <CTA />
    </div>
  );
}
