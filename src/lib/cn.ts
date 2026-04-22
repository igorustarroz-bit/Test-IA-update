import clsx, { type ClassValue } from "clsx";

/**
 * Conditional class utility. Wraps clsx so we can extend later with
 * tailwind-merge if needed.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
