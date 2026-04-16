export default function Terms() {
  const sectionHeading = {
    fontFamily: "var(--font-display)",
    fontSize: "var(--text-lg)",
    fontWeight: 700,
    margin: "var(--s-8) 0 var(--s-3)",
  } as const;

  const paragraph = { marginBottom: "var(--s-4)" } as const;

  const list = {
    marginBottom: "var(--s-4)",
    paddingLeft: "var(--s-6)",
    lineHeight: 1.8,
  } as const;

  const listItem = { marginBottom: "var(--s-2)" } as const;

  return (
    <div style={{ minHeight: "100vh", padding: "var(--s-12) var(--s-6)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-base)",
            color: "var(--warm)",
            display: "inline-block",
            marginBottom: "var(--s-8)",
          }}
        >
          &larr; Back
        </a>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: "var(--s-8)",
          }}
        >
          Terms of Service
        </h1>

        <div style={{ fontSize: "var(--text-base)", lineHeight: 1.8, color: "var(--ink-soft)" }}>
          <p style={paragraph}>
            <strong>Last updated:</strong> April 16, 2026
          </p>

          <p style={paragraph}>
            These terms govern your use of shanepark.com and the Client Reporting
            platform at clients.shanepark.com, operated by Shane Park Media Group LLC
            (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
          </p>

          <h2 style={sectionHeading}>Services</h2>
          <p style={paragraph}>
            We provide digital advertising management, campaign auditing, and
            performance reporting services. The Client Reporting platform allows
            authorized clients to view campaign reports, upload creative assets,
            collaborate via comments, and receive AI-assisted analysis of their
            advertising performance.
          </p>
          <p style={paragraph}>
            Access to the platform is provided to active clients via email invitation.
            Authentication is handled through magic link emails — no passwords are
            required or stored.
          </p>

          <h2 style={sectionHeading}>Platform access and accounts</h2>
          <p style={paragraph}>
            You are responsible for maintaining the security of the email account
            associated with your login. Each magic link is single-use and expires after
            15 minutes. Sessions remain active for 30 days. You agree to notify us
            promptly if you believe your account has been accessed without authorization.
          </p>

          <h2 style={sectionHeading}>Your data</h2>
          <p style={paragraph}>
            You retain ownership of all advertising account data and creative assets you
            provide. By granting API access, you authorize us to:
          </p>
          <ul style={list}>
            <li style={listItem}>
              Read campaign performance data from Google Ads, Google Analytics, Google
              Tag Manager, Google Search Console, Google Merchant Center, and Shopify
            </li>
            <li style={listItem}>
              Process that data to generate reports, audits, and recommendations
            </li>
            <li style={listItem}>
              Send aggregated (non-personally-identifiable) campaign data to AI services
              for narrative analysis
            </li>
            <li style={listItem}>
              Store uploaded creative assets on our behalf for use in reporting
            </li>
          </ul>
          <p style={paragraph}>
            You may revoke API access at any time through your advertising platform
            settings (Google, Shopify, etc.). Revoking access will stop new data syncs
            but will not automatically delete previously generated reports.
          </p>

          <h2 style={sectionHeading}>Uploaded content</h2>
          <p style={paragraph}>
            You may upload images, videos, and data files to the platform. You represent
            that you have the right to upload any content you provide. We store uploaded
            content securely and use it solely for the purpose of delivering reporting
            services to you. Individual files are limited to 100 MB.
          </p>

          <h2 style={sectionHeading}>AI-generated content</h2>
          <p style={paragraph}>
            Certain reports include narrative sections generated with the assistance of
            artificial intelligence (Anthropic Claude). While we review AI-generated
            content for accuracy, these sections are provided for informational purposes
            and should not be treated as professional financial or legal advice.
            AI-generated insights are based on the campaign data available at the time of
            generation and may not reflect subsequent changes.
          </p>

          <h2 style={sectionHeading}>Accuracy and disclaimers</h2>
          <p style={paragraph}>
            Reports are generated from data provided by third-party advertising platforms.
            We do not guarantee that reports are free from errors. Advertising metrics are
            subject to platform reporting delays, data sampling, and retroactive
            adjustments by the source platforms. Revenue and order data synced from
            Shopify reflects the information available via their API and may differ from
            your internal records.
          </p>

          <h2 style={sectionHeading}>Limitation of liability</h2>
          <p style={paragraph}>
            Our services are provided as-is. We are not liable for:
          </p>
          <ul style={list}>
            <li style={listItem}>Advertising performance outcomes or campaign results</li>
            <li style={listItem}>Data discrepancies originating from third-party platforms</li>
            <li style={listItem}>Interruptions caused by API changes, rate limits, or outages at Google, Shopify, or other providers</li>
            <li style={listItem}>Inaccuracies in AI-generated narrative content</li>
            <li style={listItem}>Loss of uploaded content — you are responsible for maintaining your own backups</li>
          </ul>

          <h2 style={sectionHeading}>Termination</h2>
          <p style={paragraph}>
            Either party may terminate the service relationship at any time. Upon
            termination, we will revoke your platform access and delete your data within
            30 days unless you request an earlier deletion. You may request a copy of your
            report data before termination by contacting us.
          </p>

          <h2 style={sectionHeading}>Contact</h2>
          <p style={paragraph}>
            Questions? Email{" "}
            <a href="mailto:shane@shanepark.com" style={{ color: "var(--gold)", textDecoration: "underline" }}>
              shane@shanepark.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
