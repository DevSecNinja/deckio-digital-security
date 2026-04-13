import { BottomBar, Slide } from "@deckio/deck-engine";
import { createElement } from "react";

export default function ThankYouSlide({ index }) {
  return (
    <Slide index={index} className="deck-ty">
      <div className="accent-bar" />

      <div className="deck-ty-glow deck-ty-glow1" />
      <div className="deck-ty-glow deck-ty-glow2" />
      <div className="deck-ty-glow deck-ty-glow3" />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className={`deck-ty-streak deck-ty-streak${i}`} />
      ))}

      <div className="deck-ty-shell content-frame content-gutter">
        <div className="deck-ty-content">
          <h2 className="deck-ty-title">Thank you</h2>
          <p className="deck-ty-subtitle">
            Read the{" "}
            <a
              href="https://aka.ms/mddr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              Microsoft Digital Defense Report
            </a>{" "}
            &mdash; and commit to one action this quarter.
          </p>
          <div className="deck-ty-divider" />
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
