import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./CultureSlide.module.css";

const pillars = [
  {
    title: "Steer Security from the Board",
    detail:
      "Security must be steered from the board — not delegated to IT alone. Put cybersecurity on the board agenda, assign executive ownership, and treat digital risk with the same rigour as financial or reputational risk.",
    icon: "🏛",
  },
  {
    title: "Empower Your People",
    detail:
      "Regular, practical awareness training reduces the risk from human error — the #1 attack vector in every sector. People cannot defend against threats they don't know exist.",
    icon: "🧠",
  },
  {
    title: "Build a Reporting Culture",
    detail:
      "Staff and volunteers should feel safe reporting suspicious activity — without fear of blame. The organisations that detect threats earliest are those where people speak up.",
    icon: "🤝",
  },
];

export default function CultureSlide({ index }) {
  return (
    <Slide index={index} className={styles.culture}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Leadership Responsibility</p>
          <h2>Security Is a Culture, Not a Product</h2>
          <p className={styles.subtitle}>
            Technology alone cannot protect an organisation. Culture — shaped by
            leadership — is the final and most durable line of defence.
          </p>
        </div>

        <div className={styles.cards}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">
                {p.icon}
              </span>
              <strong className={styles.cardTitle}>{p.title}</strong>
              <p className={styles.cardDetail}>{p.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
