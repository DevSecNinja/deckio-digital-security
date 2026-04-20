import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./WorkflowRisksSlide.module.css";

const risks = [
  {
    title: "Shared accounts",
    detail:
      "Role-based inboxes and shared credentials prevent individual accountability. When an account is compromised, attribution and containment become exponentially harder.",
  },
  {
    title: "Personal & volunteer devices",
    detail:
      "Unmanaged devices are a top attack surface (MDDR 2025). BYOD and volunteer-owned devices create blind spots—endpoints where attacks can happen beyond your organization's detection reach.",
  },
  {
    title: "Stale access rights",
    detail:
      "Access often persists long after staff leave or volunteers finish engagements. Dormant accounts with residual permissions are a known and actively exploited attack vector.",
  },
  {
    title: "Third-party tools & integrations",
    detail:
      "Cloud tools adopted for fundraising, collaboration, or service delivery may process sensitive data without adequate security controls or vetting.",
  },
];

export default function WorkflowRisksSlide({ index }) {
  return (
    <Slide index={index} className={styles.workflowRisks}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Common Vulnerabilities</p>
          <h2>Risk hides in everyday workflows</h2>
          <p className={styles.subtitle}>
            Operational convenience often comes at a security cost—and the gap
            is rarely visible until an incident occurs.
          </p>
        </div>

        <div className={styles.cards}>
          {risks.map((r, i) => (
            <div key={r.title} className={styles.card}>
              <span className={styles.cardNumber}>0{i + 1}</span>
              <strong className={styles.cardTitle}>{r.title}</strong>
              <p className={styles.cardDetail}>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
