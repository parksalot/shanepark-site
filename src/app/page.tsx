export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--s-12) var(--s-6)",
      }}
    >
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            background: "var(--gold)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--s-8)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-xl)",
              color: "var(--ink)",
              letterSpacing: "-0.025em",
            }}
          >
            SP
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-3xl)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "var(--s-4)",
          }}
        >
          Shane Park
        </h1>

        <p
          style={{
            fontSize: "var(--text-md)",
            color: "var(--warm)",
            lineHeight: 1.6,
            marginBottom: "var(--s-12)",
          }}
        >
          Digital advertising strategy, campaign management, and performance
          reporting for brands that want clarity on where their money goes.
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--s-4)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:shane.park@gmail.com"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "var(--s-3) var(--s-6)",
              borderRadius: "var(--radius)",
              letterSpacing: "0.02em",
            }}
          >
            Get in touch
          </a>
          <a
            href="https://clients.shanepark.com"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              background: "var(--soft)",
              color: "var(--ink)",
              padding: "var(--s-3) var(--s-6)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              letterSpacing: "0.02em",
            }}
          >
            Client portal
          </a>
        </div>
      </div>

      <footer
        style={{
          position: "absolute",
          bottom: "var(--s-8)",
          display: "flex",
          gap: "var(--s-6)",
          fontSize: "var(--text-sm)",
          color: "var(--warm)",
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
