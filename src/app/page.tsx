export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            background: "#C4A44A",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: "#1A1A1A",
              letterSpacing: -1,
            }}
          >
            SP
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Shane Park
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#78716C",
            lineHeight: 1.6,
            marginBottom: 48,
          }}
        >
          Digital advertising strategy, campaign management, and performance
          reporting for brands that want clarity on where their money goes.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:shane.park@gmail.com"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              background: "#1A1A1A",
              color: "#F5F0EB",
              padding: "14px 28px",
              borderRadius: 10,
              letterSpacing: 0.3,
            }}
          >
            Get in touch
          </a>
          <a
            href="https://clients.shanepark.com"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              background: "#fff",
              color: "#1A1A1A",
              padding: "14px 28px",
              borderRadius: 10,
              border: "1px solid #E5E0DB",
              letterSpacing: 0.3,
            }}
          >
            Client portal
          </a>
        </div>
      </div>

      <footer
        style={{
          position: "absolute",
          bottom: 32,
          display: "flex",
          gap: 24,
          fontSize: 13,
          color: "#9CA3AF",
        }}
      >
        <a href="/privacy" style={{ textDecoration: "underline" }}>
          Privacy
        </a>
        <a href="/terms" style={{ textDecoration: "underline" }}>
          Terms
        </a>
      </footer>
    </div>
  );
}
