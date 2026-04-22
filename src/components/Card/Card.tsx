import { type HTMLAttributes, type ReactNode, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  footer?: ReactNode;
  /** Adds a subtle lift on hover with GSAP */
  interactive?: boolean;
}

export function Card({
  title,
  eyebrow,
  description,
  image,
  imageAlt = "",
  footer,
  interactive = true,
  className,
  children,
  ...rest
}: CardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (gsap) => {
      if (!interactive || !ref.current) return;
      const el = ref.current;
      const onEnter = () => {
        gsap.to(el, { y: -4, duration: 0.25, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    [interactive],
  );

  return (
    <div
      ref={ref}
      className={cn(
        "group flex flex-col overflow-hidden",
        "bg-bg-base border border-border-low rounded-lg",
        "shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
      {...rest}
    >
      {image ? (
        <div className="aspect-[16/9] bg-bg-secondary overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-02 p-05">
        {eyebrow ? (
          <span className="text-xs font-medium uppercase tracking-wider text-text-mid">
            {eyebrow}
          </span>
        ) : null}
        {title ? (
          <h3 className="text-xl font-semibold text-text-high">{title}</h3>
        ) : null}
        {description ? (
          <p className="text-p-m text-text-mid">{description}</p>
        ) : null}
        {children}
      </div>

      {footer ? (
        <div className="border-t border-border-low px-05 py-03 bg-bg-secondary">
          {footer}
        </div>
      ) : null}
    </div>
  );
}
