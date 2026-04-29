import styles from "./styles.module.css";
import Link from "next/link";
const ArrowForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
import { AppShowcaseProps } from "./types";

export const AppShowcase = ({
  heading,
  subheading,
  apps,
}: AppShowcaseProps) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    {subheading && <h3>{subheading}</h3>}
    <div className={styles.grid}>
      {apps.map((app) => (
        <Link
          key={app.href}
          href={app.href}
          aria-label={`Open ${app.name}`}
          className={styles.card}
        >
          <div className={styles.cardHeader}>
            <h3 className={styles.appName}>{app.name}</h3>
          </div>
          <div className={styles.cardBody}>
            {app.tags && app.tags.length > 0 && (
              <div className={styles.tags}>
                {app.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            )}
            <p className={styles.description}>{app.description}</p>
            <div className={styles.openLink}>
              Open app <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export type { AppShowcaseProps, App } from "./types";
