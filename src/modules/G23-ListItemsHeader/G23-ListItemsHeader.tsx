import { cn } from "@/lib/cn";

export interface G23ListItemsHeaderProps {
  title: string;
  sortLabel?: string;
  onSortClick?: () => void;
  className?: string;
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

/**
 * G23 – List items header
 * Port of Figma `G23-list__items--header` (node 12142:6245).
 *
 * Spec:
 *   - bg white, p-06 all around, flex items-start gap-06
 *   - Left title: Heading/XXS (20/28, -0.2) text-text-high
 *   - Right sort pill: "Older first" + chevron-down, gap-02, text-p-m text-text-high
 */
export function G23ListItemsHeader({
  title,
  sortLabel = "Older first",
  onSortClick,
  className,
}: G23ListItemsHeaderProps) {
  return (
    <div
      data-node-id="12142:6245"
      data-name="G23-list__items--header"
      className={cn(
        "w-full bg-bg-base",
        "flex items-start gap-06 p-06",
        className,
      )}
    >
      <div className="flex-1 min-w-0 text-h-xxs text-text-high">{title}</div>
      <button
        type="button"
        onClick={onSortClick}
        aria-label={`Sort: ${sortLabel}`}
        className={cn(
          "inline-flex items-center gap-02",
          "text-p-m text-text-high whitespace-nowrap",
          "outline-none focus-visible:underline underline-offset-2",
          "transition-colors hover:underline",
        )}
      >
        <span>{sortLabel}</span>
        <IconChevronDown />
      </button>
    </div>
  );
}
