import styles from "./styles.module.css";
import { Link } from "@/components/Link";

interface CallToActionProps {
  heading: string;
  body: string;
  buttonLabel: string;
  href: string;
}

export const CallToAction = ({
  heading,
  body,
  buttonLabel,
  href,
}: CallToActionProps) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    <p>{body}</p>
    <Link href={href} label={buttonLabel} />
  </section>
);
