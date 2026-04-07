export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh", padding: "48px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <a
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: "#78716C",
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          &larr; Back
        </a>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -1.5,
            marginBottom: 32,
          }}
        >
          Privacy Policy
        </h1>

        <div style={{ fontSize: 15, lineHeight: 1.8, color: "#44403C" }}>
          <p style={{ marginBottom: 20 }}>
            <strong>Last updated:</strong> April 7, 2026
          </p>

          <p style={{ marginBottom: 20 }}>
            Shane Park (&quot;we,&quot; &quot;us&quot;) operates shanepark.com
            and the Client Reporting platform at clients.shanepark.com. This
            policy describes how we handle information.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            What we collect
          </h2>
          <p style={{ marginBottom: 20 }}>
            For client reporting, we access advertising platform data (Google
            Ads, Meta Ads, Shopify) via authorized API connections that you
            grant. This data includes campaign performance metrics such as
            spend, clicks, conversions, and revenue. We do not collect personal
            information about your customers.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            How we use it
          </h2>
          <p style={{ marginBottom: 20 }}>
            Advertising data is used solely to generate performance reports and
            optimization recommendations for your campaigns. We do not sell,
            share, or use your data for any purpose other than providing
            services to you.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Data storage
          </h2>
          <p style={{ marginBottom: 20 }}>
            Campaign data is stored securely and retained only as long as
            needed to provide reporting services. You can request deletion of
            your data at any time by contacting us.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Third-party services
          </h2>
          <p style={{ marginBottom: 20 }}>
            We use Google OAuth to authenticate API access to your advertising
            accounts. We use Vercel for hosting. We do not embed third-party
            trackers or analytics on this site.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Contact
          </h2>
          <p style={{ marginBottom: 20 }}>
            Questions about this policy? Email{" "}
            <a href="mailto:shane.park@gmail.com" style={{ color: "#C4A44A", textDecoration: "underline" }}>
              shane.park@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
