import { BottomBar, Slide } from "@deckio/deck-engine";
import styles from "./CoverSlide.module.css";

export default function CoverSlide({ index }) {
  return (
    <Slide index={index} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Microsoft Elevate, 2026</p>
          <h1>
            Digital Security for Nonprofit{" "}
            <span className={styles.highlight}>Leaders</span>
          </h1>
          <p className={styles.subtitle}>
            Jean-Paul van Ravensberg
            <br />
            Security Advisor &amp; Architect
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Session</span>
              <span className={styles.metaValue}>Digital Security Webinar</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Track</span>
              <span className={styles.metaValue}>
                Leadership &amp; Strategy
              </span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Audience</span>
              <span className={styles.metaValue}>Nonprofit Leaders</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="Digital Security for Nonprofit Leaders" />
    </Slide>
  );
}
