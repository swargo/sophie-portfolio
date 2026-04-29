import styles from "./styles.module.css";
const OpenInNewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
import { ProjectShowcaseProps } from "./types";

export const ProjectShowcase = ({
  heading,
  subheading,
  projects,
}: ProjectShowcaseProps) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    {subheading && <h3>{subheading}</h3>}
    <div className={styles.grid}>
      {projects.map((project) => (
        <a
          key={project.siteUrl}
          href={project.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} website`}
          className={styles.card}
        >
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.browserUrl}>
              {project.siteUrl.replace(/^https?:\/\//, "")}
            </div>
          </div>
          <div className={styles.screenshot}>
            <img src={project.imageUrl} alt={`Screenshot of ${project.name}`} />
          </div>
          <div className={styles.cardBody}>
            {project.tags && project.tags.length > 0 && (
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            )}
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.visitLink}>
              Visit site <OpenInNewIcon />
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export type { ProjectShowcaseProps, Project } from "./types";
