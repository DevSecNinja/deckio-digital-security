import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./LandscapeSlide.module.css";

const stats = [
  {
    value: "450%",
    label: "More Effective",
    detail:
      "AI-enhanced phishing achieves 54% click-through vs 12% for traditional campaigns — a 450% increase in attacker effectiveness.",
    accent: "cyan",
  },
  {
    value: "100K+",
    label: "Organisations Compromised",
    detail:
      "A single industrial-scale phishing-as-a-service operation (Tycoon2FA) compromised more than 100,000 organisations since 2023.",
    accent: "purple",
  },
  {
    value: "6",
    label: "Attack Phases Using AI",
    detail:
      "AI is now embedded across the full attack lifecycle: reconnaissance, resource development, initial access, persistence, weaponisation, and post-compromise.",
    accent: "green",
  },
];

export default function LandscapeSlide({ index }) {
  return (
    <Slide index={index} className={styles.landscape}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Threat Landscape</p>
          <h2>AI Has Upgraded Cyberattacks</h2>
          <p className={styles.subtitle}>
            Threat actors are embedding AI across the full attack lifecycle —
            increasing precision, speed and scale at every stage.
          </p>
        </div>

        <div className={styles.cards}>
          {stats.map((s) => (
            <div
              key={s.value}
              className={`${styles.card} ${styles[`card--${s.accent}`]}`}
            >
              <span className={styles.statValue}>{s.value}</span>
              <strong className={styles.statLabel}>{s.label}</strong>
              <p className={styles.statDetail}>{s.detail}</p>
            </div>
          ))}
        </div>

        <p className={styles.source}>
          Source: Microsoft Security Blog, Apr 2026 · Microsoft Digital Defense
          Report 2025
        </p>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
