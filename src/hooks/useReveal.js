import { useState, useEffect, useCallback } from "react";
import { useSlides } from "@deckio/deck-engine";

/**
 * Progressive reveal hook — intercepts arrow keys AND navigation button clicks
 * while reveal groups remain, then releases control back to the deck engine.
 *
 * @param {number} index     – slide index (from props)
 * @param {number} totalGroups – number of reveal groups on this slide
 * @returns {number} visibleCount – how many groups are currently visible (0 … totalGroups)
 */
export default function useReveal(index, totalGroups) {
  const { current } = useSlides();
  const [visibleCount, setVisibleCount] = useState(0);
  const isActive = current === index;

  // Reset when slide becomes active
  useEffect(() => {
    if (isActive) setVisibleCount(0);
  }, [isActive]);

  // Keyboard handler (capture phase — runs before engine)
  useEffect(() => {
    if (!isActive) return;

    const handler = (e) => {
      const fwd =
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "PageDown" ||
        e.key === "Enter";
      const bwd = e.key === "ArrowLeft" || e.key === "PageUp";

      if (fwd && visibleCount < totalGroups) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setVisibleCount((v) => v + 1);
      } else if (bwd && visibleCount > 0) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setVisibleCount((v) => v - 1);
      }
    };

    document.addEventListener("keydown", handler, { capture: true });
    return () => document.removeEventListener("keydown", handler, { capture: true });
  }, [isActive, visibleCount, totalGroups]);

  // Navigation button handler (capture phase on click — intercepts prev/next buttons)
  useEffect(() => {
    if (!isActive) return;

    const handler = (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;

      // Detect nav buttons by their SVG arrow content and position in the nav
      const svg = btn.querySelector("svg");
      if (!svg) return;

      const polyline = svg.querySelector("polyline");
      if (!polyline) return;
      const points = polyline.getAttribute("points") || "";

      // Next button: "9 6 15 12 9 18"  |  Prev button: "15 18 9 12 15 6"
      const isNext = points.includes("9 6 15 12 9 18");
      const isPrev = points.includes("15 18 9 12 15 6");

      if (isNext && visibleCount < totalGroups) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setVisibleCount((v) => v + 1);
      } else if (isPrev && visibleCount > 0) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setVisibleCount((v) => v - 1);
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, [isActive, visibleCount, totalGroups]);

  return visibleCount;
}
