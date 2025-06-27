interface useScrollSpyProps {
   containerSelector: string;
   selector: string;
   threshold: number;
   stepList: string[];
}

import { useState, useEffect } from "react";

export function useScrollSpy({
   selector,
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
            container.querySelectorAll<HTMLElement>(selector)
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
   }, [selector, threshold]);

   return { active, allActiveSteps };
}
