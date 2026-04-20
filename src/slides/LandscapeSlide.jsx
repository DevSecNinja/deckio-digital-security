import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./LandscapeSlide.module.css";

const stats = [
  {
    value: "450%",
    label: "More effective",
    detail:
      "AI-enhanced phishing achieves 54% click-through vs 12% for traditional campaigns—a 450% increase in attacker effectiveness.",
    accent: "cyan",
  },
  {
    value: "100K+",
    label: "Organizations compromised",
    detail:
      "A single industrial-scale phishing-as-a-service operation (Tycoon2FA) compromised more than 100,000 organizations since 2023.",
    accent: "purple",
  },
  {
    value: "6",
    label: "Attack phases using AI",
    detail:
      "AI is now embedded across the full attack lifecycle: reconnaissance, resource development, initial access, persistence, weaponization, and post-compromise.",
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
          <h2>AI has upgraded cyberattacks</h2>
          <p className={styles.subtitle}>
            Threat actors are embedding AI across the full attack lifecycle—increasing precision, speed, and scale at every stage.
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

        <div className={styles.callout}>
          <span className={styles.calloutIcon} aria-hidden="true">
            🛡
          </span>
          <div>
            <strong className={styles.calloutTitle}>
              Microsoft disrupted Tycoon2FA
            </strong>
            <p className={styles.calloutText}>
              Tycoon2FA was an industrial-scale phishing-as-a-service platform
              that intercepted login sessions in real time—bypassing MFA for
              over 100,000 organizations since 2023. In March 2026, Microsoft
              seized the infrastructure behind the operation, disrupting one of
              the most prolific credential-theft services in active use. For
              nonprofits, this is a reminder: even with MFA enabled, attackers
              had toolkits specifically designed to get around it.
            </p>
          </div>
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
