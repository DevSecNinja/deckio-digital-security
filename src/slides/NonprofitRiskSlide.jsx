import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./NonprofitRiskSlide.module.css";

const reasons = [
  {
    icon: "🗂",
    title: "Valuable Data",
    points: [
      "Beneficiary records — often highly sensitive (safeguarding, health, financial)",
      "Donor financial and personal data — high demand on criminal markets",
      "Organisational finances, grant data, and operational plans",
    ],
  },
  {
    icon: "🤝",
    title: "Trusted Brand",
    points: [
      "Your credibility can be weaponised against donors and beneficiaries",
      "Fraudulent donation appeals using stolen branding are common",
      "Attackers impersonate nonprofit staff in email-based fraud",
    ],
  },
  {
    icon: "⚙️",
    title: "Constrained Resources",
    points: [
      "Smaller dedicated IT or security capacity than commercial peers",
      "Mixed workforce: staff, volunteers, partners — varying digital literacy",
      "Budget pressure limits investment in security tools and training",
    ],
  },
];

export default function NonprofitRiskSlide({ index }) {
  return (
    <Slide index={index} className={styles.nonprofitRisk}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Risk Picture</p>
          <h2>Why Nonprofits Are Targeted</h2>
          <p className={styles.subtitle}>
            Mission-driven work creates real digital risk — one that attackers
            actively exploit.
          </p>
        </div>

        <div className={styles.dualBar}>
          <div className={`${styles.dualSide} ${styles.dualOpportunity}`}>
            <span className={styles.dualIcon} aria-hidden="true">
              ⚡
            </span>
            <div>
              <strong>AI as Opportunity</strong>
              <p>
                AI lets nonprofits do more with less — closing capacity gaps and
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
              <strong>AI as Risk</strong>
              <p>
                But it also makes attacking vulnerable organizations easier and
                more scalable.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon} aria-hidden="true">
                  {r.icon}
                </span>
                <strong className={styles.cardTitle}>{r.title}</strong>
              </div>
              <ul className={styles.cardPoints}>
                {r.points.map((p) => (
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
