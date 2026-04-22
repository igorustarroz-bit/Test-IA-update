import { cn } from "@/lib/cn";

export interface RelatedTopic {
  title: string;
  category: string;
  href?: string;
}

export interface G19RelatedTopicsProps {
  heading?: string;
  items?: RelatedTopic[];
  className?: string;
}

const DEFAULT_ITEMS: RelatedTopic[] = [
  { title: "Test",                                                                                              category: "Process Intelligence Fundamentals" },
  { title: "🧐 Celonis Community FAQs",                                                                         category: "Welcome Guide" },
  { title: "Welcome to India Celonis Community: Your First Steps",                                              category: "India Community" },
  { title: "Hello, I want to export my activities table as a csv file with Celonis EMS API and PyCelonis in MLWorkbench. I have some problems with this issue.", category: "General Product Q&A" },
  { title: "Welcome to the Celonis Community! 👋",                                                              category: "News & Updates" },
];

/**
 * G19 – Related topics
 * Port of Figma `G19-related-topics` (node 12112:8993 / 12112:9087).
 *
 * Spec:
 *   - Column flex, gap-07 (32), pb-10 (64)
 *   - Heading: "Related topics" text-h-xs (24/32, -0.5) text-text-high
 *   - Card: bg-bg-secondary, rounded-m, px-06 py-07, col gap-06
 *   - Each item: col gap-01 — title text-p-m text-text-high, category text-p-s text-text-mid
 */
export function G19RelatedTopics({
  heading = "Related topics",
  items = DEFAULT_ITEMS,
  className,
}: G19RelatedTopicsProps) {
  return (
    <aside
      data-node-id="12112:8993"
      data-name="G19-related-topics"
      className={cn(
        "flex flex-col items-start gap-07 pb-10 w-full",
        className,
      )}
    >
      <h2 className="text-h-xs text-text-high w-full">{heading}</h2>
      <ul
        data-name="ul"
        className={cn(
          "w-full",
          "bg-bg-secondary rounded-m",
          "flex flex-col gap-06",
          "px-06 py-07",
        )}
      >
        {items.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            data-name="Item"
            className="w-full flex items-start gap-04"
          >
            <div className="flex-1 min-w-0 flex flex-col gap-01 justify-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-p-m text-text-high hover:underline underline-offset-2"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-p-m text-text-high">{item.title}</span>
              )}
              <span className="text-p-s text-text-mid">{item.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
