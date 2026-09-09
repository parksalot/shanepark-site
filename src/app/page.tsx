import Link from "next/link";
import TechBanner from "./TechBanner";
import CTA from "@/components/CTA";
import { INDUSTRIES, SERVICES } from "@/lib/content";

export default function Home() {
  return (
    <div className="wrap wrap-wide">
      <section className="hero">
        <h1 className="hero-title">
          Most ad accounts aren&rsquo;t underperforming. They&rsquo;re
          misreporting.
        </h1>
        <p className="hero-lede">
          I run Google, Meta, and Amazon advertising for eCommerce brands that
          want the numbers to be true. That usually starts by finding out what the
          reporting has been getting wrong &mdash; because in every account
          I&rsquo;ve opened in the last two years, something in the measurement
          was broken before anything in the strategy was.
        </p>
        <div className="hero-actions">
          <Link href="/teardown" className="btn btn-primary">
            Request a teardown
          </Link>
          <Link href="/method" className="btn btn-secondary">
            How I work
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What I do</p>
        <div className="rows">
          {SERVICES.map((service) => (
            <div key={service.slug} className="row">
              <p className="row-name">{service.name}</p>
              <div>
                <p className="row-body">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="row-more">
                  {service.navName} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Who I work with</p>
        <div className="rows">
          {INDUSTRIES.map((industry) => (
            <div key={industry.slug} className="row">
              <p className="row-name">{industry.name}</p>
              <div>
                <p className="row-body">{industry.summary}</p>
                <Link href={`/industries/${industry.slug}`} className="row-more">
                  {industry.navName} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Agencies</p>
        <div className="rows">
          <div className="row">
            <p className="row-name">Fractional ad ops</p>
            <div>
              <p className="row-body">
                Agencies are full of good people doing work a machine should be
                doing. I come in for a defined stretch, automate the manual
                reporting and account work, train the team, and leave.
              </p>
              <Link href="/for-agencies" className="row-more">
                For agencies &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TechBanner />
      <CTA />
    </div>
  );
}
