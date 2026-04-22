import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ---------- Types ---------- */

export interface G26CheckboxItem {
  kind: "checkbox";
  label: string;
  count: number;
  value?: string;
  checked?: boolean;
}

export interface G26ChevronItem {
  kind: "chevron";
  label: string;
  count: number;
  value?: string;
  onExpand?: () => void;
}

export type G26Item = G26CheckboxItem | G26ChevronItem;

export interface G26Panel {
  id: string;
  title: string;
  icon?: ReactNode;
  initiallyOpen?: boolean;
  items: G26Item[];
}

export interface G26FiltersProps {
  heading?: string;
  clearLabel?: string;
  onClear?: () => void;
  panels?: G26Panel[];
  className?: string;
}

/* ---------- Icons ---------- */

function IconGlobe({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevron({ direction = "down", size = 20 }: { direction?: "down" | "up"; size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d={direction === "down" ? "m6 8 4 4 4-4" : "m6 12 4-4 4 4"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Defaults ---------- */

const DEFAULT_PANELS: G26Panel[] = [
  {
    id: "topic-type",
    title: "Topic type",
    initiallyOpen: true,
    items: [
      { kind: "checkbox", label: "Question",        count: 677 },
      { kind: "checkbox", label: "Article",         count: 43 },
      { kind: "checkbox", label: "Conversation",    count: 4 },
      { kind: "checkbox", label: "Product updates", count: 435 },
      { kind: "checkbox", label: "Events",          count: 345 },
    ],
  },
  {
    id: "community-category",
    title: "Community category",
    initiallyOpen: true,
    items: [
      { kind: "chevron", label: "Learner corner",              count: 37 },
      { kind: "chevron", label: "OBSOLETE",                    count: 35 },
      { kind: "chevron", label: "Product Q&A",                 count: 45 },
      { kind: "chevron", label: "Welcome to the Community",    count: 743 },
    ],
  },
  {
    id: "knowledge-base",
    title: "Knowledge base category",
    initiallyOpen: true,
    items: [
      { kind: "chevron", label: "Operational Playbooks",        count: 5 },
      { kind: "chevron", label: "Resources for Your Initiative", count: 65 },
      { kind: "chevron", label: "Resources for Your Process",    count: 345 },
    ],
  },
  {
    id: "tag",
    title: "Tag",
    initiallyOpen: true,
    items: [
      { kind: "checkbox", label: "Product - Tech Chat",        count: 67 },
      { kind: "checkbox", label: "Studio",                      count: 56 },
      { kind: "checkbox", label: "Process Mining & PQL",        count: 5 },
      { kind: "checkbox", label: "Product Updates & Releases", count: 346 },
      { kind: "checkbox", label: "Best Practice & Strategy",   count: 46 },
    ],
  },
];

/* ---------- Sub-components ---------- */

function CheckboxItem({ item }: { item: G26CheckboxItem }) {
  const [checked, setChecked] = useState<boolean>(Boolean(item.checked));
  return (
    <label
      data-name="G26-item--checkbox"
      className={cn(
        "w-full flex items-center gap-03",
        "cursor-pointer select-none",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-flex items-center justify-center shrink-0",
          "w-[22px] h-[22px] rounded-s",
          "border border-border-mid bg-bg-base",
          "transition-colors",
          checked && "bg-bg-inverse border-bg-inverse text-text-inverse",
        )}
      >
        {checked ? (
          <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden>
            <path
              d="m3.5 8.5 3 3 6-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="flex-1 min-w-0 text-p-l text-text-mid truncate">{item.label}</span>
      <span className="shrink-0 text-p-m text-text-mid tabular-nums">{item.count}</span>
    </label>
  );
}

function ChevronItem({ item }: { item: G26ChevronItem }) {
  return (
    <button
      type="button"
      onClick={item.onExpand}
      data-name="G26-item--chevron"
      className={cn(
        "w-full flex items-center gap-03",
        "text-left outline-none focus-visible:underline underline-offset-2",
      )}
    >
      <span className="shrink-0 text-text-high">
        <IconChevron direction="down" />
      </span>
      <span className="flex-1 min-w-0 text-p-m text-text-high truncate">{item.label}</span>
      <span className="shrink-0 text-p-m text-text-mid tabular-nums">{item.count}</span>
    </button>
  );
}

function FilterPanel({ panel }: { panel: G26Panel }) {
  const [open, setOpen] = useState<boolean>(panel.initiallyOpen ?? true);
  return (
    <section
      data-name="G26-panel"
      className="w-full flex flex-col pt-06 pb-07 px-06"
    >
      <header className="w-full flex flex-col gap-06">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={cn(
            "w-full flex items-center gap-03",
            "outline-none focus-visible:underline underline-offset-2",
          )}
        >
          <span className="shrink-0 text-text-high">
            {panel.icon ?? <IconGlobe />}
          </span>
          <span className="flex-1 min-w-0 text-p-l text-text-high text-left">{panel.title}</span>
          <span className="shrink-0 text-text-high">
            <IconChevron direction={open ? "up" : "down"} />
          </span>
        </button>

        {open ? (
          <ul className="w-full flex flex-col gap-06">
            {panel.items.map((item, i) =>
              item.kind === "checkbox" ? (
                <li key={`${panel.id}-${i}`}>
                  <CheckboxItem item={item} />
                </li>
              ) : (
                <li key={`${panel.id}-${i}`}>
                  <ChevronItem item={item} />
                </li>
              ),
            )}
          </ul>
        ) : null}
      </header>
    </section>
  );
}

/* ---------- Module ---------- */

/**
 * G26 – Filters
 * Port of Figma `G26-Filters` (node 12142:6830 / 12142:7093).
 *
 * Spec:
 *   - bg-bg-secondary, rounded-m, w-362 (on m+)
 *   - Header row p-06: "Filters" (text-h-xxs) flex-1 + "Clear all" (text-p-m text-text-mid)
 *   - Divider (border-t border-border-low)
 *   - N accordion panels (pt-06 pb-07 px-06) separated by dividers.
 *     · Panel header: icon + title (text-p-l) + chevron
 *     · Checkbox item: 22×22 box + label (text-p-l text-text-mid) + count (text-p-m text-text-mid)
 *     · Chevron item:  chevron + label (text-p-m text-text-high) + count
 */
export function G26Filters({
  heading = "Filters",
  clearLabel = "Clear all",
  onClear,
  panels = DEFAULT_PANELS,
  className,
}: G26FiltersProps) {
  return (
    <aside
      data-node-id="12142:6830"
      data-name="G26-Filters"
      className={cn(
        "w-full bg-bg-secondary rounded-m",
        "flex flex-col",
        className,
      )}
    >
      {/* Header */}
      <div className="w-full flex items-center gap-06 p-06">
        <h2 className="flex-1 min-w-0 text-h-xxs text-text-high">{heading}</h2>
        <button
          type="button"
          onClick={onClear}
          className={cn(
            "text-p-m text-text-mid whitespace-nowrap",
            "outline-none focus-visible:underline underline-offset-2",
            "transition-colors hover:text-text-high",
          )}
        >
          {clearLabel}
        </button>
      </div>

      {/* Panels with dividers */}
      {panels.map((p, i) => (
        <div key={p.id}>
          <div aria-hidden className="w-full border-t border-border-low" />
          <FilterPanel panel={p} />
          {i === panels.length - 1 ? (
            <div aria-hidden className="w-full border-t border-border-low" />
          ) : null}
        </div>
      ))}
    </aside>
  );
}
