import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./SourcesSlide.module.css";

const sources = [
  {
    id: "S1",
    label:
      "AI phishing 450% more effective (54% vs 12% click-through) · Tycoon2FA compromised ~100K orgs · ~62% of phishing blocked at peak · AI across 6 attack lifecycle phases · Identity is primary target, MFA bypass packaged as a feature",
    citation:
      'Microsoft Security Blog, Apr 2, 2026 — "Threat actor abuse of AI accelerates from tool to cyberattack surface", Sherrod DeGrippo. Tycoon2FA disruption: Microsoft On the Issues, Mar 4, 2026',
    url: "https://www.microsoft.com/en-us/security/blog/2026/04/02/threat-actor-abuse-of-ai-accelerates-from-tool-to-cyberattack-surface/",
    mddr: true,
  },
  {
    id: "S2",
    label:
      "AI can now find vulnerabilities approaching human security researcher capability",
    citation:
      'Microsoft MSRC Blog, Apr 7, 2026 — "Strengthening secure software at global scale: How MSRC is evolving with AI", Tom Gallagher',
    url: "https://www.microsoft.com/en-us/msrc/blog/2026/04/strengthening-secure-software-global-scale-how-msrc-is-evolving-with-ai",
  },
  {
    id: "S3",
    label:
      "Primary source for threat statistics · Vulnerability exploitation as most reliable initial access method · Unmanaged devices as top attack surface · Zero Trust and Conditional Access guidance",
    citation:
      "Microsoft Digital Defense Report 2025 (October 2025). Download: https://aka.ms/mddr",
    url: "https://aka.ms/mddr",
    mddr: true,
  },
  {
    id: "S4",
    label:
      "Only 32% of NGOs use MFA · 43% experienced credential theft · 72% lack cloud oversight · Only 12% have an AI guidance policy",
    citation:
      "CyberPeace Institute, December 2024 — Cyber Resilience for NGOs: Threat Landscape Report",
    url: "https://cyberpeaceinstitute.org/wp-content/uploads/2024/12/Cyber-Resilience-NGOs_Threat-Landscape-Report.pdf",
  },
];

export default function SourcesSlide({ index }) {
  return (
    <Slide index={index} className={styles.sources}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Transparency &amp; Verification</p>
          <h2>Sources &amp; Further Reading</h2>
          <p className={styles.subtitle}>
            All statistics and claims in this presentation are traceable. Verify
            each datapoint via the URLs below before sharing externally.
          </p>
        </div>

        <div className={styles.list}>
          {sources.map((s) => (
            <div key={s.id} className={styles.source}>
              <span className={styles.sourceId}>{s.id}</span>
              <div className={styles.sourceContent}>
                <strong className={styles.sourceClaim}>{s.label}</strong>
                <span className={styles.sourceCitation}>{s.citation}</span>
                <span className={styles.sourceUrl}>{s.url}</span>
              </div>
              {s.mddr && <span className={styles.mddtBadge}>MDDR 2025</span>}
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
