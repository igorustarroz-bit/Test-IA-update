import { cn } from "@/lib/cn";

/* ---------- Types ---------- */

export interface FooterLink {
  label: string;
  href: string;
  /** External link — renders an ↗ icon and opens in a new tab. */
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface G02FooterProps {
  columns?: FooterColumn[];
  language?: { code: string; label?: string };
  country?: { flagEmoji?: string; label: string };
  onLanguageClick?: () => void;
  onCountryClick?: () => void;
  secondaryLinks?: FooterLink[];
  className?: string;
}

/* ---------- Defaults (from Figma node 12088:16552) ---------- */

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "More Celonis",
    links: [
      { label: "Celonis.com",    href: "https://celonis.com",              external: true },
      { label: "Academy",        href: "https://academy.celonis.com",      external: true },
      { label: "Support",        href: "https://support.celonis.com",      external: true },
      { label: "Documentation",  href: "https://docs.celonis.com",         external: true },
      { label: "Developers",     href: "https://developers.celonis.com",   external: true },
      { label: "Marketplace",    href: "https://marketplace.celonis.com",  external: true },
    ],
  },
  {
    title: "Any question?",
    links: [
      { label: "Talk to an expert", href: "#contact", external: true },
      { label: "Support",           href: "#support", external: true },
      { label: "FAQS",              href: "#faq" },
      { label: "Glossary",          href: "#glossary" },
    ],
  },
  {
    title: "Check us in",
    links: [
      { label: "X",        href: "https://x.com/celonis",        external: true },
      { label: "Linkedin", href: "https://linkedin.com/company/celonis", external: true },
      { label: "Youtube",  href: "https://youtube.com/@celonis", external: true },
      { label: "Facebook", href: "https://facebook.com/celonis", external: true },
    ],
  },
];

const DEFAULT_SECONDARY: FooterLink[] = [
  { label: "Trust Center",       href: "#trust" },
  { label: "Imprint",            href: "#imprint" },
  { label: "Disclaimer",         href: "#disclaimer" },
  { label: "Privacy Notice",     href: "#privacy" },
  { label: "Cookies Notice",     href: "#cookies" },
  { label: "Terms & Conditions", href: "#terms" },
];

/* ---------- Icons (inline SVGs to avoid external assets) ---------- */

function IconArrowUpRight({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      aria-hidden
      className="shrink-0 text-text-high"
    >
      <path
        d="M6 14 14 6M7 6h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7.5" />
        <path d="M2.5 10h15M10 2.5c2.5 3 2.5 12 0 15M10 2.5c-2.5 3-2.5 12 0 15" />
      </g>
    </svg>
  );
}

function IconChevronDown({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="m6 8 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFlag({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17V4" />
        <path d="M4 4h10l-2 3.5L14 11H4" fill="currentColor" stroke="none" />
        <path d="M4 4h10l-2 3.5L14 11H4" />
      </g>
    </svg>
  );
}

/* ---------- Celonis "CC" decorative logotype ---------- */

function CelonisMonogram() {
  // Two intersecting rings that echo the Figma vector asset (overlapping Cs).
  // Purely decorative – aria-hidden. Keeps us free of external image fetches.
  return (
    <svg
      viewBox="0 0 640 280"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden
      className="w-full max-w-[640px] h-auto text-border-mid"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="140" cy="140" r="138" />
        <circle cx="340" cy="140" r="138" />
      </g>
      <g stroke="currentColor" strokeWidth="2">
        <line x1="0" y1="140" x2="480" y2="140" />
      </g>
    </svg>
  );
}

/* ---------- Sub-components ---------- */

function LinkRow({ link }: { link: FooterLink }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-02 h-06",
        "text-p-l text-text-high",
        "hover:underline underline-offset-2",
        "outline-none focus-visible:underline",
        "transition-colors",
      )}
    >
      <span>{link.label}</span>
      {link.external ? <IconArrowUpRight /> : null}
    </a>
  );
}

function LanguagePill({
  code,
  onClick,
}: {
  code: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Change language (current: ${code})`}
      className={cn(
        "inline-flex items-center justify-center gap-01",
        "h-08 px-04",
        "bg-bg-inverse text-text-inverse rounded-s",
        "text-p-m",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
        "transition-colors hover:bg-grey-90",
      )}
    >
      <IconGlobe />
      <span>{code}</span>
      <IconChevronDown />
    </button>
  );
}

function CountryPill({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Change country (current: ${label})`}
      className={cn(
        "inline-flex items-center justify-center gap-01",
        "h-08 px-04 min-w-[96px]",
        "bg-bg-inverse text-text-inverse rounded-s",
        "text-p-m",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
        "transition-colors hover:bg-grey-90",
      )}
    >
      <IconFlag />
      <span>{label}</span>
    </button>
  );
}

/* ---------- Module ---------- */

/**
 * G02 – Footer
 * Port of Figma `G02-Footer` (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4,
 * node 12088:16552).
 *
 * Spec:
 *   - bg: background/base (white)
 *   - Padding: pt-11 (80), pb-06 (24), px-09 (56)
 *   - Container 1120 max, gap 56 between top and bottom info
 *   - Top info (row, gap ≈ 137):
 *       · Left:  Celonis "CC" decorative monogram
 *       · Right: 3 link columns, each with a uppercase Paragraph/M title
 *                in text-mid and a stack of Paragraph/L links in text-high
 *                with ↗ icons for external destinations.
 *   - Bottom info (column, gap 16):
 *       · Divider (border-top border-border-low)
 *       · Actions row with language + country pills (bg-bg-inverse, rounded-s)
 *         on the left and a horizontal list of 6 secondary links on the right.
 */
export function G02Footer({
  columns = DEFAULT_COLUMNS,
  language = { code: "EN", label: "English" },
  country = { flagEmoji: "🇪🇸", label: "Spain" },
  onLanguageClick,
  onCountryClick,
  secondaryLinks = DEFAULT_SECONDARY,
  className,
}: G02FooterProps) {
  return (
    <footer
      data-node-id="12088:16552"
      data-name="G02-Footer"
      className={cn(
        "w-full bg-bg-base",
        "pt-11 pb-06 px-04 s:px-09",
        className,
      )}
    >
      <div className="mx-auto max-w-[1120px] flex flex-col gap-09">
        {/* Top info */}
        <div
          className={cn(
            "flex flex-col gap-07",
            "m:flex-row m:items-start m:justify-between m:gap-[80px]",
          )}
          data-name="Top info"
        >
          {/* Monogram */}
          <div className="flex-1 min-w-0 max-w-[642px]">
            <CelonisMonogram />
          </div>

          {/* Lists */}
          <div
            data-name="Lists"
            className="flex flex-wrap items-start gap-06"
          >
            {columns.map((col) => (
              <section
                key={col.title}
                className="flex flex-col gap-03 w-[201px]"
                aria-labelledby={`g02-col-${col.title}`}
              >
                <h4
                  id={`g02-col-${col.title}`}
                  className="text-p-m text-text-mid uppercase tracking-wider"
                >
                  {col.title}
                </h4>
                {col.links.map((link) => (
                  <LinkRow key={link.label} link={link} />
                ))}
              </section>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex flex-col gap-04" data-name="Botom info">
          <hr className="border-0 border-t border-border-low" />

          <div
            className={cn(
              "flex flex-col gap-04",
              "s:flex-row s:items-center s:justify-between",
            )}
            data-name="Actions"
          >
            {/* Language & country pills */}
            <div className="flex items-start gap-04">
              <LanguagePill code={language.code} onClick={onLanguageClick} />
              <CountryPill label={country.label} onClick={onCountryClick} />
            </div>

            {/* Secondary links */}
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-04">
              {secondaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "text-p-m text-text-high whitespace-nowrap",
                    "hover:underline underline-offset-2",
                    "outline-none focus-visible:underline",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
