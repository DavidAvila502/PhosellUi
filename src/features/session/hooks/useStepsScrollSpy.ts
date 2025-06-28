interface useScrollSpyProps {
   containerSelector: string;
   stepSelector: string;
   threshold: number;
   stepList: string[];
}

import { useState, useEffect } from "react";

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
   const [allActiveSteps, setAllActiveSteps] = useState<string[]>([]);

   useEffect(() => {
      const container = document.querySelector<HTMLElement>(containerSelector);
      if (!container) return;

      const onScroll = () => {
         const sections = Array.from(
            container.querySelectorAll<HTMLElement>(stepSelector)
         );

         const scrollTop = container.scrollTop;
         const height = container.clientHeight;

         const nextIdx = sections.findIndex(
            (sec) => sec.offsetTop > scrollTop + height * threshold
         );

         const newActive =
            nextIdx === 0
               ? 0
               : nextIdx === -1
               ? sections.length - 1
               : nextIdx - 1;

         setActive(newActive);
         setAllActiveSteps(stepList.slice(0, newActive + 1));
      };

      container.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => container.removeEventListener("scroll", onScroll);
   }, [containerSelector, stepSelector, threshold, stepList]);

   return { active, allActiveSteps };
}
