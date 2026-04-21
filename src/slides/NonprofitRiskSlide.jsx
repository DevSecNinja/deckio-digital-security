import { BottomBar, Slide } from "@deckio/deck-engine";
import useReveal from "../hooks/useReveal";
import styles from "./NonprofitRiskSlide.module.css";

const reasons = [
  {
    icon: "🏛",
    title: "Nation-state interest",
    points: [
      "Organizations working in conflict zones, human rights, or governance reform are high-value surveillance targets",
      "Nonprofits hold sensitive data—beneficiary records, policy positions, donor networks—that can be leveraged to disrupt civil society",
    ],
  },
  {
    icon: "🗂",
    title: "Valuable data",
    points: [
      "Beneficiary records—often highly sensitive (safeguarding, health, financial)",
      "Donor financial and personal data—high demand on criminal markets",
      "Organizational finances, grant data, and operational plans",
    ],
  },
  {
    icon: "🤝",
    title: "Trusted brand",
    points: [
      "Your credibility can be weaponized against donors and beneficiaries",
      "Fraudulent donation appeals using stolen branding are common",
      "Attackers impersonate nonprofit staff in email-based fraud",
    ],
  },
  {
    icon: "⚙️",
    title: "Constrained resources",
    points: [
      "Smaller dedicated IT or security capacity than commercial peers",
      "Mixed workforce: staff, volunteers, partners—varying digital literacy",
      "Budget pressure limits investment in security tools and training",
    ],
  },
];

export default function NonprofitRiskSlide({ index }) {
  const visibleCount = useReveal(index, 5);
  const r = (g) => `${styles.revealGroup} ${visibleCount >= g ? styles.revealed : ''}`;

  return (
    <Slide index={index} className={styles.nonprofitRisk}>
      <div className={styles.angularPanel} />
      <div className={styles.topLine} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Risk Picture</p>
          <h2>Why nonprofits are targeted</h2>
          <p className={styles.subtitle}>
            Mission-driven work creates real digital risk—one that attackers
            actively exploit.
          </p>
        </div>

        <div className={`${styles.dualBar} ${r(1)}`}>
          <div className={`${styles.dualSide} ${styles.dualOpportunity}`}>
            <span className={styles.dualIcon} aria-hidden="true">
              ⚡
            </span>
            <div>
              <strong>AI as opportunity</strong>
              <p>
                AI lets nonprofits do more with less—closing capacity gaps and
                scaling impact despite chronic skills shortages.
              </p>
            </div>
          </div>
          <div className={styles.dualDivider} />
          <div className={`${styles.dualSide} ${styles.dualRisk}`}>
            <span className={styles.dualIcon} aria-hidden="true">
              ⚠️
            </span>
            <div>
              <strong>AI as risk</strong>
              <p>
                But it also makes attacking vulnerable organizations easier and
                more scalable.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {reasons.map((r_, i) => (
            <div key={r_.title} className={`${styles.card} ${r(i + 2)}`}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {r_.icon}
                </span>
                <strong className={styles.cardTitle}>{r_.title}</strong>
              </div>
              <ul className={styles.cardPoints}>
                {r_.points.map((p) => (
                  <li key={p}>{p}</li>
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
