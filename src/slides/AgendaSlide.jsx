import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./AgendaSlide.module.css";

const agenda = [
  {
    number: "01",
    title: "The Evolving Threat Landscape",
    desc: "How AI has changed the speed, precision and scale of cyberattacks",
  },
  {
    number: "02",
    title: "Why Nonprofits Are Targeted",
    desc: "Mission-driven work creates real and underestimated digital risk",
  },
  {
    number: "03",
    title: "Risk in Everyday Workflows",
    desc: "Where common operational patterns silently introduce vulnerabilities",
  },
  {
    number: "04",
    title: "Identity, Access & Data Governance",
    desc: "The three pillars of a sound organisational security posture",
  },
  {
    number: "05",
    title: "Building Your Security Baseline",
    desc: "Practical priorities for resource-constrained organisations",
  },
];

export default function AgendaSlide({ index }) {
  return (
    <Slide index={index} className={styles.agenda}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Session Overview</p>
          <h2>What We&rsquo;ll Cover Today</h2>
          <p className={styles.subtitle}>
            A strategic, non-technical lens on digital security for nonprofit
            leaders
          </p>
        </div>

        <ol className={styles.list}>
          {agenda.map((item) => (
            <li key={item.number} className={styles.item}>
              <span className={styles.number}>{item.number}</span>
              <div className={styles.itemContent}>
                <strong className={styles.itemTitle}>{item.title}</strong>
                <span className={styles.itemDesc}>{item.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
