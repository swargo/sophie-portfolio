import styles from "./styles.module.css";
import { LinkProps, Variant } from "../Link/types";

const variantClass: Record<string, string> = {
  [Variant.solid]: styles.solid,
  [Variant.outline]: styles.outline,
  [Variant.flat]: styles.flat,
  [Variant.icon]: styles.icon,
  [Variant.iconFlat]: styles.iconFlat,
};

const InnerLink = ({
  variant,
  label,
  IconComponent,
}: LinkProps): React.JSX.Element => {
  switch (variant) {
    case Variant.icon:
      return <div className={styles.iconLinkDiv}>{IconComponent}</div>;
    case Variant.iconFlat:
      return <div className={styles.iconLinkDiv}>{IconComponent}</div>;
    default:
      return (
        <>
          {label}
          {IconComponent && (
            <span className={styles.iconContainer}>{IconComponent}</span>
          )}
        </>
      );
  }
};

export const Link = ({ variant = Variant.solid, ...props }: LinkProps) => (
  <a
    className={`${styles.link} ${variantClass[variant] ?? ""}`}
    {...props}
  >
    <InnerLink {...props} variant={variant} />
  </a>
);

export type { LinkProps, Variant } from "../Link/types";
