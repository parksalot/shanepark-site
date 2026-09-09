import Link from "next/link";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <p className="foot-name">Shane Park Media Group</p>
          <p className="foot-note">{SITE.tagline}</p>
        </div>
        <nav className="foot-links" aria-label="Footer">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/method">Method</Link>
          <Link href="/for-agencies">For agencies</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <a href="https://clients.shanepark.com">Client portal</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
