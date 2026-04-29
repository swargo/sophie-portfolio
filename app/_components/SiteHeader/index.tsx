import NextLink from "next/link";
import styles from "./styles.module.css";

export const SiteHeader = () => (
  <header>
    <NextLink href="/" className={styles.headerLink}>
      <span className={styles.name}>Sophie Wargo</span>
      <span className={styles.role}>Web Developer & Designer</span>
    </NextLink>
  </header>
);
