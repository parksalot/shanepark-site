import Link from "next/link";

const LINKS = [
  { href: "/teardown", label: "Teardown" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/method", label: "Method" },
  { href: "/insights", label: "Insights" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-mark" aria-label="Shane Park, home">
          <span className="nav-mark-badge">SP</span>
          <span className="nav-mark-name">Shane Park</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
