import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./AgendaSlide.module.css";

const agenda = [
  {
    number: "01",
    title: "The evolving threat landscape",
    desc: "How AI has changed the speed, precision, and scale of cyberattacks",
  },
  {
    number: "02",
    title: "Why nonprofits are targeted",
    desc: "Mission-driven work creates real and underestimated digital risk",
  },
  {
    number: "03",
    title: "Risk in everyday workflows",
    desc: "Where common operational patterns silently introduce vulnerabilities",
  },
  {
    number: "04",
    title: "Identity, access & data governance",
    desc: "The three pillars of a sound organizational security posture",
  },
  {
    number: "05",
    title: "Building your security baseline",
    desc: "Practical priorities for resource-constrained organizations",
  },
];

export default function AgendaSlide({ index }) {
  return (
    <Slide index={index} className={styles.agenda}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Session Overview</p>
          <h2>What we&rsquo;ll cover today</h2>
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
