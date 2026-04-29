import styles from "./styles.module.css";
import { Link } from "@/components/Link";
const CheckCircleOutlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

interface HeroProps {
  tagline: string;
  headline: string;
  cta: string;
  href: string;
  checklist: string[];
}

export const Hero = ({ tagline, headline, cta, href, checklist }: HeroProps) => (
  <div className={styles.section}>
    <div className={styles.leftColor}>
      <div>
        <h1>{tagline}</h1>
        <h2>{headline}</h2>
      </div>
      <div>
        <Link href={href} label={cta} />
      </div>
    </div>
    <div className={styles.rightColor}>
      <div className={styles.checklist}>
        {checklist.map((item) => (
          <div className={styles.checkItem} key={item}>
            <CheckCircleOutlineIcon />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);
