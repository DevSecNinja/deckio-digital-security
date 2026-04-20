import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./DataGovernanceSlide.module.css";

const pillars = [
  {
    number: "01",
    title: "Know your data",
    detail:
      "Most organizations find only a small percentage of their data is truly sensitive. Identify that data first—where it lives, who can access it, and how it flows. If only 1% of your data is sensitive, go after that 1% and lock those systems down.",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Classify & control",
    detail:
      "Not all data requires the same level of protection. Apply access controls based on sensitivity: beneficiary records, donor financials, and safeguarding data deserve the highest tier.",
    accent: "purple",
  },
  {
    number: "03",
    title: "Review regularly",
    detail:
      "Access rights drift over time as roles change and people leave. Build regular access reviews into your governance calendar—even a quarterly check can significantly reduce exposure.",
    accent: "green",
  },
];

export default function DataGovernanceSlide({ index }) {
  return (
    <Slide index={index} className={styles.dataGovernance}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Data Governance</p>
          <h2>Data governance as mission protection</h2>
          <p className={styles.subtitle}>
            Knowing what data you hold—and who can reach it—is a leadership
            responsibility, not a technical one.
          </p>
        </div>

        <div className={styles.cards}>
          {pillars.map((p) => (
            <div
              key={p.number}
              className={`${styles.card} ${styles[`card--${p.accent}`]}`}
            >
              <span className={styles.cardNumber}>{p.number}</span>
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
