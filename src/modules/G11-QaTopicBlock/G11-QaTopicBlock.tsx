import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ---------- Types ---------- */

export interface G11AuthorMeta {
  avatarSrc?: string;
  /** Initials fallback when avatarSrc is missing. */
  initials?: string;
  /** Small tag e.g. "New participant" (in text-text-high). */
  role?: string;
  /** User handle, shown in text-text-mid. */
  name?: string;
  /** Small gloss line e.g. "asked in". */
  glossa?: string;
  /** Contextual reference (shown with dashed underline). */
  context?: string;
}

export interface G11Action {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  /** When true the label is rendered muted (e.g. "Liked" state). */
  muted?: boolean;
}

export interface G11QaTopicBlockProps {
  author: G11AuthorMeta;
  /** Body content — pass plain text, markdown-rendered children, or rich JSX. */
  body: ReactNode;
  /** Optional callout/quote (e.g. the `G12-callout` secondary block in Figma). */
  callout?: ReactNode;
  /** Optional paragraph after the callout. */
  extra?: ReactNode;
  /** Action row (defaults: Like, Quote, Subscribe, Share). */
  actions?: G11Action[];
  /** Show the trailing "..." overflow menu. */
  overflow?: boolean;
  /** Compact mode — tighter padding for replies (pb-06 vs. pb-09). */
  compact?: boolean;
  className?: string;
}

/* ---------- Icons (inline SVGs) ---------- */

function IconHeart({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconQuote({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="M7 10.5H4V17h6v-6.5A3.5 3.5 0 0 0 7 7m10 3.5h-3V17h6v-6.5A3.5 3.5 0 0 0 17 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="m12 3 2.6 5.9 6.4.6-4.8 4.4 1.4 6.3L12 17l-5.6 3.2 1.4-6.3L3 9.5l6.4-.6L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShare({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="shrink-0">
      <path
        d="M15 8V5l6 5-6 5v-3H9a5 5 0 0 0-5 5v1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Avatar ---------- */

function AuthorAvatar({ author }: { author: G11AuthorMeta }) {
  return (
    <div
      data-name="aspect-ratio"
      className={cn(
        "relative shrink-0 size-[64px] rounded-m overflow-hidden",
        "bg-bg-secondary",
      )}
      aria-hidden={!author.name}
    >
      {author.avatarSrc ? (
        <img
          src={author.avatarSrc}
          alt={author.name ?? ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "text-p-l text-text-mid font-medium",
          )}
        >
          {author.initials ?? "–"}
        </span>
      )}
    </div>
  );
}

/* ---------- Module ---------- */

const DEFAULT_ACTIONS: G11Action[] = [
  { label: "Like",      icon: <IconHeart /> },
  { label: "Quote",     icon: <IconQuote /> },
  { label: "Subscribe", icon: <IconStar /> },
  { label: "Share",     icon: <IconShare /> },
];

/**
 * G11 – Qa topic block
 * Port of Figma `G11-qa-topic-block` (node 12112:5301 and repeated replies).
 *
 * Spec:
 *   - bg white, px-06 pt-06, pb-09 (pb-06 when `compact`)
 *   - Row: avatar 64×64 rounded-m + body column, gap 06
 *   - Title row: small 8x8 square (bg-inverse rounded-s) + role/name/glossa
 *     tags in text-p-s, the last token ("context") has a dashed border-mid-dark underline
 *   - Body: text-p-xl (18/24) text-text-mid, preserves whitespace
 *   - Optional callout/extra children rendered under the body with gap-04
 *   - Actions row: gap-07, each action has an icon-24 + text-p-m label;
 *     trailing "..." muted item when overflow
 */
export function G11QaTopicBlock({
  author,
  body,
  callout,
  extra,
  actions = DEFAULT_ACTIONS,
  overflow = true,
  compact = false,
  className,
}: G11QaTopicBlockProps) {
  return (
    <article
      data-node-id="12112:5301"
      data-name="G11-qa-topic-block"
      className={cn(
        "w-full bg-bg-base",
        "flex items-start gap-06",
        compact ? "px-06 pt-06 pb-06" : "px-06 pt-06 pb-09",
        className,
      )}
    >
      <AuthorAvatar author={author} />

      <div
        data-name="What module"
        className="flex-1 min-w-0 flex flex-col gap-06"
      >
        {/* Content column (title + body + callout + extra) */}
        <div className="flex flex-col gap-06 pr-0 s:pr-08">
          {/* Title row */}
          <div
            data-name="Title"
            className="flex items-start justify-between overflow-hidden w-full"
          >
            <div className="flex-1 min-w-0 flex items-center gap-[10px]">
              <span
                aria-hidden
                className="shrink-0 size-[8px] rounded-s bg-bg-inverse"
              />
              {author.role ? (
                <span className="shrink-0 truncate text-p-s text-text-high">
                  {author.role}
                </span>
              ) : null}
              {author.name ? (
                <span className="shrink-0 truncate text-p-s text-text-mid">
                  {author.name}
                </span>
              ) : null}
              {author.glossa ? (
                <span className="shrink-0 truncate text-p-s text-text-mid">
                  {author.glossa}
                </span>
              ) : null}
              {author.context ? (
                <span className="shrink-0 truncate text-p-s text-text-mid border-b border-dashed border-border-mid-dark">
                  {author.context}
                </span>
              ) : null}
            </div>
          </div>

          {/* Body */}
          <div className="w-full text-p-xl text-text-mid whitespace-pre-wrap">
            {body}
          </div>
        </div>

        {/* Callout / extra */}
        {callout || extra ? (
          <div
            data-name="Placeholder-list"
            className="flex flex-col gap-04 w-full pr-0 s:pr-08"
          >
            {callout}
            {extra ? (
              <div className="w-full text-p-xl text-text-mid">{extra}</div>
            ) : null}
          </div>
        ) : null}

        {/* Actions + overflow */}
        <div className="flex items-start gap-07 w-full">
          <div data-name="Labels" className="flex items-start gap-04">
            {actions.map((a) => (
              <button
                key={a.label}
                type="button"
                onClick={a.onClick}
                className={cn(
                  "inline-flex items-center gap-02 self-stretch",
                  "text-p-m whitespace-nowrap",
                  a.muted ? "text-text-mid" : "text-text-high",
                  "outline-none focus-visible:underline underline-offset-2",
                  "transition-colors hover:underline",
                )}
              >
                <span className="size-[24px] inline-flex items-center justify-center text-current">
                  {a.icon}
                </span>
                <span>{a.label}</span>
              </button>
            ))}
          </div>
          {overflow ? (
            <button
              type="button"
              aria-label="More actions"
              className="h-[24px] text-p-m text-text-mid hover:text-text-high transition-colors"
            >
              …
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/* ---------- G12-callout sub-component (re-usable inside G11) ---------- */

export interface G12CalloutProps {
  children: ReactNode;
  className?: string;
}

/**
 * G12 – Callout
 * The bordered-left quote block used inside the main post.
 * bg-bg-secondary · border-l-[3px] border-border-high · px-07 py-08 (pl-07 pr-06)
 */
export function G12Callout({ children, className }: G12CalloutProps) {
  return (
    <div
      data-name="G12-callout"
      className={cn(
        "w-full bg-bg-secondary border-l-[3px] border-border-high",
        "pl-07 pr-06 py-08",
        "text-p-s text-text-mid",
        className,
      )}
    >
      {children}
    </div>
  );
}
