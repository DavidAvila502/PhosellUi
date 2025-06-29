interface useScrollSpyProps {
   containerSelector: string;
   stepSelector: string;
   threshold: number;
   stepList: string[];
}

import { useState, useEffect, useMemo } from "react";

/**
 * useStepsScrollSpy
 *
 * A React hook that monitors scrolling within a container and returns
 * the index of the currently visible (or most recently passed) step,
 * along with the list of all previous steps.
 *
 * @param props.containerSelector - CSS selector for the scrolling container (e.g. `"#scroller"`).
 * @param props.stepSelector      - CSS selector for each step section inside the container (e.g. `".step-section"`).
 * @param props.stepList          - Ordered list of step names (or identifiers).
 * @param props.threshold?        - Fraction of the container height to use as a visibility threshold
 *                                  (value between 0 and 1). Defaults to `0.6`.
 *
 * @returns {{
 *   active: number;           // Zero-based index of the currently active step
 *   allActiveSteps: string[]; // stepList slice from 0 up to active (inclusive)
 * }}
 */
export function useStepsScrollSpy({
   stepSelector,
   threshold = 0.6,
   stepList,
   containerSelector,
}: useScrollSpyProps) {
   const [active, setActive] = useState(0);

   useEffect(() => {
      const container = document.querySelector<HTMLElement>(containerSelector);
      if (!container) return;

      const onScroll = () => {
         const sections = Array.from(
            container.querySelectorAll<HTMLElement>(stepSelector)
         );

         const scrollTop = container.scrollTop;
         const height = container.clientHeight;

         const nextIdx = (() => {
            const idx = sections.findIndex(
               (sec) => sec.offsetTop > scrollTop + height * threshold
            );
            if (idx === 0) return 0;
            if (idx === -1) return sections.length - 1;
            return idx - 1;
         })();

         setActive(nextIdx);
      };

      container.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => container.removeEventListener("scroll", onScroll);
   }, [containerSelector, stepSelector, threshold, stepList]);

   const allActiveSteps = useMemo(
      () => stepList.slice(0, active + 1),
      [stepList, active]
   );

   return { active, allActiveSteps };
}
