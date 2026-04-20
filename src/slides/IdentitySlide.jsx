import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./IdentitySlide.module.css";

const actions = [
  {
    label: "Enforce MFA + Conditional Access",
    detail:
      "Require phish-resistant MFA (passkeys, FIDO2) for all admin accounts. Deploy Conditional Access policies to enforce contextual access decisions based on user, device, location, and risk level.",
  },
  {
    label: "Block legacy authentication",
    detail:
      "Disable legacy protocols (POP, IMAP, SMTP basic auth) that bypass MFA entirely. A single configuration change that closes one of the most exploited gaps. (MDDR 2025)",
  },
  {
    label: "Adopt Zero Trust principles",
    detail:
      "Verify explicitly, use least-privilege access, and assume breach. Start with identity: every access request is authenticated, authorised, and continuously validated — regardless of network location. (MDDR 2025)",
  },
];

export default function IdentitySlide({ index }) {
  return (
    <Slide index={index} className={styles.identity}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Identity &amp; Access</p>
          <h2>Identity Is the New Perimeter</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.concept}>
            <p className={styles.conceptText}>
              The traditional network boundary no longer defines your
              organisation&rsquo;s security. Today,{" "}
              <strong>who can access what</strong> is the primary security
              boundary.
            </p>
            <blockquote className={styles.quote}>
              <p>
                &ldquo;Identity is the primary target and MFA bypass is now
                packaged as a feature.&rdquo;
              </p>
              <cite>Microsoft Security, 2026</cite>
            </blockquote>
            <p className={styles.sourceNote}>
              Source: Microsoft Security Blog, Apr 2, 2026
            </p>
          </div>

          <div className={styles.actions}>
            <p className={styles.actionsLabel}>
              Three Actions to Protect Your Identities
            </p>
            {actions.map((a, i) => (
              <div key={a.label} className={styles.action}>
                <span className={styles.actionNum}>{i + 1}</span>
                <div>
                  <strong className={styles.actionLabel}>{a.label}</strong>
                  <p className={styles.actionDetail}>{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
