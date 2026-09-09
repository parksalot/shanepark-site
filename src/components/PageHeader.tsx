export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="ph">
      {eyebrow ? <p className="ph-eyebrow">{eyebrow}</p> : null}
      <h1 className="ph-title">{title}</h1>
      {lede ? <p className="ph-lede">{lede}</p> : null}
    </header>
  );
}
