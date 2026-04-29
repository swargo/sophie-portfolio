import styles from "./styles.module.css";
import { ButtonProps, Variant } from "../Button/types";

const variantClass: Record<string, string> = {
  [Variant.solid]: styles.solid,
  [Variant.outline]: styles.outline,
  [Variant.flat]: styles.flat,
  [Variant.icon]: styles.icon,
  [Variant.iconFlat]: styles.iconFlat,
};

const InnerButton = ({
  variant,
  label,
  IconComponent,
}: ButtonProps): React.JSX.Element => {
  switch (variant) {
    case Variant.icon:
      return <div className={styles.iconButtonDiv}>{IconComponent}</div>;
    case Variant.iconFlat:
      return <div className={styles.iconButtonDiv}>{IconComponent}</div>;
    default:
      return (
        <div>
          {label}
          {IconComponent && (
            <span className={styles.iconContainer}>{IconComponent}</span>
          )}
        </div>
      );
  }
};

export const Button = ({
  disabled = false,
  variant = Variant.solid,
  ...props
}: ButtonProps) => (
  <button
    disabled={disabled}
    type="button"
    className={`${styles.button} ${variantClass[variant] ?? ""}`}
    {...props}
  >
    <InnerButton {...props} variant={variant} />
  </button>
);

export type { ButtonProps, Variant } from "../Button/types";
