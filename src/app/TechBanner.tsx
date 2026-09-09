const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Advertising & commerce",
    items: [
      "Google Ads",
      "Meta Ads",
      "Amazon Ads",
      "Shopify",
      "Merchant Center",
      "Seller Central",
      "Klaviyo",
    ],
  },
  {
    label: "Measurement",
    items: [
      "GA4",
      "Google Tag Manager",
      "Search Console",
      "Server-side CAPI",
      "Call tracking",
    ],
  },
  {
    label: "Built with",
    items: [
      "Next.js",
      "TypeScript",
      "Turso",
      "Drizzle",
      "Vercel",
      "Claude API",
      "Google Ads API",
      "Meta Marketing API",
    ],
  },
];

/**
 * The track repeats the list COPIES times and scrolls by exactly one copy, so the
 * loop is seamless. It needs four rather than two because the shortest row is
 * narrower than the banner — with two copies the tail of the loop showed a gap.
 */
const COPIES = [0, 1, 2, 3];
export default function TechBanner() {
  return (
    <section aria-label="Tools and platforms" className="tech-banner">
      {GROUPS.map((group) => (
        <div key={group.label} className="tech-row">
          <h2 className="tech-row-label">{group.label}</h2>
          <div className="tech-track-mask">
            <ul className="tech-track">
              {COPIES.map((copy) => (
                <li key={copy} className="tech-track-copy" aria-hidden={copy !== 0}>
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">
                      {item}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
