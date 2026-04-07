export default function ClientLogin() {
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
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            background: "#C4A44A",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#1A1A1A",
              letterSpacing: -1,
            }}
          >
            CR
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            marginBottom: 8,
          }}
        >
          Client Reporting
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#78716C",
            marginBottom: 40,
          }}
        >
          Sign in to view your performance reports.
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <label
            style={{
              display: "block",
              textAlign: "left",
              fontSize: 13,
              fontWeight: 600,
              color: "#78716C",
              marginBottom: 8,
              fontFamily: "'Space Grotesk', sans-serif",
              textTransform: "uppercase",
              letterSpacing: 0.5,
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
              padding: "14px 16px",
              borderRadius: 10,
              border: "1px solid #E5E0DB",
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              background: "#FAFAF8",
              color: "#9CA3AF",
              outline: "none",
              marginBottom: 20,
            }}
          />
          <button
            disabled
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 10,
              border: "none",
              background: "#1A1A1A",
              color: "#F5F0EB",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              cursor: "not-allowed",
              opacity: 0.5,
            }}
          >
            Send magic link
          </button>
          <p
            style={{
              fontSize: 12,
              color: "#9CA3AF",
              marginTop: 16,
            }}
          >
            Coming soon. Contact your account manager for access.
          </p>
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
