import { useRef, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { cn } from "@/lib/cn";

/* ---------- Types ---------- */

export interface G01TopBarLink {
  label: string;
  href: string;
  /** External link — renders an ↗ icon and opens in a new tab. */
  external?: boolean;
}

export interface G01NavItem {
  label: string;
  href: string;
  active?: boolean;
  /** Small "+" tile next to the label (used on "Overview" in the Figma frame). */
  withPlus?: boolean;
  onPlusClick?: () => void;
}

export interface G01HeaderProps {
  /** Secondary top-bar destinations (default: Support / Academy / Documentation / Marketplace). */
  topLinks?: G01TopBarLink[];
  /** Wordmark shown on the left of the main bar. Defaults to "celonis". */
  logoLabel?: string;
  /** Site name rendered right of the divider. Defaults to "Community". */
  siteName?: string;
  /** Primary nav items (default: Overview / Success Hub / Product Updates / Groups / Events). */
  items?: G01NavItem[];
  /** Label + handler for the primary CTA. */
  primaryCtaLabel?: string;
  onPrimaryClick?: () => void;
  /** Label + handler for the secondary CTA. */
  secondaryCtaLabel?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

/* ---------- Defaults (from Figma node 12088:16494) ---------- */

const DEFAULT_TOP_LINKS: G01TopBarLink[] = [
  { label: "Support",       href: "https://support.celonis.com",       external: true },
  { label: "Academy",       href: "https://academy.celonis.com",       external: true },
  { label: "Documentation", href: "https://docs.celonis.com",          external: true },
  { label: "Marketplace",   href: "https://marketplace.celonis.com",   external: true },
];

const DEFAULT_ITEMS: G01NavItem[] = [
  { label: "Overview",        href: "#overview",        active: true, withPlus: true },
  { label: "Success Hub",     href: "#success-hub" },
  { label: "Product Updates", href: "#product-updates" },
  { label: "Groups",          href: "#groups" },
  { label: "Events",          href: "#events" },
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

function IconPlus({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      aria-hidden
      className="shrink-0 text-text-high"
    >
      <path
        d="M8 3v10M3 8h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMenu({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="M3 6h14M3 10h14M3 14h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="m5 5 10 10M15 5 5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Celonis wordmark (decorative) ---------- */

function CelonisWordmark() {
  // Lowercase "celonis" wordmark — text-based to avoid external assets,
  // sized to ~102×68 per the Figma frame.
  return (
    <span
      className="inline-flex items-center justify-start h-[68px] w-[102px] select-none"
      aria-label="Celonis"
    >
      <span className="text-[22px] leading-none tracking-tight text-text-high font-medium">
        celonis
      </span>
    </span>
  );
}

/* ---------- Module ---------- */

/**
 * G01 – Header
 * Port of Figma `G01-Header` (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4,
 * node 12088:16494).
 *
 * Spec:
 *   - Two stacked bars, both bg-bg-base + border-b border-border-low,
 *     px-09 (56) on the outside, inner content max-w 1120.
 *   - Top bar:
 *       · justify-end · gap-04 · py-04
 *       · 4 external links with ↗ icon, text-p-m (14/18, text-text-high)
 *   - Main bar:
 *       · Content row height 88, items-center, gap-04
 *       · Left: "celonis" wordmark · 1px divider (border-low) · "Community"
 *         in text-h-xs (24/32, Heading/XS)
 *       · Nav items: gap-07, items-end (tab-style), min-h-56, text-p-l
 *         The "Overview" item is marked active and carries a 24x24 plus
 *         button (bg-bg-secondary, rounded-m).
 *       · Right: flex-1 justify-end, gap-04
 *         - Primary CTA: bg-bg-inverse / text-text-inverse, h-10, rounded-s
 *         - Secondary CTA: bg-bg-base + border-mid, text-text-high, rounded-s
 *   - GSAP reveal: subtle y/opacity intro on mount.
 *   - Collapses to a hamburger panel below the s breakpoint.
 */
export function G01Header({
  topLinks = DEFAULT_TOP_LINKS,
  logoLabel = "celonis",
  siteName = "Community",
  items = DEFAULT_ITEMS,
  primaryCtaLabel = "Create post",
  onPrimaryClick,
  secondaryCtaLabel = "Login",
  onSecondaryClick,
  className,
}: G01HeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useGSAP((gsap) => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -16,
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <header
      ref={headerRef}
      data-node-id="12088:16494"
      data-name="G01-Header"
      className={cn(
        "w-full flex flex-col",
        "sticky top-0 z-40",
        className,
      )}
      aria-label={logoLabel}
    >
      {/* Top bar (secondary destinations) */}
      <div
        data-name="M01 - Main Menu · Top"
        className={cn(
          "w-full bg-bg-base border-b border-border-low",
          "px-04 s:px-09",
          "hidden s:flex flex-col items-center justify-center",
        )}
      >
        <div
          data-name="Content"
          className={cn(
            "w-full max-w-[1120px]",
            "flex items-center justify-end gap-04",
            "py-04",
          )}
        >
          {topLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-flex items-center gap-02",
                "text-p-m text-text-high whitespace-nowrap",
                "hover:underline underline-offset-2",
                "outline-none focus-visible:underline",
              )}
            >
              <span>{link.label}</span>
              {link.external ? <IconArrowUpRight /> : null}
            </a>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div
        data-name="M01 - Main Menu"
        className={cn(
          "w-full bg-bg-base border-b border-border-low",
          "px-04 s:px-09",
          "flex items-center justify-center",
        )}
      >
        <div
          className={cn(
            "w-full max-w-[1120px]",
            "flex items-center gap-04",
          )}
        >
          {/* Logo + site + nav items */}
          <div
            data-name="Content"
            className={cn(
              "flex items-center gap-06",
              "s:h-[88px]",
              "min-w-0 flex-1 s:flex-initial",
            )}
          >
            {/* Logo + site name */}
            <a
              href="#home"
              data-name="Logo + site"
              className="flex items-center gap-04 shrink-0"
              aria-label={`${logoLabel} ${siteName}`}
            >
              <CelonisWordmark />
              <div className="flex items-center gap-04 h-[56px]">
                <div
                  aria-hidden
                  className="bg-border-low h-[32px] w-px shrink-0"
                  data-name="Divider"
                />
                <span
                  className={cn(
                    "text-h-xs text-text-high whitespace-nowrap",
                  )}
                >
                  {siteName}
                </span>
              </div>
            </a>

            {/* Primary nav items (desktop) */}
            <nav
              aria-label="Primary"
              data-name="Items"
              className="hidden m:flex items-end gap-07 h-[88px]"
            >
              {items.map((it) => (
                <div
                  key={it.href}
                  data-name="z-fragment-M1-items"
                  className="flex flex-col items-start min-h-[56px]"
                >
                  <div
                    className={cn(
                      "flex items-center gap-02 h-[24px]",
                      "relative",
                    )}
                    data-name="Item"
                  >
                    <a
                      href={it.href}
                      className={cn(
                        "text-p-l text-text-high whitespace-nowrap",
                        "outline-none focus-visible:underline underline-offset-2",
                        "hover:underline",
                        it.active &&
                          "after:absolute after:left-0 after:right-0 after:-bottom-[18px] after:h-[2px] after:bg-text-high",
                      )}
                      aria-current={it.active ? "page" : undefined}
                    >
                      {it.label}
                    </a>
                    {it.withPlus ? (
                      <button
                        type="button"
                        onClick={it.onPlusClick}
                        aria-label={`New ${it.label}`}
                        className={cn(
                          "inline-flex items-center justify-center",
                          "h-[24px] w-[24px] rounded-m",
                          "bg-bg-secondary text-text-high",
                          "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
                          "transition-colors hover:bg-grey-20",
                        )}
                      >
                        <IconPlus />
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* CTAs */}
          <div
            data-name="Buttons"
            className={cn(
              "flex items-center justify-end gap-04",
              "flex-1 min-w-0",
            )}
          >
            <button
              type="button"
              onClick={onPrimaryClick}
              className={cn(
                "hidden s:inline-flex items-center justify-center gap-01",
                "h-[40px] px-04 py-02 rounded-s",
                "bg-bg-inverse text-text-inverse",
                "text-p-m whitespace-nowrap",
                "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
                "transition-colors hover:bg-grey-90",
              )}
            >
              {primaryCtaLabel}
            </button>
            <button
              type="button"
              onClick={onSecondaryClick}
              className={cn(
                "hidden s:inline-flex items-center justify-center gap-01",
                "h-[40px] px-04 py-02 rounded-s",
                "bg-bg-base border border-border-mid text-text-high",
                "text-p-m whitespace-nowrap",
                "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
                "transition-colors hover:bg-bg-secondary",
              )}
            >
              {secondaryCtaLabel}
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              className={cn(
                "s:hidden inline-flex items-center justify-center",
                "h-08 w-08 rounded-m",
                "text-text-high hover:bg-bg-secondary",
                "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
              )}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <div
          className="s:hidden border-b border-border-low bg-bg-base"
          data-name="Mobile panel"
        >
          <div className="flex flex-col gap-03 px-04 py-04">
            <nav aria-label="Primary" className="flex flex-col">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "py-03 border-b border-border-low",
                    "text-p-l text-text-high",
                  )}
                  aria-current={it.active ? "page" : undefined}
                >
                  {it.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-02">
              {topLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-02 text-p-m text-text-high"
                >
                  <span>{link.label}</span>
                  {link.external ? <IconArrowUpRight /> : null}
                </a>
              ))}
            </div>
            <div className="flex gap-02 pt-02">
              <button
                type="button"
                onClick={onPrimaryClick}
                className={cn(
                  "flex-1 inline-flex items-center justify-center",
                  "h-[40px] px-04 rounded-s",
                  "bg-bg-inverse text-text-inverse text-p-m",
                )}
              >
                {primaryCtaLabel}
              </button>
              <button
                type="button"
                onClick={onSecondaryClick}
                className={cn(
                  "flex-1 inline-flex items-center justify-center",
                  "h-[40px] px-04 rounded-s",
                  "bg-bg-base border border-border-mid text-text-high text-p-m",
                )}
              >
                {secondaryCtaLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
