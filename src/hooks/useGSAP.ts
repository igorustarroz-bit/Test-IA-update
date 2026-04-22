import { useEffect, type DependencyList } from "react";
import gsap from "gsap";

/**
 * Runs a GSAP setup callback inside a `gsap.context()` and automatically
 * reverts every tween / timeline created inside it on unmount.
 *
 * The callback receives the gsap instance and may return a cleanup function
 * (for example to remove DOM event listeners).
 */
export function useGSAP(
  setup: (gsapInstance: typeof gsap) => void | (() => void),
  deps: DependencyList = [],
) {
  useEffect(() => {
    let disposeInner: void | (() => void);
    const ctx = gsap.context(() => {
      disposeInner = setup(gsap);
    });
    return () => {
      if (typeof disposeInner === "function") disposeInner();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
