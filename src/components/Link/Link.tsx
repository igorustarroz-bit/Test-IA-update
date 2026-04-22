import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type LinkVariant = "default" | "quiet" | "inverse";
export type LinkSize = "sm" | "md" | "lg";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  size?: LinkSize;
  iconRight?: ReactNode;
  underline?: "always" | "hover" | "none";
  /** Renders an external-link affordance and sets rel="noopener noreferrer" */
  external?: boolean;
}

const sizes: Record<LinkSize, string> = {
  sm: "text-p-s",
  md: "text-p-m",
  lg: "text-p-l",
};

const variants: Record<LinkVariant, string> = {
  default: "text-text-high hover:text-blue-celonis-60",
  quiet: "text-text-mid hover:text-text-high",
  inverse: "text-text-inverse hover:text-green-celonis-50",
};

/**
 * Anchor component. Defaults to Celonis' inline link treatment:
 * Poppins 400, underline on hover, subtle blue accent on hover.
 * Use `variant="quiet"` for secondary meta-links, `inverse` on dark bg.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    className,
    variant = "default",
    size = "md",
    underline = "hover",
    iconRight,
    external = false,
    children,
    target,
    rel,
    ...rest
  },
  ref,
) {
  const underlineClass =
    underline === "always"
      ? "underline underline-offset-2"
      : underline === "hover"
      ? "no-underline hover:underline underline-offset-2"
      : "no-underline";

  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-01",
        "transition-colors duration-150 ease-out-expo",
        "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 rounded-s",
        sizes[size],
        variants[variant],
        underlineClass,
        className,
      )}
      target={external ? target ?? "_blank" : target}
      rel={external ? rel ?? "noopener noreferrer" : rel}
      {...rest}
    >
      {children}
      {iconRight ? (
        <span className="inline-flex shrink-0" aria-hidden>
          {iconRight}
        </span>
      ) : external ? (
        <span className="inline-flex shrink-0" aria-hidden>
          ↗
        </span>
      ) : null}
    </a>
  );
});

Link.displayName = "Link";
