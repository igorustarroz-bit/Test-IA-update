import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  /** Renders only the icon with square sizing */
  iconOnly?: boolean;
}

/**
 * Base styles shared across all variants.
 * Keep token usage (bg-*, text-*, border-*) rather than raw hex so theming works.
 */
const base = cn(
  "inline-flex items-center justify-center",
  "font-medium whitespace-nowrap",
  "rounded-s select-none",
  "transition-colors duration-150 ease-out-expo",
  "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-celonis-50",
  "disabled:cursor-not-allowed disabled:opacity-100",
);

const sizes: Record<ButtonSize, string> = {
  sm: "h-08 px-04 text-sm gap-02",
  md: "h-09 px-05 text-sm gap-02",
  lg: "h-09 px-06 text-base gap-02",
};

const iconOnlySizes: Record<ButtonSize, string> = {
  sm: "h-08 w-08 p-0",
  md: "h-09 w-09 p-0",
  lg: "h-09 w-09 p-0",
};

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-green-celonis-50 text-grey-black",
    "hover:bg-green-celonis-60",
    "active:bg-green-celonis-70 active:text-grey-white",
    "disabled:bg-bg-state-disabled disabled:text-text-state-disabled",
  ),
  secondary: cn(
    "bg-bg-inverse text-text-inverse",
    "hover:bg-grey-90",
    "active:bg-grey-80",
    "disabled:bg-bg-state-disabled disabled:text-text-state-disabled",
  ),
  tertiary: cn(
    "bg-transparent text-text-high border border-border-mid",
    "hover:bg-bg-secondary",
    "active:bg-bg-tertiary",
    "disabled:bg-transparent disabled:text-text-state-disabled disabled:border-border-state-disabled",
  ),
  ghost: cn(
    "bg-transparent text-text-high",
    "hover:bg-bg-secondary",
    "active:bg-bg-tertiary",
    "disabled:text-text-state-disabled",
  ),
  danger: cn(
    "bg-red-70 text-grey-white",
    "hover:bg-red-80",
    "active:bg-red-90",
    "disabled:bg-bg-state-disabled disabled:text-text-state-disabled",
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    iconOnly = false,
    fullWidth = false,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        base,
        iconOnly ? iconOnlySizes[size] : sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
      {!iconOnly ? children : null}
      {iconOnly ? children : null}
      {iconRight ? <span className="inline-flex shrink-0">{iconRight}</span> : null}
    </button>
  );
});

Button.displayName = "Button";
