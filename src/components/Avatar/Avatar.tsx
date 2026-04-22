import { useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Display name – used for alt text and initials fallback. */
  name: string;
  src?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** Optional small dot rendered on the bottom-right corner. */
  status?: "online" | "offline" | "busy" | null;
  /** When true, a subtle ring is drawn around the avatar (e.g. stories-style). */
  ring?: boolean;
}

const sizes: Record<AvatarSize, { box: string; text: string; dot: string }> = {
  xs: { box: "h-06 w-06", text: "text-p-xs", dot: "h-02 w-02" },
  sm: { box: "h-07 w-07", text: "text-p-s", dot: "h-02 w-02" },
  md: { box: "h-09 w-09", text: "text-p-m", dot: "h-03 w-03" },
  lg: { box: "h-11 w-11", text: "text-p-l", dot: "h-03 w-03" },
  xl: { box: "h-12 w-12", text: "text-h-xxs", dot: "h-04 w-04" },
};

const statusColor: Record<NonNullable<AvatarProps["status"]>, string> = {
  online: "bg-green-celonis-60",
  offline: "bg-grey-40",
  busy: "bg-red-60",
};

function getInitials(name: string): string {
  const cleaned = name.trim();
  if (!cleaned) return "?";
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

/**
 * Avatar with image + initials fallback. Sizes are mapped to the
 * `fnd-spacing-*` scale so avatars align naturally with the grid.
 */
export function Avatar({
  name,
  src,
  size = "md",
  shape = "circle",
  status = null,
  ring = false,
  className,
  ...rest
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const { box, text, dot } = sizes[size];
  const showImg = Boolean(src) && !failed;

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        "bg-bg-tertiary text-text-high font-medium select-none shrink-0",
        shape === "circle" ? "rounded-pill" : "rounded-m",
        ring && "ring-2 ring-bg-base outline outline-1 outline-border-low",
        box,
        text,
        className,
      )}
      aria-label={name}
      role="img"
      {...rest}
    >
      {showImg ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span aria-hidden>{getInitials(name)}</span>
      )}

      {status ? (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-pill ring-2 ring-bg-base",
            dot,
            statusColor[status],
          )}
          aria-label={`Status: ${status}`}
        />
      ) : null}
    </span>
  );
}
