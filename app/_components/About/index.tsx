import styles from "./styles.module.css";

interface AboutProps {
  heading: string;
  body: string;
}

export const About = ({ heading, body }: AboutProps) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    <p>{body}</p>
  </section>
);
