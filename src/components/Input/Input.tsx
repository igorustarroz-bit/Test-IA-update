import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visible label rendered above the control. */
  label?: string;
  /** Helper text rendered below the control. */
  hint?: string;
  /** Error message – overrides hint and switches the field to the danger state. */
  error?: string;
  /** Optional element rendered inside the control on the left (e.g. icon). */
  leading?: ReactNode;
  /** Optional element rendered inside the control on the right. */
  trailing?: ReactNode;
  inputSize?: InputSize;
  fullWidth?: boolean;
}

const sizes: Record<InputSize, string> = {
  sm: "h-08 text-p-s px-03",
  md: "h-09 text-p-m px-04",
  lg: "h-10 text-p-l px-04",
};

/**
 * Text input following the Celonis foundations:
 * - rounded `fnd-radius-m` (code-side we use the `l` for a softer feel)
 * - background = surface base, border = border-mid
 * - focus ring = Celonis blue 50
 * - error state swaps border + text to semantic `danger`
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    hint,
    error,
    leading,
    trailing,
    inputSize = "md",
    fullWidth = true,
    className,
    disabled,
    required,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedById = `${inputId}-desc`;
  const invalid = Boolean(error);

  return (
    <div className={cn("flex flex-col gap-01", fullWidth && "w-full", className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="text-p-s font-medium text-text-high"
        >
          {label}
          {required ? <span className="text-text-danger ml-01">*</span> : null}
        </label>
      ) : null}

      <div
        className={cn(
          "flex items-center gap-02",
          "bg-bg-base border rounded-m",
          "transition-colors duration-150",
          "focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-blue-celonis-50",
          invalid
            ? "border-border-danger focus-within:border-border-danger"
            : "border-border-mid hover:border-border-mid-dark focus-within:border-blue-celonis-50",
          disabled && "bg-bg-state-disabled border-border-state-disabled cursor-not-allowed",
          sizes[inputSize],
        )}
      >
        {leading ? (
          <span className="shrink-0 text-text-mid flex items-center">{leading}</span>
        ) : null}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={hint || error ? describedById : undefined}
          className={cn(
            "flex-1 bg-transparent outline-none border-0",
            "text-text-high placeholder:text-text-low",
            "disabled:text-text-state-disabled disabled:cursor-not-allowed",
          )}
          {...rest}
        />

        {trailing ? (
          <span className="shrink-0 text-text-mid flex items-center">{trailing}</span>
        ) : null}
      </div>

      {error ? (
        <p id={describedById} className="text-p-s text-text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={describedById} className="text-p-s text-text-mid">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = "Input";
