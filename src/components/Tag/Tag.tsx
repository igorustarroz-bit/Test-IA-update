import {
  forwardRef,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type TagTone = "neutral" | "accent" | "info" | "success" | "danger";
export type TagSize = "sm" | "md";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  size?: TagSize;
  iconLeft?: ReactNode;
  /** When present, a close (✕) affordance is rendered. Invoked with the click event. */
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** When true, the tag renders with a subtle border and no fill. */
  outline?: boolean;
}

const tones: Record<TagTone, { filled: string; outline: string }> = {
  neutral: {
    filled: "bg-bg-secondary text-text-high",
    outline: "bg-transparent text-text-high border border-border-mid",
  },
  accent: {
    filled: "bg-bg-accent-green text-grey-black",
    outline: "bg-transparent text-green-celonis-80 border border-green-celonis-70",
  },
  info: {
    filled: "bg-blue-celonis-10 text-blue-celonis-80",
    outline: "bg-transparent text-blue-celonis-80 border border-blue-celonis-30",
  },
  success: {
    filled: "bg-bg-success text-text-success",
    outline: "bg-transparent text-text-success border border-border-success",
  },
  danger: {
    filled: "bg-bg-danger text-text-danger",
    outline: "bg-transparent text-text-danger border border-border-danger",
  },
};

const sizes: Record<TagSize, string> = {
  sm: "h-06 px-02 text-p-xs gap-01",
  md: "h-07 px-03 text-p-s gap-02",
};

/**
 * Tag / Chip. Similar to Badge but designed for filterable / removable
 * metadata (topic tags on posts, active filters, etc.).
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  {
    className,
    tone = "neutral",
    size = "sm",
    iconLeft,
    onRemove,
    outline = false,
    children,
    ...rest
  },
  ref,
) {
  const toneClass = outline ? tones[tone].outline : tones[tone].filled;
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-pill font-medium whitespace-nowrap",
        sizes[size],
        toneClass,
        className,
      )}
      {...rest}
    >
      {iconLeft ? (
        <span className="inline-flex shrink-0" aria-hidden>
          {iconLeft}
        </span>
      ) : null}
      <span>{children}</span>
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          className={cn(
            "ml-01 inline-flex items-center justify-center",
            "h-04 w-04 rounded-pill",
            "hover:bg-grey-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50",
            "transition-colors",
          )}
          aria-label="Remove"
        >
          <span aria-hidden className="leading-none text-p-xs">
            ✕
          </span>
        </button>
      ) : null}
    </span>
  );
});

Tag.displayName = "Tag";
