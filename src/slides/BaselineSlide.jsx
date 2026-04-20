import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./BaselineSlide.module.css";

const controls = [
  {
    number: "1",
    title: "Enable MFA everywhere",
    detail:
      "Multi-factor authentication is the single highest-impact control for blocking credential-based attacks. Require it for all users, especially administrators.",
  },
  {
    number: "2",
    title: "Patch & update systems",
    detail:
      "Vulnerability exploitation remains one of the most reliable methods of initial access (MDDR 2025). Establish a regular patching cycle across all platforms—including cloud tools and mobile devices.",
  },
  {
    number: "3",
    title: "Back up critical data",
    detail:
      "Maintain regular, verified, ransomware-resistant backups—offline or immutable storage that attackers can't encrypt or delete. Test restoration regularly. When ransomware hits, these backups are your lifeline.",
  },
  {
    number: "4",
    title: "Least-privilege access",
    detail:
      "Every person and system should have only the minimum access required. Excess permissions silently expand your attack surface.",
  },
  {
    number: "5",
    title: "An incident response plan",
    detail:
      "Know what to do—and who to call—before an incident happens. A written, practiced plan dramatically reduces damage and recovery time.",
  },
];

export default function BaselineSlide({ index }) {
  return (
    <Slide index={index} className={styles.baseline}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Security Baseline</p>
          <h2>Five controls that dramatically reduce risk</h2>
          <p className={styles.subtitle}>
            A strong security baseline doesn&rsquo;t require a large budget—it
            requires deliberate decisions from leadership.
          </p>
        </div>

        <div className={styles.list}>
          {controls.map((c) => (
            <div key={c.number} className={styles.item}>
              <span className={styles.itemNumber}>{c.number}</span>
              <div className={styles.itemContent}>
                <strong className={styles.itemTitle}>{c.title}</strong>
                <p className={styles.itemDetail}>{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
