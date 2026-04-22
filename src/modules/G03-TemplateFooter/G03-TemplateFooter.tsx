import { cn } from "@/lib/cn";

export interface G03TemplateFooterProps {
  poweredByLabel?: string;
  poweredByName?: string;
  codeOfConductLabel?: string;
  codeOfConductHref?: string;
  className?: string;
}

/**
 * G03 – Template footer
 * Port of Figma `G03-template-footer` (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4,
 * node 12088:16551).
 *
 * Spec:
 *   - bg: `background/secondary` (#f5f5f5 in Light Base). `bg-bg-secondary`.
 *   - Centered column, padding-y spacing-gain-11 (80).
 *   - "Powered by Gainsight" row — Paragraph/M, text-mid, brand name slightly heavier.
 *   - "Community Code of Conduct" — Paragraph/M, text-low.
 */
export function G03TemplateFooter({
  poweredByLabel = "Powered by",
  poweredByName = "Gainsight",
  codeOfConductLabel = "Community Code of Conduct",
  codeOfConductHref = "#code-of-conduct",
  className,
}: G03TemplateFooterProps) {
  return (
    <section
      data-node-id="12088:16551"
      data-name="G03-template-footer"
      aria-label="Platform footer"
      className={cn(
        "w-full bg-bg-secondary",
        "py-11", // spacing-gain-11 = 80px
        "flex flex-col items-center justify-center gap-06",
        className,
      )}
    >
      <div className="flex items-center gap-03 text-text-mid">
        <span className="text-p-m">{poweredByLabel}</span>
        <span
          aria-label={poweredByName}
          // Mimic the Gainsight wordmark weight without shipping the vector.
          className="text-h-xxs text-text-mid font-medium tracking-tight"
        >
          {poweredByName}
          <span aria-hidden className="text-text-mid">™</span>
        </span>
      </div>

      <a
        href={codeOfConductHref}
        className={cn(
          "text-p-m text-text-low hover:text-text-mid",
          "underline-offset-2 hover:underline",
          "outline-none focus-visible:underline",
          "transition-colors",
        )}
      >
        {codeOfConductLabel}
      </a>
    </section>
  );
}
