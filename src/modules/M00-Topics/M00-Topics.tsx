import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Input } from "@/components/Input/Input";
import { G23ListItemsHeader } from "@/modules/G23-ListItemsHeader/G23-ListItemsHeader";
import { G13ArticleTopic } from "@/modules/G13-ArticleTopic/G13-ArticleTopic";
import { G26Filters, type G26Panel } from "@/modules/G26-Filters/G26-Filters";

/* ---------- Types ---------- */

export interface TopicEntry {
  id: string;
  title: string;
  author: string;
  group: string;
  time: string;
  body?: ReactNode;
  href?: string;
}

export interface TopicLabel {
  id: string;
  label: string;
  count: number;
}

export interface M00TopicsProps {
  searchPlaceholder?: string;
  labels?: TopicLabel[];
  activeLabelId?: string;
  onLabelChange?: (id: string) => void;
  listTitle?: string;
  sortLabel?: string;
  onSortClick?: () => void;
  topics?: TopicEntry[];
  filterPanels?: G26Panel[];
  className?: string;
}

/* ---------- Icons ---------- */

function IconSearch({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden className="shrink-0">
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="m11 11 3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Defaults ---------- */

const DEFAULT_LABELS: TopicLabel[] = [
  { id: "all",          label: "All Results",   count: 4429 },
  { id: "community",    label: "Community",     count: 4004 },
  { id: "academy",      label: "Academy",       count: 402 },
  { id: "documentation",label: "Documentation", count: 23 },
];

const DEFAULT_BODY =
  "A preview of the details to question being asked";

const DEFAULT_TOPICS: TopicEntry[] = [
  {
    id: "1",
    title: "Hot Topic: There is no AI without PI.",
    author: "ilkim.sen11",
    group: "Celonis Academy Group",
    time: "8 days ago",
    body: DEFAULT_BODY,
  },
  {
    id: "2",
    title: "Welcome to the Celonis Community: Your First Steps 👋",
    author: "Just in Time",
    group: "Got a general question?",
    time: "2 months ago",
    body: DEFAULT_BODY,
  },
  {
    id: "3",
    title: "How to calculate throughput time with PQL",
    author: "maria.b",
    group: "Process Mining & PQL",
    time: "3 hours ago",
    body: DEFAULT_BODY,
  },
  {
    id: "4",
    title: "Studio: reusable dashboard components",
    author: "alex.k",
    group: "Studio",
    time: "1 day ago",
    body: DEFAULT_BODY,
  },
  {
    id: "5",
    title: "Best Practices for Change Management",
    author: "sam.r",
    group: "Best Practice & Strategy",
    time: "5 days ago",
    body: DEFAULT_BODY,
  },
];

/* ---------- Module ---------- */

/**
 * M00 – Topics
 * Port of Figma Tag-List page body (node 12142:5740 / 12142:5743).
 *
 * Layout (m+):
 *   - Container max-w 1120 centered, 56px side padding
 *   - Search bar (pt-08)
 *   - Label pills row (py-08, flex-wrap gap-02)
 *   - Two-column grid 710 / 362 with gap-09:
 *       · Left: G23 header "N Topics" + G13 article rows separated by dividers
 *       · Right: G26 Filters (sticky on m+)
 */
export function M00Topics({
  searchPlaceholder = "Search...",
  labels = DEFAULT_LABELS,
  activeLabelId: controlledActive,
  onLabelChange,
  listTitle,
  sortLabel = "Older first",
  onSortClick,
  topics = DEFAULT_TOPICS,
  filterPanels,
  className,
}: M00TopicsProps) {
  const [internalActive, setInternalActive] = useState<string>(labels[0]?.id ?? "");
  const activeLabelId = controlledActive ?? internalActive;

  const totalCount = labels.find((l) => l.id === activeLabelId)?.count ?? topics.length;
  const computedTitle = listTitle ?? `${totalCount.toLocaleString("en-US")} Topics`;

  return (
    <section
      data-node-id="12142:5743"
      data-name="M00-Topics"
      className={cn(
        "w-full bg-bg-base",
        "px-04 s:px-09",
        className,
      )}
    >
      <div className="mx-auto max-w-[1120px] flex flex-col">
        {/* Search */}
        <div data-name="Search" className="w-full pt-08">
          <Input
            placeholder={searchPlaceholder}
            inputSize="md"
            leading={<IconSearch />}
            aria-label="Search topics"
          />
        </div>

        {/* Labels row */}
        <div
          data-name="Labels"
          className="w-full py-08 flex flex-wrap items-center gap-02"
        >
          {labels.map((l) => {
            const isActive = l.id === activeLabelId;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => {
                  setInternalActive(l.id);
                  onLabelChange?.(l.id);
                }}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-01",
                  "h-[32px] px-02 rounded-s",
                  "text-p-s whitespace-nowrap",
                  "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-1",
                  isActive
                    ? "bg-bg-inverse text-text-inverse"
                    : "bg-bg-secondary text-text-mid hover:text-text-high",
                )}
              >
                <span>{l.label}</span>
                <span className="opacity-80">({l.count.toLocaleString("en-US")})</span>
              </button>
            );
          })}
        </div>

        {/* Cols */}
        <div
          data-name="Cols"
          className={cn(
            "grid grid-cols-1",
            "m:grid-cols-[710px_362px] m:gap-09",
          )}
        >
          {/* Left col — list */}
          <div data-name="List" className="flex flex-col">
            <G23ListItemsHeader
              title={computedTitle}
              sortLabel={sortLabel}
              onSortClick={onSortClick}
            />
            {topics.map((t, i) => (
              <div key={t.id}>
                <div aria-hidden className="h-0 border-t border-border-low" />
                <G13ArticleTopic
                  title={t.title}
                  author={t.author}
                  group={t.group}
                  time={t.time}
                  body={t.body}
                  href={t.href}
                />
                {i === topics.length - 1 ? (
                  <div aria-hidden className="h-0 border-t border-border-low" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Right col — filters */}
          <aside data-name="Filters" className="flex flex-col pt-06 m:pt-0">
            <div className="m:sticky m:top-[160px]">
              <G26Filters panels={filterPanels} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
