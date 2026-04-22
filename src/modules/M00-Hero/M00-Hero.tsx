import { useRef, useState, type FormEvent } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { cn } from "@/lib/cn";

export interface M00HeroProps {
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  /** Keyboard shortcut hint rendered on the right (e.g. "⌘ K"). Set to null to hide. */
  shortcut?: string | null;
  /** Called with the current value on submit (Enter). */
  onSubmit?: (value: string) => void;
  defaultValue?: string;
  className?: string;
}

/**
 * M00 – Generic hero with search
 * Faithful port of Figma `G8-generic_hero_search`
 * (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4, node 12093:7946).
 *
 * Spec from Figma variables:
 *   - Section  : bg `background/base` in Dark Base (always-dark = #000),
 *                padding top 112 (spacing-12), bottom 56 (spacing-9).
 *   - Container: 1120 wide (12 Cols), flex column gap 24, padding-right 112.
 *   - Heading  : Heading/L (Poppins Regular 60/72/-1.5), text/high on dark → white,
 *                width 710 (8to12Cols).
 *   - Body     : Paragraph/M (14/18/0), text/mid on dark → #cbcbcb, width 552 (6to12Cols).
 *   - Search   : Input, bg white, 1px border #cbcbcb, radius-m (4), padding 16,
 *                gap 12, icon-search 16, placeholder Paragraph/M #666,
 *                optional "⌘ K" shortcut chip. Width 552.
 */
export function M00Hero({
  title = "Q&A Categories",
  description = "Ask questions, get answers and engage with your peers",
  searchPlaceholder = "Search all community",
  shortcut = "⌘ K",
  onSubmit,
  defaultValue = "",
  className,
}: M00HeroProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(defaultValue);

  useGSAP((gsap) => {
    if (!rootRef.current) return;
    const targets = rootRef.current.querySelectorAll<HTMLElement>("[data-reveal]");
    gsap.from(targets, {
      y: 16,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.08,
    });
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.(value);
  }

  return (
    <section
      ref={rootRef}
      aria-labelledby="m00-hero-title"
      data-node-id="12093:7946"
      data-name="G8-generic_hero_search"
      className={cn(
        // Dark section – Figma uses `background/base` under Dark Base (= always-dark #000).
        "w-full bg-bg-always-dark",
        // pt spacing-12 (112), pb spacing-9 (56)
        "pt-12 pb-09",
        "flex flex-col items-center justify-center",
        className,
      )}
    >
      <div
        data-name="container"
        // Container: 1120 wide, gap 24 between items, pr spacing-12 on ≥ m breakpoint.
        className={cn(
          "w-full max-w-[1120px] px-04 s:px-06 m:pr-12",
          "flex flex-col items-start gap-06",
        )}
      >
        <h1
          id="m00-hero-title"
          data-reveal
          // Heading/L = text-h-l (60/72/-1.5). Capped at 710px to match Figma.
          className="text-text-always-light text-h-l max-w-[710px] font-normal"
        >
          {title}
        </h1>

        <p
          data-reveal
          // Paragraph/M (14/18). Text/mid in dark = #cbcbcb → grey-40 token.
          className="text-grey-40 text-p-m max-w-[552px]"
        >
          {description}
        </p>

        <form
          data-reveal
          data-name="Search"
          role="search"
          onSubmit={handleSubmit}
          onClick={() => inputRef.current?.focus()}
          className={cn(
            // Max width matches Figma (552). Full-width below m breakpoint.
            "w-full max-w-[552px]",
            // Input: bg white, 1px border border-mid (#cbcbcb), radius-m (4px), p 16 (spacing-04), gap 12 (spacing-03)
            "bg-grey-white border border-grey-40 rounded-m",
            "p-04 flex items-center gap-03",
            // Soft focus ring using DS blue.
            "focus-within:ring-2 focus-within:ring-blue-celonis-50 focus-within:ring-offset-0",
            "transition-colors cursor-text",
          )}
        >
          {/* icon-search 16×16, stroked magnifier */}
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            width={16}
            height={16}
            className="shrink-0 text-grey-70"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth={1.33}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={7.33} cy={7.33} r={4.67} />
              <path d="M13.33 13.33 10.63 10.63" />
            </g>
          </svg>

          <label htmlFor="m00-hero-search" className="sr-only">
            {searchPlaceholder}
          </label>
          <input
            id="m00-hero-search"
            ref={inputRef}
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={searchPlaceholder}
            // Paragraph/M, placeholder grey-70 (#666 from Figma `text/mid` in light).
            className={cn(
              "flex-1 min-w-0 bg-transparent outline-none border-0",
              "text-p-m text-grey-100 placeholder:text-grey-70",
            )}
          />

          {shortcut ? (
            <kbd
              aria-hidden
              className="shrink-0 text-p-m text-grey-70 font-normal whitespace-nowrap"
            >
              {shortcut}
            </kbd>
          ) : null}
        </form>
      </div>
    </section>
  );
}
