export default function Terms() {
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
          Terms of Service
        </h1>

        <div style={{ fontSize: 15, lineHeight: 1.8, color: "#44403C" }}>
          <p style={{ marginBottom: 20 }}>
            <strong>Last updated:</strong> April 7, 2026
          </p>

          <p style={{ marginBottom: 20 }}>
            These terms govern your use of shanepark.com and the Client
            Reporting platform at clients.shanepark.com, operated by Shane Park Media Group LLC.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Services
          </h2>
          <p style={{ marginBottom: 20 }}>
            We provide digital advertising management and performance reporting
            services. Access to the client portal is provided to active clients
            via invitation. Reports reflect data from advertising platforms you
            have authorized us to access.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Your data
          </h2>
          <p style={{ marginBottom: 20 }}>
            You retain ownership of all advertising account data. By granting
            API access, you authorize us to read campaign performance data for
            the purpose of generating reports and recommendations. You may
            revoke this access at any time through your advertising platform
            settings.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Accuracy
          </h2>
          <p style={{ marginBottom: 20 }}>
            Reports are generated from platform-provided data and AI-assisted
            analysis. While we strive for accuracy, we do not guarantee that
            reports are free from errors. Advertising metrics are subject to
            platform reporting delays and adjustments.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Limitation of liability
          </h2>
          <p style={{ marginBottom: 20 }}>
            Our services are provided as-is. We are not liable for advertising
            performance outcomes, platform API changes, or data discrepancies
            originating from third-party platforms.
          </p>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, margin: "32px 0 12px" }}>
            Contact
          </h2>
          <p style={{ marginBottom: 20 }}>
            Questions? Email{" "}
            <a href="mailto:shane@shanepark.com" style={{ color: "#C4A44A", textDecoration: "underline" }}>
              shane@shanepark.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
