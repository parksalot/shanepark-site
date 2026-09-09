import Link from "next/link";

/** Every page ends here. The teardown is the single front door to the funnel. */
export default function CTA({
  heading = "Start with a teardown",
  body = "Send me your account. I'll tell you what it's actually doing and where the reporting is wrong — before you decide whether to work with me.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="cta">
      <h2 className="cta-heading">{heading}</h2>
      <p className="cta-body">{body}</p>
      <Link href="/teardown" className="btn btn-primary">
        Request a teardown
      </Link>
    </section>
  );
}
