import { cn } from "@/lib/cn";

export interface Crumb {
  label: string;
  href?: string;
}

export interface G14BreadcrumbsProps {
  items?: Crumb[];
  className?: string;
}

const DEFAULT_CRUMBS: Crumb[] = [
  { label: "Celonis Community", href: "#home" },
  { label: "Community" },
];

/**
 * G14 – Breadcrumbs
 * Port of Figma `G14-breadcrumbs` (Community-Site fileKey IclXSqkHD5Ia6ODJHRfsn4,
 * node 12112:5285).
 *
 * Spec:
 *   - bg: background/inverse (black)
 *   - Full width, content centered inside max-w 1120
 *   - py-04 (16), px-09 (56); crumbs row gap-02 (8), text-p-s (12/16)
 *   - First crumb text-text-inverse (white), rest text-text-mid (#cbcbcb on dark)
 */
export function G14Breadcrumbs({
  items = DEFAULT_CRUMBS,
  className,
}: G14BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumbs"
      data-node-id="12112:5285"
      data-name="G14-breadcrumbs"
      className={cn(
        "w-full bg-bg-inverse",
        "px-04 s:px-09 py-04",
        "flex items-center justify-center",
        className,
      )}
    >
      <ol className="w-full max-w-[1120px] flex items-center gap-02 text-p-s whitespace-nowrap overflow-hidden">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          const color = i === 0 ? "text-text-inverse" : "text-grey-40";
          return (
            <li key={crumb.label} className="flex items-center gap-02 min-w-0">
              {crumb.href && !isLast ? (
                <a
                  href={crumb.href}
                  className={cn(
                    color,
                    "hover:underline underline-offset-2 outline-none focus-visible:underline",
                  )}
                >
                  {crumb.label}
                </a>
              ) : (
                <span
                  className={cn(color, "truncate")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {crumb.label}
                </span>
              )}
              {!isLast ? (
                <span aria-hidden className="text-grey-40 select-none">
                  {">"}
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
