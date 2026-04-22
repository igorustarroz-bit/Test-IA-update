import { cn } from "@/lib/cn";

export interface G05HeaderWidgetTitleProps {
  title: string;
  subtitle?: string;
  showSubtitle?: boolean;
  /** Tighter padding when rendered inline on a page (no pt-12). */
  compact?: boolean;
  className?: string;
}

/**
 * G05 – Header Widget Title
 * Port of Figma `G05-Header Widget Title` (node 12088:14521 / 12112:5296).
 *
 * Spec:
 *   - Block padding pt-12 (112) · pb-09 (56) (default) — or compact: pt-0 pb-06
 *   - Title Heading/S (32/40, -0.5 letter) in text-text-high
 *   - Optional subtitle Paragraph/M (14/18) in text-text-mid
 *   - Gap 06 between title and subtitle
 */
export function G05HeaderWidgetTitle({
  title,
  subtitle,
  showSubtitle = true,
  compact = false,
  className,
}: G05HeaderWidgetTitleProps) {
  return (
    <div
      data-node-id="12088:14521"
      data-name="G05-Header Widget Title"
      className={cn(
        "flex items-start w-full",
        compact ? "pt-0 pb-06" : "pt-12 pb-09",
        className,
      )}
    >
      <div className="flex-1 flex flex-col gap-06 min-w-0 max-w-[661px]">
        <h1 className="text-h-s text-text-high w-full">{title}</h1>
        {showSubtitle && subtitle ? (
          <p className="text-p-m text-text-mid w-full">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
