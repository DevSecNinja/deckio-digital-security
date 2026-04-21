import { BottomBar, Slide } from "@deckio/deck-engine";
import useReveal from "../hooks/useReveal";
import styles from "./CultureSlide.module.css";

const pillars = [
  {
    title: "Steer security from the board",
    detail:
      "Security must be steered from the board—not delegated to IT alone. Put cybersecurity on the board agenda, assign executive ownership, and treat digital risk with the same rigor as financial or reputational risk.",
    icon: "🏛",
  },
  {
    title: "Empower your people",
    detail:
      "Regular, practical awareness training reduces the risk from human error—the #1 attack vector in every sector. People can't defend against threats they don't know exist.",
    icon: "🧠",
  },
  {
    title: "Build a reporting culture",
    detail:
      "Staff and volunteers should feel safe reporting suspicious activity—without fear of blame. The organizations that detect threats earliest are those where people speak up.",
    icon: "🤝",
  },
];

export default function CultureSlide({ index }) {
  const visibleCount = useReveal(index, 3);
  const r = (g) => `${styles.revealGroup} ${visibleCount >= g ? styles.revealed : ''}`;

  return (
    <Slide index={index} className={styles.culture}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Leadership Responsibility</p>
          <h2>Security is a culture, not a product</h2>
          <p className={styles.subtitle}>
            Technology alone can&rsquo;t protect an organization. Culture—shaped by
            leadership—is the most durable line of defense.
          </p>
        </div>

        <div className={styles.cards}>
          {pillars.map((p, i) => (
            <div key={p.title} className={`${styles.card} ${r(i + 1)}`}>
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
