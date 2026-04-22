import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "success" | "danger" | "accent" | "info";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  size?: BadgeSize;
}

const tones: Record<BadgeTone, string> = {
  neutral: "bg-bg-secondary text-text-high border-border-low",
  success: "bg-bg-success text-text-success border-border-success",
  danger:  "bg-bg-danger text-text-danger border-border-danger",
  accent:  "bg-bg-accent-green text-grey-black border-green-celonis-70",
  info:    "bg-blue-celonis-10 text-blue-celonis-80 border-blue-celonis-20",
};

const sizes: Record<BadgeSize, string> = {
  sm: "h-[20px] px-02 text-xs",
  md: "h-[24px] px-03 text-sm",
};

export function Badge({
  className,
  tone = "neutral",
  size = "sm",
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-01",
        "rounded-pill border font-medium whitespace-nowrap",
        sizes[size],
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
