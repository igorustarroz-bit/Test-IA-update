import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface G13ArticleTopicProps {
  title?: string;
  author?: string;
  group?: string;
  time?: string;
  body?: ReactNode;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

/* ---------- Icons ---------- */

function IconDoc({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden
      className="shrink-0"
    >
      <rect
        x="6"
        y="3"
        width="18"
        height="26"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 10h10M10 15h10M10 20h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Module ---------- */

/**
 * G13 – Article / Topic
 * Port of Figma `G13-article__topic` (node 12143:7404).
 *
 * Spec:
 *   - bg-bg-base, gap-06, px-06 pt-07 pb-09
 *   - Left: 32×32 icon (doc)
 *   - Right column gap-06, pr-08
 *       · Title Heading/XXS text-text-high
 *       · Meta line gap-08 (author • group • time) Paragraph/S text-text-mid,
 *         truncated to 1 line (h-16)
 *       · Body Paragraph/XL text-text-mid
 */
export function G13ArticleTopic({
  title = "Hot Topic: There is no AI without PI.",
  author = "ilkim.sen11",
  group = "Celonis Academy Group",
  time = "8 days ago",
  body = "A preview of the details to question being asked",
  icon,
  href,
  className,
}: G13ArticleTopicProps) {
  const Wrapper = href ? "a" : "article";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      data-node-id="12143:7404"
      data-name="G13-article__topic"
      className={cn(
        "block w-full bg-bg-base",
        "flex items-start gap-06",
        "px-06 pt-07 pb-09",
        href && "transition-colors hover:bg-bg-secondary",
        className,
      )}
    >
      <span className="shrink-0 text-text-high">
        {icon ?? <IconDoc />}
      </span>

      <div className="flex-1 min-w-0 flex flex-col gap-06 pr-08">
        <h3 className="text-h-xxs text-text-high">{title}</h3>

        <ul
          aria-label="meta"
          className="flex flex-wrap items-center gap-02 text-p-s text-text-mid"
        >
          <li className="whitespace-nowrap truncate">{author}</li>
          <li aria-hidden className="shrink-0 opacity-60">•</li>
          <li className="whitespace-nowrap truncate">{group}</li>
          <li aria-hidden className="shrink-0 opacity-60">•</li>
          <li className="whitespace-nowrap truncate">{time}</li>
        </ul>

        <p className="text-p-xl text-text-mid">{body}</p>
      </div>
    </Wrapper>
  );
}
