import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { INSIGHTS, SITE } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

/** Only published posts get a route. A planned post has no page to serve. */
export function generateStaticParams() {
  return INSIGHTS.filter((i) => i.published).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug && i.published);
  if (!insight) return {};
  return {
    title: { absolute: `${insight.title} | Shane Park` },
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.description,
      publishedTime: insight.published?.date,
    },
  };
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug && i.published);
  if (!insight?.published) notFound();
  const post = insight.published;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: insight.title,
        description: insight.description,
        datePublished: post.date,
        author: { "@type": "Person", name: SITE.name, url: SITE.url },
        mainEntityOfPage: `${SITE.url}/insights/${insight.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader eyebrow="Insight" title={insight.title} />

      <section className="section answer">
        <p className="answer-label">Short answer</p>
        <p className="answer-body">{post.answer}</p>
      </section>

      {post.sections.map((section) => (
        <section key={section.heading} className="section prose">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="section prose">
        <h2>Common questions</h2>
        {post.faq.map((item) => (
          <div key={item.q} className="faq">
            <p className="faq-q">{item.q}</p>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="section prose">
        <p>
          More of these on the{" "}
          <Link href="/insights" className="link">
            insights index
          </Link>
          , or read{" "}
          <Link href="/method" className="link">
            how I work through a problem like this
          </Link>
          .
        </p>
      </section>

      <CTA
        heading="Want me to check yours?"
        body="A teardown reconciles your platforms and tells you which of these is happening in your account."
      />
    </div>
  );
}
