/**
 * Single source of truth for the site's page content.
 *
 * Client naming policy: DIRECT clients may be named. Work sourced through a
 * partner agency (Diffactory) is described but never named — those are the
 * agency's client relationships, not Shane's, and publishing them is a
 * conversation with the agency owner rather than a copy decision.
 */

export type Industry = {
  slug: string;
  name: string;
  navName: string;
  /** Used on the homepage list and as the meta description seed. */
  summary: string;
  /** <title> for the page. Written for search intent, not for cleverness. */
  title: string;
  description: string;
  problem: string;
  approach: string[];
  clients?: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "subscription-ecommerce",
    name: "Subscription & membership",
    navName: "Subscription",
    summary:
      "Subscription boxes and membership brands, where acquisition gets graded on first-order profit instead of a lifetime value you have not earned yet.",
    title: "Google & Meta Ads for Subscription eCommerce | Shane Park",
    description:
      "Subscription box and membership advertising graded on first-order contribution, not projected lifetime value. Work with MONSTERBASS and Bass365.",
    problem:
      "Subscription businesses get talked into buying customers against a lifetime value they have not earned yet. It looks fine for two quarters and then churn arrives and the math was never real. The other recurring failure is quieter: a product feed changes, the catalog stops being categorized the way the campaigns expect, and spend stops reaching anything that sells.",
    approach: [
      "Grade acquisition on first-order contribution. If the first box does not pay for the customer, that has to be a deliberate decision rather than an accident nobody noticed.",
      "Watch feed integrity as closely as bids. One Merchant Center change unlabeled 97% of a catalog and stalled the best-performing campaign \u2014 it read like a budget problem and was not.",
      "Keep brand and non-brand honest about each other. Shopping and Performance Max will happily take credit for demand that already existed.",
      "Separate real demand from noise. A partner API batch and a bot traffic flood both look like growth on a dashboard, and both will send you optimizing the wrong thing for a month.",
    ],
    clients: "MONSTERBASS. Past work includes Bass365 / Outdoor Playground.",
  },
  {
    slug: "dtc-personal-care",
    name: "DTC personal care & beauty",
    navName: "Personal care",
    summary:
      "Anti-odorant, intimate care, and clean beauty brands selling on Shopify and Amazon at once, where neither dashboard tells the truth alone.",
    title: "Google, Meta & Amazon Ads for DTC Personal Care | Shane Park",
    description:
      "Multi-channel DTC advertising across Shopify, Amazon, Meta, and Google \u2014 with the tracking rebuilt so the numbers reconcile. Work with Surface Deep and Antevorta Laboratories.",
    problem:
      "Sell in two places and every channel starts claiming the same order. Amazon reports one number, Shopify another, Meta a third, and none of them net out to the money in the bank. Meanwhile the reports themselves lie in small ways \u2014 an export that silently omits an ad type, a campaign filter that was never actually filtering.",
    approach: [
      "Rebuild tracking end to end first. Nothing downstream is worth arguing about until the events fire correctly.",
      "Measure paid performance against web-only revenue, not total Shopify. Wholesale and partner batches inflate blended efficiency two to three times over.",
      "Reconcile Amazon separately and re-pull the full series each time \u2014 Amazon restates prior months, and the standard campaign export excludes Sponsored Brands entirely.",
      "Quarantine demand events. A traffic surge with zero orders is not a conversion rate problem, and treating it as one costs you a month.",
    ],
    clients: "Surface Deep. Past work includes Antevorta Laboratories.",
  },
  {
    slug: "apparel-retail-brands",
    name: "Apparel & retail brands",
    navName: "Apparel & retail",
    summary:
      "Boutiques and apparel brands with a real local following, where the online and in-store audiences are the same people and the reporting pretends they are not.",
    title: "Google & Meta Ads for Apparel and Retail Brands | Shane Park",
    description:
      "Advertising for apparel and boutique retail brands growing from local following into national eCommerce. Work with Love Letters and Minimale Animale.",
    problem:
      "Retail brands with a strong local base grow into eCommerce sideways, and the measurement never catches up. Store traffic, online orders, and organic demand from an audience that already loves you all get mixed together, and paid ends up taking credit for sales that would have happened anyway. The infrastructure problem is just as common: assets built and never connected to a campaign.",
    approach: [
      "Separate incremental demand from the demand the brand already had. This is the entire question for a business with a loyal following.",
      "Audit what exists and what it is actually attached to before building anything new \u2014 exclusion lists linked to zero campaigns and location assets that were never targeted are the norm, not the exception.",
      "Make sure the conversions that matter are the ones bidding can see. Local and in-store actions default to excluded more often than anyone expects.",
      "Build creative around the product line that actually carries margin rather than the one with the best photos.",
    ],
    clients: "Past work includes Love Letters and Minimale Animale.",
  },
];

export type Service = {
  slug: string;
  name: string;
  navName: string;
  title: string;
  description: string;
  summary: string;
  lede: string;
  includes: string[];
  who: string;
};

export const SERVICES: Service[] = [
  {
    slug: "google-ads-audit",
    name: "The account teardown",
    navName: "Account teardown",
    title: "Google Ads Audit & Account Teardown | Shane Park",
    description:
      "A fixed-fee forensic audit of your Google Ads account and its tracking. Find out what your reporting is getting wrong before you spend another month on it.",
    summary:
      "A fixed-fee forensic audit. What your account is actually doing, and where the reporting is lying to you.",
    lede:
      "Most audits hand you a checklist of settings. This one starts by asking whether the numbers on your dashboard are true, because in every account I have opened in the last two years, something in the measurement was wrong before anything in the strategy was.",
    includes: [
      "Every conversion action verified — firing, deduplicated, and actually included in bidding. This is where most accounts break.",
      "Search terms segmented by real intent, with the waste quantified in dollars rather than percentages.",
      "Feed and catalog integrity for Shopping and PMax, including the label and filter problems that silently strand inventory.",
      "Cross-channel reconciliation: what the platforms claim versus what landed in the bank.",
      "A prioritized list of changes with the dollar value attached to each, in the order I would ship them.",
    ],
    who: "Best for accounts spending $3,000/month or more, or any account where the numbers have stopped making sense.",
  },
  {
    slug: "tracking-and-measurement",
    name: "Tracking & measurement",
    navName: "Tracking & measurement",
    title: "Conversion Tracking & Measurement Setup | Shane Park",
    description:
      "GA4, Google Tag Manager, server-side conversions, call tracking, and cross-channel reconciliation — built so the numbers agree with reality.",
    summary:
      "GA4, GTM, server-side events, call tracking. Built so the numbers agree with each other and with your bank account.",
    lede:
      "This is the work almost nobody wants to sell you, because it is invisible when it goes right. It is also the reason every other decision you make is either sound or fiction.",
    includes: [
      "GA4 and Google Tag Manager built or rebuilt, with events that mean what their names say.",
      "Server-side conversions where the browser cannot be trusted, including Conversions API for Meta.",
      "Call tracking that proves a connected call happened rather than counting taps on a button.",
      "Attribution reconciled across Google, Meta, Shopify, and Amazon so you know which number to believe.",
      "Documentation, so the next person to touch it does not have to rediscover any of this.",
    ],
    who: "Best for brands selling in more than one place, or anyone whose platforms disagree about the same month.",
  },
  {
    slug: "google-ads-management",
    name: "Ongoing management",
    navName: "Ongoing management",
    title: "Google Ads & Meta Ads Management | Shane Park",
    description:
      "Ongoing paid media management across Google, Meta, and Amazon, graded on contribution dollars rather than platform ROAS.",
    summary:
      "Ongoing management across Google, Meta, and Amazon — graded on contribution dollars, not platform ROAS.",
    lede:
      "One operator on the account, not a pod. You talk to the person doing the work, and the reporting says what happened and what I did about it.",
    includes: [
      "Google, Meta, and Amazon managed together, because the customer does not experience them separately.",
      "Performance graded against your margin, not the platform's favorite metric.",
      "One change at a time on any given campaign, with a stated read date. Stacking three changes means learning nothing from any of them.",
      "A live client portal instead of a monthly PDF — the numbers are current whenever you open it.",
      "Losses reported as plainly as wins.",
    ],
    who: "Best for brands spending $5,000/month or more who want an operator rather than an account manager.",
  },
];

export type InsightSection = { heading: string; paragraphs: string[] };

export type Insight = {
  slug: string;
  title: string;
  description: string;
  /** Search intent this post exists to answer. Keep it literal. */
  question: string;
  /** Published posts carry a body. Planned ones are listed but not routed. */
  published?: {
    date: string;
    /** The direct answer, up top. Search visitors leave if they have to hunt. */
    answer: string;
    sections: InsightSection[];
    /** Rendered as FAQPage structured data as well as on-page copy. */
    faq: { q: string; a: string }[];
  };
};

export const INSIGHTS: Insight[] = [
  {
    slug: "google-ads-conversions-dont-match-ga4",
    title: "Your Google Ads conversions don't match GA4",
    description:
      "The five reasons Google Ads and GA4 disagree about the same conversions, which one to trust, and the one gap that means something is actually broken.",
    question: "Why don't my Google Ads conversions match GA4?",
    published: {
      date: "2026-09-08",
      answer:
        "Usually nothing is broken. Google Ads and GA4 count conversions differently on purpose \u2014 different attribution, different dates, different definitions of a conversion \u2014 so a gap of roughly 10\u201320% is normal and not worth chasing. What matters is which direction the gap runs and whether it moved. A sudden change, or Ads reporting materially more than GA4, is the version worth investigating.",
      sections: [
        {
          heading: "1. They attribute to different dates",
          paragraphs: [
            "This is the biggest single cause and the one most people never hear about. Google Ads credits a conversion to the date of the click that earned it. GA4 credits it to the date the conversion actually happened.",
            "So a click on the 1st that converts on the 20th shows up in Ads under the 1st and in GA4 under the 20th. Compare a single month and the edges are wrong in both directions. This is also why the discrepancy always looks worse in short date ranges and worse still for businesses with a long consideration cycle \u2014 legal, B2B, high-ticket eCommerce.",
            "Before you diagnose anything else, widen the window to 60 or 90 days. A good share of apparent mismatches simply dissolve.",
          ],
        },
        {
          heading: "2. They use different attribution models",
          paragraphs: [
            "GA4 reports on its own attribution model across every channel it can see. Google Ads reports what it believes its own ads earned. When a user arrives from an email, comes back through a paid ad, and converts, the two systems can legitimately assign that order to different places.",
            "Neither is lying. They are answering different questions. GA4 is asking what happened; Google Ads is asking what its ads contributed.",
          ],
        },
        {
          heading: "3. Ads counts every conversion, GA4 counts differently",
          paragraphs: [
            "In Google Ads a conversion action set to count every conversion will record three purchases from the same click as three. Set to one per click, it records one. GA4 is counting events, and an event that fires twice on a confirmation page reload is two events.",
            "Check the counting setting on the conversion action, then check whether the event fires more than once per page. Duplicate firing on order-confirmation pages is common and quietly inflates one side of the comparison.",
          ],
        },
        {
          heading: "4. Conversion windows differ",
          paragraphs: [
            "The click-through conversion window in Google Ads is configurable per action \u2014 30 days, 60, 90. GA4's lookback is set separately. If the two do not match, they cannot agree, and there is no amount of tag debugging that will make them.",
            "This one is worth checking early because it is a two-minute fix that eliminates an entire class of discrepancy.",
          ],
        },
        {
          heading: "5. Consent, ad blockers, and modeled conversions",
          paragraphs: [
            "GA4 only counts what reaches it. Consent banners, ad blockers, and Safari's storage limits all suppress client-side events. Google Ads fills part of that gap with modeled conversions \u2014 estimates for conversions it is confident happened but could not observe directly.",
            "That is a real and defensible difference in methodology, and it usually runs in the direction of Ads reporting more than GA4.",
          ],
        },
        {
          heading: "When it actually is broken",
          paragraphs: [
            "Everything above produces a stable gap. The version worth your attention is a gap that changed. If the two systems tracked each other reliably and then diverged on a specific date, something changed on that date \u2014 a tag deployment, a theme update, a checkout change, a consent tool.",
            "The other genuine failure is a conversion action reporting zero while the thing it measures is plainly happening. I have found a call conversion in a live account that had never fired once, leaving roughly 28% of that business's real leads invisible to bidding. That is not a reconciliation problem. That is bidding optimizing toward a partial picture of the business, and it is worth finding fast.",
            "The practical rule: stop reconciling and start investigating when the gap moves, when it exceeds about 20%, or when a conversion action reads zero.",
          ],
        },
      ],
      faq: [
        {
          q: "How much of a difference between Google Ads and GA4 is normal?",
          a: "Roughly 10 to 20% is normal and expected, because the two systems attribute to different dates and use different attribution models. A gap that suddenly changes size matters far more than a gap that is simply large.",
        },
        {
          q: "Which number should I trust, Google Ads or GA4?",
          a: "For deciding how to bid and where to move budget, use Google Ads \u2014 it is the number the bidding algorithm optimizes against. For understanding how customers actually move across all your channels, use GA4. They answer different questions.",
        },
        {
          q: "Why does Google Ads show more conversions than GA4?",
          a: "Most often because Google Ads includes modeled conversions it could not observe directly, and because it credits conversions to the click date rather than the conversion date. Consent banners and ad blockers also suppress GA4 events that Ads still counts.",
        },
      ],
    },
  },
  {
    slug: "pmax-stopped-spending-after-feed-change",
    title: "PMax stopped spending after a feed change",
    description:
      "How a new Merchant Center primary feed can strip custom labels off an entire catalog and strand the campaigns built on them.",
    question: "Why did Performance Max stop spending?",
  },
  {
    slug: "google-ads-call-tracking-not-recording-calls",
    title: "Your call tracking isn't recording calls",
    description:
      "How to prove whether a Google forwarding number is live, and why call conversions can read zero while the phone is ringing.",
    question: "Why is Google Ads not tracking my phone calls?",
  },
  {
    slug: "negative-keywords-dont-match-close-variants",
    title: "Negative keywords don't match close variants",
    description:
      "Positive keywords match plurals and misspellings. Negatives do not. This asymmetry is invisible in Google's own conflict report.",
    question: "Do negative keywords match close variants?",
  },
  {
    slug: "amazon-sponsored-brands-missing-from-reports",
    title: "Sponsored Brands is missing from your Amazon reports",
    description:
      "The standard campaign export excludes Sponsored Brands, which means most Amazon history is understated by roughly 12%.",
    question: "Why is my Amazon ad spend lower in reports than in the console?",
  },
  {
    slug: "roas-looks-fine-but-youre-losing-money",
    title: "Your ROAS looks fine and you're losing money",
    description:
      "Why break-even ROAS depends on your margin, and what happens when a marketplace takes 30% before you see a dollar.",
    question: "What is a good ROAS?",
  },
];

/**
 * The agency-facing offer. FRACTIONAL ADVISORY, not white-label execution: short
 * engagements that transfer knowledge and end.
 *
 * ⛔ Tone rule: agencies are not the problem in this copy. Every symptom is a
 * structural consequence of growing, never a competence failure — the whole pitch
 * is "you're short on leverage, not talent." Do not write a line that would make
 * an agency owner defensive reading it in front of their team.
 */
export const AGENCY = {
  audience:
    "I work with agencies running lead generation or eCommerce accounts — the two models where reporting volume scales faster than the team does.",
  symptoms: [
    "Reporting that grew one client at a time until the first week of every month belongs to it.",
    "Tooling that made sense at every individual decision and overlaps once you lay it all out.",
    "Account work that has to happen weekly, is genuinely repetitive, and still has a person's name on it.",
    "Process that lives in your best people's heads, which works right up until they're busy.",
    "Platform numbers that don't reconcile, so client calls get spent defending data instead of discussing strategy.",
    "Account-level profitability that takes a day of digging to answer, so nobody asks it often.",
  ],
  engagement: [
    "We start by finding where the hours actually go. Not where anyone assumes they go — where they go.",
    "I automate the parts that don't need judgment: reporting, data pulls, the recurring account checks.",
    "I document it and train your team on it, because the point is that it keeps working after I leave.",
    "Then I leave. Sixty to ninety days is normal. If it runs to a year, one of us did this wrong.",
  ],
  proof:
    "Ten years working inside another agency's accounts, a paid engagement repositioning a marketing firm into a brand agency, and a reporting platform I built for my own clients because assembling those decks by hand was making me insane.",
} as const;

export const SITE = {
  name: "Shane Park",
  url: "https://shanepark.com",
  tagline: "Paid media and the measurement underneath it.",
  email: "shane.park@gmail.com",
} as const;
