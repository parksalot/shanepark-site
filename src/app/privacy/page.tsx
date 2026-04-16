export default function Privacy() {
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
          Privacy Policy
        </h1>

        <div style={{ fontSize: "var(--text-base)", lineHeight: 1.8, color: "var(--ink-soft)" }}>
          <p style={paragraph}>
            <strong>Last updated:</strong> April 16, 2026
          </p>

          <p style={paragraph}>
            Shane Park Media Group LLC (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates
            shanepark.com and the Client Reporting platform at clients.shanepark.com.
            This policy describes what information we collect, how we use it, and the
            choices you have.
          </p>

          <h2 style={sectionHeading}>Information we collect</h2>

          <p style={paragraph}>
            <strong>Account information.</strong> When you sign in via magic link, we
            collect your email address. We do not use passwords. Login sessions are
            maintained via secure tokens stored in our database and expire after 30 days.
          </p>

          <p style={paragraph}>
            <strong>Advertising platform data.</strong> With your authorization, we access
            data from the following platforms via their official APIs:
          </p>
          <ul style={list}>
            <li style={listItem}>
              <strong>Google Ads</strong> — campaign performance, keywords, search terms,
              ad groups, spend, conversions, and impression share
            </li>
            <li style={listItem}>
              <strong>Google Analytics</strong> — website traffic and conversion data
              associated with your advertising campaigns
            </li>
            <li style={listItem}>
              <strong>Google Tag Manager, Search Console, and Merchant Center</strong> —
              tag configuration, search performance, and product feed data as needed for
              audit and reporting
            </li>
            <li style={listItem}>
              <strong>Shopify</strong> — orders, revenue, customer purchase data (anonymized
              for reporting), discount codes, and source attribution
            </li>
          </ul>

          <p style={paragraph}>
            <strong>Creative assets.</strong> You may upload images, videos, and performance
            data files to the platform. Uploaded files are stored securely and associated
            with your account.
          </p>

          <p style={paragraph}>
            <strong>Activity data.</strong> We log actions taken within the platform — such
            as report views, comments, and edits — to maintain an audit trail and support
            collaboration between team members.
          </p>

          <h2 style={sectionHeading}>How we use your information</h2>
          <ul style={list}>
            <li style={listItem}>
              Generate performance reports and optimization recommendations for your campaigns
            </li>
            <li style={listItem}>
              Produce AI-assisted narrative insights that summarize campaign trends and findings
            </li>
            <li style={listItem}>
              Send you transactional emails — magic link logins and report review notifications
            </li>
            <li style={listItem}>
              Maintain and improve the platform
            </li>
          </ul>
          <p style={paragraph}>
            We do not sell, rent, or share your data with third parties for marketing purposes.
          </p>

          <h2 style={sectionHeading}>Third-party services</h2>
          <p style={paragraph}>
            We use the following third-party services to operate the platform:
          </p>
          <ul style={list}>
            <li style={listItem}>
              <strong>Google OAuth</strong> — authenticates API access to your advertising
              accounts. We store refresh tokens to maintain authorized access.
            </li>
            <li style={listItem}>
              <strong>Shopify OAuth</strong> — authenticates access to your Shopify store
              data. Access tokens are stored securely in our database.
            </li>
            <li style={listItem}>
              <strong>Anthropic (Claude AI)</strong> — processes aggregated campaign data
              to generate narrative analysis. No personally identifiable information is
              sent to Anthropic.
            </li>
            <li style={listItem}>
              <strong>Resend</strong> — delivers transactional emails (magic links,
              review notifications). Only your email address is shared with Resend for
              delivery purposes.
            </li>
            <li style={listItem}>
              <strong>Vercel</strong> — hosts the platform and provides blob storage for
              uploaded creative assets.
            </li>
            <li style={listItem}>
              <strong>Turso</strong> — hosts our database where account data, OAuth tokens,
              audit results, and activity logs are stored.
            </li>
          </ul>
          <p style={paragraph}>
            We do not embed third-party trackers or advertising pixels on our sites.
          </p>

          <h2 style={sectionHeading}>Data retention</h2>
          <ul style={list}>
            <li style={listItem}>
              <strong>Login sessions</strong> expire after 30 days of inactivity.
            </li>
            <li style={listItem}>
              <strong>Magic links</strong> expire 15 minutes after they are sent.
            </li>
            <li style={listItem}>
              <strong>Campaign and reporting data</strong> is retained as long as your
              account is active and you have an ongoing service relationship with us.
            </li>
            <li style={listItem}>
              <strong>Uploaded assets</strong> are retained until you or your account
              manager removes them.
            </li>
          </ul>
          <p style={paragraph}>
            You may request deletion of your data at any time by contacting us. Upon
            account termination, we delete your data within 30 days.
          </p>

          <h2 style={sectionHeading}>Your choices</h2>
          <p style={paragraph}>
            You can revoke our access to your advertising platforms at any time through
            your Google, Shopify, or other platform account settings. Revoking access
            will prevent us from syncing new data but will not automatically delete
            previously synced reports.
          </p>

          <h2 style={sectionHeading}>Contact</h2>
          <p style={paragraph}>
            Questions about this policy? Email{" "}
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
