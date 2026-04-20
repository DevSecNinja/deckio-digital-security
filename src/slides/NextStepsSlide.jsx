import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./NextStepsSlide.module.css";

const steps = [
  {
    phase: "Assess",
    action: "Understand your current exposure",
    questions: [
      "What sensitive data do we hold and where does it live?",
      "Who has access to critical systems—and do they still need it?",
      "What happens if we lose access for 24 hours?",
    ],
  },
  {
    phase: "Prioritize",
    action: "Focus on the highest-impact areas first",
    questions: [
      "Have we enabled MFA for all staff and volunteers?",
      "Which systems are most critical to mission continuity?",
      "Where is our biggest supply-chain or third-party risk?",
    ],
  },
  {
    phase: "Act",
    action: "Implement foundational controls",
    questions: [
      "Create an owner for each security action—not just IT",
      "Set achievable milestones within a 90-day window",
      "Establish a backup and patch cadence with accountability",
    ],
  },
  {
    phase: "Review",
    action: "Build security into governance cycles",
    questions: [
      "Add a standing security item to board and leadership agendas",
      "Review access rights and incidents quarterly",
      "Test your incident response plan at least once per year",
    ],
  },
];

export default function NextStepsSlide({ index }) {
  return (
    <Slide index={index} className={styles.nextSteps}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Starting the Journey</p>
          <h2>Where to start: A leadership framework</h2>
          <p className={styles.subtitle}>
            You don&rsquo;t need to solve everything at once—but you do need
            to start somewhere. Build from here.
          </p>
        </div>

        <div className={styles.cards}>
          {steps.map((s) => (
            <div key={s.phase} className={styles.card}>
              <div className={styles.cardPhase}>{s.phase}</div>
              <strong className={styles.cardAction}>{s.action}</strong>
              <ul className={styles.cardList}>
                {s.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
