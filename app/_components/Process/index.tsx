import styles from "./styles.module.css";
import { ProcessProps } from "./types";

export const Process = ({ heading, steps }: ProcessProps) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    <div className={styles.timeline}>
      {steps.map((step, i) => (
        <div className={styles.step} key={step.title}>
          <div className={styles.stepNumber}>{i + 1}</div>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDescription}>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export type { ProcessProps, ProcessStep } from "./types";
