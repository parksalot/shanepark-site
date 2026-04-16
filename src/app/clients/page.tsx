export default function ClientLogin() {
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
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            background: "var(--gold)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--s-6)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--text-lg)",
              color: "var(--ink)",
              letterSpacing: "-0.025em",
            }}
          >
            CR
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "var(--s-2)",
          }}
        >
          Client Reporting
        </h1>

        <p
          style={{
            fontSize: "var(--text-base)",
            color: "var(--warm)",
            marginBottom: "var(--s-10)",
          }}
        >
          Sign in to view your performance reports.
        </p>

        <div
          style={{
            background: "var(--soft)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--s-8) var(--s-6)",
            boxShadow: "var(--shadow-sm)",
            border: "1px solid var(--border)",
          }}
        >
          <label
            style={{
              display: "block",
              textAlign: "left",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              color: "var(--warm)",
              marginBottom: "var(--s-2)",
              fontFamily: "var(--font-display)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
            }}
          >
            Email address
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            disabled
            style={{
              width: "100%",
              padding: "var(--s-3) var(--s-4)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              fontSize: "var(--text-base)",
              fontFamily: "var(--font-body)",
              background: "var(--paper)",
              color: "var(--warm)",
              outline: "none",
              marginBottom: "var(--s-4)",
            }}
          />
          <button
            disabled
            style={{
              width: "100%",
              padding: "var(--s-3)",
              borderRadius: "var(--radius)",
              border: "none",
              background: "var(--ink)",
              color: "var(--paper)",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              cursor: "not-allowed",
              opacity: 0.5,
            }}
          >
            Send magic link
          </button>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--warm)",
              marginTop: "var(--s-4)",
            }}
          >
            Coming soon. Contact your account manager for access.
          </p>
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
        <a href="/" style={{ textDecoration: "underline" }}>
          shanepark.com
        </a>
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
