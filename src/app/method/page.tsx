import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: { absolute: "The WHY-HOW Method | Shane Park" },
  description:
    "Everyone optimizes the HOW. Almost nobody asks WHY the number reads the way it does. A diagnostic method for advertising accounts.",
  alternates: { canonical: "/method" },
};

const QUESTIONS = [
  {
    q: "Who?",
    a: "Who actually saw this ad, and who converted? Not the audience you selected — the one that showed up. On one account, switching a setting quietly admitted 28 out-of-audience clicks converting at a third of the usual rate.",
  },
  {
    q: "What?",
    a: "What is being counted as a conversion, and is it the thing you get paid for? An account optimizing to email signups instead of applications will look healthy forever while producing nothing.",
  },
  {
    q: "Where?",
    a: "Where did the money go — which placement, which device, which location? A campaign can be perfectly targeted and still spend its budget on mobile app inventory nobody asked for.",
  },
  {
    q: "When?",
    a: "When did it change? Almost every mystery in an ad account has a date attached to it. Find the date and you have usually found the cause.",
  },
];

export default function MethodPage() {
  return (
    <div className="wrap">
      <PageHeader
        eyebrow="Method"
        title="Everyone optimizes the HOW."
        lede="Bids, budgets, creative, bid strategy. That's where the whole industry spends its attention. Almost nobody stops to ask WHY the number reads the way it does — and that question is where the money is."
      />

      <section className="section prose">
        <h2>WHY is the driver. HOW is what you find.</h2>
        <p>
          You don&rsquo;t design the fix. You discover it. Ask why a number
          looks the way it does, and keep asking, and four questions answer
          themselves along the way: who, what, where, and when. Once you have
          those four, the how is obvious &mdash; not because you were clever,
          but because there was only ever one explanation left standing.
        </p>
        <p>
          The reason this matters in advertising specifically is that the
          industry has excellent tools for changing the how and almost none for
          checking the why. You can adjust a bid in four seconds. Nobody hands
          you a button that asks whether the conversion you&rsquo;re bidding
          toward is real.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">The four questions</p>
        <div className="rows">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="row">
              <p className="row-name">{item.q}</p>
              <p className="row-body">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section prose">
        <h2>What it looks like in practice</h2>
        <p>
          A Performance Max campaign stops spending. The reflex is to raise the
          budget, because that is a how you can act on immediately. Ask why
          instead and the questions start answering: it spent 7% of its budget,
          so it isn&rsquo;t budget-limited. What changed? A new product feed.
          When? Four days ago. What did it change? It stripped a custom label
          off 97% of the catalog &mdash; the exact label the campaign was built
          to filter on.
        </p>
        <p>
          Nothing about the fix was clever. It became obvious the moment the
          right question got asked. The budget increase would have burned money
          for a month and taught nobody anything.
        </p>
      </section>

      <section className="section prose">
        <h2>Why I put this on a website</h2>
        <p>
          Because it is the actual difference between a good account and a bad
          one, and because it is the part of the job I would still do if nobody
          paid me. I spent ten years in accounting automating my own job before
          I ever bought an ad. The habit never changed: find out why the number
          is what it is, and the work tells you what to do next.
        </p>
      </section>

      <CTA
        heading="Put it on your account"
        body="A teardown is this method applied to your business, in writing, for a fixed fee."
      />
    </div>
  );
}
