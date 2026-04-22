import { useState } from "react";
import { cn } from "@/lib/cn";

export type HelpfulnessRating = "poor" | "ok" | "great";

export interface G24QaTopicHelpfulnessProps {
  question?: string;
  onRate?: (rating: HelpfulnessRating) => void;
  /** Initial selected rating (uncontrolled). */
  defaultValue?: HelpfulnessRating;
  className?: string;
}

const RATINGS: Array<{ value: HelpfulnessRating; emoji: string; label: string }> = [
  { value: "poor",  emoji: "😕", label: "Not really" },
  { value: "ok",    emoji: "🙂", label: "Somewhat" },
  { value: "great", emoji: "😄", label: "Yes, very helpful" },
];

/**
 * G24 – Qa topic helpfulness
 * Port of Figma `G24-qa-topic-helpfulness` (node 12112:9572).
 *
 * Spec:
 *   - bg white, pl-12 (112), pr-06, pb-06, pt-0
 *   - Column flex gap-06
 *   - Question text-h-xxs (20/28) text-text-high
 *   - Row of 3 emoji buttons in Heading/S size (32/40), text-center, text-text-mid
 *     Selected state: text-text-high (darker)
 */
export function G24QaTopicHelpfulness({
  question = "Did this topic help you find an answer to your question?",
  onRate,
  defaultValue,
  className,
}: G24QaTopicHelpfulnessProps) {
  const [selected, setSelected] = useState<HelpfulnessRating | undefined>(
    defaultValue,
  );

  const handle = (value: HelpfulnessRating) => {
    setSelected(value);
    onRate?.(value);
  };

  return (
    <section
      data-node-id="12112:9572"
      data-name="G24-qa-topic-helpfulness"
      className={cn(
        "w-full bg-bg-base",
        "flex flex-col items-start gap-06",
        "pt-0 pb-06 pl-04 s:pl-12 pr-06",
        className,
      )}
    >
      <p className="text-h-xxs text-text-high min-w-full">{question}</p>
      <div
        role="radiogroup"
        aria-label={question}
        className="flex items-start gap-06"
      >
        {RATINGS.map((r) => {
          const active = selected === r.value;
          return (
            <button
              key={r.value}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={r.label}
              onClick={() => handle(r.value)}
              className={cn(
                "text-h-s text-center select-none",
                "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2 rounded-s",
                "transition-transform transition-colors duration-200",
                "hover:scale-110",
                active ? "text-text-high scale-110" : "text-text-mid",
              )}
            >
              {r.emoji}
            </button>
          );
        })}
      </div>
    </section>
  );
}
