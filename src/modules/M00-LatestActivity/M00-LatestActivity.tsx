import { useRef, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/Avatar/Avatar";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";
import { Link } from "@/components/Link/Link";

/* ---------- Types ---------- */

export interface TopicBlock {
  id: string;
  status: "new-participant" | "just-in-time" | "answered" | "open";
  statusLabel?: string;
  tagLabel?: string;
  categoryLabel?: string;
  categoryHref?: string;
  title: string;
  preview: string;
  likes: number;
  comments: number;
  views: number;
  lastActor?: { name: string; src?: string };
  postedAt: string;
  author: { name: string; src?: string };
}

export interface EventItem {
  id: string;
  month: string; // "JUN"
  day: string;   // "12"
  title: string;
  time: string;  // "0:00-1:00"
}

export interface AwardedBadge {
  id: string;
  userName: string;
  badgeName: string;
  badgeSrc?: string;
}

export interface M00LatestActivityProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  topics?: TopicBlock[];
  showMoreLabel?: string;
  onShowMore?: () => void;
  events?: EventItem[];
  tags?: string[];
  awardedBadges?: AwardedBadge[];
  onEventsShowMore?: () => void;
  onBadgesShowMore?: () => void;
  className?: string;
}

/* ---------- Defaults ---------- */

const DEFAULT_TOPICS: TopicBlock[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `t${i + 1}`,
  status: "new-participant" as const,
  statusLabel: "New participant",
  tagLabel: "Just in Time",
  categoryLabel: "Got a general question?",
  categoryHref: "#",
  title: "Question or topic headline goes here so people can read it",
  preview: "A preview of the details to question being asked",
  likes: 0,
  comments: 5,
  views: 5,
  lastActor: { name: "Ada Lovelace", src: `https://i.pravatar.cc/80?img=${47 - i}` },
  postedAt: "9 hours ago",
  author: { name: "Sylwia Ganiec", src: `https://i.pravatar.cc/160?img=${32 + i}` },
}));

const DEFAULT_EVENTS: EventItem[] = [
  { id: "e1", month: "JUN", day: "12", title: "City Collab New York",   time: "0:00-1:00" },
  { id: "e2", month: "JUN", day: "15", title: "Konzerthaus Berlin",     time: "0:00-1:00" },
  { id: "e3", month: "JUN", day: "25", title: "City Collab New York",   time: "0:00-1:00" },
  { id: "e4", month: "JUN", day: "30", title: "Konzerthaus Berlin",     time: "0:00-1:00" },
];

const DEFAULT_TAGS: string[] = [
  "Product – Tech Chat",
  "Studio",
  "Process Mining & PQL",
  "Product Updates & Releases",
  "Best Practice & Strategy",
  "Data Ingestion",
  "Automation",
  "Machine Learning & Simulation",
  "Celonis Free Plan (formerly Snap)",
  "Platform",
  "Applications & Services",
  "Feature Proposals",
  "Task Mining",
  "Accounts Payable",
  "EMS Marketplace",
];

const DEFAULT_BADGES: AwardedBadge[] = [
  { id: "b1", userName: "ilkim.senll",    badgeName: "First Post" },
  { id: "b2", userName: "Sylwia Ganiec",  badgeName: "Top Performer" },
  { id: "b3", userName: "anna.morit",     badgeName: "Top Performer" },
  { id: "b4", userName: "Angela Nnaka",   badgeName: "First Post" },
  { id: "b5", userName: "katharine.raab", badgeName: "First Post" },
];

/* ---------- Sub-primitives ---------- */

function StatusDot({ active = true }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-[8px] w-[8px] rounded-pill shrink-0",
        active ? "bg-bg-inverse" : "bg-border-mid",
      )}
    />
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden className="shrink-0">
      <path
        d="M8 13.5s-5-3.08-5-7A3 3 0 0 1 8 4.5a3 3 0 0 1 5 2c0 3.92-5 7-5 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconComment() {
  return (
    <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden className="shrink-0">
      <rect
        x="2" y="3" width="12" height="9" rx="1.5"
        fill="none" stroke="currentColor" strokeWidth="1.2"
      />
      <path d="M5 12v2l3-2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 16 16" width={14} height={14} aria-hidden className="shrink-0">
      <path
        d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8Z"
        fill="none" stroke="currentColor" strokeWidth="1.2"
      />
      <circle cx="8" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function EventDateChip({ month, day }: { month: string; day: string }) {
  return (
    <div
      aria-hidden
      className="shrink-0 w-[48px] h-[56px] border border-border-high rounded-s overflow-hidden flex flex-col"
    >
      <div className="bg-bg-inverse text-text-inverse text-[10px] leading-[14px] tracking-wider font-medium text-center py-[2px]">
        {month}
      </div>
      <div className="flex-1 grid place-items-center text-p-l font-medium text-text-high">
        {day}
      </div>
    </div>
  );
}

/* ---------- Widgets (right column) ---------- */

function EventsCalendar({
  events,
  onShowMore,
}: {
  events: EventItem[];
  onShowMore?: () => void;
}) {
  return (
    <section aria-label="Events calendar" className="flex flex-col gap-04">
      <h3 className="text-h-xxs text-text-high font-normal">Events calendar</h3>
      <ul className="flex flex-col gap-04">
        {events.map((e) => (
          <li key={e.id} className="flex items-center gap-03">
            <EventDateChip month={e.month} day={e.day} />
            <div className="flex flex-col gap-01 min-w-0">
              <span className="text-p-m text-text-high truncate">{e.title}</span>
              <span className="text-p-s text-text-mid">{e.time}</span>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        size="sm"
        iconRight={<span aria-hidden>→</span>}
        underline="none"
        onClick={(e) => {
          if (onShowMore) {
            e.preventDefault();
            onShowMore();
          }
        }}
      >
        Show more
      </Link>
    </section>
  );
}

function PopularTags({ tags }: { tags: string[] }) {
  return (
    <section aria-label="Popular tags" className="flex flex-col gap-04">
      <h3 className="text-h-xxs text-text-high font-normal">Popular tags</h3>
      <div className="flex flex-wrap gap-02">
        {tags.map((t) => (
          <Tag key={t} tone="neutral" size="md">
            {t}
          </Tag>
        ))}
      </div>
    </section>
  );
}

function AwardedBadges({
  badges,
  onShowMore,
}: {
  badges: AwardedBadge[];
  onShowMore?: () => void;
}) {
  return (
    <section aria-label="Awarded Badges" className="flex flex-col gap-04">
      <h3 className="text-h-xxs text-text-high font-normal">Awarded Badges</h3>
      <ul className="bg-bg-secondary rounded-m p-04 flex flex-col gap-04">
        {badges.map((b) => (
          <li key={b.id} className="flex items-center gap-03">
            <span
              aria-hidden
              className="h-08 w-08 rounded-pill bg-bg-inverse grid place-items-center text-text-inverse text-p-xs font-medium shrink-0 overflow-hidden"
            >
              {b.badgeSrc ? (
                <img src={b.badgeSrc} alt="" className="h-full w-full object-cover" />
              ) : (
                <span>✦</span>
              )}
            </span>
            <p className="text-p-m text-text-mid leading-snug">
              <strong className="text-text-high font-medium">{b.userName}</strong>{" "}
              has earned the badge {b.badgeName}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        size="sm"
        iconRight={<span aria-hidden>→</span>}
        underline="none"
        onClick={(e) => {
          if (onShowMore) {
            e.preventDefault();
            onShowMore();
          }
        }}
      >
        Show more
      </Link>
    </section>
  );
}

/* ---------- Topic block (left column) ---------- */

function TopicBlockRow({ topic }: { topic: TopicBlock }) {
  return (
    <article
      className="flex items-start gap-04 py-05"
      aria-labelledby={`topic-${topic.id}-title`}
    >
      <Avatar
        shape="square"
        size="xl"
        name={topic.author.name}
        src={topic.author.src}
        className="h-[80px] w-[80px]"
      />

      <div className="flex-1 min-w-0 flex flex-col gap-02">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-02 text-p-s text-text-mid">
          <span className="inline-flex items-center gap-01 text-text-high font-medium">
            <StatusDot />
            {topic.statusLabel ?? "New participant"}
          </span>
          {topic.tagLabel ? <span>{topic.tagLabel}</span> : null}
          {topic.categoryLabel ? (
            <>
              <span>asked in</span>
              <Link
                href={topic.categoryHref ?? "#"}
                size="sm"
                underline="always"
                variant="default"
              >
                {topic.categoryLabel}
              </Link>
            </>
          ) : null}
        </div>

        {/* Title */}
        <h3
          id={`topic-${topic.id}-title`}
          className="text-p-xl text-text-high font-normal leading-snug"
        >
          <a
            href={`#topic-${topic.id}`}
            className="outline-none focus-visible:underline hover:underline"
          >
            {topic.title}
          </a>
        </h3>

        {/* Preview */}
        <p className="text-p-m text-text-mid">{topic.preview}</p>

        {/* Metrics row */}
        <div className="flex items-center gap-05 text-p-s text-text-mid pt-02">
          <span className="inline-flex items-center gap-01">
            <IconHeart />
            <span>{topic.likes}</span>
          </span>
          <span className="inline-flex items-center gap-01">
            <IconComment />
            <span>{topic.comments}</span>
          </span>
          <span className="inline-flex items-center gap-01">
            <IconEye />
            <span>{topic.views}</span>
          </span>
          {topic.lastActor ? (
            <span className="inline-flex items-center gap-02 ml-02">
              <Avatar size="xs" name={topic.lastActor.name} src={topic.lastActor.src} />
              <span>{topic.postedAt}</span>
            </span>
          ) : (
            <span>{topic.postedAt}</span>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Module ---------- */

/**
 * M00 – Latest activity
 * Port of Figma `M00-Latest activity` (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4,
 * node 12088:16517).
 *
 * Layout (≥ m breakpoint):
 *   - Section padding: spacing-9 vertical, 160 horizontal (auto via max-w-1120 container).
 *   - Header (G05): Heading/S title + Paragraph/M subtitle, max-w 710 (8/12).
 *   - Cols: left 710 / right 362, gap 48.
 *     · Left : Tab-bar (Recent activity | Help others) + 6 G11-qa-topic-block rows
 *              separated by hairlines + "Show more activity" button row.
 *     · Right: G21-events-container, G16-popular-tags-container, G17-awarded-badges-container.
 */
export function M00LatestActivity({
  eyebrow,
  title = "Latest activity in this section",
  description = "Find out what topics are discussed and questions are asked by your peers",
  tabs = ["Recent activity", "Help others"],
  activeTab,
  onTabChange,
  topics = DEFAULT_TOPICS,
  showMoreLabel = "Show more activity",
  onShowMore,
  events = DEFAULT_EVENTS,
  tags = DEFAULT_TAGS,
  awardedBadges = DEFAULT_BADGES,
  onEventsShowMore,
  onBadgesShowMore,
  className,
}: M00LatestActivityProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [internalTab, setInternalTab] = useState(activeTab ?? tabs[0] ?? "");
  const current = activeTab ?? internalTab;

  function selectTab(t: string) {
    if (!activeTab) setInternalTab(t);
    onTabChange?.(t);
  }

  useGSAP(
    (gsap) => {
      if (!rootRef.current) return;
      const rows = rootRef.current.querySelectorAll<HTMLElement>("[data-topic]");
      gsap.from(rows, {
        y: 12,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.04,
      });
    },
    [current],
  );

  return (
    <section
      data-node-id="12088:16517"
      data-name="M00-Latest activity"
      ref={rootRef}
      aria-labelledby="m00-latest-title"
      className={cn("bg-bg-base py-09", className)}
    >
      <div className="mx-auto max-w-[1120px] px-04 s:px-06">
        {/* G05 – Header */}
        <header className="flex flex-col gap-02 max-w-[710px] pb-06">
          {eyebrow ? (
            <span className="text-p-s uppercase tracking-wider text-text-mid">
              {eyebrow}
            </span>
          ) : null}
          <h2
            id="m00-latest-title"
            className="text-h-s text-text-high font-normal"
          >
            {title}
          </h2>
          <p className="text-p-m text-text-mid">{description}</p>
        </header>

        {/* Cols */}
        <div className="grid grid-cols-1 m:grid-cols-[710px_362px] gap-06 m:gap-[48px] m:items-start">
          {/* Left column */}
          <div className="flex flex-col">
            {/* Tab bar */}
            <div
              role="tablist"
              aria-label="Activity views"
              className="flex items-center gap-06 border-b border-border-low"
            >
              {tabs.map((t) => {
                const selected = t === current;
                return (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={selected}
                    type="button"
                    onClick={() => selectTab(t)}
                    className={cn(
                      "relative h-09 px-01 text-p-m",
                      "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 rounded-s",
                      "transition-colors",
                      selected
                        ? "text-text-high font-medium after:absolute after:left-0 after:right-0 after:-bottom-px after:h-[2px] after:bg-bg-inverse"
                        : "text-text-mid hover:text-text-high",
                    )}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Topic list (dividers between items) */}
            <div className="flex flex-col divide-y divide-border-low">
              {topics.map((topic) => (
                <div key={topic.id} data-topic>
                  <TopicBlockRow topic={topic} />
                </div>
              ))}
            </div>

            {/* Show more */}
            <div className="flex justify-center pt-05">
              <Button variant="secondary" size="md" onClick={onShowMore}>
                {showMoreLabel}
              </Button>
            </div>
          </div>

          {/* Right column */}
          <aside className="flex flex-col gap-08 pt-05 m:pt-0">
            <EventsCalendar events={events} onShowMore={onEventsShowMore} />
            <PopularTags tags={tags} />
            <AwardedBadges badges={awardedBadges} onShowMore={onBadgesShowMore} />
          </aside>
        </div>
      </div>
    </section>
  );
}
